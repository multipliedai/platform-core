import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { cn } from "../../lib/utils";
import { ChevronDown, ChevronUp, Loader, Search } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { DataTablePagination } from "../ui/data-table-pagination";

export interface Column<T> {
  key: keyof T | string;
  label: string;
  sortable?: boolean;
  render?: (row: T) => React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  rowKey: (row: T) => string | number;
  actions?: (row: T) => React.ReactNode;
  onRowClick?: (row: T) => void;
  loading?: boolean;
  selectable?: boolean;
  onSelectionChange?: (selectedIds: (string | number)[]) => void;
  enableFlightBoardAnimation?: boolean;
  getRowClassName?: (row: T) => string;
  // Pagination props
  enablePagination?: boolean;
  defaultPageSize?: number;
  pageSizeOptions?: number[];
  resultsLabel?: string;
  // Search props
  enableSearch?: boolean;
  searchPlaceholder?: string;
  searchKeys?: (keyof T | string)[]; // Keys to search in
  onSearch?: (query: string) => void; // Optional custom search handler
}

export function DataTable<T>({
  data,
  columns,
  rowKey,
  actions,
  onRowClick,
  loading = false,
  selectable = false,
  onSelectionChange,
  enableFlightBoardAnimation = false,
  getRowClassName,
  enablePagination = false,
  defaultPageSize = 10,
  pageSizeOptions = [10, 20, 50, 100],
  resultsLabel = "results",
  enableSearch = false,
  searchPlaceholder = "Search...",
  searchKeys = [],
  onSearch,
}: DataTableProps<T>) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortKey, setSortKey] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [selectedIds, setSelectedIds] = useState<(string | number)[]>([]);

  // Read pageSize from URL, validate it, and fallback to defaultPageSize
  const getPageSizeFromUrl = (): number => {
    const urlPageSize = searchParams.get("pageSize");
    if (urlPageSize) {
      const parsed = Number.parseInt(urlPageSize, 10);
      // Validate: must be a valid number and in the allowed options
      if (!Number.isNaN(parsed) && pageSizeOptions.includes(parsed)) {
        return parsed;
      }
    }
    return defaultPageSize;
  };

  // Read search query from URL
  const getSearchQueryFromUrl = (): string => {
    return searchParams.get("search") ?? "";
  };

  // Read page from URL, validate it, and fallback to 1
  const getPageFromUrl = (): number => {
    const urlPage = searchParams.get("page");
    if (urlPage) {
      const parsed = Number.parseInt(urlPage, 10);
      // Validate: must be a valid number and >= 1
      if (!Number.isNaN(parsed) && parsed >= 1) {
        return parsed;
      }
    }
    return 1;
  };

  // Always read pageSize, searchQuery, and page from URL
  const pageSize = getPageSizeFromUrl();
  const searchQuery = getSearchQueryFromUrl();
  const [page, setPage] = useState(getPageFromUrl());

  // Track previous values to only reset when they actually change
  const prevPageSizeRef = useRef<number | null>(null);
  const prevSearchQueryRef = useRef<string | null>(null);

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  const handleSelectRow = (id: string | number, checked: boolean) => {
    const newSelected = checked
      ? [...selectedIds, id]
      : selectedIds.filter((sid) => sid !== id);
    setSelectedIds(newSelected);
    onSelectionChange?.(newSelected);
  };

  const handleSelectAll = (checked: boolean) => {
    const allIds = checked ? data.map((row) => rowKey(row)) : [];
    setSelectedIds(allIds);
    onSelectionChange?.(allIds);
  };

  // Helper function to get nested property value
  const getNestedValue = (obj: any, path: string): any => {
    return path.split('.').reduce((current, prop) => current?.[prop], obj);
  };

  // Filter data by search query
  const filteredData = useMemo(() => {
    if (!enableSearch || !searchQuery.trim()) {
      return data;
    }

    const query = searchQuery.toLowerCase().trim();
    return data.filter((row) => {
      // Use custom search handler if provided
      if (onSearch) {
        return onSearch(searchQuery);
      }

      // If no search keys, search in the whole row via JSON.stringify
      if (searchKeys.length === 0) {
        try {
          return JSON.stringify(row).toLowerCase().includes(query);
        } catch {
          return false;
        }
      }

      // Otherwise, search in specified keys
      return searchKeys.some((key) => {
        // Handle nested properties (e.g., "needLocation.name")
        const value = typeof key === 'string' && key.includes('.')
          ? getNestedValue(row, key)
          : (row as any)[key];
        
        if (value === null || value === undefined) return false;
        
        // Handle arrays (like tags)
        if (Array.isArray(value)) {
          return value.some((item: any) => 
            String(item).toLowerCase().includes(query)
          );
        }
        
        return String(value).toLowerCase().includes(query);
      });
    });
  }, [data, searchQuery, enableSearch, searchKeys, onSearch]);

  // Sort filtered data
  const sortedData = useMemo(() => {
    if (!sortKey) return filteredData;
    return [...filteredData].sort((a, b) => {
      const aVal = (a as any)[sortKey];
      const bVal = (b as any)[sortKey];

      if (typeof aVal === "string") {
        return sortDirection === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }
      if (typeof aVal === "number") {
        return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
      }
      return 0;
    });
  }, [filteredData, sortKey, sortDirection]);

  // Paginate sorted data
  const paginatedData = useMemo(() => {
    if (!enablePagination) return sortedData;
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return sortedData.slice(startIndex, endIndex);
  }, [sortedData, enablePagination, page, pageSize]);

  // Sync page state with URL when URL changes
  useEffect(() => {
    if (enablePagination) {
      const urlPage = getPageFromUrl();
      // Only update if URL page differs from current page state
      if (urlPage !== page) {
        setPage(urlPage);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, enablePagination]);

  // Reset to page 1 when pageSize changes (from URL)
  useEffect(() => {
    if (enablePagination) {
      // Only reset if pageSize actually changed (not on initial mount)
      if (prevPageSizeRef.current !== null && prevPageSizeRef.current !== pageSize) {
        const newParams = new URLSearchParams(searchParams);
        newParams.delete("page");
        setSearchParams(newParams, { replace: true });
        setPage(1);
      }
      // Always update ref to track current value
      prevPageSizeRef.current = pageSize;
    }
  }, [pageSize, enablePagination, searchParams]);

  // Reset to page 1 when search query changes
  useEffect(() => {
    if (enablePagination) {
      // Only reset if searchQuery actually changed (not on initial mount) and is not empty
      if (searchQuery && prevSearchQueryRef.current !== null && prevSearchQueryRef.current !== searchQuery) {
        const newParams = new URLSearchParams(searchParams);
        newParams.delete("page");
        setSearchParams(newParams, { replace: true });
        setPage(1);
      }
      // Always update ref to track current value
      prevSearchQueryRef.current = searchQuery;
    }
  }, [searchQuery, enablePagination, searchParams]);

  // Handle search query change - update URL
  const handleSearchChange = (value: string) => {
    const newParams = new URLSearchParams(searchParams);
    
    if (value === "" || value.trim() === "") {
      // Remove search from URL if empty or only whitespace (cleaner URLs)
      newParams.delete("search");
    } else {
      // Store the raw value (with spaces) in URL - trimming happens during filtering
      newParams.set("search", value);
    }
    
    setSearchParams(newParams, { replace: true });
  };

  // Reset to valid page when data changes
  useEffect(() => {
    if (enablePagination) {
      const maxPage = Math.ceil(sortedData.length / pageSize);
      if (page > maxPage && maxPage > 0) {
        setPage(maxPage);
      } else if (maxPage === 0 && page > 1) {
        setPage(1);
      }
    }
  }, [sortedData.length, pageSize, page, enablePagination]);

  // Use paginated data if pagination is enabled, otherwise use sorted data
  const displayData = enablePagination ? paginatedData : sortedData;

  return (
    <div className="w-full table table-fixed">
      {/* Search bar at top */}
      {enableSearch && (
        <div className="flex items-center p-4 border-b bg-white rounded-t-lg">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
      )}

      <div
        className={cn(
          "!border border-gray-300 rounded-lg bg-white overflow-x-auto",
          enableSearch && "rounded-t-none"
        )}
        style={
          enableFlightBoardAnimation
            ? {
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }
            : undefined
        }
      >
        <Table>
          <TableHeader>
            <TableRow className="border-gray-300 !border-b">
              {selectable && (
                <TableHead className="w-10 text-center">
                  <Checkbox
                    checked={
                      selectedIds.length === data.length && data.length > 0
                    }
                    onCheckedChange={(checked) => handleSelectAll(!!checked)}
                    onClick={(e) => e.stopPropagation()}
                    onPointerDown={(e) => e.stopPropagation()}
                    {...(selectedIds.length > 0 &&
                    selectedIds.length < data.length
                      ? { "data-indeterminate": true }
                      : {})}
                  />
                </TableHead>
              )}

              {columns.map((col) => (
                <TableHead
                  key={col.key.toString()}
                  className={cn(
                    "font-poppins font-semibold text-gray-900 cursor-pointer select-none",
                    col.className || ""
                  )}
                  onClick={() => col.sortable && handleSort(col.key as string)}
                >
                  <div className="flex items-center gap-1">
                    {col.label}
                    {col.sortable && sortKey === col.key && (
                      <span>
                        {sortDirection === "asc" ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </span>
                    )}
                  </div>
                </TableHead>
              ))}

              {actions && (
                <TableHead className="font-poppins font-semibold text-gray-900 text-right">
                  Action
                </TableHead>
              )}
            </TableRow>
          </TableHeader>

          <TableBody>
            {loading ? (
              <tr>
                <TableCell
                  colSpan={
                    columns.length + (actions ? 1 : 0) + (selectable ? 1 : 0)
                  }
                  className="py-12 text-center"
                >
                  <Loader className="animate-spin h-8 w-8 mx-auto" />
                  <p className="text-gray-600 text-center mt-4">Loading...</p>
                </TableCell>
              </tr>
            ) : displayData.length > 0 ? (
              <AnimatePresence>
                {displayData.map((row, index) => {
                  const isFirstRow = index === 0;
                  // Only apply stagger delay to new rows (first few rows)
                  // For layout animations, don't delay existing rows
                  const staggerDelay =
                    index < 3
                      ? enableFlightBoardAnimation
                        ? index * 0.15
                        : index * 0.05
                      : 0;

                  return (
                    <motion.tr
                      key={rowKey(row)}
                      layout
                      className={cn(
                        "hover:bg-gray-50 transition-colors border-gray-300",
                        index + 1 === displayData.length ? "" : "border-b",
                        enableFlightBoardAnimation &&
                          isFirstRow &&
                          "border-2 border-yellow-400 shadow-lg",
                        getRowClassName?.(row)
                      )}
                      initial={
                        enableFlightBoardAnimation
                          ? { opacity: 0, rotateX: -90 }
                          : { opacity: 0, x: -20 }
                      }
                      animate={
                        enableFlightBoardAnimation
                          ? { opacity: 1, rotateX: 0 }
                          : { opacity: 1, x: 0 }
                      }
                      exit={
                        enableFlightBoardAnimation
                          ? { opacity: 0, rotateX: 90 }
                          : { opacity: 0, x: 20 }
                      }
                      transition={{
                        layout: {
                          duration: 0.3,
                          ease: "easeOut",
                        },
                        opacity: {
                          duration: enableFlightBoardAnimation ? 0.4 : 0.3,
                          delay: staggerDelay,
                        },
                        rotateX: enableFlightBoardAnimation
                          ? {
                              duration: 0.4,
                              delay: staggerDelay,
                              ease: "easeInOut",
                            }
                          : undefined,
                        x: !enableFlightBoardAnimation
                          ? {
                              duration: 0.3,
                              delay: staggerDelay,
                              ease: "easeOut",
                            }
                          : undefined,
                      }}
                      style={
                        enableFlightBoardAnimation
                          ? {
                              transformStyle: "preserve-3d",
                              perspective: "1000px",
                            }
                          : undefined
                      }
                      whileHover={{ backgroundColor: "rgb(249 250 251)" }}
                      onClick={onRowClick ? () => onRowClick(row) : undefined}
                    >
                      {selectable && (
                        <TableCell className="text-center">
                          <Checkbox
                            checked={selectedIds.includes(rowKey(row))}
                            onCheckedChange={(checked) =>
                              handleSelectRow(rowKey(row), !!checked)
                            }
                            onClick={(e) => e.stopPropagation()}
                            onPointerDown={(e) => e.stopPropagation()}
                          />
                        </TableCell>
                      )}

                      {columns.map((col) => {
                        const isStatusColumn =
                          enableFlightBoardAnimation &&
                          (col.key
                            .toString()
                            .toLowerCase()
                            .includes("status") ||
                            col.key
                              .toString()
                              .toLowerCase()
                              .includes("severity"));

                        return (
                          <TableCell
                            key={col.key.toString()}
                            className={col.className}
                            style={{ textAlign: col.align || "left" }}
                          >
                            {isStatusColumn ? (
                              <motion.div
                                animate={{
                                  opacity: [1, 0.7, 1],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              >
                                {col.render
                                  ? col.render(row)
                                  : (row as any)[col.key]}
                              </motion.div>
                            ) : col.render ? (
                              col.render(row)
                            ) : (
                              (row as any)[col.key]
                            )}
                          </TableCell>
                        );
                      })}

                      {actions && (
                        <TableCell className="text-right">
                          {actions(row)}
                        </TableCell>
                      )}
                    </motion.tr>
                  );
                })}
              </AnimatePresence>
            ) : (
              <tr>
                <TableCell
                  colSpan={
                    columns.length + (actions ? 1 : 0) + (selectable ? 1 : 0)
                  }
                  className="py-12"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center text-center w-full"
                  >
                    <img
                      src="/assets/illustrations/curiosity-search.png"
                      alt="No data illustration"
                      className="w-32 h-32 mb-6"
                    />
                    <h3 className="font-poppins text-lg font-semibold text-gray-900 mb-2">
                      No results found
                    </h3>
                    <p className="text-gray-600 max-w-md mx-auto text-sm mb-6">
                      Try adjusting your search or filter criteria.
                    </p>
                  </motion.div>
                </TableCell>
              </tr>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination at bottom */}
      {enablePagination && (
        <DataTablePagination
          page={page}
          pageSize={pageSize}
          total={sortedData.length}
          onPageChange={(newPage) => {
            setPage(newPage);
            // Update URL with new page (functional update so it composes with other updates)
            setSearchParams((prev) => {
              const newParams = new URLSearchParams(prev);
              if (newPage === 1) {
                // Remove page from URL if it's page 1 (cleaner URLs)
                newParams.delete("page");
              } else {
                newParams.set("page", newPage.toString());
              }
              return newParams;
            }, { replace: true });
          }}
          onPageSizeChange={(newPageSize) => {
            // Update URL with new pageSize (functional update so it composes with other updates)
            setSearchParams((prev) => {
              const newParams = new URLSearchParams(prev);
              if (newPageSize === defaultPageSize) {
                // Remove pageSize from URL if it's the default (cleaner URLs)
                newParams.delete("pageSize");
              } else {
                newParams.set("pageSize", newPageSize.toString());
              }
              // Reset to page 1 when page size changes
              newParams.delete("page");
              return newParams;
            }, { replace: true });
            setPage(1);
          }}
          pageSizeOptions={pageSizeOptions}
          resultsLabel={resultsLabel}
        />
      )}
    </div>
  );
}

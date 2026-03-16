import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from './pagination';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select';

export interface DataTablePaginationProps {
  /** Current page number (1-indexed) */
  page: number;
  /** Number of items per page */
  pageSize: number;
  /** Total number of items */
  total: number;
  /** Callback when page changes */
  onPageChange: (page: number) => void;
  /** Callback when page size changes */
  onPageSizeChange: (pageSize: number) => void;
  /** Available page size options */
  pageSizeOptions?: number[];
  /** Custom label for results counter */
  resultsLabel?: string;
  /** Whether to show page size selector */
  showPageSizeSelector?: boolean;
  /** Whether to show results counter */
  showResultsCounter?: boolean;
  /** Custom className for the container */
  className?: string;
}

export function DataTablePagination({
  page,
  pageSize,
  total,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [10, 20, 50, 100],
  resultsLabel = "results",
  showPageSizeSelector = true,
  showResultsCounter = true,
  className,
}: DataTablePaginationProps) {
  const totalPages = Math.ceil(total / pageSize);
  const maxVisible = 4; // how many pages to show at once

  const startPage = Math.max(1, page - Math.floor(maxVisible / 2));
  const endPage = Math.min(totalPages, startPage + maxVisible - 1);

  const pages: number[] = [];
  for (let p = startPage; p <= endPage; p++) {
    pages.push(p);
  }

  const startIndex = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const endIndex = Math.min(page * pageSize, total);

  const handlePageSizeChange = (value: string) => {
    const newPageSize = Number(value);
    onPageSizeChange(newPageSize);
  };

  // Don't render if there's no data
  if (total === 0) {
    return null;
  }

  return (
    <div className={className}>
      {/* Single row with all controls */}
      <div className="flex items-center justify-between p-4 border-t">
        {/* Left: Rows per page selector */}
        {showPageSizeSelector && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Rows per page:</span>
            <Select
              value={pageSize.toString()}
              onValueChange={handlePageSizeChange}
            >
              <SelectTrigger className="w-[70px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {pageSizeOptions.map((size) => (
                  <SelectItem key={size} value={size.toString()}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Center: Pagination controls - only show if more than one page */}
        {totalPages > 1 && (
          <div className="flex-1 flex items-center justify-center">
            <Pagination>
              <PaginationContent>
                {/* Previous */}
                <PaginationItem>
                  <PaginationPrevious
                    onClick={(e) => {
                      e.preventDefault();
                      onPageChange(Math.max(1, page - 1));
                    }}
                    href="#"
                    className={page === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>

                {/* First page + ellipsis */}
                {startPage > 1 && (
                  <>
                    <PaginationItem>
                      <PaginationLink
                        onClick={(e) => {
                          e.preventDefault();
                          onPageChange(1);
                        }}
                        href="#"
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    {startPage > 2 && <PaginationEllipsis />}
                  </>
                )}

                {/* Main pages */}
                {pages.map((p) => (
                  <PaginationItem key={p}>
                    <PaginationLink
                      isActive={p === page}
                      onClick={(e) => {
                        e.preventDefault();
                        onPageChange(p);
                      }}
                      href="#"
                    >
                      {p}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                {/* Last page + ellipsis */}
                {endPage < totalPages && (
                  <>
                    {endPage < totalPages - 1 && <PaginationEllipsis />}
                    <PaginationItem>
                      <PaginationLink
                        onClick={(e) => {
                          e.preventDefault();
                          onPageChange(totalPages);
                        }}
                        href="#"
                      >
                        {totalPages}
                      </PaginationLink>
                    </PaginationItem>
                  </>
                )}

                {/* Next */}
                <PaginationItem>
                  <PaginationNext
                    onClick={(e) => {
                      e.preventDefault();
                      onPageChange(Math.min(totalPages, page + 1));
                    }}
                    href="#"
                    className={
                      page === totalPages
                        ? "pointer-events-none opacity-50"
                        : ""
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}

        {/* Right: Results counter */}
        {showResultsCounter && (
          <div className="text-sm text-gray-600">
            Showing {startIndex} to {endIndex} of {total} {resultsLabel}
          </div>
        )}
      </div>
    </div>
  );
}


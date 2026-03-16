import * as React from "react";
import { X, Plus, ChevronDown } from "lucide-react";
import { Badge } from './badge';
import { Button } from './button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './popover';

type Option = {
  label: string;
  value: string;
};

interface CustomMultiSelectProps {
  placeholder?: string;
  options: Option[];
  value: string[];
  onChange: (value: string[]) => void;
  allowCustom?: boolean;
  hideSelectedInside?: boolean; // If true, don't show selected items as badges inside the input
  disabled?: boolean; // If true, disable the component
}

export function CustomMultiSelect({
  placeholder = "Search or type...",
  options,
  value,
  onChange,
  allowCustom = true,
  hideSelectedInside = false,
  disabled = false,
}: CustomMultiSelectProps) {
  const [query, setQuery] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [highlightedIndex, setHighlightedIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleAdd = (val: string) => {
    if (val && !value.includes(val)) {
      onChange([...value, val]);
    }
    setQuery("");
    setOpen(false);
    setHighlightedIndex(0);
    inputRef.current?.focus();
  };

  const handleRemove = (val: string) => {
    onChange(value.filter((v) => v !== val));
  };

  const filteredOptions = options.filter(
    (opt) =>
      opt.label?.toLowerCase().includes(query.toLowerCase()) &&
      !value.includes(opt.value)
  );

  // Keyboard nav
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev + 1 < filteredOptions.length ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredOptions.length > 0) {
        handleAdd(filteredOptions[highlightedIndex].value);
      } else if (allowCustom && query) {
        handleAdd(query);
      }
    }
  };

  return (
    <div className="w-full">
      <Popover open={disabled ? false : open} onOpenChange={disabled ? undefined : setOpen}>
        <PopoverTrigger asChild className="w-full" disabled={disabled}>
          <div
            className={`w-full border rounded-md px-2 flex items-center justify-between gap-2 ${
              disabled
                ? "cursor-not-allowed opacity-50 bg-gray-100"
                : "cursor-text"
            }`}
            onClick={() => {
              if (!disabled) {
                setOpen(true);
                inputRef.current?.focus();
              }
            }}
          >
            <div className="flex flex-wrap items-center gap-2 cursor-text py-2">
              {!hideSelectedInside && value.map((val) => {
                const label = options.find((opt) => opt.value === val)?.label ?? val;
                return (
                <Badge
                  key={val}
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  {label}
                  <button
                    type="button"
                    className="hover:text-destructive"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemove(val);
                    }}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
                );
              })}
              <input
                ref={inputRef}
                className="flex-1 text-sm outline-none bg-transparent min-w-[100px]"
                placeholder={value.length === 0 ? placeholder : ""}
                value={query}
                onChange={(e) => {
                  if (!disabled) {
                    setQuery(e.target.value);
                    setOpen(true);
                    setHighlightedIndex(0);
                  }
                }}
                onFocus={() => {
                  if (!disabled) {
                    setOpen(true);
                  }
                }}
                onKeyDown={handleKeyDown}
                disabled={disabled}
                readOnly={disabled}
              />
            </div>
            <div className="flex items-center">
              {value?.length ? (
                <Button
                  type="button"
                  className="p-1"
                  size={"icon"}
                  variant={"link"}
                  onClick={() => onChange([])}
                >
                  <X />
                </Button>
              ) : (
                <></>
              )}
              <span
                style={{
                  alignSelf: "stretch",
                  width: 1,
                  backgroundColor: " rgb(204, 204, 204)",
                  marginBottom: 8,
                  marginTop: 8,
                  boxSizing: "border-box",
                }}
              ></span>
              <Button type="button" className="" size={"icon"} variant={"link"}>
                <ChevronDown />
              </Button>
            </div>
          </div>
        </PopoverTrigger>

        <PopoverContent
          className="p-0"
          align="start"
          style={{ width: "var(--radix-popover-trigger-width)" }}
        >
          <div className="max-h-60 overflow-y-auto scrollbar-gray">
            {filteredOptions.length === 0 ? (
              allowCustom && query ? (
                <Button
                  type="button"
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => handleAdd(query)}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add "{query}"
                </Button>
              ) : (
                <div className="p-2 text-sm text-muted-foreground">
                  No results
                </div>
              )
            ) : (
              filteredOptions.map((opt, i) => (
                <button
                  key={opt.value}
                  type="button"
                  className={`w-full text-left px-3 py-2 text-sm ${
                    i === highlightedIndex ? "bg-accent" : "hover:bg-accent"
                  }`}
                  onMouseEnter={() => setHighlightedIndex(i)}
                  onClick={() => handleAdd(opt.value)}
                >
                  {opt.label}
                </button>
              ))
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

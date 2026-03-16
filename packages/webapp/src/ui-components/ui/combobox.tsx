// components/ui/combobox.tsx
"use client";

import * as React from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";

import { cn } from '../../lib/utils';
import { Button } from './button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './popover';
import { Badge } from "./badge";

interface Option {
  label: string;
  value: string;
}
interface ComboboxProps {
  options: Option[];
  placeholder?: string;
  emptyMessage?: string;
  onChange?: (value: string) => void;
  value?: string | string[];
}

export function Combobox({
  options,
  value,
  onChange,
  ...props
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);

  const isSelected = (val: string) =>
    Array.isArray(value) ? value.includes(val) : value === val;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between mb-2"
        >
          {Array.isArray(value) && value.length > 0
            ? `${value.length} selected`
            : typeof value === "string" && value
            ? options.find((opt) => opt.value === value)?.label
            : props.placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      {Array.isArray(value) && value.length > 0 ? (
        <div className="flex items-center gap-2 flex-wrap">
          {value?.map((v) => {
            return (
              <Badge key={v} className="flex-shrink-0" variant={"outline"}>
                {options.find((opt) => opt.value === v)?.label}{" "}
                <X
                  className="ml-1 bg-gray-100 rounded-full p-1 h-4 w-4 cursor-pointer"
                  onClick={(e) => {
                    e?.stopPropagation();
                    console.log({ v });
                    onChange?.(v);
                  }}
                />
              </Badge>
            );
          })}
        </div>
      ) : (
        <></>
      )}
      <PopoverContent className=" p-0">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>{props.emptyMessage}</CommandEmpty>
            <CommandGroup>
              {options.map((opt) => (
                <CommandItem
                  key={opt.value}
                  value={opt.value}
                  onSelect={() => onChange?.(opt.value)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      isSelected(opt.value) ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {opt.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

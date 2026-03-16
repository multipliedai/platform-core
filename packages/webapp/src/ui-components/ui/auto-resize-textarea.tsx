import * as React from 'react';
import { useRef, useEffect } from 'react';
import { Textarea, TextareaProps } from './textarea';
import { cn } from '../../lib/utils';

// Auto-resizing Textarea component
export const AutoResizeTextarea = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(({ value, onChange, className, ...props }, ref) => {
  const internalRef = useRef<HTMLTextAreaElement>(null);

  // Combine refs
  React.useImperativeHandle(ref, () => internalRef.current as HTMLTextAreaElement, []);

  const resizeTextarea = (textarea: HTMLTextAreaElement) => {
    // Reset height to auto to get the correct scrollHeight
    textarea.style.height = "auto";
    // Set height to scrollHeight to fit content
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  useEffect(() => {
    const textarea = internalRef.current;
    if (textarea) {
      resizeTextarea(textarea);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    resizeTextarea(e.target);
    
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <Textarea
      ref={internalRef}
      value={value}
      onChange={handleChange}
      className={cn("overflow-hidden resize-none", className)}
      {...props}
    />
  );
});
AutoResizeTextarea.displayName = "AutoResizeTextarea";

import React from "react";
import { cn } from "../../lib/utils";

export interface SimpleDocumentLike {
  id: string;
  title?: string;
  description?: string;
  type?: string;
}

interface DocumentListProps {
  documents: SimpleDocumentLike[];
  className?: string;
  /** Optional click handler when a document row is clicked. */
  onDocumentClick?: (doc: SimpleDocumentLike) => void;
}

export const DocumentList: React.FC<DocumentListProps> = ({
  documents,
  className,
  onDocumentClick,
}) => {
  if (!documents || documents.length === 0) {
    return (
      <div className={cn("text-xs text-gray-500", className)}>
        No documents created from this signal yet.
      </div>
    );
  }

  return (
    <ul className={cn("space-y-0.5", className)}>
      {documents.map((doc) => {
        const label = doc.title || doc.description || doc.id;
        return (
          <li
            key={doc.id}
            title={label}
            className={cn(
              "truncate text-gray-700 cursor-pointer",
              onDocumentClick && "hover:text-gray-900"
            )}
            onClick={onDocumentClick ? () => onDocumentClick(doc) : undefined}
          >
            {label}
          </li>
        );
      })}
    </ul>
  );
};


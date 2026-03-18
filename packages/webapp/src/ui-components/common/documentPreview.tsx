import { File } from "lucide-react";

interface DocumentPreviewProps {
  file: { name: string; url: string };
}
function DocumentPreview({ file }: DocumentPreviewProps) {
  return (
    <div className="flex items-center gap-2 overflow-hidden min-w-[240px] p-2 hover:underline">
      <File className="w-4 h-4" /> <p className="text-sm">{file.name}</p>
    </div>
  );
}

export default DocumentPreview;

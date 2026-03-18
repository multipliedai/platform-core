interface ImagePreviewProps {
  thumbnails: string[];
}
function ImagePreview({ thumbnails }: ImagePreviewProps) {
  const isMultiple = thumbnails?.length > 1;
  return (
    <div className=" overflow-hidden">
      {isMultiple ? (
        <div className="grid grid-cols-2">
          {thumbnails?.map((url) => (
            <img src={url} className="rounded-lg object-cover" />
          ))}
        </div>
      ) : (
        <img
          src={thumbnails?.[0]}
          className="mx-auto aspect-square w-full rounded-lg object-cover"
        />
      )}
    </div>
  );
}

export default ImagePreview;

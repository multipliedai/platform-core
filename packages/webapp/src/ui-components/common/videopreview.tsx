import Plyr from "plyr-react";
import "plyr-react/plyr.css";
interface VideoPreviewProps {
  videoUrl: string;
}
function VideoPreview({ videoUrl }: VideoPreviewProps) {
  console.log({ videoUrl });
  return (
    <div className=" overflow-hidden">
      <Plyr
        className="aspect-video w-full"
        source={{
          type: "video",
          sources: [
            {
              src: videoUrl,
              type: "video/mp4",
            },
          ],
        }}
        autoPlay
        options={{
          controls: ["play", "fullscreen"],
        }}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
}

export default VideoPreview;

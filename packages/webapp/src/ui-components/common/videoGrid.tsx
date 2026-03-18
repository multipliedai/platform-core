import React from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

type VideoGridProps = {
  sources: { id: string; url: string; title?: string }[];
};

const VideoGrid: React.FC<VideoGridProps> = ({ sources }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sources.map((video) => (
        <div
          key={video.id}
          className="rounded-2xl overflow-hidden shadow-md bg-white"
        >
          <Plyr
            source={{
              type: "video",
              sources: [{ src: video.url }],
            }}
          />
          {video.title && (
            <div className="p-2 text-sm font-medium text-gray-700">
              {video.title}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;

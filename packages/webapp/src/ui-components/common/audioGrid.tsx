import React from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

type AudioGridProps = {
  sources: { id: string; url: string; title?: string }[];
};

const AudioGrid: React.FC<AudioGridProps> = ({ sources }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sources.map((audio) => (
        <div
          key={audio.id}
          className="rounded-2xl overflow-hidden shadow-md bg-white p-4"
        >
          <Plyr
            source={{
              type: "audio",
              sources: [{ src: audio.url }],
            }}
          />
          {audio.title && (
            <div className="mt-2 text-sm font-medium text-gray-700">
              {audio.title}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AudioGrid;

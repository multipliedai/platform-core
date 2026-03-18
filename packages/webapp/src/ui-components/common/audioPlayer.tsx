import { useRef, useState, useEffect } from "react";
import { Play, Pause, Rewind, FastForward, Volume2 } from "lucide-react";
import { Button } from "../ui/button";

const formatTime = (time: number) => {
  if (isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

export const AudioPlayer = ({
  url,
  title,
}: {
  url: string;
  title?: string;
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const skip = (seconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(
      0,
      Math.min(audio.currentTime + seconds, audio.duration)
    );
  };

  return (
    <div className="flex items-center space-x-3 p-3 bg-white border rounded-lg shadow-sm">
      <div className="p-2 bg-gray-100 rounded-lg">
        <Volume2 className="h-4 w-4" />
      </div>
      <div className="flex-1">
        {title && (
          <div className="text-sm font-medium text-gray-900 truncate">
            {title}
          </div>
        )}
        <div className="w-full h-1 bg-gray-200 rounded-full mt-1 mb-1">
          <div
            className="h-full bg-black rounded-full transition-all duration-200 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-2">
            <Button size="icon" onClick={() => skip(-10)} variant="ghost">
              <Rewind className="w-4 h-4" />
            </Button>
            <Button size="icon" onClick={togglePlay} variant="ghost">
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
            <Button size="icon" onClick={() => skip(10)} variant="ghost">
              <FastForward className="w-4 h-4" />
            </Button>
          </div>
          <div>
            {formatTime(audioRef.current?.currentTime || 0)} /{" "}
            {formatTime(duration)}
          </div>
        </div>
      </div>
      <audio ref={audioRef} src={url} />
    </div>
  );
};

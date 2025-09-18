"use client";

import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  videoSrc: string;
}

export function ProjectCard({
  title,
  description,
  videoSrc,
}: ProjectCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative aspect-video bg-gray-900">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          loop
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors group"
        >
          {isPlaying ? (
            <Pause className="w-12 h-12 text-white group-hover:scale-110 transition-transform" />
          ) : (
            <Play className="w-12 h-12 text-white group-hover:scale-110 transition-transform" />
          )}
        </button>
      </div>
      <div className="p-6">
        <h4 className="font-bold text-gray-800 mb-2 text-lg">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";

interface GuestPhotoProps {
  src: string;
  name: string;
  className?: string;
}

function Initials({ name }: { name: string }) {
  const parts = name.replace(/^Dr\.\s*/, "").split(" ");
  const initials = parts
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="absolute inset-0 bg-[#2a2a2a] flex flex-col items-center justify-center select-none">
      {/* Dot grid — simulates halftone over a dark field */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(244,241,234,0.5) 0.5px, transparent 0.5px)",
          backgroundSize: "4px 4px",
        }}
      />
      <span className="relative font-display text-5xl font-bold text-[#f4f1ea]/20 tracking-wider">
        {initials}
      </span>
      <span className="relative kicker text-[#f4f1ea]/20 mt-2 text-[0.5rem]">
        PHOTO
      </span>
    </div>
  );
}

export function GuestPhoto({ src, name, className = "" }: GuestPhotoProps) {
  const [hasError, setHasError] = useState(false);
  const isPlaceholder =
    !src ||
    src.includes("placeholder") ||
    src === "#" ||
    hasError;

  return (
    <div className={`photo-wrap relative w-full h-full ${className}`}>
      {isPlaceholder ? (
        <Initials name={name} />
      ) : (
        <Image
          src={src}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover object-top photo-halftone"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}

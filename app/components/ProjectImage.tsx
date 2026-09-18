"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageIcon } from "lucide-react";

export default function ProjectImage({
  src,
  alt,
  sizes,
  fit = "cover",
}: {
  src: string;
  alt: string;
  sizes: string;
  fit?: "cover" | "contain";
}) {
  const [failedSource, setFailedSource] = useState<string | null>(null);

  return (
    <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-linear-to-br from-orange-500/40 via-amber-400/20 to-fuchsia-500/30">
      {src && failedSource !== src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={fit === "contain" ? "object-contain" : "object-cover object-top"}
          onError={() => setFailedSource(src)}
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center text-sm text-white/70">
          <ImageIcon aria-hidden="true" size={32} strokeWidth={1.5} />
          Preview coming soon
        </div>
      )}
    </div>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { projectImageSrc } from "@/lib/images";

export default function ProjectImage({ filename, alt }) {
  const [hasError, setHasError] = useState(false);
  const src = projectImageSrc(filename);

  if (!src || hasError) {
    return (
      <div
        className="flex aspect-video w-full items-center justify-center border-b border-border bg-surface-muted"
        aria-hidden="true"
      >
        <ImageIcon className="h-6 w-6 text-neutral-400 dark:text-neutral-600" strokeWidth={1.5} />
      </div>
    );
  }

  return (
    <div className="flex aspect-video w-full items-center justify-center overflow-hidden border-b border-border bg-surface-muted">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        className="h-full w-auto max-w-full object-contain"
        sizes="(max-width: 768px) 100vw, 768px"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

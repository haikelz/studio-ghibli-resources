"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";

interface LightboxImageProps {
  src: string;
  className?: string;
  alt: string;
}

export default function LightboxImage({ src, alt, className }: LightboxImageProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Image
        className={clsx(
          "cursor-pointer object-cover duration-700",
          isLoading ? "blur-md" : "blur-none",
          className
        )}
        onClick={() => setIsOpen(true)}
        onLoadingComplete={() => setIsLoading(false)}
        decoding="async"
        loading="lazy"
        src={src}
        alt={alt}
        width={600}
        height={900}
      />
      {isOpen ? (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={[{ src: src, alt: alt, title: alt }]}
          plugins={[Captions]}
          render={{
            slide: () => {
              return (
                <Image
                  className="rounded-md"
                  src={src}
                  alt={alt}
                  loading="eager"
                  width={1000}
                  height={1000}
                  draggable={false}
                />
              );
            },
          }}
        />
      ) : null}
    </>
  );
}

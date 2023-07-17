import clsx from "clsx";
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

export default function LightboxImage({
  src,
  alt,
  className,
}: LightboxImageProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <img
        className={clsx(
          "aspect-auto w-full cursor-pointer duration-700",
          className
        )}
        onClick={() => setIsOpen(true)}
        decoding="async"
        loading="lazy"
        src={src}
        alt={alt}
        width={500}
        height={500}
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
                <img
                  className="aspect-auto rounded-md"
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

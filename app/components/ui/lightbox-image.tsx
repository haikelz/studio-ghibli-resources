import clsx from "clsx";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <LazyLoadImage
        className={clsx(
          "aspect-auto w-full transition-all cursor-pointer",
          className
        )}
        onClick={() => setIsOpen(true)}
        decoding="async"
        loading="lazy"
        src={src}
        alt={alt}
        effect="blur"
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

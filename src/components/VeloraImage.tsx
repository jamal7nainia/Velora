import { useState } from 'react';

interface VeloraImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  aspectClassName?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
}

export function VeloraImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  aspectClassName = '',
  loading = 'lazy',
  fetchPriority = 'auto',
}: VeloraImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`editorial-image-wrap relative ${aspectClassName} ${className}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={loading}
          fetchPriority={fetchPriority}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      ) : (
        <div
          aria-label={alt}
          className="flex h-full w-full flex-col items-center justify-center bg-[#EAE4D8] p-6 text-center text-[#52574D]"
        >
          <span className="font-display-latin text-xl tracking-[0.2em] text-[#252923]">
            VELORA
          </span>
          <span className="mt-2 max-w-[24ch] text-xs leading-relaxed">{alt}</span>
        </div>
      )}
    </div>
  );
}

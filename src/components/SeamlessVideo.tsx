'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  src: string;
  poster?: string;
  overlap?: number; // seconds of cross-fade
  className?: string;
};

export default function SeamlessVideo({
  src,
  poster,
  overlap = 0.5,
  className = '',
}: Props) {
  const vA = useRef<HTMLVideoElement | null>(null);
  const vB = useRef<HTMLVideoElement | null>(null);
  const [showA, setShowA] = useState(true);
  const timers = useRef<number[]>([]);
  const durationRef = useRef<number>(0);

  const clearTimers = () => {
    timers.current.forEach((t) => clearTimeout(t));
    timers.current = [];
  };

  useEffect(() => {
    const a = vA.current!;
    const b = vB.current!;
    if (!a || !b) return;

    const schedule = (front: HTMLVideoElement, back: HTMLVideoElement) => {
      const dur = durationRef.current || front.duration || back.duration || 0;
      const waitMs = Math.max(100, (dur - overlap) * 1000);

      const t1 = window.setTimeout(async () => {
        try {
          back.currentTime = 0;
          await back.play();
        } catch {
          /* no-op */
        }

        // Cross-fade to the back layer
        setShowA(front === a ? false : true);

        // After fade, pause the old one and recurse
        const t2 = window.setTimeout(() => {
          front.pause();
          schedule(back, front);
        }, overlap * 1000);
        timers.current.push(t2);
      }, waitMs);

      timers.current.push(t1);
    };

    const start = () => {
      clearTimers();
      setShowA(true);
      a.currentTime = 0;
      b.currentTime = 0;
      a.play().catch(() => {});
      schedule(a, b);
    };

    const onMetaA = () => {
      if (a.duration) durationRef.current = a.duration;
      start();
    };
    const onMetaB = () => {
      if (b.duration) durationRef.current = Math.max(durationRef.current, b.duration || 0);
    };

    a.addEventListener('loadedmetadata', onMetaA, { once: true });
    b.addEventListener('loadedmetadata', onMetaB, { once: true });

    // If metadata already available (cache), start immediately
    if (a.readyState >= 1) onMetaA();
    if (b.readyState >= 1) onMetaB();

    return () => {
      clearTimers();
      a.pause();
      b.pause();
    };
  }, [src, overlap]);

  return (
    <div className={`absolute inset-0 ${className}`}>
      <video
        ref={vA}
        src={src}
        poster={poster}
        muted
        playsInline
        autoPlay
        preload="auto"
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          showA ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <video
        ref={vB}
        src={src}
        poster={poster}
        muted
        playsInline
        autoPlay
        preload="auto"
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          showA ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
}

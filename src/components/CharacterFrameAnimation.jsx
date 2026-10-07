import { useEffect, useRef } from 'react';
import { preloadFrames } from '../utils/frameCache';

/**
 * CharacterFrameAnimation
 * Renders a PNG frame sequence as an animation.
 * Props:
 *   frames: string[] – ordered URLs of the frames
 *   fps: number – frames per second (default 24)
 *   loop: boolean – whether to loop after last frame (default false)
 *   play: boolean – external control to start/stop (default true)
 *   onComplete: () => void – called when a non‑looping animation finishes
 *   onFrameChange: (idx: number) => void – called after each frame is displayed
 *   className / style – passed to the <img> element
 */
export default function CharacterFrameAnimation({
  frames = [],
  fps = 24,
  loop = false,
  play = true,
  onComplete,
  onFrameChange,
  className,
  style,
}) {
  const imgRef = useRef(null);
  const rafRef = useRef(null);
  const frameIdxRef = useRef(0);
  const lastTimeRef = useRef(0);
  const frameDuration = 1000 / fps;

  // Pre‑load all frames once
  useEffect(() => {
    if (frames.length) preloadFrames(frames);
  }, [frames]);

  // Reset when frames change (e.g., modal reopened)
  useEffect(() => {
    frameIdxRef.current = 0;
    lastTimeRef.current = 0;
  }, [frames]);

  // Animation loop
  useEffect(() => {
    if (!play || frames.length === 0) return;

    // Show first frame immediately
    if (imgRef.current) imgRef.current.src = frames[0];
    if (onFrameChange) onFrameChange(0);

    const step = (timestamp) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = timestamp - lastTimeRef.current;
      if (delta >= frameDuration) {
        const nextIdx = frameIdxRef.current + 1;
        if (nextIdx < frames.length) {
          if (imgRef.current) imgRef.current.src = frames[nextIdx];
          if (onFrameChange) onFrameChange(nextIdx);
          frameIdxRef.current = nextIdx;
          lastTimeRef.current = timestamp;
        } else {
          // Reached end
          if (loop) {
            frameIdxRef.current = 0;
            if (imgRef.current) imgRef.current.src = frames[0];
            if (onFrameChange) onFrameChange(0);
            lastTimeRef.current = timestamp;
          } else {
            if (onComplete) onComplete();
            return; // stop the loop
          }
        }
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [play, frames, loop, fps, onComplete, onFrameChange]);

  return (
    <img
      ref={imgRef}
      src={frames[0] || ''}
      alt=""
      draggable="false"
      className={className}
      style={style}
    />
  );
}

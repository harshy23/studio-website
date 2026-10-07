/**
 * Simple in‑memory cache for preloading PNG frames.
 * Usage: preloadFrames(arrayOfUrls)
 */
const frameCache = new Map();

export function preloadFrames(frames) {
  frames.forEach((src) => {
    if (!frameCache.has(src)) {
      const img = new Image();
      img.src = src;
      frameCache.set(src, img);
    }
  });
}

export function getCachedFrame(src) {
  return frameCache.get(src);
}

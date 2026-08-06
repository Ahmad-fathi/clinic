import { useEffect, useRef } from 'react';

/**
 * Hook that adds a CSS class when an element enters the viewport.
 * Supports a configurable threshold and rootMargin.
 */
export function useScrollAnimation(
  className = 'is-visible',
  options: IntersectionObserverInit = { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add(className);
        observer.unobserve(el); // fire once
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [className]);

  return ref;
}

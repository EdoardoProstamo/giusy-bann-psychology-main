import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const children = el.querySelectorAll(".reveal-up, .reveal-fade");
    children.forEach((child) => observer.observe(child));

    if (el.classList.contains("reveal-up") || el.classList.contains("reveal-fade")) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

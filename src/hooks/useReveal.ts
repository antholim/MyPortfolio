import { useEffect } from "react";

/**
 * Reveals `[data-reveal]` elements once their section scrolls into view by
 * flipping `data-revealed="true"` on them. The rise itself lives in
 * tokens.css, staggered per element via the `--i` custom property.
 *
 * The observer watches the enclosing <section>, never the animated element:
 * a target carrying `clip-path` has an empty intersection rect while hidden,
 * so observing it directly would mean it never reveals itself.
 */
export function useReveal(deps: unknown[] = []): void {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (nodes.length === 0) return;

    const reveal = (node: HTMLElement) => node.setAttribute("data-revealed", "true");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach(reveal);
      return;
    }

    const groups = new Map<Element, HTMLElement[]>();
    nodes.forEach((node) => {
      const group = node.closest("section") ?? document.body;
      const existing = groups.get(group);
      if (existing) existing.push(node);
      else groups.set(group, [node]);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          groups.get(entry.target)?.forEach(reveal);
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );

    groups.forEach((_, group) => observer.observe(group));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

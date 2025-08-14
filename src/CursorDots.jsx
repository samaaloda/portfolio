import React, { useEffect, useMemo, useRef, useState } from "react";

export const CursorDots = ({
  holeRadius = 120,
  color = "var(--color-secondary)",
  gap = 28,
  dot = 2,
  blurSize = 56,
}) => {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const blurRef = useRef(null);
  const dotRefs = useRef([]);
  const lastActive = useRef(new Set());
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight });

  useEffect(() => {
    const onResize = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onMove = (e) => (mouseRef.current = { x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const grid = useMemo(() => {
    const cols = Math.ceil(size.w / gap) + 1;
    const rows = Math.ceil(size.h / gap) + 1;
    const positions = new Array(rows * cols);
    let i = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        positions[i++] = { x: c * gap, y: r * gap };
      }
    }
    return { positions, cols, rows };
  }, [size.w, size.h, gap]);

  useEffect(() => {
    dotRefs.current = dotRefs.current.slice(0, grid.positions.length);
  }, [grid.positions.length]);

  useEffect(() => {
    let raf;
    const loop = () => {
      const { x: mx, y: my } = mouseRef.current;
      if (blurRef.current) {
        blurRef.current.style.transform = `translate3d(${mx - blurSize / 2}px, ${my - blurSize / 2}px, 0)`;
      }

      const t = performance.now() / 600;
      for (const idx of lastActive.current) {
        const ref = dotRefs.current[idx];
        if (ref) {
          const p = grid.positions[idx];
          ref.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
        }
      }
      lastActive.current.clear();

      const r = holeRadius;
      const minC = Math.max(0, Math.floor((mx - r) / gap));
      const maxC = Math.min(grid.cols - 1, Math.ceil((mx + r) / gap));
      const minR = Math.max(0, Math.floor((my - r) / gap));
      const maxR = Math.min(grid.rows - 1, Math.ceil((my + r) / gap));

      for (let rr = minR; rr <= maxR; rr++) {
        for (let cc = minC; cc <= maxC; cc++) {
          const idx = rr * grid.cols + cc;
          const p = grid.positions[idx];
          const dx = p.x - mx;
          const dy = p.y - my;
          const dist = Math.hypot(dx, dy);
          if (dist < r) {
            const ref = dotRefs.current[idx];
            if (!ref) continue;
            const s = (r - dist) * 0.3;
            const seed = (idx * 9301 + 49297) % 233280;
            const a = (seed * 0.0001) + t * 2.1;
            const wobbleX = Math.sin(seed * 0.013 + t) * 3;
            const wobbleY = Math.cos(seed * 0.017 + t) * 3;
            const tx = p.x + Math.cos(a) * s + wobbleX;
            const ty = p.y + Math.sin(a) * s + wobbleY;
            ref.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
            lastActive.current.add(idx);
          }
        }
      }

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [grid.cols, grid.rows, grid.positions, gap, holeRadius, blurSize]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      {grid.positions.map(({ x, y }, i) => (
        <div
          key={i}
          ref={(el) => (dotRefs.current[i] = el)}
          style={{
            position: "absolute",
            transform: `translate3d(${x}px, ${y}px, 0)`,
            width: dot * 2,
            height: dot * 2,
            borderRadius: "50%",
            background: color,
            willChange: "transform",
          }}
        />
      ))}

      <div
        ref={blurRef}
        style={{
          position: "fixed",
          width: blurSize,
          height: blurSize,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(25,55,109,0.35) 0%, rgba(25,55,109,0) 60%)",
          pointerEvents: "none",
          willChange: "transform",
          transform: "translate3d(-9999px,-9999px,0)",
          boxShadow: "0 2px 12px rgba(0,0,0,.15)",
        }}
      />
    </div>
  );
};

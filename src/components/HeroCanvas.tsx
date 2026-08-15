import { useEffect, useRef } from "react";

/**
 * Curva ascendente generativa — o único momento de movimento autoral da
 * página, materializando o motivo "DAY + UP" (evolução) descrito no DS.
 */
export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    function buildPath(t: number) {
      const points: [number, number][] = [];
      const n = 42;
      for (let i = 0; i <= n; i++) {
        const x = (i / n) * w;
        const progress = i / n;
        const bas = h * 0.86 - progress * h * 0.6;
        const wobble =
          Math.sin(progress * 9 + t) * 10 * (1 - progress * 0.4) + Math.sin(progress * 23 + t * 1.7) * 4;
        points.push([x, bas + wobble]);
      }
      return points;
    }

    function draw(t: number) {
      ctx!.clearRect(0, 0, w, h);
      const pts = buildPath(t);

      const grad = ctx!.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, "oklch(0.84 0.17 85 / 0.35)");
      grad.addColorStop(1, "oklch(0.84 0.17 85 / 0)");

      ctx!.beginPath();
      ctx!.moveTo(pts[0][0], pts[0][1]);
      for (let i = 1; i < pts.length; i++) ctx!.lineTo(pts[i][0], pts[i][1]);
      ctx!.lineTo(w, h);
      ctx!.lineTo(0, h);
      ctx!.closePath();
      ctx!.fillStyle = grad;
      ctx!.fill();

      ctx!.beginPath();
      ctx!.moveTo(pts[0][0], pts[0][1]);
      for (let j = 1; j < pts.length; j++) ctx!.lineTo(pts[j][0], pts[j][1]);
      ctx!.strokeStyle = "oklch(0.84 0.17 85 / 0.85)";
      ctx!.lineWidth = 2;
      ctx!.lineJoin = "round";
      ctx!.stroke();

      const last = pts[pts.length - 1];
      ctx!.beginPath();
      ctx!.arc(last[0], last[1], 4, 0, Math.PI * 2);
      ctx!.fillStyle = "oklch(0.84 0.17 85)";
      ctx!.fill();
    }

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      draw(0);
      return () => window.removeEventListener("resize", resize);
    }

    let start: number | null = null;
    let frameId: number;
    function frame(ts: number) {
      if (start === null) start = ts;
      const t = (ts - start) / 1400;
      draw(t);
      frameId = requestAnimationFrame(frame);
    }
    frameId = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 z-[1] h-full w-full opacity-55"
      style={{
        maskImage: "linear-gradient(180deg, transparent, black 22%, black 78%, transparent)",
        WebkitMaskImage: "linear-gradient(180deg, transparent, black 22%, black 78%, transparent)",
      }}
    />
  );
}

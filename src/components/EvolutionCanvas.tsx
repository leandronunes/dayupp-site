import { useEffect, useRef } from "react";

const DATA = [22, 25, 24, 29, 33, 31, 38, 44, 41, 48, 55, 52, 60, 68, 66, 74, 82, 80, 88, 96];

export function EvolutionCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function draw(w: number, h: number) {
      ctx!.clearRect(0, 0, w, h);
      const pad = 8;
      const max = Math.max(...DATA);
      const min = Math.min(...DATA);
      const step = (w - pad * 2) / (DATA.length - 1);
      const py = (v: number) => h - pad - ((v - min) / (max - min)) * (h - pad * 2);

      ctx!.strokeStyle = "oklch(1 0 0 / 6%)";
      ctx!.lineWidth = 1;
      for (let g = 0; g < 4; g++) {
        const gy = pad + (g / 3) * (h - pad * 2);
        ctx!.beginPath();
        ctx!.moveTo(0, gy);
        ctx!.lineTo(w, gy);
        ctx!.stroke();
      }

      const grad = ctx!.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, "oklch(0.84 0.17 85 / 0.30)");
      grad.addColorStop(1, "oklch(0.84 0.17 85 / 0)");

      ctx!.beginPath();
      ctx!.moveTo(pad, py(DATA[0]));
      for (let i = 1; i < DATA.length; i++) ctx!.lineTo(pad + i * step, py(DATA[i]));
      ctx!.lineTo(pad + (DATA.length - 1) * step, h);
      ctx!.lineTo(pad, h);
      ctx!.closePath();
      ctx!.fillStyle = grad;
      ctx!.fill();

      ctx!.beginPath();
      ctx!.moveTo(pad, py(DATA[0]));
      for (let j = 1; j < DATA.length; j++) ctx!.lineTo(pad + j * step, py(DATA[j]));
      ctx!.strokeStyle = "oklch(0.84 0.17 85)";
      ctx!.lineWidth = 2.5;
      ctx!.lineJoin = "round";
      ctx!.lineCap = "round";
      ctx!.stroke();

      const lastX = pad + (DATA.length - 1) * step;
      const lastY = py(DATA[DATA.length - 1]);
      ctx!.beginPath();
      ctx!.arc(lastX, lastY, 4.5, 0, Math.PI * 2);
      ctx!.fillStyle = "oklch(0.84 0.17 85)";
      ctx!.fill();
      ctx!.beginPath();
      ctx!.arc(lastX, lastY, 8, 0, Math.PI * 2);
      ctx!.strokeStyle = "oklch(0.84 0.17 85 / 0.35)";
      ctx!.lineWidth = 2;
      ctx!.stroke();
    }

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      canvas!.width = rect.width * dpr;
      canvas!.height = rect.height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(rect.width, rect.height);
    }

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="block h-[220px] w-full" />;
}

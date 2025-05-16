import { useEffect, useRef } from "react";
import QRCode from "qrcode";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

interface QRDisplayProps {
  text: string;
}

export function QRDisplay({ text }: QRDisplayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current && text) {
      QRCode.toCanvas(canvasRef.current, text, {
        width: 280,
        margin: 2,
        color: {
          dark: "#000000",
          light: "#ffffff",
        },
      });
    }
  }, [text]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const link = document.createElement("a");
      link.download = "qr-code.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <div className="bg-card p-6 rounded-2xl shadow-sm border border-border">
          <canvas ref={canvasRef} className="mx-auto" />
        </div>
      </div>
      <Button
        onClick={handleDownload}
        className="w-full h-12 rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
      >
        <Download className="w-5 h-5 mr-2" />
        Download QR Code
      </Button>
    </div>
  );
} 
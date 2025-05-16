"use client";

import { useState } from "react";
import { QRForm } from "@/components/QRForm";
import { QRDisplay } from "@/components/QRDisplay";
import { Header } from "@/components/Header";

export default function Home() {
  const [qrText, setQrText] = useState<string>("");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="min-h-[calc(100vh-4rem)] flex justify-center pt-8 px-4">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                <span className="text-secondary">Quick</span> Codes
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-medium mb-6">
                Turn Any Link into a Scannable Story
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mx-auto">
                Create, customize, and share QR codes instantly. Perfect for business cards,
                marketing materials, or just sharing your favorite links.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <QRForm onGenerate={setQrText} />
              {qrText && (
                <div className="mt-8">
                  <QRDisplay text={qrText} />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 
"use client";

import { useState } from "react";
import { QRForm } from "@/components/QRForm";
import { QRDisplay } from "@/components/QRDisplay";
import { Header } from "@/components/Header";
import Link from "next/link";

export default function Home() {
  const [qrText, setQrText] = useState<string>("");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <div className="container mx-auto px-4 py-8 flex-1">
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
      <footer className="w-full py-6 border-t border-border bg-card mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-4">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-secondary transition-colors text-sm font-medium"
            >
              Privacy Policy
            </Link>
            <span className="text-muted-foreground">•</span>
            <p className="text-sm text-muted-foreground">
              © 2024 Quick Codes. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 
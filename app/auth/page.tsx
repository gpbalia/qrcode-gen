'use client';

import { useState } from 'react';
import { SignInForm } from '@/components/auth/SignInForm';
import { SignUpForm } from '@/components/auth/SignUpForm';
import { Button } from '@/components/ui/button';
import { QrCode, Zap, Lock, History, Shield } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <main className="min-h-screen flex">
      {/* Left side - Value Proposition */}
      <div className="hidden lg:flex lg:w-1/2 bg-accent flex-col justify-center px-12">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center space-x-2 mb-6">
            <QrCode className="h-10 w-10 text-secondary" />
            <h1 className="text-3xl font-bold text-foreground">QR Code Generator</h1>
          </div>

          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Create Professional QR Codes in Seconds
          </h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <Zap className="h-6 w-6 text-secondary mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Lightning Fast Generation</h3>
                <p className="text-muted-foreground">Generate high-quality QR codes instantly for your URLs, text, or contact information.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Lock className="h-6 w-6 text-secondary mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Secure & Private</h3>
                <p className="text-muted-foreground">Your data is encrypted and secure. We prioritize your privacy and data protection.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <History className="h-6 w-6 text-secondary mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Save & Manage</h3>
                <p className="text-muted-foreground">Access your QR code history anytime. Edit, download, or share them with ease.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Shield className="h-6 w-6 text-secondary mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">
                  <button
                    onClick={() => setShowPrivacy(true)}
                    className="hover:text-secondary transition-colors"
                  >
                    Privacy Policy
                  </button>
                </h3>
                <p className="text-muted-foreground">Learn how we protect your data and respect your privacy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 bg-background">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-3 text-foreground">
              {isSignIn ? 'Welcome Back!' : 'Join Us Today'}
            </h1>
            <p className="text-muted-foreground text-lg">
              {isSignIn
                ? 'Sign in to access your secure QR code dashboard'
                : 'Create an account to start generating professional QR codes'}
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            {isSignIn ? <SignInForm /> : <SignUpForm />}

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                {isSignIn ? "Don't have an account?" : "Already have an account?"}
              </p>
              <Button
                variant="link"
                className="mt-1 text-secondary hover:text-secondary/80 font-semibold"
                onClick={() => setIsSignIn(!isSignIn)}
              >
                {isSignIn ? 'Create one here' : 'Sign in here'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <Dialog open={showPrivacy} onOpenChange={setShowPrivacy}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              <Shield className="h-6 w-6 text-secondary" />
              Privacy Policy
            </DialogTitle>
            <DialogDescription className="text-base">
              How we protect your data and privacy
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div>
              <h3 className="font-semibold mb-2 text-foreground">Data Collection</h3>
              <p className="text-muted-foreground">We collect minimal information: your email for authentication and your generated QR codes. Usage statistics are anonymized for service improvement.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-foreground">Data Security</h3>
              <p className="text-muted-foreground">Your data is protected through secure SSL encryption, regular security audits, and Firebase Authentication. We never share your personal information.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-foreground">Your Rights</h3>
              <p className="text-muted-foreground">You can access, update, or delete your data at any time. We provide tools to export your QR code history and manage your account preferences.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-foreground">Cookies & Storage</h3>
              <p className="text-muted-foreground">We use essential cookies for authentication and session management. Local storage is used to improve your experience and maintain your preferences.</p>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground">For questions about our privacy practices, contact us at privacy@quickcodes.com</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
} 
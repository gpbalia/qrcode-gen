'use client';

import { useState } from 'react';
import { SignInForm } from '@/components/auth/SignInForm';
import { SignUpForm } from '@/components/auth/SignUpForm';
import { Button } from '@/components/ui/button';
import { QrCode, Zap, Lock, History } from 'lucide-react';

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);

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
    </main>
  );
} 
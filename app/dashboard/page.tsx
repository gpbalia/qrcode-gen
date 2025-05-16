'use client';

import { Header } from '@/components/Header';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { QrCode, Settings, History, LogOut } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/auth');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* QR Code Generator Card */}
            <Link href="/" className="block h-full">
              <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col border border-border">
                <div className="flex items-center space-x-4 mb-4">
                  <QrCode className="h-8 w-8 text-secondary shrink-0" />
                  <h2 className="text-xl font-semibold">Generate QR Codes</h2>
                </div>
                <p className="text-muted-foreground flex-grow">
                  Create new QR codes for your URLs, text, or contact information.
                </p>
              </div>
            </Link>

            {/* Settings Card */}
            <Link href="/settings" className="block h-full">
              <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col border border-border">
                <div className="flex items-center space-x-4 mb-4">
                  <Settings className="h-8 w-8 text-secondary shrink-0" />
                  <h2 className="text-xl font-semibold">Settings</h2>
                </div>
                <p className="text-muted-foreground flex-grow">
                  Manage your account settings and preferences.
                </p>
              </div>
            </Link>

            {/* History Card (Coming Soon) */}
            <div className="bg-accent rounded-2xl p-8 shadow-lg h-full flex flex-col border border-border">
              <div className="flex items-center space-x-4 mb-4">
                <History className="h-8 w-8 text-secondary/70 shrink-0" />
                <h2 className="text-xl font-semibold text-secondary/70">QR Code History</h2>
              </div>
              <p className="text-muted-foreground flex-grow">
                Coming soon: View and manage your previously generated QR codes.
              </p>
            </div>

            {/* Logout Card */}
            <div className="bg-card rounded-2xl p-8 shadow-lg h-full flex flex-col border border-border">
              <div className="flex items-center space-x-4 mb-4">
                <LogOut className="h-8 w-8 text-destructive shrink-0" />
                <h2 className="text-xl font-semibold">Log Out</h2>
              </div>
              <p className="text-muted-foreground flex-grow mb-4">
                Sign out of your account securely.
              </p>
              <Button 
                onClick={handleLogout}
                variant="destructive"
                className="w-full mt-auto"
              >
                Log Out
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 
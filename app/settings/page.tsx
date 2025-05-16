'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { updateEmail, updatePassword } from 'firebase/auth';
import { toast } from 'sonner';
import { Mail, Lock } from 'lucide-react';

export default function SettingsPage() {
  const { user } = useAuth();
  const [newEmail, setNewEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUpdateEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      setLoading(true);
      await updateEmail(user, newEmail);
      toast.success('Email updated successfully');
      setNewEmail('');
    } catch (error) {
      toast.error('Failed to update email. You may need to sign in again.');
      console.error('Error updating email:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    if (newPassword !== confirmNewPassword) {
      toast.error('New passwords do not match');
      return;
    }

    try {
      setLoading(true);
      await updatePassword(user, newPassword);
      toast.success('Password updated successfully');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    } catch (error) {
      toast.error('Failed to update password. You may need to sign in again.');
      console.error('Error updating password:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Account Settings</h1>
          <div className="grid gap-6">
            {/* Email Update Card */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <div className="flex items-center space-x-4 mb-6">
                <Mail className="h-8 w-8 text-secondary shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold">Email Address</h2>
                  <p className="text-muted-foreground">Update your email address</p>
                </div>
              </div>
              <form onSubmit={handleUpdateEmail} className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Current Email</label>
                  <Input
                    type="email"
                    value={user?.email || ''}
                    disabled
                    className="mt-1 bg-accent"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">New Email</label>
                  <Input
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  {loading ? 'Updating...' : 'Update Email'}
                </Button>
              </form>
            </div>

            {/* Password Update Card */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <div className="flex items-center space-x-4 mb-6">
                <Lock className="h-8 w-8 text-secondary shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold">Password</h2>
                  <p className="text-muted-foreground">Change your password</p>
                </div>
              </div>
              <form onSubmit={handleUpdatePassword} className="space-y-4">
                <div>
                  <label className="text-sm font-medium">New Password</label>
                  <Input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Confirm New Password</label>
                  <Input
                    type="password"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  {loading ? 'Updating...' : 'Update Password'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 
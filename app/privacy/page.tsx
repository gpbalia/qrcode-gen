'use client';

import { Header } from '@/components/Header';
import { useAuth } from '@/contexts/AuthContext';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PrivacyPolicy() {
    const { user } = useAuth();

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-8">
                        <Link href={user ? "/" : "/auth"}>
                            <Button variant="ghost" className="gap-2 hover:bg-accent">
                                <ArrowLeft className="h-4 w-4" />
                                Back to {user ? 'Generator' : 'Login'}
                            </Button>
                        </Link>
                        <h1 className="text-3xl font-bold">Privacy Policy</h1>
                    </div>

                    <div className="space-y-8">
                        {/* Data Collection Section */}
                        <section className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                            <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>We collect the following information when you use Quick Codes:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Email address (for authentication)</li>
                                    <li>Generated QR codes</li>
                                    <li>Usage statistics (for service improvement)</li>
                                </ul>
                            </div>
                        </section>

                        {/* Data Usage Section */}
                        <section className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                            <h2 className="text-2xl font-semibold mb-4">How We Use Your Data</h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>Your data is used exclusively for:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Providing and maintaining your account</li>
                                    <li>Storing your QR code history</li>
                                    <li>Improving our service based on usage patterns</li>
                                    <li>Sending important account-related notifications</li>
                                </ul>
                            </div>
                        </section>

                        {/* Cookies Section */}
                        <section className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                            <h2 className="text-2xl font-semibold mb-4">Cookies & Local Storage</h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>We use cookies and local storage for:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Keeping you signed in</li>
                                    <li>Remembering your preferences</li>
                                    <li>Improving performance</li>
                                </ul>
                                <p>You can clear your browser cache and cookies at any time, but this will sign you out.</p>
                            </div>
                        </section>

                        {/* Data Security Section */}
                        <section className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>We protect your data through:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Secure SSL encryption</li>
                                    <li>Regular security audits</li>
                                    <li>Limited data retention</li>
                                    <li>Secure Firebase Authentication</li>
                                </ul>
                            </div>
                        </section>

                        {/* Data Rights Section */}
                        <section className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>You have the right to:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Access your personal data</li>
                                    <li>Update your information</li>
                                    <li>Delete your account and associated data</li>
                                    <li>Export your QR code history</li>
                                </ul>
                            </div>
                        </section>

                        {/* Contact Section */}
                        <section className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>If you have any questions about our privacy policy or data practices, please contact us at:</p>
                                <p className="font-medium">privacy@quickcodes.com</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
} 
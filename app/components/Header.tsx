"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Header = () => {

    const [isLoggedIn, setIsloggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsloggedIn(true);
        }
    })
    return (
        <header className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 bg-linear-to-br from-purple-600 to-pink-600 rounded flex items-center justify-center">
                            <svg
                                className="w-5 h-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                        </div>
                        <span className="text-xl font-semibold text-slate-100 tracking-tight">
                            AgenticAI
                        </span>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {!isLoggedIn ? (
                            <>
                                <a href="/" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Home</a>
                                <a href="/features" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Features</a>
                                <a href="/pricing" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Pricing</a>
                            </>
                        ) : (
                            <>
                                <Link href="/" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Home</Link>
                                <Link href="/dashboard" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Dashboard</Link>
                                <Link href="/settings" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">My Profile</Link>
                            </>
                        )}


                    </div>

                    {/* Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        {!isLoggedIn ? (
                            <>
                                <Link href="/login" className="text-slate-300 hover:text-white transition-colors text-sm font-medium px-4 py-2">
                                    Sign In
                                </Link>
                                <button className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
                                    Get Started
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={() => {
                                    localStorage.removeItem("token");
                                    setIsloggedIn(false);
                                    toast.success("Logged out successfully");

                                    setTimeout(() => { window.location.href = "/" }, 2000);

                                }}
                                className="bg-red-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-red-700 transition-all"
                            >
                                Logout
                            </button>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
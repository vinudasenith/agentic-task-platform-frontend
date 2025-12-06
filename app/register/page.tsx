"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";


export default function Register() {

    // State
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);

    //handle register
    const handleRegister = async () => {
        setLoading(true);

        try {
            const res = await fetch("http://localhost:7000/api/users/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password })
            });

            const data = await res.json();

            if (res.ok) {
                toast.success("User registered successfully");
                setName('');
                setEmail('');
                setPassword('');
                setTimeout(() => { window.location.href = "/login" }, 2000);
            } else {
                toast.error(data.message || "Registration failed! Please try again.");
            }


        } catch (error) {
            toast.error("Something went wrong! Please try again.");
        }

        setLoading(false);
    }



    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden py-8">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-30"></div>

            {/* Main registration card */}
            <div className="relative z-10 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 shadow-2xl rounded-2xl w-full max-w-sm p-6 sm:p-8">

                {/* Logo  */}
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        <div className="w-14 h-14 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                            <svg
                                className="w-8 h-8 text-white"
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
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                </div>

                {/* Header */}
                <h1 className="text-2xl font-bold text-center bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    Create Account
                </h1>
                <p className="text-center text-slate-400 text-sm mb-6">
                    Sign up to start using TaskBot
                </p>

                {/* Form */}
                <div className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                            placeholder="Your Name"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                            placeholder="you@example.com"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                            placeholder="••••••••"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        onClick={handleRegister}
                        disabled={loading} className="w-full bg-linear-to-r from-purple-600 to-pink-600 text-white py-2.5 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition shadow-lg hover:shadow-purple-500/50 transform hover:scale-[1.02] active:scale-[0.98]">
                        {loading ? "Creating..." : "Register"}
                    </button>
                </div>

                {/* Divider */}
                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-700"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-3 bg-slate-800/50 text-slate-400">
                            Or continue with
                        </span>
                    </div>
                </div>

                {/* Alternative login buttons */}
                <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center gap-2 bg-slate-900/50 border border-slate-600 text-slate-300 py-2 rounded-lg font-medium hover:bg-slate-900 hover:border-slate-500 transition">
                        Google
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-slate-900/50 border border-slate-600 text-slate-300 py-2 rounded-lg font-medium hover:bg-slate-900 hover:border-slate-500 transition">
                        GitHub
                    </button>
                </div>

                {/* Footer */}
                <p className="text-center text-sm text-slate-400 mt-6">
                    Already have an account?{' '}
                    <Link
                        href="/login"
                        className="text-purple-400 hover:text-purple-300 font-medium transition">
                        Sign In
                    </Link>
                </p>

                <div className="mt-4 pt-4 border-t border-slate-700/50 text-center">
                    <p className="text-xs text-slate-500">
                        Secured by enterprise-grade encryption
                    </p>
                </div>
            </div>
        </div>
    );
}

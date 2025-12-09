import React from 'react';
import { LayoutDashboard, ListTodo, Workflow, Bot, Plus, AlertCircle, Clock, CheckCircle, XCircle, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function AgenticDashboard() {
    return (
        <div className="flex h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            {/* Sidebar */}
            <div className="w-64 bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-slate-700 flex flex-col">
                <div className="p-6 border-b border-slate-700">
                    <h1 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        AgenticAI
                    </h1>
                    <p className="text-xs text-slate-400 mt-1">NLP Automation Platform</p>
                </div>

                <nav className="flex-1 p-4 space-y-2">


                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 bg-linear-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/20">
                        <LayoutDashboard size={20} />
                        <span className="font-medium">Dashboard</span>
                    </button>


                    <Link href="/dashboard/tasks" className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-slate-800/50 text-slate-300 hover:text-white">
                        <ListTodo size={20} />
                        <span className="font-medium">Tasks</span>
                    </Link>


                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-slate-800/50 text-slate-300 hover:text-white">
                        <Workflow size={20} />
                        <span className="font-medium">Workflows</span>
                    </button>


                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-slate-800/50 text-slate-300 hover:text-white">
                        <Bot size={20} />
                        <span className="font-medium">AI Assistant</span>
                    </button>
                </nav>

                <div className="p-4 border-t border-slate-700">
                    <div className="bg-slate-800/50 rounded-lg p-3 text-xs text-slate-400">
                        <p className="font-medium text-slate-300 mb-1">System Status</p>
                        <p>All agents operational</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700 p-6 flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold">Dashboard</h2>
                        <p className="text-slate-400 text-sm mt-1">Manage your AI-powered tasks and workflows</p>
                    </div>
                </header>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-5 hover:bg-slate-800/70 transition-all duration-200 hover:border-slate-600">
                            <div className="flex items-center justify-between mb-3">
                                <div className="p-2 rounded-lg bg-linear-to-br from-blue-500 to-blue-600">
                                    <TrendingUp size={20} />
                                </div>
                            </div>
                            <p className="text-2xl font-bold mb-1">0</p>
                            <p className="text-xs text-slate-400">Total Tasks</p>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-5 hover:bg-slate-800/70 transition-all duration-200 hover:border-slate-600">
                            <div className="flex items-center justify-between mb-3">
                                <div className="p-2 rounded-lg bg-linear-to-br from-yellow-500 to-yellow-600">
                                    <Clock size={20} />
                                </div>
                            </div>
                            <p className="text-2xl font-bold mb-1">0</p>
                            <p className="text-xs text-slate-400">Pending</p>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-5 hover:bg-slate-800/70 transition-all duration-200 hover:border-slate-600">
                            <div className="flex items-center justify-between mb-3">
                                <div className="p-2 rounded-lg bg-linear-to-br from-purple-500 to-purple-600">
                                    <AlertCircle size={20} />
                                </div>
                            </div>
                            <p className="text-2xl font-bold mb-1">0</p>
                            <p className="text-xs text-slate-400">In Progress</p>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-5 hover:bg-slate-800/70 transition-all duration-200 hover:border-slate-600">
                            <div className="flex items-center justify-between mb-3">
                                <div className="p-2 rounded-lg bg-linear-to-br from-green-500 to-green-600">
                                    <CheckCircle size={20} />
                                </div>
                            </div>
                            <p className="text-2xl font-bold mb-1">0</p>
                            <p className="text-xs text-slate-400">Completed</p>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-5 hover:bg-slate-800/70 transition-all duration-200 hover:border-slate-600">
                            <div className="flex items-center justify-between mb-3">
                                <div className="p-2 rounded-lg bg-linear-to-br from-red-500 to-red-600">
                                    <XCircle size={20} />
                                </div>
                            </div>
                            <p className="text-2xl font-bold mb-1">0</p>
                            <p className="text-xs text-slate-400">Failed</p>
                        </div>
                    </div>

                    {/* Tasks Table */}
                    <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg overflow-hidden">
                        <div className="p-5 border-b border-slate-700">
                            <h3 className="text-lg font-semibold">Recent Tasks</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-slate-900/50">
                                    <tr>
                                        <th className="text-left p-4 text-sm font-medium text-slate-300">Task Name</th>
                                        <th className="text-left p-4 text-sm font-medium text-slate-300">Priority</th>
                                        <th className="text-left p-4 text-sm font-medium text-slate-300">Status</th>
                                        <th className="text-left p-4 text-sm font-medium text-slate-300">Deadline</th>
                                        <th className="text-left p-4 text-sm font-medium text-slate-300">Agent</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan={5} className="p-12 text-center">
                                            <ListTodo className="mx-auto mb-3 text-slate-600" size={48} />
                                            <p className="text-slate-400 text-sm">No tasks yet. Create your first task to get started.</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Activity Feed */}
                    <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg overflow-hidden">
                        <div className="p-5 border-b border-slate-700">
                            <h3 className="text-lg font-semibold">Agent Activity</h3>
                        </div>
                        <div className="p-12 text-center">
                            <Bot className="mx-auto mb-3 text-slate-600" size={48} />
                            <p className="text-slate-400 text-sm">No recent activity. Your agents will appear here when active.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
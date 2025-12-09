"use client";

import { useState } from 'react';
import { Plus, Search, Filter, Calendar, Clock, User, CheckCircle2, Circle, AlertCircle } from 'lucide-react';

export default function TaskManagementPage() {
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [filterPriority, setFilterPriority] = useState('all');

    return (
        <div className="min-h-screen bg-slate-900">
            {/* Header */}
            <div className="border-b border-slate-800 bg-slate-900/95 backdrop-blur-sm sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-semibold text-white">Tasks</h1>
                            <p className="text-slate-400 text-sm mt-1">Manage and track all your tasks</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Create Task Form */}
                {showCreateForm && (
                    <div className="mb-8 bg-slate-800/50 border border-slate-700 rounded-lg shadow-xl overflow-hidden">
                        <div className="border-b border-slate-700 p-6">
                            <h2 className="text-xl font-semibold text-white">Create New Task</h2>
                            <p className="text-slate-400 text-sm mt-1">Fill in the details to create a new task</p>
                        </div>

                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2">
                                    <label htmlFor="title" className="block text-sm font-medium text-slate-300 mb-2">
                                        Title <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        placeholder="Enter task title"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label htmlFor="description" className="block text-sm font-medium text-slate-300 mb-2">
                                        Description
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows={4}
                                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                                        placeholder="Enter task description"
                                    ></textarea>
                                </div>

                                <div>
                                    <label htmlFor="priority" className="block text-sm font-medium text-slate-300 mb-2">
                                        Priority <span className="text-red-400">*</span>
                                    </label>
                                    <select
                                        id="priority"
                                        name="priority"
                                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    >
                                        <option value="">Select priority</option>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="status" className="block text-sm font-medium text-slate-300 mb-2">
                                        Status <span className="text-red-400">*</span>
                                    </label>
                                    <select
                                        id="status"
                                        name="status"
                                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    >
                                        <option value="">Select status</option>
                                        <option value="Pending">Pending</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="deadline" className="block text-sm font-medium text-slate-300 mb-2">
                                        Deadline <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="date"
                                        id="deadline"
                                        name="deadline"
                                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="assignedAgent" className="block text-sm font-medium text-slate-300 mb-2">
                                        Assigned Agent <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="assignedAgent"
                                        name="assignedAgent"
                                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        placeholder="Enter agent name"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-700">
                                <button
                                    type="button"
                                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800"
                                >
                                    Create Task
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowCreateForm(false)}
                                    className="px-6 py-2.5 bg-slate-700 hover:bg-slate-600 text-slate-300 font-medium rounded-lg transition focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-800"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-slate-400 text-sm font-medium">Total Tasks</p>
                                <p className="text-3xl font-bold text-white mt-2">0</p>
                            </div>
                            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                <Circle className="text-blue-500" size={24} />
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-slate-400 text-sm font-medium">In Progress</p>
                                <p className="text-3xl font-bold text-white mt-2">0</p>
                            </div>
                            <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                                <Clock className="text-yellow-500" size={24} />
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-slate-400 text-sm font-medium">Completed</p>
                                <p className="text-3xl font-bold text-white mt-2">0</p>
                            </div>
                            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                                <CheckCircle2 className="text-green-500" size={24} />
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-slate-400 text-sm font-medium">High Priority</p>
                                <p className="text-3xl font-bold text-white mt-2">0</p>
                            </div>
                            <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                                <AlertCircle className="text-red-500" size={24} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters and Search */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                        <div className="md:col-span-5">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search tasks..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                />
                            </div>
                        </div>

                        <div className="md:col-span-3">
                            <select
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            >
                                <option value="all">All Status</option>
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>

                        <div className="md:col-span-3">
                            <select
                                value={filterPriority}
                                onChange={(e) => setFilterPriority(e.target.value)}
                                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            >
                                <option value="all">All Priority</option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                        </div>

                        <div className="md:col-span-1 flex items-center justify-center">
                            <button className="w-full md:w-auto px-4 py-2.5 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-slate-500 flex items-center justify-center">
                                <Filter size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Tasks List */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden">
                    <div className="p-6">
                        <h3 className="text-lg font-semibold text-white mb-4">Task List</h3>

                        {/* Empty State */}
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Circle className="text-slate-500" size={32} />
                            </div>
                            <h4 className="text-white font-medium mb-2">No tasks found</h4>
                            <p className="text-slate-400 text-sm mb-6">Get started by creating your first task</p>
                            <button
                                onClick={() => setShowCreateForm(true)}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
                            >
                                <Plus size={20} />
                                Create Task
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
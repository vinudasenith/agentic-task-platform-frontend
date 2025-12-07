
export default function Settings() {
    return (

        <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
            <div className="max-w-4xl mx-auto space-y-6">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Account Settings</h1>
                    <p className="text-slate-400">Manage your profile and account preferences</p>
                </div>

                {/* Profile Card */}
                <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        {/* Avatar */}
                        <div className="relative">
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl md:text-4xl font-bold shadow-lg">
                                JD
                            </div>
                        </div>

                        {/* User Info */}
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-bold text-white mb-2">admin</h2>
                            <p className="text-slate-400 mb-3">admin@gmail.com</p>

                        </div>
                    </div>
                </div>

                {/* Profile Information */}
                <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 md:p-8">
                    <h3 className="text-xl font-semibold text-white mb-6">Profile Information</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* First Name */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                First Name
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            />
                        </div>

                        {/* Last Name */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            />
                        </div>

                        {/* Email */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            />
                        </div>

                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                        <button className="px-6 py-2.5 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30">
                            Save Changes
                        </button>
                        <button className="px-6 py-2.5 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-all duration-200">
                            Cancel
                        </button>
                    </div>
                </div>

                {/* Danger Zone */}
                <div className="bg-red-500/5 backdrop-blur border border-red-500/30 rounded-lg p-6 md:p-8">
                    <h3 className="text-xl font-semibold text-red-400 mb-4">Danger Zone</h3>
                    <p className="text-slate-400 mb-6">Once you delete your account, there is no going back. Please be certain.</p>

                    <button className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-red-500/20 hover:shadow-red-500/30">
                        Delete Account
                    </button>
                </div>
            </div>
        </div>
    )
}



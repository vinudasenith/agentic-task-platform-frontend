import Header from '../components/Header';
import Footer from '../components/Footer';

const FeaturesPage = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
            <Header />
            <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                {/* Hero */}
                <div className="max-w-4xl mx-auto text-center pt-12 pb-20">
                    <div className="inline-block mb-4 px-4 py-1.5 bg-slate-800/50 border border-slate-700 rounded-full">
                        <span className="text-sm text-slate-300">Platform Overview</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
                        Enterprise-Grade AI Agent Platform
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Build, deploy, and manage intelligent AI agents with enterprise security and scalability.
                    </p>
                </div>

                {/* Core Features */}
                <section className="max-w-6xl mx-auto mb-20">
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-white mb-3">Core Capabilities</h2>
                        <p className="text-slate-400">Foundational features for enterprise AI automation</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-linear-to-br from-purple-600 to-pink-600 rounded flex items-center justify-center shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-3">Multi-Agent Orchestration</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                        Deploy multiple specialized agents that collaborate to handle complex workflows with intelligent task distribution.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2 text-sm text-slate-400">
                                            <svg className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span>Dynamic agent spawning</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-sm text-slate-400">
                                            <svg className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span>Inter-agent communication</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-linear-to-br from-purple-600 to-pink-600 rounded flex items-center justify-center shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-3">Enterprise Security</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                        Bank-level security with comprehensive compliance certifications to safeguard your operations.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2 text-sm text-slate-400">
                                            <svg className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span>SOC 2 Type II certified</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-sm text-slate-400">
                                            <svg className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span>End-to-end encryption</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-linear-to-br from-purple-600 to-pink-600 rounded flex items-center justify-center shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-3">High-Performance Infrastructure</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                        Distributed architecture for enterprise-scale workloads with minimal latency.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2 text-sm text-slate-400">
                                            <svg className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span>Sub-second response times</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-sm text-slate-400">
                                            <svg className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span>99.9% uptime SLA</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-linear-to-br from-purple-600 to-pink-600 rounded flex items-center justify-center shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-3">Advanced Analytics</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                        Real-time insights into agent performance and workflow efficiency.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2 text-sm text-slate-400">
                                            <svg className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span>Performance dashboards</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-sm text-slate-400">
                                            <svg className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span>Custom alerts</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Integration */}
                <section className="max-w-6xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-white mb-3">Integration & Deployment</h2>
                        <p className="text-slate-400">Connect with your existing infrastructure</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
                            <div className="w-10 h-10 bg-linear-to-br from-purple-600 to-pink-600 rounded flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h3 className="text-base font-semibold text-white mb-2">RESTful API</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Comprehensive REST API with SDKs and webhook support for real-time events.
                            </p>
                        </div>

                        <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
                            <div className="w-10 h-10 bg-linear-to-br from-purple-600 to-pink-600 rounded flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                                </svg>
                            </div>
                            <h3 className="text-base font-semibold text-white mb-2">Data Connectors</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Pre-built integrations for databases and popular SaaS platforms.
                            </p>
                        </div>

                        <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
                            <div className="w-10 h-10 bg-linear-to-br from-purple-600 to-pink-600 rounded flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                </svg>
                            </div>
                            <h3 className="text-base font-semibold text-white mb-2">Flexible Deployment</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Deploy on cloud, private cloud, or on-premises with containerized options.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default FeaturesPage;
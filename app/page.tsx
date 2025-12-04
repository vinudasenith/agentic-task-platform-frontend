import Header from './components/Header';
import Footer from './components/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />

      {/* Hero Section */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative">
        {/* Subtle background elements */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full filter blur-3xl"></div>

        {/* Hero Content */}
        <div className="max-w-5xl mx-auto text-center relative z-10 pt-12 pb-20">
          <div className="inline-block mb-4 px-4 py-1.5 bg-slate-800/50 border border-slate-700 rounded-full">
            <span className="text-sm text-slate-300">Enterprise AI Agent Platform</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-white leading-tight tracking-tight">
            Intelligent AI Agents for
            <span className="block mt-2 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Enterprise Workflows
            </span>
          </h1>

          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Deploy autonomous AI agents that collaborate to automate complex workflows,
            analyze data, and drive operational efficiency across your organization.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
            <button className="px-7 py-3 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
              Request Demo
            </button>
            <button className="px-7 py-3 bg-slate-800 border border-slate-700 text-slate-200 rounded font-medium hover:bg-slate-700 transition-all">
              View Documentation
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>SOC 2 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>99.9% Uptime SLA</span>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="max-w-6xl mx-auto mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-white mb-4">Platform Capabilities</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Built for enterprise scale with the flexibility to adapt to your unique requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-8 hover:border-slate-600 transition-all">
              <div className="w-12 h-12 bg-linear-to-br from-purple-600 to-pink-600 rounded flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Multi-Agent Orchestration</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Coordinate multiple specialized AI agents to tackle complex, multi-step workflows with precision.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-8 hover:border-slate-600 transition-all">
              <div className="w-12 h-12 bg-linear-to-br from-purple-600 to-pink-600 rounded flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">High-Performance Infrastructure</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Process workflows at scale with optimized infrastructure designed for enterprise demands.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-8 hover:border-slate-600 transition-all">
              <div className="w-12 h-12 bg-linear-to-br from-purple-600 to-pink-600 rounded flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Enterprise-Grade Security</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Bank-level encryption, compliance certifications, and comprehensive audit controls.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-8 hover:border-slate-600 transition-all">
              <div className="w-12 h-12 bg-linear-to-br from-purple-600 to-pink-600 rounded flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Flexible Integration</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Connect seamlessly with existing tools and systems through our robust API framework.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-8 hover:border-slate-600 transition-all">
              <div className="w-12 h-12 bg-linear-to-br from-purple-600 to-pink-600 rounded flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Real-Time Analytics</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Monitor agent performance and workflow efficiency with comprehensive dashboards.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-8 hover:border-slate-600 transition-all">
              <div className="w-12 h-12 bg-linear-to-br from-purple-600 to-pink-600 rounded flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">24/7 Support</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Dedicated support team and comprehensive documentation to ensure smooth operations.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-24 max-w-4xl mx-auto">
          <div className="bg-linear-to-r from-slate-800 to-slate-800/50 border border-slate-700 rounded-lg p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600/20 rounded-full filter blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-semibold text-white mb-4">Ready to Scale Your Operations?</h2>
              <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
                Join leading enterprises leveraging AI agents to drive efficiency and innovation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-7 py-3 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
                  Schedule Consultation
                </button>
                <button className="px-7 py-3 bg-slate-700 border border-slate-600 text-slate-200 rounded font-medium hover:bg-slate-600 transition-all">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
export default Homepage;

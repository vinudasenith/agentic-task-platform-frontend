import Header from '../components/Header';
import Footer from '../components/Footer';
const PricingPage = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
            <Header />
            <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                {/* Hero */}
                <div className="max-w-4xl mx-auto text-center pt-12 pb-16">
                    <div className="inline-block mb-4 px-4 py-1.5 bg-slate-800/50 border border-slate-700 rounded-full">
                        <span className="text-sm text-slate-300">Simple, Transparent Pricing</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
                        Choose Your Plan
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Scale from startup to enterprise with flexible pricing designed for teams of all sizes.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
                    {/* Starter Plan */}
                    <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-8">
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-white mb-2">Starter</h3>
                            <p className="text-sm text-slate-400 mb-6">For small teams getting started with AI automation</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-semibold text-white">$49</span>
                                <span className="text-slate-400 text-sm">/month</span>
                            </div>
                            <p className="text-xs text-slate-500 mt-2">Billed monthly</p>
                        </div>

                        <button className="w-full py-3 px-4 bg-slate-700 border border-slate-600 text-white rounded font-medium hover:bg-slate-600 transition-all mb-8">
                            Start Free Trial
                        </button>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-sm text-white font-medium">Up to 5 agents</p>
                                    <p className="text-xs text-slate-400">Concurrent agent execution</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-sm text-white font-medium">10,000 tasks/month</p>
                                    <p className="text-xs text-slate-400">Automated task executions</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-sm text-white font-medium">Basic integrations</p>
                                    <p className="text-xs text-slate-400">REST API access</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-sm text-white font-medium">Email support</p>
                                    <p className="text-xs text-slate-400">24-hour response time</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-sm text-white font-medium">30-day data retention</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Professional Plan - Featured */}
                    <div className="bg-slate-800/30 border-2 border-purple-600 rounded-lg p-8 relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-xs font-medium">
                            Most Popular
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-white mb-2">Professional</h3>
                            <p className="text-sm text-slate-400 mb-6">For growing teams with advanced automation needs</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-semibold text-white">$199</span>
                                <span className="text-slate-400 text-sm">/month</span>
                            </div>
                            <p className="text-xs text-slate-500 mt-2">Billed monthly or $1,990/year (save 17%)</p>
                        </div>

                        <button className="w-full py-3 px-4 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded font-medium hover:from-purple-700 hover:to-pink-700 transition-all mb-8">
                            Start Free Trial
                        </button>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-sm text-white font-medium">Up to 25 agents</p>
                                    <p className="text-xs text-slate-400">Concurrent agent execution</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-sm text-white font-medium">100,000 tasks/month</p>
                                    <p className="text-xs text-slate-400">Automated task executions</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-sm text-white font-medium">Advanced integrations</p>
                                    <p className="text-xs text-slate-400">Pre-built connectors + webhooks</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-sm text-white font-medium">Priority support</p>
                                    <p className="text-xs text-slate-400">4-hour response time</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-sm text-white font-medium">Advanced analytics</p>
                                    <p className="text-xs text-slate-400">Custom dashboards</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-sm text-white font-medium">90-day data retention</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-sm text-white font-medium">Team collaboration</p>
                                    <p className="text-xs text-slate-400">Up to 10 team members</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-8">
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-white mb-2">Enterprise</h3>
                            <p className="text-sm text-slate-400 mb-6">For organizations requiring advanced security and scale</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-semibold text-white">Custom</span>
                            </div>
                            <p className="text-xs text-slate-500 mt-2">Contact sales for pricing</p>
                        </div>

                        <button className="w-full py-3 px-4 bg-slate-700 border border-slate-600 text-white rounded font-medium hover:bg-slate-600 transition-all mb-8">
                            Contact Sales
                        </button>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-sm text-white font-medium">Unlimited agents</p>
                                    <p className="text-xs text-slate-400">Custom scaling configuration</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-sm text-white font-medium">Custom task volume</p>
                                    <p className="text-xs text-slate-400">Tailored to your needs</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-sm text-white font-medium">Enterprise integrations</p>
                                    <p className="text-xs text-slate-400">Custom connectors + SSO</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-sm text-white font-medium">24/7 dedicated support</p>
                                    <p className="text-xs text-slate-400">1-hour response time SLA</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-sm text-white font-medium">Advanced security</p>
                                    <p className="text-xs text-slate-400">SOC 2, HIPAA compliance</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-sm text-white font-medium">Custom data retention</p>
                                    <p className="text-xs text-slate-400">Unlimited retention available</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-sm text-white font-medium">On-premise deployment</p>
                                    <p className="text-xs text-slate-400">Private cloud or self-hosted</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-sm text-white font-medium">Dedicated account manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-4xl mx-auto mt-20">
                    <h2 className="text-2xl font-semibold text-white text-center mb-12">Frequently Asked Questions</h2>

                    <div className="space-y-6">
                        <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
                            <h3 className="text-base font-semibold text-white mb-2">What counts as a task execution?</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                A task execution is counted each time an agent performs a discrete action, such as processing a document,
                                making an API call, or completing a workflow step. Simple operations are bundled efficiently to optimize your usage.
                            </p>
                        </div>

                        <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
                            <h3 className="text-base font-semibold text-white mb-2">Can I upgrade or downgrade my plan?</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades apply at the
                                start of your next billing cycle. You'll receive prorated credits for any unused portion of your current plan.
                            </p>
                        </div>

                        <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
                            <h3 className="text-base font-semibold text-white mb-2">Is there a free trial available?</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                All plans include a 14-day free trial with full access to features. No credit card required to start.
                                Enterprise customers can request an extended trial period through our sales team.
                            </p>
                        </div>

                        <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
                            <h3 className="text-base font-semibold text-white mb-2">What payment methods do you accept?</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                We accept all major credit cards (Visa, Mastercard, American Express), ACH transfers for annual plans,
                                and wire transfers for Enterprise customers. Invoice billing is available for Enterprise plans.
                            </p>
                        </div>

                        <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
                            <h3 className="text-base font-semibold text-white mb-2">How does data retention work?</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Data retention periods vary by plan. Starter includes 30 days, Professional includes 90 days, and Enterprise
                                offers custom retention policies. All data is encrypted at rest and in transit, with backups maintained according to your plan.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="max-w-4xl mx-auto mt-20">
                    <div className="bg-linear-to-r from-slate-800 to-slate-800/50 border border-slate-700 rounded-lg p-10 text-center">
                        <h2 className="text-2xl font-semibold text-white mb-3">Need a Custom Solution?</h2>
                        <p className="text-slate-400 mb-6 max-w-xl mx-auto">
                            Our team can design a tailored package to meet your specific requirements, volume, and compliance needs.
                        </p>
                        <button className="px-6 py-3 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
                            Schedule a Consultation
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default PricingPage;

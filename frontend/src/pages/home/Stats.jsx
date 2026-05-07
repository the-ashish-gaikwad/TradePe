import ecosystem from '../../assets/images/ecosystem.png'

export default function Stats() {
    return (
        <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="space-y-6 lg:col-span-5">
                <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Trusted with confidence</h2>

                <article>
                    <h3 className="text-xl font-medium text-slate-900">Customer-first always</h3>
                    <p className="mt-2 text-slate-600">
                        That's why 1.6+ crore customers trust TradePe with about Rs. 6 lakh crores of equity investments, making us India&apos;s largest broker and a major contributor to daily retail exchange volumes.
                    </p>
                </article>

                <article>
                    <h3 className="text-xl font-medium text-slate-900">No spam or gimmicks</h3>
                    <p className="mt-2 text-slate-600">No gimmicks, spam, gamification, or noisy push notifications.</p>
                </article>

                <article>
                    <h3 className="text-xl font-medium text-slate-900">The TradePe universe</h3>
                    <p className="mt-2 text-slate-600">
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer services tailored to different investor needs.
                    </p>
                </article>

                <article>
                    <h3 className="text-xl font-medium text-slate-900">Do better with money</h3>
                    <p className="mt-2 text-slate-600">
                        With initiatives like Nudge and Kill Switch, we do more than facilitate transactions and actively help you make better financial decisions.
                    </p>
                </article>
            </div>

            <div className="flex justify-center lg:col-span-7">
                <img src={ecosystem} alt="TradePe ecosystem" className="w-full max-w-2xl" />
            </div>
        </section>
    )
}
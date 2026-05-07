import pricing0 from '../../assets/images/pricing0.svg'
import intradayTrades from '../../assets/images/intradayTrades.svg'

export default function Pricing() {
    return (
        <section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-4 py-10 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-5">
                <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Unbeatable pricing</h2>
                <p className="mt-3 text-slate-600">
                    We pioneered discount broking and price transparency in India. Flat fees and no hidden charges.
                </p>
                <a href="/pricing" className="mt-4 inline-block font-medium text-blue-600 hover:text-blue-700">
                    See pricing
                </a>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:col-span-7">
                <div className="flex flex-col items-center text-center">
                    <img src={pricing0} alt="Free account opening" className="h-28 w-28 object-contain" />
                    <p className="mt-3 text-xs text-slate-600">Free account opening</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <img src={pricing0} alt="Free equity delivery" className="h-28 w-28 object-contain" />
                    <p className="mt-3 text-xs text-slate-600">Free equity delivery and direct mutual funds</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <img src={intradayTrades} alt="Intraday and F&O" className="h-28 w-28 object-contain" />
                    <p className="mt-3 text-xs text-slate-600">Intraday and F&amp;O</p>
                </div>
            </div>
        </section>
    )
}
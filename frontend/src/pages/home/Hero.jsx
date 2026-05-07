import homeHero from '../../assets/images/homeHero.png'

export default function Hero() {
    return (
        <section className="mx-auto w-full max-w-6xl px-4 py-10 text-center sm:px-6 lg:px-8">
            <img
                src={homeHero}
                alt="TradePe hero"
                className="mx-auto mb-8 w-full max-w-5xl"
            />
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
                Invest in everything
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base text-slate-600 sm:text-lg">
                Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
            </p>
            <button className="mt-6 rounded-md bg-blue-600 px-8 py-3 text-sm font-medium text-white transition hover:bg-blue-700 sm:text-base">
                Sign up for free
            </button>
        </section>
    )
}
import education from '../../assets/images/education.svg'

export default function Education() {
    return (
        <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
                <img src={education} alt="Education" className="w-full max-w-xl" />
            </div>
            <div>
                <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Free and open market education</h2>
                <p className="mt-3 text-slate-600">
                    Varsity, the largest online stock market education platform in India, covers everything from basics to advanced trading.
                </p>
                <p className="mt-3 text-slate-600">
                    TradingQ&amp;A is our open community where users can ask market related questions and learn from experts and peers.
                </p>
                <a href="/support" className="mt-4 inline-block font-medium text-blue-600 hover:text-blue-700">
                    Explore education
                </a>
            </div>
        </section>
    )
}
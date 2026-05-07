import largestBroker from '../../assets/images/largestBroker.svg'
import pressLogos from '../../assets/images/pressLogos.png'

export default function Awards() {
    return (
        <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="flex justify-center">
                <img
                    src={largestBroker}
                    alt="Largest broker"
                    className="w-full max-w-md"
                />
            </div>

            <div className="text-center lg:text-left">
                <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                    Largest Stock Broker in India
                </h2>
                <p className="mt-3 text-slate-600">
                    2+ million TradePe clients contribute to over 50% of all retail order volumes in India daily by trading and investing in:
                </p>

                <div className="mt-6 grid grid-cols-1 gap-4 text-left text-sm text-slate-700 sm:grid-cols-2">
                    <ul className="space-y-2">
                        <li>Futures and Options</li>
                        <li>Commodity derivatives</li>
                        <li>Currency derivatives</li>
                    </ul>
                    <ul className="space-y-2">
                        <li>Stocks and IPOs</li>
                        <li>Direct mutual funds</li>
                        <li>Bonds and Govt. Securities</li>
                    </ul>
                </div>

                <img
                    src={pressLogos}
                    alt="Press logos"
                    className="mx-auto mt-8 w-full max-w-md lg:mx-0"
                />
            </div>
        </section>
    )
}
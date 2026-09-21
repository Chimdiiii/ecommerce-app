function Contact() {
    return (
        <div className="mx-auto max-w-5xl px-6 py-12">
            <div className="mb-10 text-center">
                <h1 className="text-4xl font-bold text-gray-900">
                    Contact Us
                </h1>

                <p className="mt-3 text-gray-500">
                    We’re here to help. Get in touch with us.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                <div className="rounded-xl border border-gray-200 p-6 text-center">
                    <h2 className="mb-2 text-lg font-semibold">
                        Email Us
                    </h2>

                    <p className="text-gray-500">
                        support@fashion.com
                    </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-6 text-center">
                    <h2 className="mb-2 text-lg font-semibold">
                        Call Us
                    </h2>

                    <p className="text-gray-500">
                        +234 800 123 4567
                    </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-6 text-center">
                    <h2 className="mb-2 text-lg font-semibold">
                        Visit Us
                    </h2>

                    <p className="text-gray-500">
                        Abuja, Nigeria
                    </p>
                </div>
            </div>

            <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-gray-200 p-6">
                <h2 className="mb-6 text-2xl font-semibold text-gray-900">
                    Send us a message
                </h2>

                <form className="space-y-5">
                    <input
                        type="text"
                        placeholder="Your name"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-purple-600"
                    />

                    <input
                        type="email"
                        placeholder="Your email"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-purple-600"
                    />

                    <textarea
                        placeholder="Your message"
                        rows={5}
                        className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-purple-600"
                    />

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-purple-700 px-4 py-3 font-medium text-white transition hover:bg-purple-800"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;


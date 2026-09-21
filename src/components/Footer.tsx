import { Link } from "react-router-dom";
import {FaApple, FaGooglePlay, FaFacebook, FaTwitter, FaInstagram,} from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-black text-white px-6 py-10 md:px-12 lg:px-20">
            {/* Newsletter and discount section */}
            <div className="mx-auto max-w-[1250px] rounded-[32px] bg-[#B197E8] px-6 py-10 text-black md:px-12 lg:px-20">
                <div className="mx-auto max-w-[900px] text-center">
                    <div className="flex items-center justify-center gap-4">
                        <h2 className="text-xl font-bold md:text-4xl">
                            Get discounts instantly
                        </h2>
                        <span className="hidden h-px w-40 bg-black md:block"></span>
                    </div>

                    <p className="mx-auto mt-8 max-w-[900px] text-base leading-8 md:text-lg">
                        To save you just have to log in to your account and look for the experiences with the green or yellow color code. On your first reservation
                         you can enjoy a{" "}
                        <strong>10% discount.</strong>
                    </p>

                    {/* Email input */}
                    <div className="mx-auto mt-12 flex max-w-[595px]  overflow-hidden rounded-full bg-white p-0.5">

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="min-w-0 flex-1 bg-transparent px-6 py-4 text-sm text-black outline-none placeholder:text-gray-500 md:text-base"
                        />

                        <button
                            type="button"
                            className="rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition hover:bg-gray-800 md:px-10 md:text-base"
                        >
                            Get started
                        </button>
                    </div>

                </div>
            </div>

            {/* Main footer */}
            <div className="mx-auto grid max-w-[1250px] grid-cols-1 gap-10 py-10 md:grid-cols-2 lg:grid-cols-4">
                {/* Newsletter */}
                <div>
                    <h3 className="text-xl font-bold">
                        Sign up for our newsletter
                    </h3>

                    <p className="mt-5 max-w-[330px] text-base leading-8 text-gray-200">
                        Don't worry, we reserve our newsletter for important news so we only send a few updates a year.
                    </p>

                    <Link
                        to="#"
                        className="mt-10 inline-flex rounded-full border border-[#B197E8] px-12 py-3 text-base font-medium text-white transition hover:bg-[#B197E8] hover:text-black"
                    >
                        Subscribe
                    </Link>
                </div>

                {/* Help and services */}
                <div>
                    <h3 className="text-xl font-bold">
                        Help and services
                    </h3>

                    <div className="mt-5 flex flex-col gap-5">
                        <Link
                            to="#"
                            className="text-base text-gray-200 transition hover:text-white"
                        >
                            How does it work
                        </Link>

                        <Link
                            to="#"
                            className="text-base text-gray-200 transition hover:text-white"
                        >
                            FAQS
                        </Link>

                        <Link
                            to="#"
                            className="text-base text-gray-200 transition hover:text-white"
                        >
                            Contact
                        </Link>
                    </div>
                </div>

                {/* To explore */}
                <div>
                    <h3 className="text-xl font-bold">
                        To explore
                    </h3>

                    <div className="mt-5 flex flex-col gap-5">
                        <Link
                            to="#"
                            className="text-base text-gray-200 transition hover:text-white"
                        >
                            Accommodations
                        </Link>

                        <Link
                            to="#"
                            className="text-base text-gray-200 transition hover:text-white"
                        >
                            Experiences
                        </Link>

                        <Link
                            to="#"
                            className="text-base text-gray-200 transition hover:text-white"
                        >
                            Blog
                        </Link>
                    </div>
                </div>

                {/* Other possibilities */}
                <div>
                    <h3 className="text-xl font-bold">
                        Other possibilities
                    </h3>

                    <div className="mt-5 flex flex-col gap-5">
                        <Link
                            to="#"
                            className="text-base text-gray-200 transition hover:text-white"
                        >
                            Give away
                        </Link>

                        <Link
                            to="#"
                            className="text-base text-gray-200 transition hover:text-white"
                        >
                            Subscribe
                        </Link>
                    </div>

                    {/* App badges */}
                    <div className="mt-12 flex flex-wrap gap-5">

                        <Link
                            to="#"
                            className="flex h-12 items-center gap-2 rounded-full border border-gray-500 px-4 transition hover:border-white"
                        >
                            <FaApple className="text-2xl" />

                            <div className="leading-none">
                                <span className="block text-[9px]">
                                    Download on the
                                </span>
                                <span className="text-sm font-medium">
                                    App Store
                                </span>
                            </div>
                        </Link>

                        <Link
                            to="#"
                            className="flex h-12 items-center gap-2 rounded-full border border-gray-500 px-4 transition hover:border-white"
                        >
                            <FaGooglePlay className="text-xl" />

                            <div className="leading-none">
                                <span className="block text-[9px]">
                                    ANDROID APP ON
                                </span>
                                <span className="text-sm font-medium">
                                    Google play
                                </span>
                            </div>
                        </Link>

                    </div>
                </div>

            </div>

            {/* Bottom footer */}
            <div className="mx-auto flex max-w-[1250px] flex-col items-start justify-between gap-8 border-t border-gray-500 pt-5 md:flex-row md:items-center">

                <p className="text-sm text-gray-200">
                    © 2026 daniella
                </p>

                {/* Social icons */}
                <div className="flex items-center gap-8">

                    <Link
                        to="#"
                        aria-label="Facebook"
                        className="text-xl transition hover:text-[#B197E8]"
                    >
                        <FaFacebook />
                    </Link>

                    <Link
                        to="#"
                        aria-label="Twitter"
                        className="text-xl transition hover:text-[#B197E8]"
                    >
                        <FaTwitter />
                    </Link>

                    <Link
                        to="#"
                        aria-label="Instagram"
                        className="text-xl transition hover:text-[#B197E8]"
                    >
                        <FaInstagram />
                    </Link>

                </div>

            </div>

        </footer>
    );
}

export default Footer;
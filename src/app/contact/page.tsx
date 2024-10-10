import { FaFacebookF, FaViber, FaEnvelope } from "react-icons/fa";

export default function GetInTouch() {
    return (
        <div className="container mx-auto p-4 max-w-5xl">
            <h1 className="text-3xl font-bold mb-6 text-center">Get In Touch</h1>
            <p className="mb-6 text-center">
                We would love to hear from you! Please feel free to reach out to us through any of the methods below.
            </p>

            <div className="flex flex-col md:flex-row justify-around items-center mb-6">
                {/* Facebook Contact */}
                <div className="flex flex-col items-center bg-gray-400 text-gray-900 rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105">
                    <FaFacebookF className="h-24 w-24 mb-2" />
                    <h2 className="text-xl font-semibold">Facebook</h2>
                    <p className="text-center">Connect with us on Facebook for updates and community interactions!</p>
                    <a href="https://www.facebook.com/profile.php?id=61555456581920" className="text-gray-900 font-bold underline mt-2">
                        Visit Us
                    </a>
                </div>

                {/* Viber Contact */}
                <div className="flex flex-col items-center bg-gray-400 text-gray-900 rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105 mt-6 md:mt-0">
                    <FaViber className="h-24 w-24 mb-2" />
                    <h2 className="text-xl font-semibold">Viber</h2>
                    <p className="text-center">Message us on Viber for quick responses and support!</p>
                    <a href={`viber://chat?number=+959450215329`} className="text-gray-900 font-bold underline mt-2">
                        Chat Now
                    </a>
                </div>

                {/* Email Contact */}
                <div className="flex flex-col items-center bg-gray-400 text-gray-900 rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105 mt-6 md:mt-0">
                    <FaEnvelope className="h-24 w-24 mb-2" />
                    <h2 className="text-xl font-semibold">Email Us</h2>
                    <p className="text-center">For inquiries, feel free to send us an email!</p>
                    <a href="mailto:bonesit2023@iiseconnect.org" className="text-gray-900 font-bold underline mt-2">
                        Send Email
                    </a>
                </div>
            </div>

            {/* Decorative Section */}
            <div className="text-center mt-8">
                <h2 className="text-2xl font-bold mb-4">Stay Connected!</h2>
                <p>
                    Your feedback and questions are important to us. Join our community and help us make a difference!
                </p>
                <p className="mt-4 italic">Together, we can empower the visually impaired community.</p>
            </div>
        </div>
    );
}

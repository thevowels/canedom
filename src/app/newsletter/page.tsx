export default function Newsletter() {
    return (
        <div className="container mx-auto p-4 max-w-5xl">
            <h1 className="text-3xl font-bold text-center mb-6">Newsletter</h1>
            <p className="text-center mb-6">
                Stay updated with our latest news, programs, and events. Download our newsletter below!
            </p>

            {/* Download Section */}
            <div className="flex flex-col items-center bg-gray-200 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Download Our Latest Newsletter</h2>
                <p className="mb-4">
                    Our newsletter is filled with insightful articles, updates on our programs, and stories from our community.
                </p>
                <a
                    href="/Canedom-Newsletter-2024-1.pdf" // Update with your actual PDF file path
                    className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
                    download
                >
                    Download Newsletter
                </a>
            </div>

            {/* Decorative Section */}
            <div className="mt-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Join Our Community!</h2>
                <p>
                    Subscribe to our newsletter to get the latest updates directly in your inbox.
                </p>
                <p className="mt-4 italic">Together, we can make a difference!</p>
            </div>
        </div>
    );
}

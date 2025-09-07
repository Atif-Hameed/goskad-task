import Link from "next/link";

export default function page() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white text-center px-4">
            <div>
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-xl mb-6">Oops! The page you’re looking for doesn’t exist.</p>
                <Link
                    href="/"
                    className="px-6 py-3 bg-secondary text-white rounded-lg shadow hover:bg-secondary/80 transition"
                >
                    Go back home
                </Link>
            </div>
        </div>
    );
}

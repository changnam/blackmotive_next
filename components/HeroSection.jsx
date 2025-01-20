export default function HeroSection() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-800">
        <div className="text-center">
            <h1 className="text-4xl font-bold text-white">
            Welcome to <span className="text-blue-400">Next.js</span>
            </h1>
            <p className="text-lg text-white mt-4">
            Get started by editing{" "}
            <code className="bg-gray-900 text-white p-1 rounded-md">
                pages/index.js
            </code>
            </p>
            <Link href="/product">
        </div>
        </div>
    );
    }
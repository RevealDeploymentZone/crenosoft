import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-black text-indigo-600 mb-4">404</div>
        <h1 className="text-3xl font-bold mb-4">Page not found</h1>
        <p className="text-gray-400 mb-8">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <Link href="/" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-indigo-500 transition-colors">
          Go back home <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}

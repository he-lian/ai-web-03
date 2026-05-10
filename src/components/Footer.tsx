import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-green-400" />
            <span className="text-xl font-bold">Simple Sustainable Living</span>
          </div>
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} Simple Sustainable Living. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-green-600" />
            <span className="text-xl font-bold text-gray-800">Simple Sustainable Living</span>
          </Link>
          <div className="flex items-center gap-8">
            <Link to="/" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

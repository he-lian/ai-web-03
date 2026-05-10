import { Link } from 'react-router-dom';
import { ArrowLeft, Leaf, Zap, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-600 mb-8 hover:text-green-600 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <Leaf className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              About Simple Sustainable Living
            </h1>
            <p className="text-xl text-gray-600">
              Your guide to practical, affordable eco-friendly living.
            </p>
          </div>

          <div className="prose prose-lg max-w-none mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-8">
              Simple Sustainable Living was created to make eco-friendly living accessible to everyone. We believe that small, consistent actions can add up to make a big difference for our planet.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <Leaf className="w-10 h-10 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">Reduce Waste</h3>
                <p className="text-gray-600">Practical tips to minimize your environmental impact</p>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6 text-center">
                <Zap className="w-10 h-10 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">Save Money</h3>
                <p className="text-gray-600">Eco-friendly choices that also benefit your wallet</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <Heart className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">Simple Changes</h3>
                <p className="text-gray-600">Easy to implement, sustainable lifestyle</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              What We Cover
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <span>Zero waste living and plastic reduction</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <span>Energy and water conservation</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <span>Sustainable food and gardening</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <span>Eco-friendly home and cleaning products</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <span>Green transportation options</span>
              </li>
            </ul>

            <div className="mt-12 pt-8 border-t text-center">
              <p className="text-gray-600 mb-6">
                Ready to start your sustainable journey?
              </p>
              <Link 
                to="/"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-colors"
              >
                Explore Our Articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

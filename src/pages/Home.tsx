import { Link } from 'react-router-dom';
import { ArrowRight, Leaf } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';
import CategoryCard from '../components/CategoryCard';
import { articles, categories } from '../content/data';

export default function Home() {
  const featuredArticles = articles.filter(a => a.featured);
  const latestArticles = [...articles].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Leaf className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Simple Sustainable Living
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Practical, easy-to-follow tips for eco-friendly living. Reduce waste, save money, and make a positive impact on our planet.
            </p>
            <Link 
              to="#articles"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-colors"
            >
              Explore Articles
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section id="articles" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredArticles.map(article => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Explore by Category
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map(article => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

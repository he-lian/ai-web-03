import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';
import { articles, categories } from '../content/data';

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const categoryInfo = categories.find(c => c.id === category);
  const categoryArticles = articles.filter(a => a.category === category);

  if (!categoryInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Category Not Found</h2>
          <Link to="/" className="text-green-600 hover:text-green-700 font-semibold">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-600 mb-8 hover:text-green-600 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {categoryInfo.name}
        </h1>
        <p className="text-gray-600 mb-12 text-lg">
          Explore all our articles about {categoryInfo.name.toLowerCase()}
        </p>

        {categoryArticles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryArticles.map(article => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No articles in this category yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

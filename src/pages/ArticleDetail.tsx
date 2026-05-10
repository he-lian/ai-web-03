import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Calendar, ArrowLeft, Share2 } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';
import { articles } from '../content/data';

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h2>
          <Link to="/" className="text-green-600 hover:text-green-700 font-semibold">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = articles
    .filter(a => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Banner */}
      <div className="relative h-96">
        <img 
          src={article.thumbnail} 
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-white mb-6 hover:text-green-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Articles</span>
        </Link>

        {/* Article Card */}
        <article className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-2 text-gray-500 mb-4">
            <Calendar className="w-4 h-4" />
            <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            {article.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            {article.description}
          </p>

          {/* Google Ads Placeholder */}
          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-8">
            <p className="text-gray-500">Google AdSense Banner</p>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-green-600">
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>

          {/* Share Button */}
          <div className="mt-12 pt-8 border-t">
            <button className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
              <Share2 className="w-5 h-5" />
              <span>Share this article</span>
            </button>
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map(a => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

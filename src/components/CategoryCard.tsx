import { Link } from 'react-router-dom';
import { Category } from '../types/article';
import * as Icons from 'lucide-react';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const IconComponent = (Icons as any)[category.icon] || Icons.Leaf;

  return (
    <Link 
      to={`/category/${category.id}`}
      className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center"
    >
      <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
        <IconComponent className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors">
        {category.name}
      </h3>
    </Link>
  );
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  thumbnail: string;
  featured: boolean;
  content: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

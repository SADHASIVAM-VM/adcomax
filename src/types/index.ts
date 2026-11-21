export interface CategoryItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  href?: string;
  filterCategory?: string;
}

export interface ProductItem {
  id: string;
  name?: string;
  title?: string;
  category: string;
  description: string;
  symbol?: string;
  image?: string;
  imageSource?: string;
  sourcePage?: number;
}

export interface IndustryItem {
  id: string;
  num: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  symbol: string;
  title: string;
  description: string;
}

export interface StatItem {
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

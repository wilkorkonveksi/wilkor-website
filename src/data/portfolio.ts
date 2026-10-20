import portfolioData from './portfolio.json';

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: "kemeja" | "polo" | "kaos" | "jaket" | "wearpack";
  categoryLabel: string;
  material: string;
  quantity: string;
  year: string;
  image: string;
  description: string;
  featured: boolean; // Shown on homepage preview
}

const rawList = Array.isArray(portfolioData)
  ? portfolioData
  : (portfolioData as { items: PortfolioItem[] }).items;

export const portfolioItems: PortfolioItem[] = (rawList || []) as PortfolioItem[];

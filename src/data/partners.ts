import partnersData from './partners.json';

export interface PartnerItem {
  title: string;
  slug: string;
  sector: string;
  logo: string;
}

interface RawPartnerItem {
  title?: string;
  name?: string;
  slug?: string;
  id?: string;
  sector?: string;
  industry?: string;
  logo: string;
}

const rawList = Array.isArray(partnersData)
  ? (partnersData as RawPartnerItem[])
  : ((partnersData as { items: RawPartnerItem[] }).items || []);

export const partners: PartnerItem[] = rawList.map((item) => ({
  title: item.title || item.name || '',
  slug: item.slug || item.id || '',
  sector: item.sector || item.industry || '',
  logo: item.logo || '',
}));

// Split into 2 balanced rows for the 2-row infinite marquee
const midpoint = Math.ceil(partners.length / 2);
export const partnerRow1: PartnerItem[] = partners.slice(0, midpoint);
export const partnerRow2: PartnerItem[] = partners.slice(midpoint);

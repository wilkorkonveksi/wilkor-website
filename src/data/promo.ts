import promoData from './promo.json';

export interface PromoConfig {
  active: boolean;
  badge: string;
  title: string;
  description: string;
  perks: string[];
  ctaText: string;
  whatsappMessage: string;
  secondaryText: string;
}

export const promoConfig: PromoConfig = promoData as PromoConfig;

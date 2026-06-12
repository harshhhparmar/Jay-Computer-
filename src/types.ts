import { ReactNode } from 'react';

export interface Service {
  id: string;
  categoryEn: string;
  categoryGu: string;
  titleEn: string;
  titleGu: string;
  iconName: string;
  descriptionEn: string;
  descriptionGu: string;
  documentsEn: string[];
  documentsGu: string[];
  popular?: boolean;
}

export interface SiteConfig {
  shopName: string;
  taglineEn: string;
  taglineGu: string;
  phone: string;
  whatsapp: string;
  email: string;
  addressEn: string;
  addressGu: string;
  mapLink: string;
  workingHoursEn: string;
  workingHoursGu: string;
  aboutTextEn: string;
  aboutTextGu: string;
}

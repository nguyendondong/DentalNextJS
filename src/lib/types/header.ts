export interface HeaderResponse {
  siteInfo: HeaderSiteInfo;
  hero: HeroData;
}

export interface HeaderSiteInfo {
  logo: string;
  title: string;
  shortTitle: string;
}

export interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
  cta: {
    link: string;
    text: string;
  };
}

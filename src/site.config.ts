export interface SiteConfig {
  company: {
    name: string;
    phone: string;
    email: string;
    address: string;
    industry: string;
  };
  meta: {
    title: string;
    description: string;
  };
}

export const site: SiteConfig = {
  company: {
    name: 'Lørenskog Tannlegesenter',
    phone: '+47 67 90 40 90',
    email: 'kontakt@lorenskogtannlege.no',
    address: 'Skårersletta 10, 1473 Lørenskog',
    industry: 'tannlege',
  },
  meta: {
    title: 'Lørenskog Tannlegesenter — Akutt hjelp, kort ventetid, kveldsbehandling',
    description:
      'Lørenskog Tannlegesenter tilbyr akutt tannbehandling samme dag, kvelds- og helgetimer, og smertefri behandling for pasienter med tannlegeskrekk.',
  },
};

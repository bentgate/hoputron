export type Hop = {
  id: number;
  name: string;
  alphaAcidMin?: number;
  alphaAcidMax?: number;
  betaAcidMin?: number;
  betaAcidMax?: number;
  coHumuloneMin?: number;
  coHumuloneMax?: number;
  totalOilMin?: number;
  totalOilMax?: number;
  description: string;
  aromaProfile: string[];
  producer?: string;
  origin: string;
  bestPairedWith: Hop[];
  replaceWith: Hop[];
  styles: string[];
};

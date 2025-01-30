
export type Hop = {
  id: number;
  name: string;
  alphaAcid: string;
  betaAcid?: string;
  description?: string;
  aromaFlavor?: string[];
  producer: string;
  origin?: string;
  bestPairedWith?: string[];
  replaceWith?: string[];
  beerStyle?: string[];
}

export interface BaseToken {
  address: string;
  name: string;
  symbol: string;
}

export interface quoteToken {
  address: string;
  name: string;
  symbol: string;
}

export interface BuySells {
  buys: number;
  sells: number;
}

interface Txns {
  m5: BuySells;
  h1: BuySells;
  h6: BuySells;
  h24: BuySells;
}

interface Volume {
  m5: number;
  h1: number;
  h6: number;
  h24: number;
}

interface PriceChange {
  m5: number;
  h1: number;
  h6: number;
  h24: number;
}

interface liquidity {
  usd: number;
  base: number;
  quote: number;
}

interface Website {
  label: string;
  url: string;
}

interface Social {
  type: string;
  url: string;
}

export interface TokenInfo {
  imageUrl: string;
  header: string;
  openGraph: string;
  websites: Website[];
  socials: Social[];
}

export interface TokenDetails {
  chainId: string;
  dexId: string;
  url: string;
  pairAddress: string;
  labels: string[];
  baseToken: BaseToken;
  quoteToken: quoteToken;
  priceNative: string;
  priceUsd: string;
  txns: Txns;
  volume: Volume;
  priceChange: PriceChange;
  liquidity: liquidity;
  fdv: number;
  marketCap: number;
  pairCreatedAt: string;
  info: TokenInfo;
}

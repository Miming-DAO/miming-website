/* eslint-disable @next/next/no-img-element */
type CoinType = "miming" | "sol";

export function Coin({ type }: { type: CoinType }) {
  return type == "miming" ? (
    <img
      alt="miming coin icon"
      src="/images/miming-icon.webp"
      className="size-5 inline"
    />
  ) : type == "sol" ? (
    <img
      alt="solana icon"
      src="/images/solana-icon.png"
      className="size-5 inline"
    />
  ) : (
    ""
  );
}

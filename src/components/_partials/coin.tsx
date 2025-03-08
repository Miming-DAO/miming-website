type CoinType = "miming" | "sol";

export function Coin({ type }: { type: CoinType }) {
  return type == "miming" ? (
    <img src="/images/miming-icon.webp" className="size-5 inline" />
  ) : type == "sol" ? (
    <img src="/images/solana-icon.png" className="size-5 inline" />
  ) : (
    ""
  );
}

/* eslint-disable @next/next/no-img-element */

export function SolanaAddress() {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:gap-2 justify-center">
      <img
        src="/images/solana-logo.webp"
        className="h-4 hidden sm:block"
        alt="solana logo"
      />
      <p>Solana CA:</p>
      <p>
        <small>2xEdQfv8sZWNRGwm3pT6YM5SVbS5UgdMkfSx29VUC9Dt</small>
      </p>
    </div>
  );
}

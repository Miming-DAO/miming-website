/* eslint-disable @next/next/no-img-element */

import { SolanaAddress } from "./_partials/solana-address";
import { Socials } from "./navigations/socials";

export function Footer() {
  return (
    <div className="container mx-auto bg-black">
      <div className="py-16 px-4 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center justify-center sm:justify-start">
          <img
            alt="miming logo"
            src="/images/miming-logo.png"
            className="size-28 sm:size-32"
          />
          <span className="text-[3em] font-bold text-darumadrop text-[#e50f72]">
            $MIMING
          </span>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <SolanaAddress />
          <Socials />
        </div>
      </div>
    </div>
  );
}

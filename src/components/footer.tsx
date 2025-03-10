/* eslint-disable @next/next/no-img-element */

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
          <div className="flex flex-col sm:flex-row items-center sm:gap-2 justify-center">
            <img
              alt="solana logo"
              src="/images/solana-logo.webp"
              className="h-4"
            />
            <p>Solana CA:</p>
            <p>
              <small>2xEdQfv8sZWNRGwm3pT6YM5SVbS5UgdMkfSx29VUC9Dt</small>
            </p>
          </div>
          <Socials />
        </div>
      </div>
    </div>
  );
}

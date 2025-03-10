/* eslint-disable @next/next/no-img-element */

import { Socials } from "../navigations/socials";

export function HomeSection() {
  return (
    <section className="min-h-screen pt-52 flex flex-col justify-end p-20 sm:p-10">
      <div
        style={{ backgroundImage: "url('/images/miming-bg-1.png')" }}
        className="-z-10 opacity-75 absolute w-screen h-screen z-10 bg-black left-0 top-0 min-h-screen bg-no-repeat bg-cover bg-center flex flex-col justify-end p-20 sm:p-10"
      ></div>
      {/* <div className="absolute w-screen h-screen z-10 bg-black left-0 top-0"></div> */}
      <div className="container mx-auto px-4 z-10">
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
        <Socials />
      </div>
    </section>
  );
}

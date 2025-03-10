import { SolanaAddress } from "../_partials/solana-address";
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
        <SolanaAddress />
        <Socials />
      </div>
    </section>
  );
}

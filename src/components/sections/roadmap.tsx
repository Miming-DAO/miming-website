export function RoadmapSection() {
  return (
    <section
      id="roadmap"
      style={{ backgroundImage: "url('/images/miming-bg-2.png')" }}
      className="min-h-screen bg-no-repeat bg-cover bg-center py-20"
    >
      <div className="hidden lg:block w-2 rounded bg-[#6099b4] absolute left-4 lg:left-1/2 transform -translate-x-1/2 h-full lg:h-[80%]"></div>
      <div className="container mx-auto px-4">
        <h2 className="text-[2.3em] lg:text-[3em] mb-4 lg:mb-6 text-accent ml-4 lg:ml-0">
          Roadmap
        </h2>
        <div className="flex">
          <div className="lg:hidden w-2 rounded bg-[#6099b4] h-[600px] sm:h-[400px] -mr-1   "></div>
          <div className="flex flex-1 flex-col gap-2">
            <div className="flex items-center">
              <div className="flex-1 flex items-center gap-2 lg:flex-row-reverse">
                <div className="h-2 rounded flex-1 bg-[#6099b4] min-w-6"></div>
                <div className="bg-[#5c0f74] rounded-lg flex items-center justify-center w-32">
                  <img src="/images/miming-cat.png" className="w-20" alt="" />
                </div>
                <div className="w-full lg:w-[350px]">
                  <h3 className="text-lg">Phase 1: Journey Begins</h3>
                  <p className="text-sm">
                    MIMING sets off on its journey, launching its token on
                    Solana and establishing its first camp in Xode, where the
                    initial infrastructure is built to prepare for the great
                    bridge.
                  </p>
                </div>
              </div>
              <div className="flex-1 hidden lg:block"></div>
            </div>

            <div className="flex items-center lg:flex-row-reverse">
              <div className="flex-1 flex items-center gap-2">
                <div className="h-2 rounded flex-1 bg-[#6099b4] min-w-6"></div>
                <div className="bg-[#5c0f74] rounded-lg flex items-center justify-center w-32">
                  <img
                    src="/images/miming-stairs.png"
                    className="h-20 object-cover"
                    alt=""
                  />
                </div>
                <div className="w-full lg:w-[350px]">
                  <h3 className="text-lg">Phase 2: The Bridge</h3>
                  <p className="text-sm">
                    With a leap of faith, MIMING constructs the bridge between
                    Solana and Xode, carefully linking the two realms and
                    enabling seamless token teleportation.
                  </p>
                </div>
              </div>
              <div className="flex-1 hidden lg:block"></div>
            </div>

            <div className="flex items-center">
              <div className="flex-1 flex items-center gap-2 lg:flex-row-reverse">
                <div className="h-2 rounded flex-1 bg-[#6099b4] min-w-6"></div>
                <div className="bg-[#5c0f74] rounded-lg flex items-center justify-center w-32">
                  <img
                    src="/images/miming-transparent.png"
                    className="h-20 object-cover"
                    alt=""
                  />
                </div>
                <div className="w-full lg:w-[350px]">
                  <h3 className="text-lg">Phase 3: The Crossing</h3>
                  <p className="text-sm">
                    MIMING ventures deeper into the Polkadot jungle, opening XCM
                    channels between Xode and the broader Polkadot ecosystem,
                    making new allies and forging greater connectivity.
                  </p>
                </div>
              </div>
              <div className="flex-1 hidden lg:block"></div>
            </div>

            <div className="flex items-center lg:flex-row-reverse">
              <div className="flex-1 flex items-center gap-2">
                <div className="h-2 rounded flex-1 bg-[#6099b4] min-w-6 min-w-6"></div>
                <div className="bg-[#5c0f74] rounded-lg flex items-center justify-center w-32">
                  <img src="/images/miming-logo.png" className="w-20" alt="" />
                </div>
                <div className="w-full lg:w-[350px]">
                  <h3 className="text-lg">Phase 4: Synergy</h3>
                  <p className="text-sm">
                    With newfound wisdom and experience, MIMING expands its
                    bridge beyond Polkadot, connecting Xode’s parachain with
                    Kusama’s parachain, ensuring an even broader network for
                    cross-chain liquidity and adventures beyond.
                  </p>
                </div>
              </div>
              <div className="flex-1 hidden lg:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

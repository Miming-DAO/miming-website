export function UtilitySection() {
  return (
    <section
      id="utility"
      className="min-h-screen bg-gradient-to-r from-[#6a014a] to-[#6a014a]"
    >
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-[2.3em] sm:text-[3em] mb-4 sm:mb-6 text-accent">
          Utility
        </h2>
        <div className="flex flex-col sm:flex-row gap-8 text-lg">
          <div className="flex-1">
            <p>
              MIMING is not just a meme token; it is a functional bridge between
              Solana and Xode. Its primary utility lies in:
            </p>
            <br />
            <p>Cross-Chain Teleportation</p>
            <br />
            <p>
              Users can move tokens between Solana and Xode seamlessly using
              Rust-based smart contracts. This is enabled through Solana’s
              Wormhole and Polkadot’s XCM (Cross-Consensus Messaging) Protocol,
              allowing secure and efficient asset transfers between chains.
              Wormhole provides the interoperability layer for Solana, while XCM
              ensures seamless communication within the Polkadot ecosystem,
              including Xode.
            </p>
            <br />
            <p>Liquidity Enhancement</p>
            <br />
            <p>
              MIMING fosters a more liquid and interconnected market by allowing
              assets to move freely between ecosystems. Solana is a leader in
              high-speed, low-cost decentralized finance (DeFi), offering deep
              liquidity pools, decentralized exchanges (DEXs), and lending
              platforms. Polkadot, through its parachain model and XCM,
              facilitates secure cross-chain transactions, enabling new
              financial instruments such as cross-chain yield farming,
              multi-chain staking, and interoperable synthetic assets. By
              leveraging both ecosystems, MIMING enables seamless liquidity
              aggregation, reducing fragmentation and maximizing capital
              efficiency.
            </p>
          </div>
          {/* Image Container */}
          <div className="w-full sm:w-2/5 relative flex justify-center items-center">
            <div className="relative w-full max-w-xs sm:max-w-none">
              <img
                src="/images/laptop-img.png"
                alt="Laptop"
                className="relative w-full"
              />
              <img
                src="/images/miming-cat.png"
                alt="Miming Cat"
                className="absolute w-[50%] left-1/2 top-1/2"
                style={{ transform: "translateX(-60%) translateY(-65%)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

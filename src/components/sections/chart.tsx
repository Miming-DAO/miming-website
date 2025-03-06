import { StockChart } from "../charts/stock-chart";

export function ChartSection() {
  return (
    <div className="bg-gradient-to-r from-[#001036] to-[#8a0439]">
      <div className="py-20 px-4">
        <h2 className="text-[2.3em] sm:text-[3em] mb-4 sm:mb-6 text-accent">
          Chart
        </h2>
        <div className="flex gap-4">
          <div className="p-8 rounded-lg bg-[#ffffff30] flex-1">
            <StockChart />
          </div>
          <div className="p-8 rounded-lg bg-[#ffffff30] w-1/4">
            <h4 className="font-bold text-xl mb-4">Swap</h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            laudantium illum autem molestias dolorem eos maxime quas numquam
            nemo perferendis, sed, minima repudiandae sapiente facilis quisquam,
            illo architecto consequuntur suscipit?
          </div>
        </div>
      </div>
    </div>
  );
}

import { MainNav } from "./navigations/mainnav";

export function Header() {
  return (
    <div className="absolute w-full z-20">
      <div className="container mx-auto pt-16 px-4 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center justify-center sm:justify-start">
          <img src="/images/miming-logo.png" className="size-28 sm:size-32" />
          <span className="text-[3em] font-bold text-[#e50f72] text-darumadrop font-bold">
            $MIMING
          </span>
        </div>
        <MainNav />
      </div>
    </div>
  );
}

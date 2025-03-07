"use client";

import { useEffect, useMemo, useState } from "react";
import { StockChart } from "../charts/stock-chart";
import { BuySells, TokenDetails } from "@/models/token-details.model";
import { getLatestTokenDetails } from "@/services/dexscreener.service";

export function ChartSection() {
  const [tokenDetails, setTokenDetails] = useState<TokenDetails | null>(null);
  const [activeTab, setActiveTab] = useState<string>("h1");
  const [activeTxns, setActiveTxns] = useState<BuySells | null>(null);
  const [activeVolume, setActiveVolume] = useState<number | null>(null);

  useEffect(() => {
    getLatestTokenDetails()
      .then((data) => {
        if (data && data.length) {
          setTokenDetails(data[0]);
          setActiveTxns(data[0].txns.h1);
          setActiveVolume(data[0].volume.h1);
        }
      })
      .catch(() => {});
  }, []);

  const handleFilterM5 = () => {
    setActiveTab("m5");
    if (tokenDetails?.txns.m5) {
      setActiveTxns(tokenDetails?.txns.m5);
    }
    if (tokenDetails?.volume.m5) {
      setActiveVolume(tokenDetails?.volume.m5);
    }
  };

  const handleFilterH1 = () => {
    setActiveTab("h1");
    if (tokenDetails?.txns.h1) {
      setActiveTxns(tokenDetails?.txns.h1);
    }
    if (tokenDetails?.volume.h1) {
      setActiveVolume(tokenDetails?.volume.h1);
    }
  };

  const handleFilterH6 = () => {
    setActiveTab("h6");
    if (tokenDetails?.txns.h6) {
      setActiveTxns(tokenDetails?.txns.h6);
    }
    if (tokenDetails?.volume.h6) {
      setActiveVolume(tokenDetails?.volume.h6);
    }
  };

  const handleFilterH24 = () => {
    setActiveTab("h24");
    if (tokenDetails?.txns.h24) {
      setActiveTxns(tokenDetails?.txns.h24);
    }
    if (tokenDetails?.volume.h24) {
      setActiveVolume(tokenDetails?.volume.h1);
    }
  };

  const txnPercentages = useMemo(() => {
    if (!activeTxns) return { buyPercentage: 0, sellPercentage: 0 };

    const total = activeTxns.buys + activeTxns.sells;
    if (total === 0) return { buyPercentage: 0, sellPercentage: 0 };

    return {
      buyPercentage: (activeTxns.buys / total) * 100,
      sellPercentage: (activeTxns.sells / total) * 100,
    };
  }, [activeTxns]);

  return (
    <div className="bg-gradient-to-r from-[#001036] to-[#8a0439]">
      <div className="py-20 px-4">
        <h2 className="text-[2.3em] sm:text-[3em] mb-4 sm:mb-6 text-accent">
          Chart
        </h2>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="p-4 rounded-lg bg-[#ffffff30] flex flex-col items-center flex-1">
              <span className="text-sm font-bold opacity-50">PRICE USD</span>
              <p className="font-bold text-xl">${tokenDetails?.priceUsd}</p>
            </div>
            <div className="p-4 rounded-lg bg-[#ffffff30] flex flex-col items-center flex-1">
              <span className="text-sm font-bold opacity-50">PRICE</span>
              <p className="font-bold text-xl">
                {tokenDetails?.priceNative} SOL
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[#ffffff30] flex flex-col items-center flex-1">
              <span className="text-sm font-bold opacity-50">LIQUIDITY</span>
              <p className="font-bold text-xl">
                ${tokenDetails?.liquidity.usd}
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[#ffffff30] flex flex-col items-center flex-1">
              <span className="text-sm font-bold opacity-50">FDV</span>
              <p className="font-bold text-xl">${tokenDetails?.fdv}</p>
            </div>
            <div className="p-4 rounded-lg bg-[#ffffff30] flex flex-col items-center flex-1">
              <span className="text-sm font-bold opacity-50">MARKET CAP</span>
              <p className="font-bold text-xl">${tokenDetails?.marketCap}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="p-8 rounded-lg bg-[#ffffff30] flex-1">
              <StockChart />
            </div>
            <div className="flex flex-col gap-4 w-1/4">
              <div className="p-4 rounded-lg bg-[#ffffff30]">
                <div className="border border-[#ffffff66] rounded-lg overflow-hidden">
                  <ul className="flex border-b border-[#ffffff66]">
                    <li
                      className={`w-1/4 text-center border-r border-[#ffffff66] p-2 ${
                        activeTab == "m5" && "bg-[#ffffff36]"
                      }`}
                    >
                      <button
                        onClick={() => handleFilterM5()}
                        className="flex flex-col font-bold w-full h-full justify-center items-center"
                      >
                        <span className="text-sm opacity-50">5M</span>
                        {tokenDetails?.priceChange.m5
                          ? tokenDetails?.priceChange.m5.toString() + "%"
                          : "N/A"}
                      </button>
                    </li>
                    <li
                      className={`w-1/4 text-center border-r border-[#ffffff66] p-2 ${
                        activeTab == "h1" && "bg-[#ffffff36]"
                      }`}
                    >
                      <button
                        onClick={() => handleFilterH1()}
                        className="flex flex-col font-bold w-full h-full justify-center items-center"
                      >
                        <span className="text-sm opacity-50">1H</span>
                        <span className="text-md">
                          {tokenDetails?.priceChange.h1
                            ? tokenDetails?.priceChange.h1.toString() + "%"
                            : "N/A"}
                        </span>
                      </button>
                    </li>
                    <li
                      className={`w-1/4 text-center border-r border-[#ffffff66] p-2 ${
                        activeTab == "h6" && "bg-[#ffffff36]"
                      }`}
                    >
                      <button
                        onClick={() => handleFilterH6()}
                        className="flex flex-col font-bold w-full h-full justify-center items-center"
                      >
                        <span className="text-sm opacity-50">6H</span>
                        <span className="text-md">
                          {tokenDetails?.priceChange.h6
                            ? tokenDetails?.priceChange.h6.toString() + "%"
                            : "N/A"}
                        </span>
                      </button>
                    </li>
                    <li
                      className={`flex-1 text-center p-4 ${
                        activeTab == "h24" && "bg-[#ffffff36]"
                      }`}
                    >
                      <button
                        onClick={() => handleFilterH24()}
                        className="flex flex-col font-bold w-full h-full justify-center items-center"
                      >
                        <span className="text-sm opacity-50">24H</span>
                        <span className="text-md">
                          {tokenDetails?.priceChange.h24
                            ? tokenDetails?.priceChange.h24.toString() + "%"
                            : "N/A"}
                        </span>
                      </button>
                    </li>
                  </ul>
                  <div className="py-2">
                    <div className="flex">
                      <div className="w-1/3 px-4 border-r border-[#ffffff66] flex flex-col font-bold justify-center items-start">
                        <span className="text-xs opacity-50">TXNS</span>
                        <span>
                          {activeTxns && activeTxns?.buys + activeTxns?.sells}
                        </span>
                      </div>
                      <div className="flex-1 p-4 flex justify-between">
                        <div
                          className={`flex flex-col`}
                          style={{
                            width: `${
                              txnPercentages.buyPercentage
                                ? txnPercentages.buyPercentage
                                : "50"
                            }%`,
                          }}
                        >
                          <span className="text-xs opacity-50">BUYS</span>
                          {activeTxns?.buys}
                          <div className="bg-green-500 h-1 rounded-lg w-full"></div>
                        </div>
                        <div
                          className={`flex flex-col items-end`}
                          style={{
                            width: `${
                              txnPercentages.sellPercentage
                                ? txnPercentages.sellPercentage
                                : "50"
                            }%`,
                          }}
                        >
                          <span className="text-xs opacity-50">SELLS</span>
                          {activeTxns?.sells}
                          <div className="bg-red-500 h-1 rounded-lg w-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-1/3 px-4 border-r border-[#ffffff66] flex flex-col font-bold justify-center items-start">
                        <span className="text-xs opacity-50">VOLUME</span>
                        <span>${activeVolume && activeVolume.toString()}</span>
                      </div>
                      <div className="flex-1 p-4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-[#ffffff30] flex-1">
                <h4 className="font-bold text-xl mb-4">Swap</h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                laudantium illum autem molestias dolorem eos maxime quas numquam
                nemo perferendis, sed, minima repudiandae sapiente facilis
                quisquam, illo architecto consequuntur suscipit?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

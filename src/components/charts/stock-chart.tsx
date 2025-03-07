"use client";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5stock from "@amcharts/amcharts5/stock";
import { useEffect, useState } from "react";

export function StockChart() {
  useEffect(() => {
    let root = am5.Root.new("chartdiv");

    let stockChart = root.container.children.push(
      am5stock.StockChart.new(root, {})
    );

    let mainPanel = stockChart.panels.push(
      am5stock.StockPanel.new(root, {
        wheelY: "zoomX",
        panX: true,
        panY: true,
      })
    );

    let valueAxis = mainPanel.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    let dateAxis = mainPanel.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "minute", count: 1 }, // Adjust based on data granularity
        renderer: am5xy.AxisRendererX.new(root, {}),
      })
    );

    valueAxis
      .get("renderer")
      .labels.template.setAll({ fill: am5.color("#ffffff") });
    dateAxis
      .get("renderer")
      .labels.template.setAll({ fill: am5.color("#ffffff") });

    let candlestickSeries = mainPanel.series.push(
      am5xy.CandlestickSeries.new(root, {
        name: "SOL/USD",
        valueXField: "date",
        openValueYField: "open",
        highValueYField: "high",
        lowValueYField: "low",
        valueYField: "close",
        xAxis: dateAxis,
        yAxis: valueAxis,
        tooltip: am5.Tooltip.new(root, {
          labelText:
            "Open: {openValueY}\nHigh: {highValueY}\nLow: {lowValueY}\nClose: {valueY}",
        }),
      })
    );

    stockChart.set("stockSeries", candlestickSeries);

    let cursor = mainPanel.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);

    async function fetchData() {
      try {
        const response = await fetch(
          "https://public-api.birdeye.so/defi/history_price?address=2xEdQfv8sZWNRGwm3pT6YM5SVbS5UgdMkfSx29VUC9Dt&timeframe=1h",
          {
            headers: {
              "X-API-KEY": "5fe1b79c1a1f46a99903d45891431084", // 🔹 Replace with your actual API key
            },
          }
        );

        const data = await response.json();

        if (!data.success || !data.data || data.data.length === 0) {
          console.error("Invalid API response", data);
          return;
        }

        const chartData = data.data.map((entry: any) => ({
          date: entry.t * 1000, // Convert UNIX timestamp to milliseconds
          open: parseFloat(entry.o),
          high: parseFloat(entry.h),
          low: parseFloat(entry.l),
          close: parseFloat(entry.c),
        }));

        candlestickSeries.data.setAll(chartData);
      } catch (error) {
        console.error("Error fetching OHLCV data:", error);
      }
    }

    fetchData();

    return () => {
      root.dispose();
    };
  }, []);

  return <div id="chartdiv" className="w-full h-[600px]"></div>;
}

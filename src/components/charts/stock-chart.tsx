"use client";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5stock from "@amcharts/amcharts5/stock";
import { useEffect } from "react";

export function StockChart() {
  useEffect(() => {
    const root = am5.Root.new("chartdiv");

    const stockChart = root.container.children.push(
      am5stock.StockChart.new(root, {})
    );

    const mainPanel = stockChart.panels.push(
      am5stock.StockPanel.new(root, {
        wheelY: "zoomX",
        panX: true,
        panY: true,
      })
    );

    const valueAxis = mainPanel.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    const dateAxis = mainPanel.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "hour", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {}),
      })
    );

    valueAxis
      .get("renderer")
      .labels.template.setAll({ fill: am5.color("#ffffff") });
    dateAxis
      .get("renderer")
      .labels.template.setAll({ fill: am5.color("#ffffff") });

    const candlestickSeries = mainPanel.series.push(
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

    const cursor = mainPanel.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);

    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.geckoterminal.com/api/v2/networks/solana/pools/GiCFWE4ATRtTpYtQZv1prcitb5V9M1GdonJMLFLxLSa5/ohlcv/hour"
        );

        const json = await response.json();

        if (!json.data?.attributes?.ohlcv_list) {
          console.error("Invalid API response", json);
          return;
        }

        const chartData = json.data.attributes.ohlcv_list.map(
          ([timestamp, open, high, low, close]: [
            number,
            string,
            string,
            string,
            string
          ]) => ({
            date: timestamp * 1000, // Convert UNIX timestamp to milliseconds
            open: parseFloat(open),
            high: parseFloat(high),
            low: parseFloat(low),
            close: parseFloat(close),
          })
        );

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

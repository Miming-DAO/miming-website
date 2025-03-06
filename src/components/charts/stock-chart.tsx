"use client";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5stock from "@amcharts/amcharts5/stock";
import { useEffect } from "react";

export function StockChart() {
  useEffect(() => {
    let root = am5.Root.new("chartdiv");

    let stockChart = root.container.children.push(
      am5stock.StockChart.new(root, {})
    );

    // Create Main Panel for Candlestick Chart
    let mainPanel = stockChart.panels.push(
      am5stock.StockPanel.new(root, {
        wheelY: "zoomX",
        panX: true,
        panY: true,
      })
    );

    // Create Axes
    let valueAxis = mainPanel.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    let dateAxis = mainPanel.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "day", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {}),
      })
    );

    // ✅ **Set Labels to White**
    valueAxis
      .get("renderer")
      .labels.template.setAll({ fill: am5.color("#ffffff") });
    dateAxis
      .get("renderer")
      .labels.template.setAll({ fill: am5.color("#ffffff") });

    // 📌 **Candlestick Chart for SOL/USD**
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

    // 📊 **Generate 100+ Data Points (Rising & Falling)**
    let solanaData = [];
    let startPrice = 95;
    let volatility = 5;

    for (let i = 0; i < 100; i++) {
      let date = new Date(2024, 0, i + 1).getTime();
      let open = startPrice + (Math.random() - 0.5) * volatility;
      let high = open + Math.random() * volatility;
      let low = open - Math.random() * volatility;
      let close = low + Math.random() * (high - low);

      solanaData.push({ date, open, high, low, close });

      startPrice = close; // Continue from last close
    }

    candlestickSeries.data.setAll(solanaData);

    stockChart.set("stockSeries", candlestickSeries);

    // Add Cursor & Scrollbar for better interaction
    let cursor = mainPanel.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);

    return () => {
      root.dispose();
    };
  }, []);

  return <div id="chartdiv" className="w-full h-[600px]"></div>;
}

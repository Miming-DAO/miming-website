import { ChartHistory } from "@/models/chart-history.model";

type TimeInterval = "day" | "hour" | "minute";

export async function getChartHistoryData(
  interval: TimeInterval
): Promise<ChartHistory[] | null> {
  try {
    const response = await fetch(
      `https://api.geckoterminal.com/api/v2/networks/solana/pools/GiCFWE4ATRtTpYtQZv1prcitb5V9M1GdonJMLFLxLSa5/ohlcv/${interval}`
    );

    const json = await response.json();

    if (!json.data?.attributes?.ohlcv_list) {
      console.error("Invalid API response", json);
      return null;
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

    return chartData;
  } catch (error) {
    console.error("Error fetching chart data:", error);
    return null;
  }
}

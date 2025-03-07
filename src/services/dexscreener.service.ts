import { TokenDetails } from "@/models/token-details.model";

export async function getLatestTokenDetails(): Promise<TokenDetails[] | null> {
  try {
    const response = await fetch(
      "https://api.dexscreener.com/latest/dex/tokens/2xEdQfv8sZWNRGwm3pT6YM5SVbS5UgdMkfSx29VUC9Dt"
    );
    const data = await response.json();

    if (!data || !data.pairs) {
      console.error("Invalid API response", data);
      return null;
    }

    return data.pairs;
  } catch (error) {
    console.error("Error fetching chart data:", error);
    return null;
  }
}

import { bankLogos } from "./bankLogos";

// Your backend URL
const BASE_URL = "https://secystems-go.onrender.com";

export async function getBanks(query) {
  if (!query) return [];

  try {
    const res = await fetch(`${BASE_URL}/banks?query=${query}`);
    const json = await res.json();

    // json is directly an array of banks from your backend
    if (!Array.isArray(json)) return [];

    return json.map((bank) => ({
      name: bank.bankName,
      shortcode: bank.code, // match the code field from your backend
      logo: bankLogos[bank.bankName] || "https://example.com/logos/default.png",
    }));
  } catch (err) {
    console.error("Error fetching banks:", err);
    return [];
  }
}

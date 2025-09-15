
const BASE_URL = "https://secystems-go.onrender.com";

export async function getBanks(query) {
  if (!query) return [];

  try {
    const res = await fetch(
      `${BASE_URL}/banks?query=${encodeURIComponent(query)}`
    );

    if (!res.ok) {
      console.warn(`HTTP ${res.status} from backend`);
      return [];
    }

    const json = await res.json();

    
    if (!Array.isArray(json)) return [];

    
    return json.map((bank) => ({
      name: bank.bankName,
      shortcode: bank.code,
      logo: bank.logoUrl || "https://example.com/logos/default.png", 
    }));
  } catch (err) {
    console.error("Error fetching banks:", err);
    return [];
  }
}

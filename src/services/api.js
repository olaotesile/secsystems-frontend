// services/api.js

// Your backend URL (cleaned: removed trailing space)
const BASE_URL = "https://secystems-go.onrender.com"; // ✅ No trailing space

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

    // Ensure response is an array
    if (!Array.isArray(json)) return [];

    // Map directly — use data from backend (including logoUrl)
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

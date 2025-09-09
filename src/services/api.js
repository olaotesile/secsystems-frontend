// Hardcoded backend URL
const BASE_URL = "https://secystems-go.onrender.com";

console.log("BASE_URL:", BASE_URL);

export async function getBanks(query) {
  if (!query) return [];

  try {
    const res = await fetch(`${BASE_URL}/banks?query=${query}`);
    const json = await res.json();

    // json is already the array of banks
    return json.map((bank) => ({
      name: bank.bankName,
      shortcode: bank.code, // backend uses 'code', not 'shortcode'
      logo: bank.logo || "", // optional if you don't have logos
    }));
  } catch (err) {
    console.error("Error fetching banks:", err);
    return [];
  }
}

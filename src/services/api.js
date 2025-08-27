const BASE_URL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_BACKEND_URL
    : import.meta.env.VITE_DEV_BACKEND;

console.log("MODE:", import.meta.env.MODE);
console.log("VITE_BACKEND_URL:", import.meta.env.VITE_BACKEND_URL);
console.log("VITE_DEV_BACKEND:", import.meta.env.VITE_DEV_BACKEND);
console.log("BASE_URL:", BASE_URL);


export async function getBanks(query) {
  if (!query) return [];

  try {
    const res = await fetch(`${BASE_URL}/banks?query=${query}`);
    const json = await res.json();

    if (!json.success) return [];

    return json.data.map((bank) => ({
      name: bank.bankName,
      shortcode: bank.shortcode,
      logo: bank.logoUrl,
    }));
  } catch (err) {
    console.error("Error fetching banks:", err);
    return [];
  }
}

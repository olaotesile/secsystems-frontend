export async function getBanks(query) {
  if (!query) return [];

  try {
    const res = await fetch(`http://localhost:5000/banks?query=${query}`);
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

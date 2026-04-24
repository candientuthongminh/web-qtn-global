const API_KEY = "YOUR_API_KEY";
const BASE_ID = "YOUR_BASE_ID";

export async function getProducts() {
  const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/products`, {
    headers: { Authorization: `Bearer ${API_KEY}` }
  });
  const data = await res.json();
  return data.records.map(r => r.fields);
}

export async function getVariants() {
  const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/variants`, {
    headers: { Authorization: `Bearer ${API_KEY}` }
  });
  const data = await res.json();
  return data.records.map(r => r.fields);
}

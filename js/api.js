const API_KEY = "patkCPGH1jOAVhzPO.44327ac6121851d8a03883bc851ce6265aa5f6611c263bc787dd52fdbe3e4569";
const BASE_ID = "appukohdnwI7dAdd8";
const TABLE_NAME = "Products 2";

export async function getProducts() {
  const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`, {
    headers: { Authorization: `Bearer ${API_KEY}` }
  });

  const data = await res.json();

  return data.records.map((r, index) => {
    const f = r.fields;

    const folder = f.image_folder || "default";

    const images = [
      `images/${folder}/main.jpg`,
      `images/${folder}/1.jpg`,
      `images/${folder}/2.jpg`,
      `images/${folder}/3.jpg`
    ];

    return {
      id: index + 1,
      name: f.Name,
      category: f.category,
      slug: f.slug,
      images
    };
  });
}
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const tetunorg = await fetch(
    "https://tetun.org/static/tet-50e2b0ec0be32e9c7153f4ec20c9a96a.json"
  ).then((res) => res.json());
  const words = Object.keys(tetunorg)
    .map((entry) => {
      const [word] = entry.split("/").reverse();
      return word
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace("'", "");
    })
    .filter(
      (word) =>
        !word.includes("%20") && !word.includes("-") && word.length === 5
    );

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400"
  );
  res.status(200).json(words);
}

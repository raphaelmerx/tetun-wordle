import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // find the hash from tetun.org
  const tetunHash = await fetch("https://tetun.org/static/js/app.js")
    .then((response) => response.text())
    .then((text) => {
      const matches = text.match(/"(tet-.{32})"/);
      return matches[1];
    });
  const tetunorg = await fetch(
    `https://tetun.org/static/${tetunHash}.json`
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

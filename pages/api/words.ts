import { NextApiRequest, NextApiResponse } from "next";
import { encode } from "../../utils/codec";

const normaliseWord = (word) => {
  return word
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace("'", "");
};

const getTetunOrgWords = async () => {
  // find the hash from tetun.org
  const tetunHash = await fetch("https://tetun.org/static/js/app.js")
    .then((response) => response.text())
    .then((text) => {
      const matches = text.match(/"(tet-.{32})"/);
      return matches[1];
    });
  // get the tetun words
  const tetunorg = await fetch(
    `https://tetun.org/static/${tetunHash}.json`
  ).then((res) => res.json());
  // filter only the 5-letter words
  const words = Object.keys(tetunorg)
    .map((entry) => {
      const [word] = entry.split("/").reverse();
      return normaliseWord(word);
    })
    .filter(
      (word) =>
        !word.includes("%20") && !word.includes("-") && word.length === 5
    );
  return words;
};

const getMatadalanWords = async () => {
  const words = await fetch(
    `https://tetun.org/static/matadalan_5_letter.txt`
  ).then((res) => res.text());
  return words.split("\n").map((w) => normaliseWord(w));
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // get word list from tetun.org, from matadalan.txt
  const tetunOrgWords = await getTetunOrgWords();
  const matadalanWords = await getMatadalanWords();
  // get the intersection of the two
  const words = matadalanWords.filter((w) => tetunOrgWords.indexOf(w) > -1);

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400"
  );
  res.status(200).json(words);
}

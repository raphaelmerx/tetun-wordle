import { NextApiRequest, NextApiResponse } from "next";
import { encode } from "../../utils/codec";
import { promises as fs } from "fs";
import path from "path";

const normaliseWord = (word) => {
  return word
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace("'", "");
};

const getTetunOrgWords = async () => {
  // get the tetun words
  const tetunorg = await fetch("https://tetun.org/tet.json").then((res) =>
    res.json()
  );
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
  const filePath = path.join(process.cwd(), "pages/matadalan_5_letters.txt");
  const words = await fs.readFile(filePath, "utf-8");
  const wordsList = words.split("\n");
  wordsList.push("folin");
  return wordsList.map((w) => normaliseWord(w));
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

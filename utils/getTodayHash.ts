import { encode } from "./codec";
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

const getWords = async () => {
  // get word list from tetun.org, from matadalan.txt
  const tetunOrgWords = await getTetunOrgWords();
  const matadalanWords = await getMatadalanWords();
  // get the intersection of the two
  const words = matadalanWords.filter((w) => tetunOrgWords.indexOf(w) > -1);
  return words;
};

const getTodayHash = async () => {
  const tetunWords = await getWords();

  const dateTimor = new Date();
  dateTimor.setHours(dateTimor.getHours() + 9);
  const currentDate = dateTimor.toJSON().slice(0, 10);

  const index =
    (Number(currentDate.replace(/-/g, "")) * 311) % tetunWords.length;
  return { hash: encode(tetunWords[index]), date: currentDate };
};

export default getTodayHash;

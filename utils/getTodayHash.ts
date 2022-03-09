import { encode } from "./codec";

const getTodayHash = async () => {
  const tetunWords = await fetch(
    "https://tetun-wordle.vercel.app/api/words"
  ).then((response) => response.json());

  const dateTimor = new Date();
  dateTimor.setHours(dateTimor.getHours() + 9);
  const currentDate = dateTimor.toJSON().slice(0, 10);

  const index =
    (Number(currentDate.replace(/-/g, "")) * 311) % tetunWords.length;
  return { hash: encode(tetunWords[index]), date: currentDate };
};

export default getTodayHash;

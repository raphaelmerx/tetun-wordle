import { encode } from "./codec";

const getTodayHash = async () => {
  const response = await fetch(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/words"
      : "https://tetun-wordle.vercel.app/api/words"
  );
  const tetunWords = await response.json();

  const dateTimor = new Date();
  dateTimor.setHours(dateTimor.getHours() + 9);
  const currentDate = dateTimor.toJSON().slice(0, 10);

  const index =
    (Number(currentDate.replace(/-/g, "")) * 311) % tetunWords.length;
  return { hash: encode(tetunWords[index]), date: currentDate };
};

export default getTodayHash;

import { encode } from "./codec";

const getTodayHash = async () => {
  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_VERCEL_URL
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
        : "http://localhost:3001"
    }/api/words`
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

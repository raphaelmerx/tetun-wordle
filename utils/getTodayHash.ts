const getTodayHash = async () => {
  const hashes = await fetch("https://tetun-wordle.vercel.app/api/hash")
    .then((res) => res.json())
    .catch((error) => {
      return { hash: "d2WhZWJ1", date: "2022-01-24" };
    });
  const dateTimor = new Date();
  dateTimor.setHours(dateTimor.getHours() + 9);
  const currentDate = dateTimor.toJSON().slice(0, 10);
  const currentHash = Array.isArray(hashes)
    ? hashes.filter((h) => h.date === currentDate)[0]
    : hashes;
  return currentHash;
};

export default getTodayHash;

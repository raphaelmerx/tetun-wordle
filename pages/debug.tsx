import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import getTodayHash from "../utils/getTodayHash";

interface Props {
  hash: string;
  date: string;
}

export default function Debug(props: Props) {
  const [debugCode, setDebugCode] = useState("");
  useEffect(() => {
    const gameState = localStorage.getItem("katla:gameState");
    const gameStats = localStorage.getItem("katla:gameStats");
    const lastHash = localStorage.getItem("katla:lastHash");
    const now = new Date();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const date = now.getDate().toString().padStart(2, "0");
    const nowDate = `${now.getFullYear()}-${month}-${date}`;
    setDebugCode(
      btoa(
        [props.hash, props.date, lastHash, nowDate, gameState, gameStats].join(
          ":"
        )
      )
    );
  }, [props.hash, props.date]);

  return (
    <div className="text-white max-w-lg mx-auto mt-4">
      <h1 className="text-3xl mb-4">Debug</h1>
      {debugCode === "" ? (
        <span>Generating debug code...</span>
      ) : (
        <>
          <p className="mb-4">
            Send this code to{" "}
            <a className="text-blue-400" href="https://twitter.com/raphaelmerx">
              @raphaelmerx
            </a>{" "}
            on Twitter
          </p>
          <pre className="border border-gray-300 p-3 whitespace-pre-wrap break-all ">
            {debugCode}
          </pre>
        </>
      )}
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const { hash, date } = await getTodayHash();
    return {
      props: {
        hash: hash,
        date: date,
      },
      revalidate: 60,
    };
  } catch (error) {
    // Return empty values if file cannot be read during build
    return {
      props: {
        hash: "",
        date: "",
      },
      revalidate: 60,
    };
  }
};

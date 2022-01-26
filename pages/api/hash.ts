import { NextApiRequest, NextApiResponse } from "next";

const databaseId = "04dc0ae3bb6c4702b5f99df302b593ec";
// const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=3600"
  );
  res.status(200).json([
    { hash: "d2WhZWJ1", date: "2022-01-25" },
    { hash: "Zl:qc151", date: "2022-01-26" },
    { hash: "[lGybVx1", date: "2022-01-27" },
    { hash: "b1KobWR1", date: "2022-01-28" },
    { hash: "bmWyeGV1", date: "2022-01-29" },
    { hash: "b1:sbVt1", date: "2022-01-30" },
    { hash: "dmWxZVx1", date: "2022-01-31" },
  ]);
}

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
    { hash: "cVGrZVV1", date: "2022-02-01" },
    { hash: "cFGyZV51", date: "2022-02-02" },
    { hash: "cGWrbVt1", date: "2022-02-03" },
    { hash: "ZlGjbWV1", date: "2022-02-04" },
    { hash: "eV2gcmV1", date: "2022-02-05" },
    { hash: "eF:jZV51", date: "2022-02-06" },
    { hash: "bVe0ZVx1", date: "2022-02-07" },
    { hash: "[F:h[V51", date: "2022-02-08" },
    { hash: "cVW/bV51", date: "2022-02-09" },
    { hash: "dlGneV51", date: "2022-02-10" },
    { hash: "ZlGofFF1", date: "2022-02-11" },
    { hash: "cFWvdlF1", date: "2022-02-12" },
    { hash: "b160ZVt1", date: "2022-02-13" },
    { hash: "bl:1[V51", date: "2022-02-14" },
    { hash: "b1Wr[V51", date: "2022-02-15" },
    { hash: "ZWKuZlF1", date: "2022-02-16" },
    { hash: "bFGtZVl1", date: "2022-02-17" },
    { hash: "[GWvcFF1", date: "2022-02-18" },
    { hash: "cWWt[GV1", date: "2022-02-19" },
    { hash: "eGW/ZV51", date: "2022-02-20" },
  ]);
}

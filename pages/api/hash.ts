import { NextApiRequest, NextApiResponse } from "next";

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
    { hash: "eFGtZlF1", date: "2022-02-21" },
    { hash: "cVWoZWN1", date: "2022-02-22" },
    { hash: "[lWoeGV1", date: "2022-02-23" },
    { hash: "cVWxZVt1", date: "2022-02-24" },
    { hash: "[lm/eV51", date: "2022-02-25" },
    { hash: "eGKo[2V1", date: "2022-02-26" },
    { hash: "b1:sbVt1", date: "2022-02-27" },
    { hash: "d2WyZWJ1", date: "2022-02-28" },
    { hash: "b2WqeV51", date: "2022-03-01" },
    { hash: "[GWrZWN1", date: "2022-03-02" },
    { hash: "bFGrZV91", date: "2022-03-03" },
    { hash: "dFmrcFF1", date: "2022-03-04" },
    { hash: "eFG/eVt1", date: "2022-03-05" },
    { hash: "c2KmZV51", date: "2022-03-06" },
  ]);
}

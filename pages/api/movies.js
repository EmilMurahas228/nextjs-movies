// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { request } from "../../utils/common";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const data = await request("title/get-most-popular-movies");
      console.log(data);
      res.status(200).json({ data });
    } catch (err) {
      console.log(err.message);
    }
  }
}

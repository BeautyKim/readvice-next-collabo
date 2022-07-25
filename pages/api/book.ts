import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import data from "@/data/book.json"

type Data = {
  name: string
}

export default async(req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ name: 'John Doe' })
}
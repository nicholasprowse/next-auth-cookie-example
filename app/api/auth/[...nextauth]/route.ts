import { NextApiRequest, NextApiResponse } from "next"
import NextAuth from "next-auth"
import { headers } from "next/headers"

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log([...headers().keys()])
  return await NextAuth(req, res, { providers: [] })
}

export { handler as GET, handler as POST }
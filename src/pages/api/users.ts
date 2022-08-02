// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { UserProps } from '../../hook/useUsers'

type Data = {
  name: string
}

const usersList: UserProps[] = []

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === "POST") {
    const newUser: UserProps = req.body
  
    usersList.push(newUser)
    
    return res.status(201).send("")
  }

  if(req.method === "GET") {
    return res.json(usersList)
  }

}

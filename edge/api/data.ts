// https://turbo-turtles-edge-sooty.vercel.app/api/data 

import { kv } from '@vercel/kv'
import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(request: VercelRequest, response: VercelResponse) {

  try {
    console.log("hello")
    const users_str = await kv.get('111users') as string | undefined
    console.log({ users_str }, typeof users_str)
    const users = users_str ? users_str : []
    console.log({ users })
    const data: { name: string, steps: number, color: string }[] = []

    for (const user of users) {
      const steps = await kv.get(user) as number
      console.log(`user: ${user}, steps: ${steps}`)
      data.push({ name: user, steps, color: 'blue' })
    }

    response.status(200).json(data)

  } catch (error) {
    return response.status(400).json({ error: "error updating steps" })
  }
}

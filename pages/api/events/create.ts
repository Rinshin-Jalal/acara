import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { authMiddleware } from '@/lib/auth'

async function handler(req: NextApiRequest, res: NextApiResponse, user: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, description, banner, program_date } = req.body

  if (!name || !description || !banner || !program_date) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    const event = await prisma.event.create({
      data: {
        name,
        description,
        banner,
        program_date: new Date(program_date),
        user_id: user.id,
      },
    })

    res.status(201).json(event)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export default authMiddleware(handler)
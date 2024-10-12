import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { authMiddleware } from '@/lib/auth'

async function handler(req: NextApiRequest, res: NextApiResponse, user: any) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { id } = req.query
  const { name, description, banner, program_date } = req.body

  if (!name || !description || !banner || !program_date) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    const event = await prisma.event.findUnique({ where: { id: String(id) } })
    if (!event) {
      return res.status(404).json({ error: 'Event not found' })
    }

    if (event.user_id !== user.id && user.role !== 'ADMIN') {
      return res.status(403).json({ error: 'Forbidden' })
    }

    const updatedEvent = await prisma.event.update({
      where: { id: String(id) },
      data: {
        name,
        description,
        banner,
        program_date: new Date(program_date),
      },
    })

    res.status(200).json(updatedEvent)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export default authMiddleware(handler)
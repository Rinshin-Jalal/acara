import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { authMiddleware } from '@/lib/auth'

async function handler(req: NextApiRequest, res: NextApiResponse, user: any) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (user.role !== 'ADMIN') {
    return res.status(403).json({ error: 'Forbidden' })
  }

  const { id } = req.query

  try {
    const event = await prisma.event.findUnique({ where: { id: String(id) } })
    if (!event) {
      return res.status(404).json({ error: 'Event not found' })
    }

    await prisma.event.delete({ where: { id: String(id) } })

    res.status(204).end()
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export default authMiddleware(handler)
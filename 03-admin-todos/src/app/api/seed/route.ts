import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

  await prisma.todo.deleteMany();

  await prisma.todo.createMany({
    data: [
      { description: 'Learn Next.js', complete: true },
      { description: 'Build a Todo App', },
      { description: 'Deploy to Vercel',  },
    ],
  })


  return NextResponse.json({ message: 'seed executed' })
}
import prisma from '@/lib/prismadb'
import { NextResponse } from 'next/server'

export async function POST(request){
    const {email} = await request.json()
    if (!email) {
        return NextResponse.badRequest('Email is required')
    }
    try {
        await prisma.email.create({
            data:{
                email
            }
        })
        return NextResponse.json(email)
    } catch (error) {
        return NextResponse.badRequest(error)
    }
} 
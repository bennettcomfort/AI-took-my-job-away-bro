import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
})

export async function POST(request: NextRequest) {
  try {
    const { messages, systemPrompt } = await request.json()

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured. Please set OPENAI_API_KEY in your .env.local file.' },
        { status: 500 }
      )
    }

    // Prepend system message with character personality
    const messagesWithSystem = [
      {
        role: 'system' as const,
        content: systemPrompt || 'You are a helpful, friendly, and knowledgeable AI assistant.'
      },
      ...messages
    ]

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messagesWithSystem,
      temperature: 0.7,
      max_tokens: 1000,
    })

    const assistantMessage = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.'

    return NextResponse.json({
      message: assistantMessage,
    })
  } catch (error: any) {
    console.error('Error in chat API:', error)

    let errorMessage = 'An error occurred while processing your request.'

    if (error?.error?.type === 'invalid_request_error') {
      errorMessage = 'Invalid request to AI service. Please try again.'
    } else if (error?.status === 401) {
      errorMessage = 'Invalid API key. Please check your OPENAI_API_KEY.'
    } else if (error?.status === 429) {
      errorMessage = 'Rate limit exceeded. Please try again later.'
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: error?.status || 500 }
    )
  }
}

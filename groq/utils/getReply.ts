import { groq } from '../index'

export async function getGroqChatCompletion(message: string) {
    const reply = await groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: message
            }
        ],
        model: "llama3-8b-8192"
    })

    return reply.choices[0]?.message?.content || 'Something went wrong.'
}
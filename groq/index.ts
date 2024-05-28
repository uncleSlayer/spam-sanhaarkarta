import Groq from 'groq-sdk'
import { groqApiKey } from '../config.json'

export const groq = new Groq({
    apiKey: groqApiKey
})
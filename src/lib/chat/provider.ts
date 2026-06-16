import type { IChatProvider } from '@/types/chat'
import { LocalChatProvider } from './local'

/* ─── Active provider ───────────────────────────────────────────────────── *
 * To integrate AWS Bedrock, OpenAI, or Anthropic:
 *   1. Implement IChatProvider in a new file (e.g. lib/chat/bedrock.ts)
 *   2. Replace this import and instantiation — no component changes needed.
 * ─────────────────────────────────────────────────────────────────────── */
export const chatProvider: IChatProvider = new LocalChatProvider()

export type MessageRole = 'assistant' | 'user'

export interface NavigationSuggestion {
  label: string
  href:  string
}

export interface ChatMessage {
  id:                   string
  role:                 MessageRole
  content:              string
  timestamp:            Date
  navigationSuggestion?: NavigationSuggestion
}

export interface ChatResponse {
  content:              string
  navigationSuggestion?: NavigationSuggestion
}

/* Future providers implement this interface.
   Swap chatProvider in lib/chat/provider.ts — no component changes needed. */
export interface IChatProvider {
  sendMessage(content: string, history: ChatMessage[]): Promise<ChatResponse>
}

'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface ChatBoxProps {
  open: boolean
  onClose: () => void
}

export function ChatBox({ open, onClose }: ChatBoxProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Welcome to the Nutrition Science Assistant. Ask me anything about human biochemistry, supplementation, dietary research, or metabolic health.",
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open && inputRef.current) {
      // Focus input when modal opens
      setTimeout(() => inputRef.current?.focus(), 150)
    }
  }, [open])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function handleSend() {
    const text = input.trim()
    if (!text || loading) return

    setInput('')
    const userMessage: Message = { role: 'user', content: text }
    setMessages((prev) => [...prev, userMessage])
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.error || 'Failed to get response')

      const assistantText = data.choices?.[0]?.message?.content || 'No response'
      setMessages((prev) => [...prev, { role: 'assistant', content: assistantText }])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, I encountered an error retrieving research details. Please try again.',
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300" 
        onClick={onClose} 
      />
      <div className="relative w-full max-w-lg max-h-[80vh] bg-white rounded-3xl shadow-2xl border border-warm-border/30 flex flex-col overflow-hidden animate-scale-in">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-warm-border/35 bg-ivory shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-green/10 flex items-center justify-center">
              <MessageCircle className="h-4.5 w-4.5 text-green" />
            </div>
            <div>
              <p className="font-heading font-medium text-charcoal text-lg leading-tight">Nutrition Science Assistant</p>
              <p className="font-body text-[11px] text-stone/60">Evidence-based analysis & query module</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center text-muted hover:bg-stone/10 hover:text-charcoal transition-all duration-200"
            aria-label="Close chat"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4 scroll-smooth bg-white">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[85%] px-4.5 py-3.5 rounded-3xl font-body text-[15px] leading-relaxed shadow-sm ${
                  msg.role === 'user'
                    ? 'bg-green text-white rounded-br-md'
                    : 'bg-ivory text-charcoal rounded-bl-md border border-warm-border/30'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-ivory border border-warm-border/30 rounded-3xl rounded-bl-md px-5 py-3.5 shadow-sm">
                <div className="flex gap-1.5 py-1">
                  <span className="w-2 h-2 rounded-full bg-green/50 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-green/50 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-green/50 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Footer Input */}
        <div className="border-t border-warm-border/35 px-6 py-4 bg-white shrink-0">
          <div className="flex items-center gap-3">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your nutrition query here..."
              disabled={loading}
              className="flex-1 px-5 py-3 rounded-full border border-warm-border/50 bg-ivory text-charcoal placeholder:text-muted/65 font-body text-[15px] focus:outline-none focus:ring-1.5 focus:ring-green/50 focus:border-green/50 disabled:opacity-50 transition-all duration-200"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || loading}
              className="w-11 h-11 rounded-full bg-green text-white flex items-center justify-center hover:bg-green-hover disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 active:scale-95 shrink-0"
              aria-label="Send message"
            >
              <Send className="h-4.5 w-4.5" />
            </button>
          </div>
          <p className="font-body text-[10px] text-stone/50 mt-2.5 text-center leading-normal">
            This module provides general nutrition science information based on public literature, not clinical medical advice.
          </p>
        </div>
      </div>
    </div>
  )
}

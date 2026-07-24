'use client'

import { useState } from 'react'
import { MessageSquare } from 'lucide-react'
import { ChatBox } from './ChatBox'

export function Chat() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-charcoal hover:bg-[#2A2E28] border border-green/35 hover:border-green hover:shadow-[0_0_20px_rgba(95,134,81,0.14)] rounded-full px-5 py-2.5 flex items-center gap-2.5 cursor-pointer transition-all duration-300 active:scale-[0.98] select-none shadow-lg"
        aria-label="Open AI chat"
      >
        <MessageSquare className="h-4 w-4 text-[#E3E8DF] opacity-85" />
        <span className="font-body text-xs font-semibold tracking-widest text-[#E3E8DF] opacity-85 uppercase">
          Ask AI
        </span>
      </button>
      <ChatBox open={open} onClose={() => setOpen(false)} />
    </>
  )
}


"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"


const EXAMPLE_PROMPTS = [
  "Show me lead conversion trends",
  "Analyze recent drop-offs",
  "Optimize follow-up strategy",
  "Identify top performers"
]

export function AskEvoOrch() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    
    setMessages([...messages, { role: "user", content: input }])
    setInput("")
    // Add AI response logic here
  }


  const handlePromptClick = (prompt) => {
    setInput(prompt)
  }

  return (
    <Card className="h-[600px] flex flex-col">
       <CardContent className="flex-1 overflow-auto p-4 space-y-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {EXAMPLE_PROMPTS.map((prompt) => (
            <Button
              key={prompt}
              variant="outline"
              size="sm"
              onClick={() => handlePromptClick(prompt)}
              className="text-xs"
            >
              {prompt}
            </Button>
          ))}
        </div>
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`rounded-lg px-4 py-2 max-w-[80%] ${
              msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
      </CardContent>
      <div className="p-4 border-t">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask EvoOrch anything..."
            className="flex-1"
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </Card>
  )
}

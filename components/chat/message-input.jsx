"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Paperclip, Send, Smile } from "lucide-react"
import { EmojiPicker } from "@/components/chat/emoji-picker"
import { useToast } from "@/hooks/use-toast"

export default function MessageInput({ onSendMessage, channelId, disabled = false }) {
  const [message, setMessage] = useState("")
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const textareaRef = useRef(null)
  const { toast } = useToast()

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "0px"
      const scrollHeight = textareaRef.current.scrollHeight
      textareaRef.current.style.height = scrollHeight + "px"
    }
  }, [message])

  const handleSendMessage = () => {
    const trimmedMessage = message.trim()
    if (!trimmedMessage) return

    onSendMessage(trimmedMessage)
    setMessage("")

    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleEmojiSelect = (emoji) => {
    setMessage((prev) => prev + emoji)
    setShowEmojiPicker(false)
    textareaRef.current?.focus()
  }

  const handleFileUpload = () => {
    toast({
      description: "File upload is not implemented in this demo",
    })
  }

  return (
    <div className="p-4 border-t bg-card relative">
      <div className="flex gap-2 items-end">
        <Button variant="ghost" size="icon" className="flex-shrink-0" onClick={handleFileUpload}>
          <Paperclip className="h-5 w-5" />
        </Button>

        <div className="relative flex-1">
          <Textarea
            ref={textareaRef}
            placeholder={disabled ? "Connecting..." : "Type your message..."}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            className="min-h-[40px] max-h-[200px] resize-none pr-10"
            disabled={disabled}
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 bottom-2"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            <Smile className="h-5 w-5" />
          </Button>
        </div>

        <Button
          size="icon"
          className="flex-shrink-0"
          onClick={handleSendMessage}
          disabled={!message.trim() || disabled}
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>

      {showEmojiPicker && (
        <div className="absolute bottom-full right-0 mb-2">
          <EmojiPicker onEmojiSelect={handleEmojiSelect} onClose={() => setShowEmojiPicker(false)} />
        </div>
      )}
    </div>
  )
}

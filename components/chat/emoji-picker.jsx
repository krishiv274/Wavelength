"use client"

import { useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

// Common emoji categories
const emojis = {
  smileys: ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘"],
  gestures: ["👍", "👎", "👌", "✌️", "🤞", "🤟", "🤘", "🤙", "👈", "👉", "👆", "👇", "☝️", "✋", "🤚", "🖐️", "🖖"],
  symbols: ["❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "💔", "❣️", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟"],
  objects: ["🎮", "🎲", "🎯", "🎭", "🎨", "🎬", "🎤", "🎧", "🎸", "🎹", "🎺", "🎻", "🥁", "🎷", "📱", "💻", "⌨️"],
}

export function EmojiPicker({ onEmojiSelect, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onClose])

  return (
    <Card ref={ref} className="w-64 p-2 absolute bottom-full right-0 mb-2 z-50">
      <div className="mb-2">
        <Input placeholder="Search emojis..." className="h-8" />
      </div>

      <Tabs defaultValue="smileys">
        <TabsList className="grid grid-cols-4 h-8">
          <TabsTrigger value="smileys" className="text-lg p-0">
            😀
          </TabsTrigger>
          <TabsTrigger value="gestures" className="text-lg p-0">
            👍
          </TabsTrigger>
          <TabsTrigger value="symbols" className="text-lg p-0">
            ❤️
          </TabsTrigger>
          <TabsTrigger value="objects" className="text-lg p-0">
            🎮
          </TabsTrigger>
        </TabsList>

        {Object.entries(emojis).map(([category, categoryEmojis]) => (
          <TabsContent key={category} value={category} className="mt-2">
            <ScrollArea className="h-48">
              <div className="grid grid-cols-6 gap-1">
                {categoryEmojis.map((emoji, index) => (
                  <button
                    key={index}
                    className="h-8 w-8 flex items-center justify-center hover:bg-muted rounded"
                    onClick={() => onEmojiSelect(emoji)}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        ))}
      </Tabs>
    </Card>
  )
}

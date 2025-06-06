"use client"

import { useRef, useEffect } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import Message from "@/types/message"
import { Skeleton } from "@/components/ui/skeleton"

export default function ChatArea({ messages, currentUser, isLoading }) {
  const scrollRef = useRef(null)

  // Scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current && messages.length > 0) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages.length])

  // Group messages by date
  const groupedMessages = []

  messages.forEach((message) => {
    const date = new Date(message.createdAt).toLocaleDateString()
    const group = groupedMessages.find((g) => g.date === date)

    if (group) {
      group.messages.push(message)
    } else {
      groupedMessages.push({
        date,
        messages: [message],
      })
    }
  })

  // Group consecutive messages from the same user
  const processedGroups = groupedMessages.map((group) => {
    const processedMessages = []

    group.messages.forEach((message, index) => {
      const prevMessage = index > 0 ? group.messages[index - 1] : null
      const showHeader =
        !prevMessage ||
        prevMessage.sender.id !== message.sender.id ||
        new Date(message.createdAt).getTime() - new Date(prevMessage.createdAt).getTime() > 5 * 60 * 1000

      processedMessages.push({
        ...message,
        showHeader,
      })
    })

    return {
      ...group,
      messages: processedMessages,
    }
  })

  if (isLoading) {
    return (
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex gap-3">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[400px]" />
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    )
  }

  return (
    <ScrollArea className="flex-1 p-4">
      {processedGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="mb-6">
          <div className="flex items-center my-4">
            <div className="h-px flex-1 bg-border"></div>
            <span className="px-4 text-xs text-muted-foreground">{group.date}</span>
            <div className="h-px flex-1 bg-border"></div>
          </div>

          <div className="space-y-2">
            {group.messages.map((message) => (
              <Message
                key={message.id}
                message={message}
                isCurrentUser={message.sender.id === currentUser.id}
                showHeader={message.showHeader}
              />
            ))}
          </div>
        </div>
      ))}

      {messages.length === 0 && (
        <div className="h-full flex flex-col items-center justify-center text-center p-8">
          <div className="rounded-full bg-primary/10 p-4 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary h-8 w-8"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-medium font-heading">No messages yet</h3>
          <p className="text-muted-foreground mt-2">Be the first to send a message in this channel!</p>
        </div>
      )}

      <div ref={scrollRef} />
    </ScrollArea>
  )
}

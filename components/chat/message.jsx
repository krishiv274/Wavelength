"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Copy, MoreHorizontal, Reply, Smile, Trash } from "lucide-react"
import { formatMessageTime } from "@/lib/utils"
import { EmojiPicker } from "@/components/chat/emoji-picker"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { markdownToHtml } from "@/lib/markdown"

export default function Message({ message, isCurrentUser, showHeader = true }) {
  const [showActions, setShowActions] = useState(false)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const { toast } = useToast()

  const initials = message.sender.username
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  const formattedTime = formatMessageTime(message.createdAt)

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(message.content)
    toast({
      description: "Message copied to clipboard",
    })
  }

  const handleAddReaction = (emoji) => {
    // In a real app, you would call an API to add the reaction
    toast({
      description: `Added reaction: ${emoji}`,
    })
    setShowEmojiPicker(false)
  }

  // Convert markdown to HTML
  const contentHtml = markdownToHtml(message.content)

  return (
    <div
      className={cn(
        "group flex gap-3 py-1 px-2 hover:bg-muted/50 rounded-md -mx-2",
        showHeader ? "mt-4" : "mt-0 pl-12",
      )}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      {showHeader && (
        <Avatar className="h-8 w-8 mt-1 flex-shrink-0">
          <AvatarImage src={message.sender.avatarUrl || "/placeholder.svg?height=32&width=32"} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      )}

      <div className="flex-1 min-w-0">
        {showHeader && (
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-medium text-sm">{message.sender.username}</span>
            <span className="text-xs text-muted-foreground">{formattedTime}</span>
          </div>
        )}

        <div className="break-words">
          {message.type === "text" ? (
            <div className="markdown-content text-sm" dangerouslySetInnerHTML={{ __html: contentHtml }} />
          ) : (
            <div className="bg-muted p-3 rounded-md">
              <p className="text-sm">{message.content}</p>
            </div>
          )}

          {message.reactions && message.reactions.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1">
              {message.reactions.map((reaction, index) => (
                <div key={index} className="emoji-reaction">
                  <span>{reaction.emoji}</span>
                  <span className="ml-1">{reaction.count}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {showActions && (
        <div className="flex items-start gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setShowEmojiPicker(true)}>
                  <Smile className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add reaction</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <Reply className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Reply</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-7 w-7">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleCopyMessage}>
                <Copy className="h-4 w-4 mr-2" />
                Copy text
              </DropdownMenuItem>
              {isCurrentUser && (
                <DropdownMenuItem className="text-destructive">
                  <Trash className="h-4 w-4 mr-2" />
                  Delete message
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}

      {showEmojiPicker && <EmojiPicker onEmojiSelect={handleAddReaction} onClose={() => setShowEmojiPicker(false)} />}
    </div>
  )
}

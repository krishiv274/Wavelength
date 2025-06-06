"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, PlusCircle, LogOut, X, Hash, Lock, Settings } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function ChatSidebar({ channels, activeChannel, onChannelSelect, currentUser, isMobile, onClose }) {
  const [isCreatingChannel, setIsCreatingChannel] = useState(false)
  const [newChannelName, setNewChannelName] = useState("")
  const [newChannelDescription, setNewChannelDescription] = useState("")
  const [isPrivate, setIsPrivate] = useState(false)

  const handleCreateChannel = (e) => {
    e.preventDefault()

    // Here you'd call your API to create a new channel
    // For now we'll just close the dialog
    setIsCreatingChannel(false)
    setNewChannelName("")
    setNewChannelDescription("")
    setIsPrivate(false)
  }

  // Group channels by category
  const publicChannels = channels.filter((c) => !c.isPrivate)
  const privateChannels = channels.filter((c) => c.isPrivate)

  return (
    <>
      {isMobile && <div className="fixed inset-0 bg-background/80 z-30" onClick={onClose}></div>}

      <aside
        className={`${isMobile ? "fixed left-0 top-0 bottom-0 z-40" : ""} w-64 border-r bg-card flex flex-col h-full`}
      >
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            <h2 className="font-bold font-heading">Wavelength</h2>
          </div>
          {isMobile && (
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          )}
        </div>

        <div className="flex-1 overflow-auto">
          {/* Public Channels */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-muted-foreground font-heading">CHANNELS</h3>
              <Dialog open={isCreatingChannel} onOpenChange={setIsCreatingChannel}>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-5 w-5">
                    <PlusCircle className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create a new channel</DialogTitle>
                    <DialogDescription>Add a new channel to communicate with your team.</DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleCreateChannel}>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Channel name</Label>
                        <Input
                          id="name"
                          value={newChannelName}
                          onChange={(e) => setNewChannelName(e.target.value)}
                          placeholder="general"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          value={newChannelDescription}
                          onChange={(e) => setNewChannelDescription(e.target.value)}
                          placeholder="What's this channel about?"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch id="private" checked={isPrivate} onCheckedChange={setIsPrivate} />
                        <Label htmlFor="private">Private channel</Label>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" type="button" onClick={() => setIsCreatingChannel(false)}>
                        Cancel
                      </Button>
                      <Button type="submit">Create Channel</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
            <div className="space-y-1">
              {publicChannels.map((channel) => (
                <div
                  key={channel.id}
                  className={`channel-item ${channel.id === activeChannel?.id ? "active" : ""}`}
                  onClick={() => onChannelSelect(channel)}
                >
                  <Hash className="h-4 w-4" />
                  <span className="flex-1 truncate">{channel.name}</span>
                  {channel.unreadCount > 0 && (
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      {channel.unreadCount}
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Private Channels */}
          {privateChannels.length > 0 && (
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-muted-foreground font-heading">PRIVATE CHANNELS</h3>
              </div>
              <div className="space-y-1">
                {privateChannels.map((channel) => (
                  <div
                    key={channel.id}
                    className={`channel-item ${channel.id === activeChannel?.id ? "active" : ""}`}
                    onClick={() => onChannelSelect(channel)}
                  >
                    <Lock className="h-4 w-4" />
                    <span className="flex-1 truncate">{channel.name}</span>
                    {channel.unreadCount > 0 && (
                      <Badge variant="secondary" className="bg-accent text-accent-foreground">
                        {channel.unreadCount}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-t mt-auto">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={currentUser.avatarUrl || "/placeholder.svg?height=40&width=40"} />
              <AvatarFallback>{currentUser.username.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">{currentUser.username}</p>
              <div className="flex items-center">
                <Badge
                  variant="outline"
                  className="rounded-full px-2 py-0 text-xs bg-green-500 border-green-500 text-white"
                >
                  Online
                </Badge>
              </div>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-muted-foreground" asChild>
                    <Link href="/settings">
                      <Settings className="h-5 w-5" />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Settings</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-muted-foreground" asChild>
                    <Link href="/logout">
                      <LogOut className="h-5 w-5" />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Logout</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </aside>
    </>
  )
}

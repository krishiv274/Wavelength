"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function UserList({ users, isMobile, onClose }) {
  // Group users by status
  const onlineUsers = users.filter((user) => user.presence === "online")
  const idleUsers = users.filter((user) => user.presence === "idle")
  const offlineUsers = users.filter((user) => user.presence === "offline" || !user.presence)

  const UserItem = ({ user }) => {
    const initials = user.username
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()

    const getStatusColor = (status = "offline") => {
      switch (status) {
        case "online":
          return "bg-green-500 border-green-500"
        case "idle":
          return "bg-yellow-500 border-yellow-500"
        case "dnd":
          return "bg-red-500 border-red-500"
        default:
          return "bg-gray-400 border-gray-400"
      }
    }

    return (
      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted">
        <div className="relative">
          <Avatar>
            <AvatarImage src={user.avatarUrl || "/placeholder.svg?height=40&width=40"} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <span
            className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-card ${getStatusColor(
              user.presence,
            )}`}
          ></span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-medium truncate">{user.username}</p>
          {user.statusMessage && <p className="text-xs text-muted-foreground truncate">{user.statusMessage}</p>}
        </div>
      </div>
    )
  }

  const UserGroup = ({ title, users }) => {
    if (users.length === 0) return null

    return (
      <div className="mb-4">
        <h3 className="text-xs font-semibold text-muted-foreground mb-2 px-2">
          {title} — {users.length}
        </h3>
        <div className="space-y-1">
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    )
  }

  const content = (
    <>
      <div className="p-4 border-b flex items-center justify-between">
        <h3 className="font-semibold text-muted-foreground font-heading">MEMBERS — {users.length}</h3>
        {isMobile && (
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>

      <div className="p-2 overflow-y-auto">
        <UserGroup title="ONLINE" users={onlineUsers} />
        <UserGroup title="IDLE" users={idleUsers} />
        <UserGroup title="OFFLINE" users={offlineUsers} />
      </div>
    </>
  )

  if (isMobile) {
    return (
      <div className="fixed inset-0 bg-background/80 z-50 flex justify-end">
        <div className="w-64 bg-card h-full border-l">{content}</div>
      </div>
    )
  }

  return <div className="w-64 border-l bg-card hidden md:flex md:flex-col">{content}</div>
}

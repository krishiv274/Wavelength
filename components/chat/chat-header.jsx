"use client"

import { Button } from "@/components/ui/button"
import { Hash, Users, Bell, Settings, Menu, X } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ChatHeader({ channel, toggleSidebar, toggleUserList, showSidebar, onlineCount, isMobile }) {
  return (
    <header className="border-b bg-card h-14 flex items-center px-4 justify-between">
      <div className="flex items-center">
        {isMobile && (
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="mr-2">
            {showSidebar ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        )}
        <div className="flex items-center gap-2">
          {channel ? (
            <>
              <Hash className="h-5 w-5 text-muted-foreground" />
              <h1 className="font-semibold text-lg font-heading">{channel.name}</h1>
              {channel.description && (
                <span className="hidden md:inline text-sm text-muted-foreground">| {channel.description}</span>
              )}
            </>
          ) : (
            <div className="h-6 w-32 animate-pulse rounded bg-muted"></div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2">
        {channel && (
          <>
            <Button variant="ghost" size="sm" onClick={toggleUserList} className="text-xs">
              <Users className="h-4 w-4 mr-1" />
              {onlineCount}
            </Button>
          </>
        )}
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link href="/settings">
            <Settings className="h-5 w-5" />
          </Link>
        </Button>
        <ThemeToggle />
      </div>
    </header>
  )
}

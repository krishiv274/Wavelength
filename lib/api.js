"use client"

// Mock data for channels
const mockChannels = [
  { id: "1", name: "general", description: "General discussion", isPrivate: false, unreadCount: 0 },
  { id: "2", name: "random", description: "Random topics", isPrivate: false, unreadCount: 3 },
  { id: "3", name: "introductions", description: "Introduce yourself", isPrivate: false, unreadCount: 0 },
  { id: "4", name: "help", description: "Get help with issues", isPrivate: false, unreadCount: 0 },
  { id: "5", name: "team-private", description: "Private team discussions", isPrivate: true, unreadCount: 2 },
]

// Mock data for users
const mockUsers = [
  { id: "1", username: "Jane Smith", presence: "online", avatarUrl: "/placeholder.svg?height=40&width=40" },
  { id: "2", username: "John Doe", presence: "online", avatarUrl: "/placeholder.svg?height=40&width=40" },
  {
    id: "3",
    username: "Alice Johnson",
    presence: "idle",
    avatarUrl: "/placeholder.svg?height=40&width=40",
    statusMessage: "Working on new features",
  },
  { id: "4", username: "Bob Brown", presence: "offline", avatarUrl: "/placeholder.svg?height=40&width=40" },
  { id: "5", username: "Charlie Davis", presence: "online", avatarUrl: "/placeholder.svg?height=40&width=40" },
]

// Mock data for messages
const mockMessages = {
  1: [
    {
      id: "1",
      content: "Hey everyone! Welcome to the general channel.",
      sender: mockUsers[0],
      channelId: "1",
      createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
      type: "text",
      reactions: [{ emoji: "👋", count: 3, users: ["2", "3", "4"] }],
    },
    {
      id: "2",
      content: "Thanks for having me! Excited to be here.",
      sender: mockUsers[1],
      channelId: "1",
      createdAt: new Date(Date.now() - 3600000 * 23).toISOString(),
      type: "text",
    },
    {
      id: "3",
      content: "What are you all working on today?",
      sender: mockUsers[2],
      channelId: "1",
      createdAt: new Date(Date.now() - 3600000 * 22).toISOString(),
      type: "text",
    },
    {
      id: "4",
      content: "I'm building a new chat application!",
      sender: mockUsers[4],
      channelId: "1",
      createdAt: new Date(Date.now() - 3600000 * 21).toISOString(),
      type: "text",
    },
    {
      id: "5",
      content: "That sounds awesome! What technologies are you using?",
      sender: mockUsers[3],
      channelId: "1",
      createdAt: new Date(Date.now() - 3600000 * 20).toISOString(),
      type: "text",
    },
    {
      id: "6",
      content: "Next.js, Tailwind, and a polling mechanism for real-time updates.",
      sender: mockUsers[4],
      channelId: "1",
      createdAt: new Date(Date.now() - 3600000 * 19).toISOString(),
      type: "text",
    },
    {
      id: "7",
      content: "Nice stack! I've been using something similar for my projects.",
      sender: mockUsers[0],
      channelId: "1",
      createdAt: new Date(Date.now() - 3600000 * 18).toISOString(),
      type: "text",
      reactions: [{ emoji: "👍", count: 2, users: ["2", "4"] }],
    },
    {
      id: "8",
      content: "Would love to see it when it's ready!",
      sender: mockUsers[0],
      channelId: "1",
      createdAt: new Date(Date.now() - 3600000 * 17).toISOString(),
      type: "text",
    },
    {
      id: "9",
      content:
        'Here\'s a code snippet for a React component:\n```jsx\nfunction Button({ children, onClick }) {\n  return (\n    <button \n      className="px-4 py-2 bg-blue-500 text-white rounded" \n      onClick={onClick}\n    >\n      {children}\n    </button>\n  );\n}\n```',
      sender: mockUsers[2],
      channelId: "1",
      createdAt: new Date(Date.now() - 3600000 * 16).toISOString(),
      type: "text",
    },
    {
      id: "10",
      content: "That's a clean implementation! I like how you're using the children prop.",
      sender: mockUsers[4],
      channelId: "1",
      createdAt: new Date(Date.now() - 3600000 * 15).toISOString(),
      type: "text",
    },
  ],
  2: [
    {
      id: "11",
      content: "Welcome to the random channel! Share anything interesting you find.",
      sender: mockUsers[0],
      channelId: "2",
      createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
      type: "text",
    },
    {
      id: "12",
      content:
        "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly good to eat.",
      sender: mockUsers[2],
      channelId: "2",
      createdAt: new Date(Date.now() - 3600000 * 47).toISOString(),
      type: "text",
      reactions: [{ emoji: "🍯", count: 4, users: ["1", "3", "4", "5"] }],
    },
  ],
}

// In a real app, these would be API calls to your backend
// For now, we'll simulate API calls with promises and mock data

export async function fetchChannels() {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockChannels)
    }, 500)
  })
}

export async function fetchMessages(channelId) {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockMessages[channelId] || [])
    }, 700)
  })
}

export async function fetchUsers() {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUsers)
    }, 500)
  })
}

export async function createChannel(channelData) {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const newChannel = {
        id: `channel-${Date.now()}`,
        name: channelData.name || "new-channel",
        description: channelData.description || "",
        isPrivate: channelData.isPrivate || false,
        unreadCount: 0,
      }
      resolve(newChannel)
    }, 500)
  })
}

export async function sendMessage(messageData) {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const newMessage = {
        id: `msg-${Date.now()}`,
        content: messageData.content,
        channelId: messageData.channelId,
        sender: mockUsers[4], // Current user
        createdAt: new Date().toISOString(),
        type: messageData.type || "text",
      }

      // Add to mock messages
      if (!mockMessages[messageData.channelId]) {
        mockMessages[messageData.channelId] = []
      }
      mockMessages[messageData.channelId].push(newMessage)

      resolve(newMessage)
    }, 300)
  })
}

export async function addReaction(messageId, emoji) {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 300)
  })
}

export async function deleteMessage(messageId) {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 300)
  })
}

export async function updateUserPresence(userId, status) {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      // Update user in mock data
      const userIndex = mockUsers.findIndex((u) => u.id === userId)
      if (userIndex !== -1) {
        mockUsers[userIndex].presence = status
      }
      resolve()
    }, 300)
  })
}

// Mock user data
const mockUsers = [
  {
    id: "current-user",
    username: "CurrentUser",
    email: "user@example.com",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
]

export async function loginUser(credentials) {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // In a real app, this would validate credentials against a database
      if (credentials.email === "user@example.com") {
        resolve(mockUsers[0])
      } else {
        reject(new Error("Invalid email or password"))
      }
    }, 1000)
  })
}

export async function registerUser(data) {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      // In a real app, this would create a new user in the database
      const newUser = {
        id: `user-${Date.now()}`,
        username: data.username,
        email: data.email,
        avatarUrl: "/placeholder.svg?height=40&width=40",
      }
      resolve(newUser)
    }, 1000)
  })
}

export async function getUserSession() {
  // Simulate getting the user session
  return new Promise((resolve) => {
    setTimeout(() => {
      // In a real app, this would check for a valid session token
      // For demo purposes, we'll just return a mock user
      resolve(mockUsers[0])
    }, 500)
  })
}

export async function logoutUser() {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 500)
  })
}

export async function updateUserProfile(userData) {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      // In a real app, this would update the user in the database
      const updatedUser = {
        ...mockUsers[0],
        ...userData,
      }
      resolve(updatedUser)
    }, 800)
  })
}

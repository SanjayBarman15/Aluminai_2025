import type { User, Student, University, Connection, Message, Event } from "./types"

// Mock data storage (replace with actual database calls)
const mockUsers: User[] = []
const mockConnections: Connection[] = []
const mockMessages: Message[] = []
const mockEvents: Event[] = []

// User management functions
export async function createUser(userData: Partial<User>): Promise<User> {
  const newUser: User = {
    id: Math.random().toString(36).substr(2, 9),
    createdAt: new Date(),
    updatedAt: new Date(),
    ...userData,
  } as User

  mockUsers.push(newUser)
  return newUser
}

export async function getUserById(id: string): Promise<User | null> {
  return mockUsers.find((user) => user.id === id) || null
}

export async function getUserByEmail(email: string): Promise<User | null> {
  return mockUsers.find((user) => user.email === email) || null
}

export async function updateUser(id: string, updates: Partial<User>): Promise<User | null> {
  const userIndex = mockUsers.findIndex((user) => user.id === id)
  if (userIndex === -1) return null

  mockUsers[userIndex] = {
    ...mockUsers[userIndex],
    ...updates,
    updatedAt: new Date(),
  }

  return mockUsers[userIndex]
}

// Student-specific functions
export async function getStudentsByUniversity(university: string): Promise<Student[]> {
  return mockUsers.filter((user) => user.role === "student" && (user as Student).university === university) as Student[]
}

export async function searchStudents(query: {
  university?: string
  graduationYear?: number
  major?: string
  skills?: string[]
  location?: string
}): Promise<Student[]> {
  return mockUsers.filter((user) => {
    if (user.role !== "student") return false
    const student = user as Student

    if (query.university && student.university !== query.university) return false
    if (query.graduationYear && student.graduationYear !== query.graduationYear) return false
    if (query.major && student.major !== query.major) return false
    if (query.location && student.location !== query.location) return false
    if (query.skills && !query.skills.some((skill) => student.skills.includes(skill))) return false

    return true
  }) as Student[]
}

// University functions
export async function getUniversitiesByState(state: string): Promise<University[]> {
  return mockUsers.filter((user) => user.role === "university" && (user as University).state === state) as University[]
}

export async function verifyUniversityId(universityId: string): Promise<boolean> {
  // Mock verification - in real implementation, check against state database
  return universityId.length >= 6 && /^[A-Z]{2}\d{4,}$/.test(universityId)
}

// Connection management
export async function createConnection(requesterId: string, receiverId: string, message?: string): Promise<Connection> {
  const connection: Connection = {
    id: Math.random().toString(36).substr(2, 9),
    requesterId,
    receiverId,
    status: "pending",
    message,
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  mockConnections.push(connection)
  return connection
}

export async function updateConnectionStatus(
  connectionId: string,
  status: "accepted" | "rejected",
): Promise<Connection | null> {
  const connectionIndex = mockConnections.findIndex((conn) => conn.id === connectionId)
  if (connectionIndex === -1) return null

  mockConnections[connectionIndex] = {
    ...mockConnections[connectionIndex],
    status,
    updatedAt: new Date(),
  }

  return mockConnections[connectionIndex]
}

export async function getUserConnections(userId: string): Promise<Connection[]> {
  return mockConnections.filter(
    (conn) => (conn.requesterId === userId || conn.receiverId === userId) && conn.status === "accepted",
  )
}

export async function getPendingConnectionRequests(userId: string): Promise<Connection[]> {
  return mockConnections.filter((conn) => conn.receiverId === userId && conn.status === "pending")
}

// Message functions
export async function sendMessage(senderId: string, receiverId: string, content: string): Promise<Message> {
  const message: Message = {
    id: Math.random().toString(36).substr(2, 9),
    senderId,
    receiverId,
    content,
    isRead: false,
    createdAt: new Date(),
  }

  mockMessages.push(message)
  return message
}

export async function getConversation(userId1: string, userId2: string): Promise<Message[]> {
  return mockMessages
    .filter(
      (msg) =>
        (msg.senderId === userId1 && msg.receiverId === userId2) ||
        (msg.senderId === userId2 && msg.receiverId === userId1),
    )
    .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
}

export async function markMessagesAsRead(userId: string, senderId: string): Promise<void> {
  mockMessages.forEach((msg) => {
    if (msg.receiverId === userId && msg.senderId === senderId) {
      msg.isRead = true
    }
  })
}

// Event functions
export async function createEvent(eventData: Omit<Event, "id" | "createdAt" | "currentAttendees">): Promise<Event> {
  const event: Event = {
    id: Math.random().toString(36).substr(2, 9),
    currentAttendees: 0,
    createdAt: new Date(),
    ...eventData,
  }

  mockEvents.push(event)
  return event
}

export async function getUpcomingEvents(limit?: number): Promise<Event[]> {
  const now = new Date()
  const upcoming = mockEvents.filter((event) => event.date > now).sort((a, b) => a.date.getTime() - b.date.getTime())

  return limit ? upcoming.slice(0, limit) : upcoming
}

export async function getEventsByOrganizer(organizerId: string): Promise<Event[]> {
  return mockEvents.filter((event) => event.organizerId === organizerId)
}

// Analytics functions
export async function getSystemStats() {
  const totalUsers = mockUsers.length
  const totalStudents = mockUsers.filter((u) => u.role === "student").length
  const totalUniversities = mockUsers.filter((u) => u.role === "university").length
  const totalConnections = mockConnections.filter((c) => c.status === "accepted").length
  const totalEvents = mockEvents.length

  return {
    totalUsers,
    totalStudents,
    totalUniversities,
    totalConnections,
    totalEvents,
    activeUsers: Math.floor(totalUsers * 0.7), // Mock active users
    newRegistrations: Math.floor(totalUsers * 0.1), // Mock new registrations
  }
}

export async function getUniversityStats(universityId: string) {
  const students = await getStudentsByUniversity(universityId)
  const connections = mockConnections.filter(
    (c) => c.status === "accepted" && students.some((s) => s.id === c.requesterId || s.id === c.receiverId),
  )

  return {
    totalAlumni: students.length,
    activeAlumni: Math.floor(students.length * 0.6),
    totalConnections: connections.length,
    recentRegistrations: students.filter((s) => {
      const weekAgo = new Date()
      weekAgo.setDate(weekAgo.getDate() - 7)
      return s.createdAt > weekAgo
    }).length,
  }
}

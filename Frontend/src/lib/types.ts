export interface User {
  id: string
  email: string
  role: "student" | "university" | "admin"
  firstName: string
  lastName: string
  createdAt: Date
  updatedAt: Date
}

export interface Student extends User {
  role: "student"
  university: string
  graduationYear: number
  degree: string
  major: string
  currentPosition?: string
  currentCompany?: string
  location?: string
  bio?: string
  skills: string[]
  interests: string[]
  careerGoals: string[]
  linkedinUrl?: string
  portfolioUrl?: string
  isPublic: boolean
}

export interface University extends User {
  role: "university"
  universityId: string
  universityName: string
  state: string
  establishedYear: number
  website?: string
  description?: string
  isVerified: boolean
}

export interface Admin extends User {
  role: "admin"
  permissions: string[]
  managedStates: string[]
}

export interface Connection {
  id: string
  requesterId: string
  receiverId: string
  status: "pending" | "accepted" | "rejected"
  message?: string
  createdAt: Date
  updatedAt: Date
}

export interface Message {
  id: string
  senderId: string
  receiverId: string
  content: string
  isRead: boolean
  createdAt: Date
}

export interface Event {
  id: string
  title: string
  description: string
  organizerId: string
  organizerType: "university" | "admin"
  date: Date
  location: string
  isVirtual: boolean
  maxAttendees?: number
  currentAttendees: number
  tags: string[]
  createdAt: Date
}

export interface EventAttendee {
  id: string
  eventId: string
  userId: string
  status: "registered" | "attended" | "cancelled"
  registeredAt: Date
}

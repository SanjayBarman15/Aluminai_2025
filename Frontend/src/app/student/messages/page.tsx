"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, Send, Search, Plus, MoreHorizontal } from "lucide-react"
import { StudentLayout } from "@/components/student-layout"

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(1)
  const [newMessage, setNewMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  // Mock conversations data
  const conversations = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      lastMessage: "Thanks for connecting! I'd be happy to share insights about working in tech.",
      timestamp: "2 hours ago",
      unread: 2,
      avatar: "Sarah Johnson",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager at Microsoft",
      lastMessage: "The product management bootcamp I mentioned is really comprehensive...",
      timestamp: "1 day ago",
      unread: 0,
      avatar: "Michael Chen",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Data Scientist at Netflix",
      lastMessage: "I can definitely help you with your data science questions.",
      timestamp: "2 days ago",
      unread: 1,
      avatar: "Emily Rodriguez",
    },
    {
      id: 4,
      name: "David Kim",
      role: "UX Designer at Airbnb",
      lastMessage: "Here's the portfolio feedback you requested.",
      timestamp: "1 week ago",
      unread: 0,
      avatar: "David Kim",
    },
  ]

  // Mock messages for selected conversation
  const messages = [
    {
      id: 1,
      senderId: 1,
      senderName: "Sarah Johnson",
      content: "Hi! Thanks for reaching out. I saw your profile and noticed you're interested in software engineering.",
      timestamp: "Yesterday 3:30 PM",
      isOwn: false,
    },
    {
      id: 2,
      senderId: "current",
      senderName: "You",
      content:
        "Hi Sarah! Yes, I'm really passionate about software development and would love to learn more about your experience at Google.",
      timestamp: "Yesterday 4:15 PM",
      isOwn: true,
    },
    {
      id: 3,
      senderId: 1,
      senderName: "Sarah Johnson",
      content:
        "I'd be happy to share! Google has been an amazing place to grow as an engineer. The scale of the problems we solve and the impact we can have is incredible.",
      timestamp: "Yesterday 4:20 PM",
      isOwn: false,
    },
    {
      id: 4,
      senderId: 1,
      senderName: "Sarah Johnson",
      content:
        "Thanks for connecting! I'd be happy to share insights about working in tech. What specific areas are you most curious about?",
      timestamp: "2 hours ago",
      isOwn: false,
    },
  ]

  const filteredConversations = conversations.filter(
    (conv) =>
      conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.role.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const selectedConv = conversations.find((conv) => conv.id === selectedConversation)

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // TODO: Implement message sending logic
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  return (
    <StudentLayout>
      <div className="h-[calc(100vh-12rem)] flex gap-6">
        {/* Conversations List */}
        <div className="w-1/3 flex flex-col">
          <Card className="flex-1 flex flex-col">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Messages
                </CardTitle>
                <Button size="sm" variant="outline">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardHeader>
            <CardContent className="flex-1 p-0">
              <ScrollArea className="h-full">
                <div className="space-y-1 p-3">
                  {filteredConversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      onClick={() => setSelectedConversation(conversation.id)}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedConversation === conversation.id
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <Avatar className="h-10 w-10 flex-shrink-0">
                          <AvatarImage
                            src={`/abstract-geometric-shapes.png?height=40&width=40&query=${conversation.avatar}`}
                          />
                          <AvatarFallback>
                            {conversation.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-medium truncate">{conversation.name}</p>
                            <div className="flex items-center gap-2">
                              <span className="text-xs opacity-70">{conversation.timestamp}</span>
                              {conversation.unread > 0 && (
                                <Badge
                                  variant="destructive"
                                  className="h-5 w-5 p-0 flex items-center justify-center text-xs"
                                >
                                  {conversation.unread}
                                </Badge>
                              )}
                            </div>
                          </div>
                          <p className="text-sm opacity-70 truncate">{conversation.role}</p>
                          <p className="text-sm opacity-70 truncate mt-1">{conversation.lastMessage}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {selectedConv ? (
            <Card className="flex-1 flex flex-col">
              {/* Chat Header */}
              <CardHeader className="pb-3 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src={`/abstract-geometric-shapes.png?height=40&width=40&query=${selectedConv.avatar}`}
                      />
                      <AvatarFallback>
                        {selectedConv.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-foreground">{selectedConv.name}</h3>
                      <p className="text-sm text-muted-foreground">{selectedConv.role}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 p-0">
                <ScrollArea className="h-full p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[70%] ${message.isOwn ? "order-2" : "order-1"}`}>
                          <div
                            className={`p-3 rounded-lg ${
                              message.isOwn ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1 px-1">{message.timestamp}</p>
                        </div>
                        {!message.isOwn && (
                          <Avatar className="h-8 w-8 order-1 mr-2">
                            <AvatarImage
                              src={`/abstract-geometric-shapes.png?height=32&width=32&query=${message.senderName}`}
                            />
                            <AvatarFallback className="text-xs">
                              {message.senderName
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>

              {/* Message Input */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Textarea
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1 min-h-[40px] max-h-[120px] resize-none"
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        handleSendMessage()
                      }
                    }}
                  />
                  <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ) : (
            <Card className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <MessageCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Select a conversation</h3>
                <p className="text-muted-foreground">Choose a conversation from the list to start messaging</p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </StudentLayout>
  )
}

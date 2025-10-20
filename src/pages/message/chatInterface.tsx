import { useState, useRef, useEffect, useCallback } from "react"
import { Button } from "../../components/ui/button.tsx"
import { Input } from "../../components/ui/input"
import { Avatar } from "../../components/ui/avatar"
import { ScrollArea } from "../../components/ui/scroll-area"
import { Send, Paperclip, Mic, Image } from "lucide-react"

const users = [
    {
        id: "1",
        name: "Emma Thompson",
        avatar: "https://i.pravatar.cc/150?img=13",
        status: "online",
        unread: 3,
        lastMessage: "Hey, how's it going?",
    },
    {
        id: "2",
        name: "James Wilson",
        avatar: "https://i.pravatar.cc/150?img=14",
        status: "online",
        unread: 0,
        lastMessage: "Can we discuss the project?",
    },
    {
        id: "3",
        name: "Sophia Martinez",
        avatar: "https://i.pravatar.cc/150?img=15",
        status: "offline",
        unread: 0,
        lastMessage: "Thanks for your help!",
    },
    {
        id: "4",
        name: "Liam Johnson",
        avatar: "https://i.pravatar.cc/150?img=16",
        status: "away",
        unread: 1,
        lastMessage: "I'll send you the files later",
    },
    {
        id: "5",
        name: "Olivia Davis",
        avatar: "https://i.pravatar.cc/150?img=17",
        status: "online",
        unread: 0,
        lastMessage: "Let's meet tomorrow",
    },
    {
        id: "6",
        name: "Noah Brown",
        avatar: "https://i.pravatar.cc/150?img=18",
        status: "online",
        unread: 2,
        lastMessage: "I sent the invoice.",
    },
    {
        id: "7",
        name: "Ava Garcia",
        avatar: "https://i.pravatar.cc/150?img=19",
        status: "offline",
        unread: 0,
        lastMessage: "Talk soon!",
    },
    {
        id: "8",
        name: "Ethan Lee",
        avatar: "https://i.pravatar.cc/150?img=20",
        status: "online",
        unread: 5,
        lastMessage: "Can you review the PR?",
    },
    {
        id: "9",
        name: "Mia Patel",
        avatar: "https://i.pravatar.cc/150?img=21",
        status: "offline",
        unread: 0,
        lastMessage: "Thanks again!",
    },
    {
        id: "10",
        name: "Lucas Müller",
        avatar: "https://i.pravatar.cc/150?img=22",
        status: "away",
        unread: 1,
        lastMessage: "On my way.",
    },
    {
        id: "11",
        name: "Isabella Rossi",
        avatar: "https://i.pravatar.cc/150?img=23",
        status: "online",
        unread: 0,
        lastMessage: "Great work on the demo!",
    },
    {
        id: "12",
        name: "Benjamin Nogse",
        avatar: "https://i.pravatar.cc/150?img=24",
        status: "offline",
        unread: 4,
        lastMessage: "Please check the doc I uploaded.",
    },
]

type ChatInterface = {
    id: string
    content: string
    sender: "user" | "assistant"
    timestamp: Date
}

type ChatInterfaceProps = {
    selectedUser?: string | null
}

export default function ChatInterface({ selectedUser }: ChatInterfaceProps) {
    const [messages, setMessages] = useState<ChatInterface[]>([
        {
            id: "1",
            content: "Hey! How's it going?",
            sender: "assistant",
            timestamp: new Date(),
        },
    ])
    const [inputValue, setInputValue] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    // Find the selected user from our data
    const selectedUserData = selectedUser ? users.find((user) => user.id === selectedUser) : null

    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [])

    useEffect(() => {
        scrollToBottom()
    }, [messages, scrollToBottom])

    const handleSendMessage = () => {
        if (inputValue.trim() === "") return

        // Add user message
        const userMessage: ChatInterface = {
            id: Date.now().toString(),
            content: inputValue,
            sender: "user",
            timestamp: new Date(),
        }

        setMessages((prev) => [...prev, userMessage])
        setInputValue("")

        // Simulate assistant typing
        setIsTyping(true)

        // Simulate assistant response after a delay
        setTimeout(() => {
            const assistantMessage: ChatInterface = {
                id: (Date.now() + 1).toString(),
                content: `I received your message: "${inputValue}"`,
                sender: "assistant",
                timestamp: new Date(),
            }

            setMessages((prev) => [...prev, assistantMessage])
            setIsTyping(false)
        }, 1500)
    }

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }

    return (
        <div className="flex flex-col h-full bg-background">
            {/* Header */}
            <div className="flex items-center p-4 border-b">
                {selectedUserData ? (
                    <>
                        <Avatar className="h-10 w-10 mr-3">
                            <img
                                src={selectedUserData.avatar || "/placeholder.svg"}
                                alt={selectedUserData.name}
                                className="h-full w-full object-cover"
                            />
                        </Avatar>
                        <div>
                            <h2 className="font-semibold">{selectedUserData.name}</h2>
                            <p className="text-xs text-muted-foreground capitalize">{selectedUserData.status}</p>
                        </div>
                    </>
                ) : (
                    <>
                        <Avatar className="h-10 w-10 mr-3">
                            <img
                                src={"https://i.pravatar.cc/150?img=25"}
                                alt={"Emily Thompson"}
                                className="h-full w-full object-cover"
                            />
                        </Avatar>
                        <div>
                            <h2 className="font-semibold">Emily Thompson</h2>
                            <p className="text-xs text-muted-foreground">Online</p>
                        </div>
                    </>
                )}
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                    {messages.map((message) => (
                        <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                            <div
                                className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                                    message.sender === "user"
                                        ? "bg-primary text-primary-foreground rounded-br-none"
                                        : "bg-muted rounded-bl-none"
                                }`}
                            >
                                <p>{message.content}</p>
                                <div
                                    className={`text-xs mt-1 ${
                                        message.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                                    }`}
                                >
                                    {formatTime(message.timestamp)}
                                </div>
                            </div>
                        </div>
                    ))}

                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-muted rounded-2xl rounded-bl-none px-4 py-2">
                                <div className="flex space-x-1">
                                    <div
                                        className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce"
                                        style={{ animationDelay: "0ms" }}
                                    ></div>
                                    <div
                                        className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce"
                                        style={{ animationDelay: "150ms" }}
                                    ></div>
                                    <div
                                        className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce"
                                        style={{ animationDelay: "300ms" }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
            </ScrollArea>

            <div className="p-4 border-t">
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" className="rounded-full">
                        <Paperclip className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                        <Image className="h-5 w-5" />
                    </Button>
                    <div className="flex-1 relative">
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type a message..."
                            className="pr-10 rounded-full"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSendMessage()
                                }
                            }}
                        />
                        <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full">
                            <Mic className="h-5 w-5" />
                        </Button>
                    </div>
                    <Button onClick={handleSendMessage} size="icon" className="rounded-full" disabled={inputValue.trim() === ""}>
                        <Send className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

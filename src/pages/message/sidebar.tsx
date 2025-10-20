import {useState} from "react"
import {Search, Users, Plus, Settings, LogOut} from "lucide-react"
import {Avatar} from "../../components/ui/avatar"
import {Input} from "../../components/ui/input"
import {Button} from "../../components/ui/button"
import {Badge} from "../../components/ui/badge"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarRail,
} from "../../components/ui/sidebar"

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

type UserSidebarProps = {
    onSelectUser: (userId: string) => void
    selectedUser: string | null
}

export default function UserSidebar({onSelectUser, selectedUser}: UserSidebarProps) {
    const [searchQuery, setSearchQuery] = useState("")

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const getStatusColor = (status: string) => {
        switch (status) {
            case "online":
                return "bg-green-500"
            case "away":
                return "bg-yellow-500"
            case "offline":
                return "bg-gray-400"
            default:
                return "bg-gray-400"
        }
    }

    return (
        <Sidebar>
            <SidebarHeader>
                <div className="flex items-center justify-between p-2">
                    <div className="flex items-center gap-2">
                        <Users className="h-5 w-5"/>
                        <h2 className="font-semibold">Contacts</h2>
                    </div>

                </div>
                <div className="px-2 pb-2">
                    <div className="relative">
                        <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"/>
                        <Input
                            placeholder="Search users..."
                            className="pl-8"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Recent Chats</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <div className="flex flex-col gap-4 px-2">
                            {filteredUsers.map((user) => (
                                <div
                                    key={user.id}
                                    onClick={() => onSelectUser(user.id)}
                                    className={`cursor-pointer rounded-md hover:bg-muted p-2 ${
                                        selectedUser === user.id ? "bg-muted" : ""
                                    }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="relative">
                                            <Avatar className="h-10 w-10">
                                                <img
                                                    src={user.avatar || "/placeholder.svg"}
                                                    alt={user.name}
                                                    className="h-full w-full object-cover"
                                                />
                                            </Avatar>
                                            <div
                                                className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${getStatusColor(user.status)}`}
                                            />
                                        </div>
                                        <div className="flex-1 min-w-[140px] overflow-hidden">
                                            <div className="flex justify-between items-center overflow-hidden">
                                                <span className="font-medium max-w-[140px] truncate">
                                                    {user.name}
                                                </span>
                                                {user.unread > 0 && (
                                                    <Badge
                                                        variant="default"
                                                        className="ml-2 px-1.5 py-0.5 text-xs"
                                                    >
                                                        {user.unread}
                                                    </Badge>
                                                )}
                                            </div>
                                            <p className="text-xs text-muted-foreground max-w-[180px] truncate">
                                                {user.lastMessage}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter/>
            <SidebarRail/>
        </Sidebar>
    )
}

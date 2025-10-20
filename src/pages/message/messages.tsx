import { useState } from "react"
import ChatInterface from "./chatInterface"
import UserSidebar from "./sidebar.tsx"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function Messages() {
    const [selectedUser, setSelectedUser] = useState<string | null>(null)

    return (
        <main className="flex min-h-screen bg-gray-50">
            <SidebarProvider>
                <div className="w-64 border-r border-gray-200 bg-white">
                    <UserSidebar onSelectUser={setSelectedUser} selectedUser={selectedUser} />
                </div>

                <div className="flex-1 p-4 flex justify-center">
                    <div className="w-full max-w-6xl h-full shadow-xl rounded-xl overflow-hidden border border-gray-200 bg-white">
                        <ChatInterface selectedUser={selectedUser} />
                    </div>
                </div>
            </SidebarProvider>
        </main>
    )
}

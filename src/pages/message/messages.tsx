import { useState } from "react";
import ChatInterface from "./chatInterface";
import UserSidebar from "./sidebar.tsx";
import { SidebarProvider } from "@/components/ui/sidebar";
import { HeaderProfile } from "../feed/header.tsx";

export default function Messages() {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  return (
    <main className="flex flex-col h-screen bg-gray-50 overflow-hidden">
      <HeaderProfile />
      <SidebarProvider>
        <div className="flex flex-1 flex-col md:flex-row">
          <div className="w-full md:w-64 border-r border-gray-200 bg-white overflow-hidden">
            <UserSidebar
              onSelectUser={setSelectedUser}
              selectedUser={selectedUser}
            />
          </div>
          <div className="flex-1 p-4 flex justify-center items-center min-w-0 max-h-[90%]">
            <div className="w-full h-full max-w-[90%] shadow-xl rounded-xl border border-gray-200 bg-white">
              <ChatInterface selectedUser={selectedUser} />
            </div>
          </div>
        </div>
      </SidebarProvider>
    </main>
  );
}

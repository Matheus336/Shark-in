import { SidebarProvider } from "@/components/ui/sidebar";
import { useState } from "react";
import ChatInterface from "./chatInterface";
import UserSidebar from "./sidebar.tsx";

export default function Messages() {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  return (
    <main className="flex h-screen overflow-hidden bg-gray-50 pt-20">
      <SidebarProvider>
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar de usuários */}
          <div className="w-64 border-r border-gray-200 bg-white overflow-y-auto hidden md:block">
            <UserSidebar
              onSelectUser={setSelectedUser}
              selectedUser={selectedUser}
            />
          </div>

          {/* Área principal do chat */}
          <div className="flex flex-1 flex-col overflow-hidden">
            <div className="flex-1 overflow-hidden p-4 flex flex-col">
              <div className="flex flex-1 overflow-hidden shadow-xl rounded-xl border border-gray-200 bg-white">
                <ChatInterface selectedUser={selectedUser} />
              </div>
            </div>
          </div>
        </div>
      </SidebarProvider>
    </main>
  );
}

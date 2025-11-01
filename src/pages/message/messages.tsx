import { SidebarProvider } from "@/components/ui/sidebar";
import { useState } from "react";
import ChatInterface from "./chatInterface";
import UserSidebar from "./sidebar.tsx";

export default function Messages() {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  return (
    <main className="flex flex-col flex-1 bg-gray-50 overflow-hidden">
      <SidebarProvider>
        <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
          <div className="w-full md:w-64 border-r border-gray-200 bg-white overflow-hidden">
            <UserSidebar
              onSelectUser={setSelectedUser}
              selectedUser={selectedUser}
            />
          </div>
          <div className="flex flex-1 p-4 flex-col justify-center items-center min-w-0 overflow-hidden">
            <div className="flex flex-col flex-1 overflow-hidden shadow-xl rounded-xl border border-gray-200 bg-white">
              <ChatInterface selectedUser={selectedUser} />
            </div>
          </div>
        </div>
      </SidebarProvider>
    </main>
  );
}

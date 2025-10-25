import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "../../components/ui/button.tsx";
import { Input } from "../../components/ui/input";
import { Avatar } from "../../components/ui/avatar";
import { Send, Paperclip, Mic, Image } from "lucide-react";
import users from "./users.tsx";

type ChatInterface = {
  id: string;
  content: string;
  sender: "user" | "assistant";
  timestamp: Date;
};

type ChatInterfaceProps = {
  selectedUser?: string | null;
};

export default function ChatInterface({ selectedUser }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<ChatInterface[]>([
    {
      id: "1",
      content: "Hey! How's it going?",
      sender: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const selectedUserData = selectedUser
    ? users.find((user) => user.id === selectedUser)
    : null;

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatInterface = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const assistantMessage: ChatInterface = {
        id: (Date.now() + 1).toString(),
        content: `I received your message: "${inputValue}"`,
        sender: "assistant",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1200);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="flex flex-col h-full bg-background w-full max-w-full">
      <div className="flex items-center p-4 border-b">
        <Avatar className="h-14 w-14 mr-3 flex-shrink-0">
          <img
            src={selectedUserData?.avatar || "https://i.pravatar.cc/150?img=25"}
            alt={selectedUserData?.name || "Emily Thompson"}
            className="h-full w-full object-cover rounded-full"
          />
        </Avatar>
        <div className="flex flex-col justify-center">
          <h2 className="font-semibold text-gray-800 truncate">
            {selectedUserData?.name || "Emily Thompson"}
          </h2>
          <p className="text-sm text-gray-500 truncate">
            {selectedUserData?.status || "Online"}
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-white to-gray-100">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[75%] px-4 py-2 rounded-2xl break-words shadow-sm ${
                message.sender === "user"
                  ? "bg-blue-500 text-white rounded-br-none"
                  : "bg-gray-200 text-gray-800 rounded-bl-none"
              }`}
            >
              <p>{message.content}</p>
              <div className="text-xs mt-1 text-gray-400 text-right">
                {formatTime(message.timestamp)}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-200 rounded-2xl rounded-bl-none px-4 py-2">
              <div className="flex space-x-1">
                <span
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></span>
                <span
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></span>
                <span
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-white shadow-inner flex items-center gap-2">
        <Button variant="outline" size="icon" className="rounded-full">
          <Paperclip className="h-5 w-5 text-gray-500" />
        </Button>
        <Button variant="outline" size="icon" className="rounded-full">
          <Image className="h-5 w-5 text-gray-500" />
        </Button>
        <div className="flex-1 relative">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type a message..."
            className="pr-12 rounded-full bg-gray-100 focus:bg-white"
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full"
          >
            <Mic className="h-5 w-5 text-gray-500" />
          </Button>
        </div>
        <Button
          onClick={handleSendMessage}
          size="icon"
          className="rounded-full bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50"
          disabled={!inputValue.trim()}
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}

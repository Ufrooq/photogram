import React from "react"
import { Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
    id: string
    content: string
    incoming: boolean
    sender: string
    timestamp: string
}

interface ChatAreaProps {
    conversation: {
        name: string
        message: string
        avatar: string
        messages: Message[]
    }
}

export function ChatArea({ conversation }: ChatAreaProps) {
    const [search, setSearch] = React.useState("")

    const filterMessages = (messages: Message[]) => {
        return messages.filter((message) => message.content.toLowerCase().includes(search.toLowerCase()))
    }

    return (
        <div className="flex-1 flex flex-col">
            <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Avatar>
                        <AvatarImage src={conversation.avatar} />
                        <AvatarFallback>{conversation.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                        <h2 className="font-semibold">{conversation.name}</h2>
                        <p className="text-sm text-gray-500">{conversation.message}</p>
                    </div>
                </div>
                <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                    <Input
                        placeholder="Search in conversation..."
                        className="pl-9"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                    {filterMessages(conversation.messages).map((message) => (
                        <div key={message.id} className={`flex items-start gap-3 ${message.incoming ? "" : "flex-row-reverse"}`}>
                            <Avatar className="mt-1">
                                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                                <AvatarFallback>{message.sender[0]}</AvatarFallback>
                            </Avatar>
                            <div className={`flex flex-col ${message.incoming ? "" : "items-end"}`}>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-medium">{message.sender}</span>
                                    <span className="text-xs text-gray-500">{message.timestamp}</span>
                                </div>
                                <div
                                    className={`mt-1 p-3 rounded-lg ${message.incoming ? "bg-gray-100 dark:bg-gray-900" : "bg-purple-500 text-white"
                                        }`}
                                >
                                    {message.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}


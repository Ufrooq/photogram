import React from "react"
import { Search, Pin, MessageSquarePlus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ContactDialog } from "./ContactDialogue"

interface Message {
    id: string
    content: string
    incoming: boolean
    sender: string
    timestamp: string
}

interface Conversation {
    id: string
    name: string
    message: string
    time: string
    unread: number
    avatar: string
    messages: Message[]
}


interface Contact {
    id: string
    name: string
    email: string
    avatar: string
    profile: string
}

interface SidebarProps {
    conversations: {
        pinned: Conversation[]
        recent: Conversation[]
    }
    activeConversationId: string
    onConversationSelect: (conversation: Conversation) => void
    contacts: Contact[]
    onStartNewChat: (contact: Contact) => void
}

export function Sidebar({
    conversations,
    activeConversationId,
    onConversationSelect,
    contacts,
    onStartNewChat,
}: SidebarProps) {
    const [search, setSearch] = React.useState("")
    const [showContactDialog, setShowContactDialog] = React.useState(false)

    const filterConversations = (conversationList: Conversation[]) => {
        return conversationList.filter(
            (conversation) =>
                conversation.name.toLowerCase().includes(search.toLowerCase()) ||
                conversation.message.toLowerCase().includes(search.toLowerCase()),
        )
    }

    const renderConversationList = (conversationList: Conversation[], title: string, icon?: React.ReactNode) => (
        <div>
            <div className="flex items-center gap-2 px-3 py-2">
                {icon}
                <span className="text-sm font-medium text-gray-500">{title}</span>
            </div>
            <div className="space-y-1">
                {filterConversations(conversationList).map((conversation) => (
                    <div key={conversation.id}>
                        <div
                            onClick={() => onConversationSelect(conversation)}
                            className={`flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer ${activeConversationId === conversation.id ? "bg-gray-100 dark:bg-gray-900" : ""
                                }`}
                        >
                            <Avatar>
                                <AvatarImage src={conversation.avatar} />
                                <AvatarFallback>{conversation.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-medium truncate">{conversation.name}</h3>
                                    <span className="text-xs text-gray-500">{conversation.time}</span>
                                </div>
                                <p className="text-sm text-gray-500 truncate">{conversation.message}</p>
                            </div>
                            {conversation.unread > 0 && (
                                <Badge variant="destructive" className="h-5 w-5 rounded-full p-0 flex items-center justify-center">
                                    {conversation.unread}
                                </Badge>
                            )}
                        </div>
                        <Separator className="my-2" />
                    </div>
                ))}
            </div>
        </div>
    )

    const handleStartChat = () => {
        setShowContactDialog(true)
    }

    const handleCloseContactDialog = () => {
        setShowContactDialog(false)
    }

    const handleSelectContact = (contact: Contact) => {
        onStartNewChat(contact)
        setShowContactDialog(false)
    }

    return (
        <div className="w-80 border-r border-gray-200 dark:border-gray-800">
            <div className="p-4 border-b border-gray-200 dark:border-gray-800">
                <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">Messages</h1>
                <div className="mt-4 relative">
                    <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                    <Input
                        placeholder="Search messages..."
                        className="pl-9"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="mt-4">
                    <Button onClick={handleStartChat} className="w-full">
                        <MessageSquarePlus className="mr-2 h-4 w-4" />
                        Start New Chat
                    </Button>
                </div>
            </div>
            <ScrollArea className="h-[calc(100vh-9rem)]">
                <div className="space-y-4 p-2">
                    {renderConversationList(conversations.pinned, "Pinned", <Pin className="w-4 h-4 text-gray-500" />)}
                    {renderConversationList(conversations.recent, "Recent")}
                </div>
            </ScrollArea>
            {showContactDialog && (
                <ContactDialog
                    contacts={contacts}
                    isOpen={showContactDialog}
                    onClose={handleCloseContactDialog}
                    onStartChat={handleSelectContact}
                />
            )}
        </div>
    )
}


"use client"

import { ChatArea } from "@/components/Inbox/ChatArea"
import { InputArea } from "@/components/Inbox/InputArea"
import { Sidebar } from "@/components/Inbox/Sidebar"
import React from "react"


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

const conversationsData = {
    pinned: [
        {
            id: "1",
            name: "Odama Studio",
            message: "Mas Happy Typing...",
            time: "05:11 PM",
            unread: 1,
            avatar: "/placeholder.svg?height=40&width=40",
            messages: [
                {
                    id: "1",
                    content: "Guyss tahun depan liburan ke Jepun! 🎌 ✨ 🌸",
                    incoming: true,
                    sender: "Mas Happy",
                    timestamp: "05:00 PM",
                },
                {
                    id: "2",
                    content: "Minta tolong nanti dibuat pembagian tugas kaya biasa",
                    incoming: true,
                    sender: "Mas Happy",
                    timestamp: "05:00 PM",
                },
                {
                    id: "3",
                    content: "Tenang ki???",
                    incoming: true,
                    sender: "Mas Rohmad",
                    timestamp: "05:01 PM",
                },
                {
                    id: "4",
                    content: "Wokes siap mas! udh cek 🔥🔥🔥",
                    incoming: false,
                    sender: "You",
                    timestamp: "05:12 PM",
                },
            ],
        },
    ],
    recent: [
        {
            id: "2",
            name: "Hatypo Studio",
            message: "Meeting - Lathi geni",
            time: "04:01 PM",
            unread: 0,
            avatar: "/placeholder.svg?height=40&width=40",
            messages: [
                {
                    id: "1",
                    content: "Hi team! Meeting in 10 minutes",
                    incoming: true,
                    sender: "Project Lead",
                    timestamp: "03:50 PM",
                },
                {
                    id: "2",
                    content: "I'll be there!",
                    incoming: false,
                    sender: "You",
                    timestamp: "03:51 PM",
                },
            ],
        },
        {
            id: "3",
            name: "Nolaaa",
            message: "Keren bangett",
            time: "03:29 PM",
            unread: 1,
            avatar: "/placeholder.svg?height=40&width=40",
            messages: [
                {
                    id: "1",
                    content: "Keren bangett project barunya!",
                    incoming: true,
                    sender: "Nolaaa",
                    timestamp: "03:29 PM",
                },
            ],
        },
    ],
}

const contactsData: Contact[] = [
    {
        id: "c1",
        name: "Alice Johnson",
        email: "alice@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
        profile: "UI/UX Designer with 5 years of experience. Love creating intuitive and beautiful interfaces.",
    },
    {
        id: "c2",
        name: "Bob Smith",
        email: "bob@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
        profile: "Full-stack developer specializing in React and Node.js. Always excited about new technologies.",
    },
    {
        id: "c3",
        name: "Charlie Brown",
        email: "charlie@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
        profile:
            "Project Manager with a knack for agile methodologies. Passionate about team building and efficient workflows.",
    },
    {
        id: "c4",
        name: "Diana Prince",
        email: "diana@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
        profile: "Data Scientist focusing on machine learning and AI. Always looking for interesting datasets to analyze.",
    },
]

export default function InboxV2() {
    const [activeConversation, setActiveConversation] = React.useState<Conversation>(conversationsData.pinned[0])
    const [conversations, setConversations] = React.useState({
        pinned: conversationsData.pinned,
        recent: conversationsData.recent,
    })

    const handleConversationSelect = (conversation: Conversation) => {
        setActiveConversation(conversation)
    }

    const handleSendMessage = (content: string) => {
        const newMessage: Message = {
            id: Date.now().toString(),
            content,
            incoming: false,
            sender: "You",
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        }
        setActiveConversation((prev) => ({
            ...prev,
            messages: [...prev.messages, newMessage],
        }))
    }

    const handleStartNewChat = (contact: Contact) => {
        const newConversation: Conversation = {
            id: `new-${Date.now()}`,
            name: contact.name,
            message: "New conversation",
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            unread: 0,
            avatar: contact.avatar,
            messages: [],
        }
        setConversations((prev) => ({
            ...prev,
            recent: [newConversation, ...prev.recent],
        }))
        setActiveConversation(newConversation)
    }

    return (
        <div className="flex h-[660px] bg-white dark:bg-gray-950">
            <Sidebar
                conversations={conversations}
                activeConversationId={activeConversation.id}
                onConversationSelect={handleConversationSelect}
                contacts={contactsData}
                onStartNewChat={handleStartNewChat}
            />
            <div className="flex-1 flex flex-col">
                <ChatArea conversation={activeConversation} />
                <InputArea onSendMessage={handleSendMessage} />
            </div>
        </div>
    )
}


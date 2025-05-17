import React, { useEffect, useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Loader, Search } from "lucide-react"
import { getAllUsers } from "@/services/user.service"
import { toast } from "sonner"

interface Contact {
    id: string
    name: string
    email: string
    avatar: string
    profile: string
}

interface ContactDialogProps {
    contacts: Contact[]
    isOpen: boolean
    onClose: () => void
    onStartChat: (contact: Contact) => void
}

export function ContactDialog({ contacts, isOpen, onClose, onStartChat }: ContactDialogProps) {
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
    const [search, setSearch] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    const filteredContacts = contacts.filter(
        (contact) =>
            contact.name.toLowerCase().includes(search.toLowerCase()) ||
            contact.email.toLowerCase().includes(search.toLowerCase()),
    )

    const handleContactClick = (contact: Contact) => {
        setSelectedContact(contact)
    }

    const handleStartChat = () => {
        if (selectedContact) {
            onStartChat(selectedContact)
            onClose()
        }
    }

    const fetchContacts = async () => {
        setIsLoading(true)
        try {
            const res = await getAllUsers();
            console.log(res)
        } catch (error) {
            console.log(error)
            toast.error("Failed to fetch contacts")
        } finally {
            setIsLoading(false)
        }

    }

    useEffect(() => {
        fetchContacts();
    }, [])



    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Start a new chat</DialogTitle>
                    <DialogDescription>Select a contact to start a new conversation.</DialogDescription>
                </DialogHeader>
                <div className="relative mb-4">
                    <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                    <Input
                        placeholder="Search contacts..."
                        className="pl-9"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                    {!isLoading
                        ? <React.Fragment>
                            {filteredContacts.map((contact) => (
                                <div
                                    key={contact.id}
                                    className={`flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer ${selectedContact?.id === contact.id ? "bg-gray-100 dark:bg-gray-900" : ""
                                        }`}
                                    onClick={() => handleContactClick(contact)}
                                >
                                    <Avatar>
                                        <AvatarImage src={contact.avatar} />
                                        <AvatarFallback>{contact.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <h3 className="font-medium">{contact.name}</h3>
                                        <p className="text-sm text-gray-500">{contact.email}</p>
                                    </div>
                                </div>
                            ))}
                        </React.Fragment>
                        :
                        <div className="flex items-center justify-center h-40">
                            <Loader className="w-8 h-8 text-blue-600 animate-spin" />
                        </div>
                    }
                </ScrollArea>
                {selectedContact && (
                    <div className="mt-4">
                        <h3 className="font-semibold text-lg mb-2">Contact Details</h3>
                        <p className="text-sm mb-2">{selectedContact.profile}</p>
                    </div>
                )}
                <DialogFooter>
                    <Button onClick={handleStartChat} disabled={!selectedContact}>
                        Start Chat
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}


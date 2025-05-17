import React from "react"
import { Paperclip, Smile, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface InputAreaProps {
    onSendMessage: (message: string) => void
}

export function InputArea({ onSendMessage }: InputAreaProps) {
    const [message, setMessage] = React.useState("")

    const handleSend = () => {
        if (message.trim()) {
            onSendMessage(message)
            setMessage("")
        }
    }

    return (
        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                    <Paperclip className="h-5 w-5" />
                </Button>
                <Input
                    placeholder="Type a message..."
                    className="flex-1"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                />
                <Button variant="ghost" size="icon">
                    <Smile className="h-5 w-5" />
                </Button>
                <Button onClick={handleSend}>
                    <Send className="h-5 w-5" />
                </Button>
            </div>
        </div>
    )
}


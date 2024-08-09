import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog"
import { DialogHeader } from "@/components/ui/dialog"

const EmailVerification = () => {
    return (
        <Dialog>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        Go to your email account.Check for the email code send to you an vefiry it and come back to proceed further
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default EmailVerification
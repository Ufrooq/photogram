import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Icons } from "@/components/ui/icons"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useGlobalContext } from "@/context/Context"
import { useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "sonner"

const Signup: React.FC = () => {
    const { registerUser } = useGlobalContext()
    const [userInfo, setuserInfo] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })


    function handleonChange(e: any) {
        setuserInfo({ ...userInfo, [e.target.id]: e.target.value })
    }


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (userInfo.password !== userInfo.confirmPassword) {
            toast.error("password and current password doesn't match !")
            return
        }
        await registerUser(userInfo)

    }



    return (
        <Card>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Create an account</CardTitle>
                <CardDescription>
                    Enter your email below to create your account
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid grid-cols-2 gap-6">
                    <Button variant="custom" className="flex items-center">
                        <Icons.gitHub className="mr-2 h-4 w-4" />
                        Github
                    </Button>
                    <Button variant="custom">
                        <Icons.google className="mr-2 h-4 w-4" />
                        Google
                    </Button>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                            Or continue with
                        </span>
                    </div>
                </div>
                <form className="grid gap-4" onSubmit={handleSubmit}>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input onChange={handleonChange} id="email" type="email" placeholder="umar@example.com" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input onChange={handleonChange} id="password" type="password" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Confirm Password</Label>
                        <Input onChange={handleonChange} id="confirmPassword" type="password" />
                    </div>
                    <Button className="w-full" type="submit" variant="custom">Create account</Button>
                </form>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                            Or
                        </span>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <CardDescription className="text-center w-full">
                    Don't have an account ? <Link to="/login" className="font-semibold text-[#212121]">Login</Link>
                </CardDescription>
            </CardFooter>
        </Card>
    )
}
export default Signup;

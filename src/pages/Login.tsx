import Loader from "@/components/Loader"
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
// import { Icons } from "@/components/ui/icons"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useGlobalContext } from "@/context/Context"

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"

const Login = () => {
    const { loginUser, isLoggedIn, setisLoggedIn, continueWithGoogle } = useGlobalContext()
    const [isLoading, setIsLoading] = useState(false);
    const [userInfo, setuserInfo] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    const navigate = useNavigate();


    function handleonChange(e: any) {
        setuserInfo({ ...userInfo, [e.target.id]: e.target.value })
    }

    async function signinWithGoogle() {
        try {
            const response = await continueWithGoogle();
            if (response) {
                setisLoggedIn(true)
                toast.success("Signed in successfully !")
                navigate("/home")
            }

        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            if (userInfo.email == "" || userInfo.password == "") {
                toast.error("Please fill all the required fileds !")
                return
            }
            setIsLoading(true)
            const response = await loginUser(userInfo)
            if (response) {
                setisLoggedIn(true)
            }
            setIsLoading(false)

        } catch (error: any) {
            toast.error(error)
        }

    }

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/home");
        }
    }, [isLoggedIn, navigate]);

    return (
        <Card className="shadow-lg">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Login to your account</CardTitle>
                <CardDescription>
                    Enter your email below to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-6">
                    <Button onClick={signinWithGoogle} variant="custom">
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
                    <Button className="w-full" type="submit" variant="custom">
                        {
                            isLoading ? <Loader size="2" /> : "Login"
                        }
                    </Button>
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
                    Don't have an account ? <Link to="/signup" className="font-semibold text-[#212121]">Signup</Link>
                </CardDescription>
            </CardFooter>
        </Card>
    )
}
export default Login;

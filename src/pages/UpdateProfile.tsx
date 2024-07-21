import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@radix-ui/react-label'
import React from 'react'
import { Link } from 'react-router-dom'

const UpdateProfile = () => {
    return (

        <div
            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
            className='page_content_container'
        >
            <Card className='border-none'>
                <CardContent className="grid gap-4">
                    <form className="grid gap-4"  >
                        <div className="relative my-4">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-lg uppercase">
                                <span className="bg-background px-2 text-black font-bold">
                                    General Details
                                </span>
                            </div>
                        </div>
                        <div className='w-full flex justify-between items-center gap-6'>
                            <div className='rounded-xl bg-black flex items-center justify-center w-[180px] h-[180px]'>
                                <i className="fa-regular fa-user text-white text-[120px]"></i>
                            </div>
                            <div className='flex-1 flex flex-col gap-4'>
                                <div className="grid gap-2">
                                    <Label htmlFor="fname">First Name</Label>
                                    <Input id="fname" type="text" placeholder="Enter" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="fname">Last Name</Label>
                                    <Input id="fname" type="text" placeholder="Enter" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="umar@example.com" />
                                </div>
                            </div>
                            <div className='flex-1 flex flex-col gap-4 self-start'>
                                <div className="grid gap-2">
                                    <Label htmlFor="password">Bio</Label>
                                    <textarea
                                        id="password"
                                        className='border border-slate-400 px-4 py-3 rounded-lg h-[216px]'
                                        rows={8}
                                        placeholder="Enter a biography for your profofile"

                                    />
                                </div>
                            </div>
                        </div>
                        <div className="relative my-4">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-lg uppercase">
                                <span className="bg-background px-2 text-black font-bold">
                                    Other Social Account Links
                                </span>
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="Instagram">Instagram Link</Label>
                            <Input id="Instagram" type="text" placeholder="instagram.com/umar_cpp" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="Facebook">Facebook Link</Label>
                            <Input id="Facebook" type="text" placeholder="facebook.com/umar" />
                        </div>
                        <div className='flex gap-4 mt-10'>
                            <Button className="w-full" type="submit" variant="custom_outline">Cancel</Button>
                            <Button className="w-full" type="submit" variant="custom">Save Changes</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default UpdateProfile
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@radix-ui/react-select';


const Community = () => {
    return (
        <div>
            <Card
                style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
                className='rounded-lg p-2 shadow-md page_content_container'
            >
                <CardHeader>
                    <CardTitle>Suggested Friends</CardTitle>
                    <CardDescription>
                        Add new friends in your reach
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex space-x-2">
                        <Input type='text' placeholder='Search people' />
                        <Button variant="secondary" className="shrink-0">
                            Search
                        </Button>
                    </div>
                    <Separator className="my-4" />
                    <div className="space-y-4">
                        <h4 className="text-sm font-medium">People with access</h4>
                        <div className="grid gap-6 overflow-y-scroll max-h-[400px]">
                            <div className="flex items-center justify-between space-x-4">
                                <div className="flex items-center space-x-4">
                                    <Avatar>
                                        <AvatarImage src="/avatars/03.png" />
                                        <AvatarFallback>OM</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium leading-none">
                                            Olivia Martin
                                        </p>
                                        <p className="text-sm text-muted-foreground">m@example.com</p>
                                    </div>
                                </div>
                                <Select defaultValue="edit">
                                    <SelectTrigger className="ml-auto w-[110px]">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="edit">Can edit</SelectItem>
                                        <SelectItem value="view">Can view</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex items-center justify-between space-x-4">
                                <div className="flex items-center space-x-4">
                                    <Avatar>
                                        <AvatarImage src="/avatars/05.png" />
                                        <AvatarFallback>IN</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium leading-none">
                                            Isabella Nguyen
                                        </p>
                                        <p className="text-sm text-muted-foreground">b@example.com</p>
                                    </div>
                                </div>
                                <Select defaultValue="view">
                                    <SelectTrigger className="ml-auto w-[110px]">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="edit">Can edit</SelectItem>
                                        <SelectItem value="view">Can view</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex items-center justify-between space-x-4">
                                <div className="flex items-center space-x-4">
                                    <Avatar>
                                        <AvatarImage src="/avatars/01.png" />
                                        <AvatarFallback>SD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium leading-none">
                                            Sofia Davis
                                        </p>
                                        <p className="text-sm text-muted-foreground">p@example.com</p>
                                    </div>
                                </div>
                                <Select defaultValue="view">
                                    <SelectTrigger className="ml-auto w-[110px]">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="edit">Can edit</SelectItem>
                                        <SelectItem value="view">Can view</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex items-center justify-between space-x-4">
                                <div className="flex items-center space-x-4">
                                    <Avatar>
                                        <AvatarImage src="/avatars/01.png" />
                                        <AvatarFallback>SD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium leading-none">
                                            Sofia Davis
                                        </p>
                                        <p className="text-sm text-muted-foreground">p@example.com</p>
                                    </div>
                                </div>
                                <Select defaultValue="view">
                                    <SelectTrigger className="ml-auto w-[110px]">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="edit">Can edit</SelectItem>
                                        <SelectItem value="view">Can view</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex items-center justify-between space-x-4">
                                <div className="flex items-center space-x-4">
                                    <Avatar>
                                        <AvatarImage src="/avatars/01.png" />
                                        <AvatarFallback>SD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium leading-none">
                                            Sofia Davis
                                        </p>
                                        <p className="text-sm text-muted-foreground">p@example.com</p>
                                    </div>
                                </div>
                                <Select defaultValue="view">
                                    <SelectTrigger className="ml-auto w-[110px]">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="edit">Can edit</SelectItem>
                                        <SelectItem value="view">Can view</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex items-center justify-between space-x-4">
                                <div className="flex items-center space-x-4">
                                    <Avatar>
                                        <AvatarImage src="/avatars/01.png" />
                                        <AvatarFallback>SD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium leading-none">
                                            Sofia Davis
                                        </p>
                                        <p className="text-sm text-muted-foreground">p@example.com</p>
                                    </div>
                                </div>
                                <Select defaultValue="view">
                                    <SelectTrigger className="ml-auto w-[110px]">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="edit">Can edit</SelectItem>
                                        <SelectItem value="view">Can view</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex items-center justify-between space-x-4">
                                <div className="flex items-center space-x-4">
                                    <Avatar>
                                        <AvatarImage src="/avatars/01.png" />
                                        <AvatarFallback>SD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium leading-none">
                                            Sofia Davis
                                        </p>
                                        <p className="text-sm text-muted-foreground">p@example.com</p>
                                    </div>
                                </div>
                                <Select defaultValue="view">
                                    <SelectTrigger className="ml-auto w-[110px]">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="edit">Can edit</SelectItem>
                                        <SelectItem value="view">Can view</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex items-center justify-between space-x-4">
                                <div className="flex items-center space-x-4">
                                    <Avatar>
                                        <AvatarImage src="/avatars/01.png" />
                                        <AvatarFallback>SD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium leading-none">
                                            Sofia Davis
                                        </p>
                                        <p className="text-sm text-muted-foreground">p@example.com</p>
                                    </div>
                                </div>
                                <Select defaultValue="view">
                                    <SelectTrigger className="ml-auto w-[110px]">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="edit">Can edit</SelectItem>
                                        <SelectItem value="view">Can view</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex items-center justify-between space-x-4">
                                <div className="flex items-center space-x-4">
                                    <Avatar>
                                        <AvatarImage src="/avatars/01.png" />
                                        <AvatarFallback>SD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium leading-none">
                                            Sofia Davis
                                        </p>
                                        <p className="text-sm text-muted-foreground">p@example.com</p>
                                    </div>
                                </div>
                                <Select defaultValue="view">
                                    <SelectTrigger className="ml-auto w-[110px]">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="edit">Can edit</SelectItem>
                                        <SelectItem value="view">Can view</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Community;
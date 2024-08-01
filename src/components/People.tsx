import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { userCompleteInfoResponse } from '@/context/types';
import { Separator } from '@radix-ui/react-select';


interface peopleProps {
    suggestedFriends: userCompleteInfoResponse[]
}

const People = ({ suggestedFriends }: peopleProps) => {
    return (
        <Card
            className='shadow-none outline-none border-none'
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
                    <div className="grid gap-6 overflow-y-scroll max-h-[360px]">
                        {suggestedFriends.length > 0 &&
                            suggestedFriends.map((person: userCompleteInfoResponse) => (
                                <div className="flex items-center justify-between space-x-4">
                                    <div className="flex items-center space-x-4">
                                        <Avatar>
                                            <AvatarImage src={person.photoURL} />
                                        </Avatar>
                                        <div>
                                            <p className="text-sm font-medium leading-none">
                                                {person.displayName}
                                            </p>
                                            <p className="text-sm text-muted-foreground">p@example.com</p>
                                        </div>
                                    </div>
                                    <Button variant={"custom"}>
                                        Add Friend
                                    </Button>
                                </div>
                            ))}
                    </div>

                </div>

            </CardContent>
        </Card >
    )
}

export default People;
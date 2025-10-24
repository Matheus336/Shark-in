import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {formatDistanceToNow} from "date-fns"
import {ptBR} from "date-fns/locale/pt-BR"
import ThumbUp from '@mui/icons-material/ThumbUpOutlined'
import RocketLaunch from '@mui/icons-material/RocketLaunchOutlined'
import AttachMoney from '@mui/icons-material/AttachMoneyOutlined'
import {IconButton} from "@mui/material";

import type { Post } from "./mockPost"

export const PostItem = ({post}: { post: Post }) => {
    return (
        <Card className="mb-4">
            <CardHeader className="flex flex-row items-center space-x-4">
                <Avatar>
                    <AvatarImage src={post.author.avatarUrl} alt={post.author.name}/>
                    <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-medium">{post.author.name}</p>
                    <p className="text-sm text-muted-foreground">
                        {formatDistanceToNow(new Date(post.createdAt), {
                            addSuffix: true,
                            locale: ptBR,
                        })}
                    </p>
                </div>
            </CardHeader>
            <CardContent>
                <p>{post.content}</p>
            </CardContent>
            <CardFooter className="flex flex-row items-center space-x-4">
                <IconButton color="inherit" onClick={() => alert('Curtir!')}>
                    <ThumbUp/>
                </IconButton>

                <IconButton color="inherit" onClick={() => alert('Impulsionar!')}>
                    <RocketLaunch/>
                </IconButton>

                <IconButton color="inherit" onClick={() => alert('Investir!')}>
                    <AttachMoney/>
                </IconButton>
            </CardFooter>
        </Card>
    )
}
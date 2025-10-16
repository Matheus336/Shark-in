import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {formatDistanceToNow} from "date-fns"
import {ptBR} from "date-fns/locale/pt-BR"
import ThumbUp from '@mui/icons-material/ThumbUpOutlined'
import RocketLaunch from '@mui/icons-material/RocketLaunchOutlined'
import AttachMoney from '@mui/icons-material/AttachMoneyOutlined'
import { IconButton } from '@mui/material'

interface Post {
    id: string
    author: {
        name: string
        avatarUrl: string
    }
    content: string
    createdAt: string
}

export const mockPosts: Post[] = [
    {
        id: '1',
        author: {
            name: 'João Silva',
            avatarUrl: 'https://i.pravatar.cc/150?img=1',
        },
        content: 'Primeiro post! 🚀 Estou testando o sistema de feed.',
        createdAt: new Date(Date.now() - 1000 * 60 * 2).toISOString(),
    },
    {
        id: '2',
        author: {
            name: 'Maria Oliveira',
            avatarUrl: 'https://i.pravatar.cc/150?img=2',
        },
        content: 'Alguém aí já usou TanStack Query com Tailwind? 😄',
        createdAt: new Date(Date.now() - 1000 * 60 * 10).toISOString(),
    },
    {
        id: '3',
        author: {
            name: 'Carlos Pereira',
            avatarUrl: 'https://i.pravatar.cc/150?img=3',
        },
        content: 'Estou desenvolvendo meu primeiro projeto com React + TypeScript. Dicas são bem-vindas!',
        createdAt: new Date(Date.now() - 1000 * 60 * 25).toISOString(),
    },
    {
        id: '4',
        author: {
            name: 'Ana Souza',
            avatarUrl: 'https://i.pravatar.cc/150?img=4',
        },
        content: '📚 Acabei de terminar um curso de UI/UX — estou animada pra aplicar o que aprendi!',
        createdAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
    },
    {
        id: '5',
        author: {
            name: 'Lucas Fernandes',
            avatarUrl: 'https://i.pravatar.cc/150?img=5',
        },
        content: 'Deploy feito com sucesso no Vercel! ✅ Que alívio hahaha',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    },
    {
        id: '6',
        author: {
            name: 'Juliana Costa',
            avatarUrl: 'https://i.pravatar.cc/150?img=6',
        },
        content: '👩‍💻 Trabalhando em um app de gerenciamento de tarefas com drag-and-drop!',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
    },
    {
        id: '7',
        author: {
            name: 'Rafael Lima',
            avatarUrl: 'https://i.pravatar.cc/150?img=7',
        },
        content: 'Alguém recomenda um bom plugin de Tailwind pra animações?',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    },
    {
        id: '8',
        author: {
            name: 'Fernanda Rocha',
            avatarUrl: 'https://i.pravatar.cc/150?img=8',
        },
        content: '✨ Finalizei a tela de login responsiva com shadcn/ui. Ficou linda!',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
    },
    {
        id: '9',
        author: {
            name: 'Diego Martins',
            avatarUrl: 'https://i.pravatar.cc/150?img=9',
        },
        content: '🚧 Refatorando meu código hoje... que dor, mas vai valer a pena!',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
    },
    {
        id: '10',
        author: {
            name: 'Larissa Gomes',
            avatarUrl: 'https://i.pravatar.cc/150?img=10',
        },
        content: 'Fiz meu primeiro commit em um projeto open-source! ❤️',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    },
]

const PostItem = ({post}: { post: Post }) => {
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
                    <ThumbUp />
                </IconButton>

                <IconButton color="inherit" onClick={() => alert('Impulsionar!')}>
                    <RocketLaunch />
                </IconButton>

                <IconButton color="inherit" onClick={() => alert('Investir!')}>
                    <AttachMoney />
                </IconButton>
            </CardFooter>
        </Card>
    )
}

export const Feed = () => {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen gap-4 bg-linear-to-r from-white to-gray-100">
            <div className="max-w-3xl mx-auto mt-6 px-4">
                {mockPosts.map((post) => (
                    <PostItem key={post.id} post={post}/>
                ))}
            </div>
        </div>
    )
}

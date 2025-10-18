import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {formatDistanceToNow} from "date-fns"
import {ptBR} from "date-fns/locale/pt-BR"
import ThumbUp from '@mui/icons-material/ThumbUpOutlined'
import RocketLaunch from '@mui/icons-material/RocketLaunchOutlined'
import AttachMoney from '@mui/icons-material/AttachMoneyOutlined'
import {Input} from "@/components/ui/input.tsx";
import {Link} from "@tanstack/react-router";
import logo from "@/assets/shark-in.png";
import {IconButton} from "@mui/material";
import {Textarea} from "@/components/ui/textarea"
import {Button} from "@/components/ui/button.tsx";
import Account from '@mui/icons-material/AccountCircleOutlined';
import { useState } from "react"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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

const DropdownMenuDialog = () => {
    const [showNewDialog, setShowNewDialog] = useState(false)
    const [showShareDialog, setShowShareDialog] = useState(false)
    const [showMessageDialog, setShowMessageDialog] = useState(false)

    return (
        <>
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                    <Avatar>
                        <AvatarImage src={'https://i.pravatar.cc/150?img=12'} alt={'Matheus Felipe'}/>
                        <AvatarFallback>{'Matheus Felipe'}</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40" align="end">
                    <DropdownMenuLabel>Matheus Aguiar</DropdownMenuLabel>
                    <DropdownMenuGroup>
                        <DropdownMenuItem onSelect={() => setShowMessageDialog(true)}>
                            Mensagens
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => setShowShareDialog(true)}>
                            Notificações
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => setShowNewDialog(true)}>
                            Sair
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>

            <Dialog open={showNewDialog} onOpenChange={setShowNewDialog}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Deseja sair?</DialogTitle>
                    </DialogHeader>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button className={"bg-[#580848] hover:bg-[#7e1268]"}>Sim</Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button className={"bg-[#95727d] hover:bg-[#c0728b]"}>Não</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Notificações</DialogTitle>
                    </DialogHeader>
                    <Card className="mb-4">
                        <CardHeader className="flex flex-row items-center space-x-4">
                            <Avatar>
                                <AvatarImage src={'https://i.pravatar.cc/150?img=10'} alt={'Larissa Gomes'}/>
                                <AvatarFallback>{'Larissa Gomes'}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-medium">{'Larissa Gomes compartilhou:'}</p>
                                <p className="text-sm text-muted-foreground">
                                    'Fiz meu primeiro commit em um projeto open-source! ❤️'
                                </p>
                            </div>
                        </CardHeader>
                    </Card>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button className={"bg-[#580848] hover:bg-[#7e1268]"}>Sair</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <Dialog open={showMessageDialog} onOpenChange={setShowMessageDialog}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Mensagens</DialogTitle>
                    </DialogHeader>
                    <Card className="mb-4">
                        <CardHeader className="flex flex-row items-center space-x-4">
                            <Avatar>
                                <AvatarImage src={'https://i.pravatar.cc/150?img=8'} alt={'Fernanda Rocha'}/>
                                <AvatarFallback>{'Fernanda Rocha'}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-medium">{'Fernanda Rocha:'}</p>
                                <p className="text-sm text-muted-foreground">
                                    Eai Matheus! Tudo bem? Queria trocar uma ideia sobre aquele projeto de UI/UX que você mencionou.
                                </p>
                            </div>
                        </CardHeader>
                    </Card>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button className={"bg-[#580848] hover:bg-[#7e1268]"}>Sair</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}

export const Feed = () => {
    return (
        <div>
            <div>
                <nav
                    className="flex flex-1 items-center justify-between px-6 py-4 bg-[#580848] text-white shadow-md pl-15 pr-15">
                    <Link to="/feed">
                        <img src={logo} alt="Logo do Shark-in" className="w-10 h-10"/>
                    </Link>
                    <Input
                        type="text"
                        placeholder="Buscar..."
                        className="border border-white rounded-3xl p-2 w-1/2 text-lg bg-white text-black"
                    />
                    <DropdownMenuDialog />
                </nav>
            </div>
            <div
                className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gradient-to-r from-white to-gray-100">
                <div className="flex flex-col items-center gap-4 max-w-3xl w-full px-4 mt-6">
                    <Textarea
                        placeholder="O que você está pensando?"
                        className="w-full border border-gray-400 rounded-md text-lg min-h-[100px]"
                    />
                    <Button
                        className="w-full bg-[#580848] hover:bg-[#7e1268] text-white px-6 py-2"
                        onClick={() => alert('Muito obrigado por compartilhar sua ideia de negócio!\nEsperamos que o Shark-in ajude você a encontrar investidores interessados.')}
                    >
                        Postar
                    </Button>
                </div>
                <div className="max-w-3xl mx-auto mt-6 px-4 w-full">
                    {mockPosts.map((post) => (
                        <PostItem key={post.id} post={post}/>
                    ))}
                </div>
            </div>
        </div>
    );
}
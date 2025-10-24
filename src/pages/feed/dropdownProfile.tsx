import {Card, CardHeader} from "@/components/ui/card"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Button} from "@/components/ui/button.tsx";
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

export const DropdownProfile = () => {
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

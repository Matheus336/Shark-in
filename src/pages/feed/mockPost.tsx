export interface Post {
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
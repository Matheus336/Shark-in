import { createFileRoute } from '@tanstack/react-router'
import Messages from '../pages/message/messages'

export const Route = createFileRoute('/messages')({
    component: Messages,
})
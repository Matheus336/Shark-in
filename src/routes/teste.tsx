import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/teste')({
  component: RouteComponent,
})

function RouteComponent() {
  return <h1>Hello about!</h1>
}

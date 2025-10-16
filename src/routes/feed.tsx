import { createFileRoute } from '@tanstack/react-router'
import { Feed } from "@/pages/feed/feed.tsx";

export const Route = createFileRoute('/feed')({
  component: Feed,
})



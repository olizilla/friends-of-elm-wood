// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content'

// 2. Define a `type` and `schema` for each collection
const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date()
  })
})

export const collections = {
  events
}
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
      title: z.string(),
      pubDate: z.date(),
      tags: z.array(z.string()),
      image: image()
    })
});
const galleryCollection = defineCollection ({
  type: 'data',
  schema: ({ image }) => z.object({
    title: z.string(),
    image: image()
  })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  'posts': postsCollection,
  'gallery': galleryCollection
};
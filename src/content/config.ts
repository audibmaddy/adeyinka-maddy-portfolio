import { defineCollection, z } from 'astro:content';

const series = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.date(),
    type: z.literal('series'),
    tags: z.array(z.string()),
    coverImage: z.string(),
    description: z.string(),
    imageOrder: z.array(z.string()).optional(),
    highlightedImages: z.array(z.string()).optional(),
  }),
});

const selectedWorks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.date(),
    type: z.literal('selected'),
    tags: z.array(z.string()),
    coverImage: z.string(),
    description: z.string(),
    location: z.string().optional(),
    medium: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.date(),
    type: z.literal('project'),
    tags: z.array(z.string()),
    coverImage: z.string(),
    description: z.string(),
    videoEmbed: z.string().optional(),
    linkedinEmbed: z.string().optional(),
    externalUrl: z.string().optional(),
    client: z.string().optional(),
    role: z.string().optional(),
    location: z.string().optional(),
  }),
});

export const collections = {
  series,
  'selected-works': selectedWorks,
  projects,
};

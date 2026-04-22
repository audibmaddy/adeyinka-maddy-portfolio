import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ── Series (documentary photo essays) ────────────────────────
const series = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/series' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
    type: z.literal('series'),
    tags: z.array(z.string()),
    coverImage: z.string(),
    description: z.string(),
    imageOrder: z.array(z.string()).optional(),
    highlightedImages: z.array(z.string()).optional(),
    vimeoId: z.string().optional(),
    exhibition: z.string().optional(),
  }),
});

// ── Selected Works (individual images / moments) ─────────────
const selectedWorks = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/selected-works' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
    type: z.literal('selected'),
    tags: z.array(z.string()),
    coverImage: z.string(),
    description: z.string(),
    location: z.string().optional(),
    medium: z.string().optional(),
    // Hover label shown on the work grid
    label: z.string().optional(),
    sublabel: z.string().optional(),
    // Collection-level fields (for multi-image entries with a detail page)
    isCollection: z.boolean().optional(),
    // isGallery: clickable in Selected Work grid → /work/[slug], NOT shown in Projects tab
    isGallery: z.boolean().optional(),
    // Override the default /work/[slug] href for isGallery cards
    linkTo: z.string().optional(),
    // Pull cover image from a series folder instead of own media folder
    seriesSlug: z.string().optional(),
    imageOrder: z.array(z.string()).optional(),
    highlightedImages: z.array(z.string()).optional(),
    // Project metadata (shown on /work/[slug] detail page)
    client: z.string().optional(),
    role: z.string().optional(),
    scope: z.string().optional(),
  }),
});

// ── Projects (campaigns, brand work, creative direction) ──────
const projects = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
    type: z.literal('project'),
    tags: z.array(z.string()),
    coverImage: z.string(),
    description: z.string(),
    videoEmbed: z.string().optional(),
    vimeoId: z.string().optional(),
    linkedinEmbed: z.string().optional(),
    externalUrl: z.string().optional(),
    client: z.string().optional(),
    role: z.string().optional(),
    location: z.string().optional(),
    scope: z.string().optional(),
    imageOrder: z.array(z.string()).optional(),
    highlightedImages: z.array(z.string()).optional(),
  }),
});

export const collections = {
  series,
  'selected-works': selectedWorks,
  projects,
};

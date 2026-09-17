import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			category: z.string().optional(),
			heroImage: z.optional(image()),
		}),
});

// Annuaire des outils IA — pilier autonome (fiches de référence, pas des articles)
const tools = defineCollection({
	loader: glob({ base: './src/content/tools', pattern: '**/*.md' }),
	schema: z.object({
		name: z.string(),
		tagline: z.string(),
		category: z.string(),
		icon: z.string(),
		gradient: z.string(),
		free: z.enum(['Gratuit', 'Freemium', 'Payant']),
		levels: z.string(),
		site: z.string().url(),
		strengths: z.array(z.string()),
		limits: z.array(z.string()),
		classUse: z.string(),
		redLine: z.string().optional(),
		article: z.string().optional(),
		order: z.number().default(99),
	}),
});

export const collections = { blog, tools };

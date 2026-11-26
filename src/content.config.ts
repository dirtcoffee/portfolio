
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(["draft", "in_progress", "shipped"]),
    publishedAt: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    repoUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
  }),
});

export const collections = { projects };
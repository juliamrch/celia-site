import { defineCollection, z } from 'astro:content';

export const blogCollection = {
	work: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			draft: z.boolean().optional(),
		}),
	}),
};

///export const projectCollection = {
	//project: defineCollection({
	//	schema: z.object({
	//		title: z.string(),
	//		description: z.string(),
	//		publishDate: z.coerce.date(),
	//		tags: z.array(z.string()),
	//		img: z.string(),
	//		img_alt: z.string().optional(),
	//	}),
//	}),
//};

export const collections = {
	'work': blogCollection,
	///'project': projectCollection,
  };

import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master'
})

const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN || '',
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
  host: 'preview.contentful.com'
})

export interface BlogPost {
  title: string
  slug: string
  excerpt: string
  content: any
  featuredImage?: {
    fields: {
      file: {
        url: string
      }
      title: string
    }
  } | null
  author: {
    fields: {
      name: string
      bio?: string
      avatar?: {
        fields: {
          file: {
            url: string
          }
        }
      }
    }
  } | null
  category: {
    fields: {
      name: string
      slug: string
    }
  } | null
  tags: Array<{
    fields: {
      name: string
      slug: string
    }
  }>
  publishedDate: string
  readingTime: number
  metaDescription?: string | null
  featured: boolean
}

export interface BlogCategory {
  name: string
  slug: string
  description?: string | null
}

export interface BlogTag {
  name: string
  slug: string
  description?: string | null
}

// Get all blog posts
export async function getBlogPosts(preview = false): Promise<BlogPost[]> {
  try {
    const currentClient = preview ? previewClient : client
    const entries = await currentClient.getEntries({
      content_type: 'blogPost',
      order: '-fields.publishedDate',
      include: 2
    })

    return entries.items
      .filter((item: any) => item.fields.title && item.fields.slug)
      .map((item: any) => ({
        title: item.fields.title || '',
        slug: item.fields.slug || '',
        excerpt: item.fields.excerpt || '',
        content: item.fields.content || null,
        featuredImage: item.fields.featuredImage || null,
        author: item.fields.author || null,
        category: item.fields.category || null,
        tags: item.fields.tags || [],
        publishedDate: item.fields.publishedDate || new Date().toISOString(),
        readingTime: item.fields.readingTime || 5,
        metaDescription: item.fields.metaDescription || null,
        featured: item.fields.featured || false
      }))
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

// Get a single blog post by slug
export async function getBlogPost(slug: string, preview = false): Promise<BlogPost | null> {
  try {
    const currentClient = preview ? previewClient : client
    const entries = await currentClient.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      include: 2
    })

    if (entries.items.length === 0) {
      return null
    }

    const item = entries.items[0] as any
    return {
      title: item.fields.title || '',
      slug: item.fields.slug || '',
      excerpt: item.fields.excerpt || '',
      content: item.fields.content || null,
      featuredImage: item.fields.featuredImage || null,
      author: item.fields.author || null,
      category: item.fields.category || null,
      tags: item.fields.tags || [],
      publishedDate: item.fields.publishedDate || new Date().toISOString(),
      readingTime: item.fields.readingTime || 5,
      metaDescription: item.fields.metaDescription || null,
      featured: item.fields.featured || false
    }
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

// Get featured blog posts
export async function getFeaturedBlogPosts(limit = 3, preview = false): Promise<BlogPost[]> {
  try {
    const currentClient = preview ? previewClient : client
    const entries = await currentClient.getEntries({
      content_type: 'blogPost',
      'fields.featured': true,
      order: '-fields.publishedDate',
      limit,
      include: 2
    })

    return entries.items
      .filter((item: any) => item.fields.title && item.fields.slug)
      .map((item: any) => ({
        title: item.fields.title || '',
        slug: item.fields.slug || '',
        excerpt: item.fields.excerpt || '',
        content: item.fields.content || null,
        featuredImage: item.fields.featuredImage || null,
        author: item.fields.author || null,
        category: item.fields.category || null,
        tags: item.fields.tags || [],
        publishedDate: item.fields.publishedDate || new Date().toISOString(),
        readingTime: item.fields.readingTime || 5,
        metaDescription: item.fields.metaDescription || null,
        featured: item.fields.featured || false
      }))
  } catch (error) {
    console.error('Error fetching featured blog posts:', error)
    return []
  }
}

// Get blog posts by category
export async function getBlogPostsByCategory(categorySlug: string, preview = false): Promise<BlogPost[]> {
  try {
    const currentClient = preview ? previewClient : client
    const entries = await currentClient.getEntries({
      content_type: 'blogPost',
      'fields.category.fields.slug': categorySlug,
      order: '-fields.publishedDate',
      include: 2
    })

    return entries.items
      .filter((item: any) => item.fields.title && item.fields.slug)
      .map((item: any) => ({
        title: item.fields.title || '',
        slug: item.fields.slug || '',
        excerpt: item.fields.excerpt || '',
        content: item.fields.content || null,
        featuredImage: item.fields.featuredImage || null,
        author: item.fields.author || null,
        category: item.fields.category || null,
        tags: item.fields.tags || [],
        publishedDate: item.fields.publishedDate || new Date().toISOString(),
        readingTime: item.fields.readingTime || 5,
        metaDescription: item.fields.metaDescription || null,
        featured: item.fields.featured || false
      }))
  } catch (error) {
    console.error('Error fetching blog posts by category:', error)
    return []
  }
}

// Get all blog categories
export async function getBlogCategories(preview = false): Promise<BlogCategory[]> {
  try {
    const currentClient = preview ? previewClient : client
    const entries = await currentClient.getEntries({
      content_type: 'blogCategory',
      order: 'fields.name'
    })

    return entries.items
      .filter((item: any) => item.fields.name && item.fields.slug)
      .map((item: any) => ({
        name: item.fields.name || '',
        slug: item.fields.slug || '',
        description: item.fields.description || null
      }))
  } catch (error) {
    console.error('Error fetching blog categories:', error)
    return []
  }
}

// Get all blog tags
export async function getBlogTags(preview = false): Promise<BlogTag[]> {
  try {
    const currentClient = preview ? previewClient : client
    const entries = await currentClient.getEntries({
      content_type: 'blogTag',
      order: 'fields.name'
    })

    return entries.items
      .filter((item: any) => item.fields.name && item.fields.slug)
      .map((item: any) => ({
        name: item.fields.name || '',
        slug: item.fields.slug || '',
        description: item.fields.description || null
      }))
  } catch (error) {
    console.error('Error fetching blog tags:', error)
    return []
  }
}
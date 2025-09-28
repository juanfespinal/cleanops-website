import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'
import { motion } from 'framer-motion'

interface BlogContentProps {
  content: any
}

const BlogContent = ({ content }: BlogContentProps) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: any) => <strong className="font-semibold text-gray-900">{text}</strong>,
      [MARKS.ITALIC]: (text: any) => <em className="italic">{text}</em>,
      [MARKS.CODE]: (text: any) => (
        <code className="bg-gray-100 text-primary px-2 py-1 rounded font-mono text-sm">
          {text}
        </code>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <p className="mb-6 text-gray-700 leading-relaxed text-lg">{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node: any, children: any) => (
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 mt-12 font-display">
          {children}
        </h1>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: any) => (
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-10 font-display">
          {children}
        </h2>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: any) => (
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 mt-8 font-display">
          {children}
        </h3>
      ),
      [BLOCKS.HEADING_4]: (node: any, children: any) => (
        <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-6 font-display">
          {children}
        </h4>
      ),
      [BLOCKS.HEADING_5]: (node: any, children: any) => (
        <h5 className="text-lg md:text-xl font-bold text-gray-900 mb-3 mt-6 font-display">
          {children}
        </h5>
      ),
      [BLOCKS.HEADING_6]: (node: any, children: any) => (
        <h6 className="text-base md:text-lg font-bold text-gray-900 mb-3 mt-4 font-display">
          {children}
        </h6>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: any) => (
        <ul className="mb-6 space-y-2 list-none pl-0">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: any) => (
        <ol className="mb-6 space-y-2 list-decimal list-inside pl-4">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
        <li className="flex items-start space-x-3 text-gray-700 leading-relaxed">
          <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-3"></span>
          <span className="flex-1">{children}</span>
        </li>
      ),
      [BLOCKS.QUOTE]: (node: any, children: any) => (
        <blockquote className="border-l-4 border-primary bg-primary/5 p-6 my-8 rounded-r-lg">
          <div className="text-gray-800 italic text-lg leading-relaxed">{children}</div>
        </blockquote>
      ),
      [BLOCKS.HR]: () => (
        <hr className="my-12 border-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const { file, title } = node.data.target.fields
        const imageUrl = file.url.startsWith('//') ? `https:${file.url}` : file.url

        return (
          <motion.figure
            className="my-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={imageUrl}
              alt={title || ''}
              className="w-full rounded-xl shadow-lg"
            />
            {title && (
              <figcaption className="text-center text-gray-600 text-sm mt-3 italic">
                {title}
              </figcaption>
            )}
          </motion.figure>
        )
      },
      [INLINES.HYPERLINK]: (node: any, children: any) => (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary-dark underline decoration-primary/30 hover:decoration-primary transition-colors"
        >
          {children}
        </a>
      ),
    },
  }

  if (!content) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No hay contenido disponible.</p>
      </div>
    )
  }

  return (
    <motion.div
      className="prose prose-lg max-w-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {documentToReactComponents(content, options)}
    </motion.div>
  )
}

export default BlogContent
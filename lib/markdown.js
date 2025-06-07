import DOMPurify from "dompurify"
import { marked } from "marked"

// Configure marked options
marked.setOptions({
  breaks: true,
  gfm: true,
  headerIds: false,
})

// Custom renderer to handle code blocks with syntax highlighting
const renderer = new marked.Renderer()

renderer.code = (code, language) => {
  return `<pre><code class="language-${language || "text"}">${code}</code></pre>`
}

marked.use({ renderer })

export function markdownToHtml(markdown) {
  // Convert markdown to HTML
  const rawHtml = marked(markdown)

  // Sanitize HTML to prevent XSS
  const sanitizedHtml = typeof window !== "undefined" ? DOMPurify.sanitize(rawHtml) : rawHtml // Server-side rendering fallback

  return sanitizedHtml
}

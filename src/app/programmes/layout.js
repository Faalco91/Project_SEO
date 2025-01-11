import { metadata as pageMetadata } from './metadata'
import { jsonLd } from './schema'

export const metadata = pageMetadata

export default function PouvoirsLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
} 
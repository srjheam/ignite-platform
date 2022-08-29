import { CaretRight } from "phosphor-react"

interface ContentCardProps {
  href: string
  aside: any
  title: string
  description: string
}

export function ContentCard(props: ContentCardProps) {
  return (
    <a
      href={props.href}
      className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"   
    >
      <div className="bg-green-700 h-full p-6 flex items-center">
        {props.aside}
      </div>

      <div className="py-6 leading-relaxed">
        <strong className="text-2xl">
          {props.title}
        </strong>
        <p className="text-sm text-gray-200 mt-2">
          {props.description}
        </p>
      </div>

      <div className="h-full p-6 flex items-center">
        <CaretRight size={24} />
      </div>
    </a>
  )
}

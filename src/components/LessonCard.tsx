import { format, isPast } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CheckCircle, Lock } from 'phosphor-react'
import { Link, useParams } from 'react-router-dom'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function LessonCard(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>()

  const isLessonAvaiable = isPast(props.availableAt);
  const availableDateFormated = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  })
  const isActiveLesson = slug === props.slug

  return (
    <div>
      <span className="text-gray-300">
        {availableDateFormated}
      </span>

      <Link
        to={`/event/lessons/${props.slug}`}
        className={`relative rounded border border-gray-500 p-4 mt-2 block
          ${isLessonAvaiable
            ? "hover:border-green-500 transition-colors"
            : "pointer-events-none"
          }
          ${isActiveLesson && "bg-green-500 border-green-500 before:content-[''] before:block before:absolute before:top-[50%] before:left-[-7px] before:w-[13.75px] before:h-[13.75px] before:rotate-45 before:translate-y-[-50%] before:bg-green-500 before:rounded-sm"}
        `}
      >
        <header className="flex items-center justify-between">
          {isLessonAvaiable ? (
              <span className={`text-sm text-blue-500 font-medium flex items-center gap-2
                ${isActiveLesson && "text-white"}
              `}>
                <CheckCircle size={20} />
                Conteúdo Liberado
              </span>
            ) : (
              <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                <Lock size={20} />
                Em Breve
              </span>
            )
          }
          <span className={`text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold
            ${isActiveLesson && "border-white"}
          `}>
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <span className={`font-bold text-gray-200 mt-5 block
          ${isActiveLesson && "text-white"}
        `}>
          {props.title}
        </span>
      </Link>
    </div>
  )
}

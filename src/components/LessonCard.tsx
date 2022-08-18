import { CheckCircle, Lock } from 'phosphor-react'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function LessonCard(props: LessonProps) {
  const isLessonAvaiable = true;
  
  return (
    <div>
      <span className="text-gray-300">
        {props.availableAt.toDateString()}
      </span>

      <a
        href="#"
        className="rounded border border-gray-500 p-4 mt-2 block"
      >
        <header className="flex items-center justify-between">
          {isLessonAvaiable ? (
              <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
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
          <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold     ">
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <span className="font-bold text-gray-200 mt-5 block">
          {props.title}
        </span>
      </a>
    </div>
  )
}
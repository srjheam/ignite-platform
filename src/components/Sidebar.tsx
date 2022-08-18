import { LessonCard } from "./LessonCard";

export function Sidebar() {
  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        <LessonCard
          title='Abertura'
          availableAt={new Date()}
          slug='abertura'
          type='class'
        />
      </div>
    </aside>
  )
}

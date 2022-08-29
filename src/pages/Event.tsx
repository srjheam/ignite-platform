import { Header } from "../components/Header";
import { LessonCard } from "../components/LessonCard";
import { LessonDetails } from "../components/LessonDetails";
import { Player } from "../components/Player";
import { Sidebar } from "../components/Sidebar";

export function Event() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <LessonDetails />
        <Sidebar />
      </main>
    </div>
  )
}

import { Header } from "../components/Header";
import { LessonCard } from "../components/LessonCard";
import { Player } from "../components/Player";
import { Sidebar } from "../components/Sidebar";

export function Event() {
  return (
    <>
      <Header />
      <LessonCard />
      <Player />
      <Sidebar />
    </>
  )
}

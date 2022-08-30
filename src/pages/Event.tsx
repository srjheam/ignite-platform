import { gql, useQuery } from "@apollo/client";
import { useNavigate, useParams,  } from "react-router-dom";
import { Header } from "../components/Header";
import { LessonDetails } from "../components/LessonDetails";
import { Sidebar } from "../components/Sidebar";

function getFirstLessonSlug() {
  const GET_FIRST_LESSONS_SLUG_QUERY = gql`
    query {
      lessons(orderBy: availableAt_ASC, stage: PUBLISHED, first: 1) {
        slug
      }
    }
  `

  interface GetFirstLessonsSlugQueryResponse {
    lessons: {
      slug: string
    }[]
  }

  const { data } = useQuery<GetFirstLessonsSlugQueryResponse>(GET_FIRST_LESSONS_SLUG_QUERY)

  return data?.lessons[0].slug;
}

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  
  // when slug is null, redirect page to first lesson
  if (!slug) {
    const slug = getFirstLessonSlug()
    const navigate = useNavigate()
    
    navigate(`/event/lessons/${slug}`)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <LessonDetails slug={slug ?? ''} />
        <Sidebar />
      </main>
    </div>
  )
}

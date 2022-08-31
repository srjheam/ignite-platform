import { gql, useQuery } from "@apollo/client";
import { DiscordLogo, Lightning, FileArrowDown, ImageSquare } from "phosphor-react";
import { useGetLessonBySlugQuery } from "../graphql/generated";
import { Button } from "./Button";
import { ContentCard } from "./ContentCard";
import { Footer } from "./Footer";
import { Player } from "./Player";

export function LessonDetails(props: { slug: string }) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.slug
    }
  })
  
  if (!data || !data.lesson) {
    return (
      <div className="flex-1">
        <span className="text-gray-200">Carregando...</span>
      </div>
    )
  }  

  return (
    <div className="flex-1">
      <Player videoId={data.lesson.videoId} />

      <div className="p-8 pb-0 max-w-[1100px] mx-auto">
        <div className="flex items-start flex-wrap gap-16 lg:flex-nowrap">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              {data.lesson.title}
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>
          
            {data.lesson.teacher &&
              <div className="flex items-center gap-4 mt-6">
                <img
                  src={data.lesson.teacher.avatarUrl}
                  alt="Teacher's profile picture"
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                />

                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                  <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
                </div>
              </div>
            }
          </div>

          <div className="w-full flex flex-col gap-4 lg:w-auto">
            <Button href="#" variant="primary">
              <DiscordLogo size={24} />
              Comunidade do Discord
            </Button>
            <Button href="#" variant="secondary">
              <Lightning size={24} />
              Acesse o desafio
            </Button>
          </div>
        </div>

        <div className="gap-8 my-20 grid grid-cols-1 xl:grid-cols-2">
          <ContentCard
            href="#"
            aside={<FileArrowDown size={40} />}
            title="Material Complementar"
            description="Acesse o material complementar para acelerar seu desenvolvimento"
          />
          <ContentCard
            href="#"
            aside={<ImageSquare size={40} />}
            title="Wallpapers exclusivos"
            description="Baixe wallpapers exclusivos e personalize a sua máquina"
          />
        </div>

        <Footer />
      </div>
    </div>
  )
}

import { DiscordLogo, Lightning, FileArrowDown, ImageSquare } from "phosphor-react";
import { Button } from "./Button";
import { ContentCard } from "./ContentCard";
import { Player } from "./Player";

export function LessonDetails() {
  return (
    <div className="flex-1">
      <Player />

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              Aberturaaaaa
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Praahasdadjasndaskdnasdasndaskdnasdlaskdnlaksdnaslldn
            </p>
          
            <div className="flex items-center gap-4 mt-6">
              <img
                src="https://github.com/srjheam.png"
                alt="Teacher's profile picture"
                className="h-16 w-16 rounded-full border-2 border-blue-500"
              />

              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">Jheam BláBlá</strong>
                <span className="text-gray-200 text-sm block">He's the one</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
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

        <div className="gap-8 mt-20 grid grid-cols-2">
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
      </div>
    </div>
  )
}

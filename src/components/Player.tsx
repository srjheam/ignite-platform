import { DefaultUi, Player as VimePlayer, Youtube } from "@vime/react"

import '@vime/core/themes/default.css'

export function Player(props: { videoId: string }) {
  return (
    <div className="bg-black flex justify-center">
      <div className="h-full w-full max-h-[60vh] max-w-[1100px] aspect-video bg-gray-800">
        <VimePlayer>
          <Youtube videoId={props.videoId} />
          <DefaultUi />
        </VimePlayer>
      </div>
    </div>
  )
}

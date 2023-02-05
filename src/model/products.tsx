import { UilChannel } from '@iconscout/react-unicons'
import { UilPlane } from '@iconscout/react-unicons'
import { UilArrow } from '@iconscout/react-unicons'

export const products = [
    {
        name: "Omnia",
        description: "Linha de dispositivos inteligentes e inovadores em IoT. Administre seus equipamentos e sua rotina através do gerenciamento automatizado. De qualquer lugar do mundo.",
        Emoji: () => <UilChannel size={28}/>,
        href: "/"
    },
    {
        name: "Falken",
        description: "Tecnologia desenvolvida para auxiliar no processo de transformação digital em regiões e comunidades que não possuem acesso à informação.",
        Emoji: () => <UilPlane size={28} />,
        href: "https://www.youtube.com/watch?v=bJhPNFamNwk"
    },
    {
        name: "Andrômeda",
        description: "Serviço para desenvolvimento de sites e landing pages que fornece soluções visuais impactantes para seu negócio.",
        Emoji: () => <UilArrow size={28} />,
        href: "/"
    },
]
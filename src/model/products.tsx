import { UilBolt } from '@iconscout/react-unicons'
import { UilPlane } from '@iconscout/react-unicons'
import { UilSitemap } from '@iconscout/react-unicons'
import { UilTear } from '@iconscout/react-unicons'
import { UilWatch } from '@iconscout/react-unicons'

export const products = [
    {
        name: "Omnia",
        description: "Dolor ex dolore enim exercitation. Consequat consectetur dolor laboris sit exercitation magna pariatur pariatur aliquip enim reprehenderit adipisicing.",
        Emoji: () => <UilBolt size={28}/>
    },
    {
        name: "Falken",
        description: "Ex tempor commodo exercitation esse minim irure proident nostrud ea laborum irure velit. Veniam proident pariatur reprehenderit elit pariatur commodo deserunt aute ullamco.",
        Emoji: () => <UilPlane size={28} />
    },
    {
        name: "Andromeda",
        description: "Minim nisi pariatur dolor excepteur veniam velit ex id ex incididunt sunt est pariatur.",
        Emoji: () => <UilSitemap size={28} />
    },
    {
        name: "Maya",
        description: "Tempor duis esse ad irure aliquip tempor aliquip minim. Eu ut amet aliquip sit consectetur aliquip non ipsum occaecat elit nulla eiusmod.",
        Emoji: () => <UilTear size={28} />
    },
    {
        name: "Rai Watch",
        description: "Nostrud aute anim culpa qui. Veniam dolor id aliquip amet Lorem qui ullamco irure mollit.",
        Emoji: () => <UilWatch size={28} />
    },
]
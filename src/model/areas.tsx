import { UilGlobe } from '@iconscout/react-unicons'
import { UilSignal } from '@iconscout/react-unicons'
import { UilDocker } from '@iconscout/react-unicons'

export const areas = [
    {
        tagName: "TELECOM",
        AreaIcon: () => <UilGlobe size={40}/>
    },
    {
        tagName: "SOFTWARE",
        AreaIcon: () => <UilSignal size={40} />
    },
    {
        tagName: "IoT",
        AreaIcon: () => <UilDocker size={40} />
    },
]
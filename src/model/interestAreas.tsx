import { UilBracketsCurly } from '@iconscout/react-unicons'
import { UilCloudWifi } from '@iconscout/react-unicons'
import { UilSignal } from '@iconscout/react-unicons'

export const interestAreas = [
    {
        tagName: "TELECOM",
        AreaIcon: () => <UilSignal size={40}/>
    },
    {
        tagName: "SOFTWARE",
        AreaIcon: () => <UilBracketsCurly size={40} />
    },
    {
        tagName: "IoT",
        AreaIcon: () => <UilCloudWifi size={40} />
    },
]
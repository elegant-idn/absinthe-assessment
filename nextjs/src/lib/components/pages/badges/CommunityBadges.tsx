import {Flex} from "@radix-ui/themes";
import BadgeCard from "~/lib/components/core/BadgeCard";
import AppText from "~/lib/components/core/AppText";

const badgeData = [
    {
        id: 1,
        title: 'Discord OG',
        image: '/assets/Image (6).svg',
        actions: null,
        state: '1.15x',
        active: true
    },

    {
        id: 2,
        title: 'Liquidity Machine',
        image: '/assets/Image (1).svg',
        actions: 3,
        state: '1.15x',
        active: true
    },

    {
        id: 3,
        title: 'Income Engineer',
        image: '/assets/Image (15).svg',
        actions: 3,
        state: '2x',
        active: false
    },

    {
        id: 4,
        title: 'Pudgy OG',
        image: '/assets/Image (16).svg',
        actions: 0,
        state: '200 Points',
        active: false
    },

    {
        id: 5,
        title: 'Pathtjnaer OG',
        image: '/assets/Image (17).svg',
        actions: 0,
        state: '1.15x',
        active: false
    },

    {
        id: 6,
        title: 'Rookie Badge',
        image: '/assets/Image (18).svg',
        actions: 1,
        state: '150 Points',
        active: false
    },

    {
        id: 7,
        title: 'Check Es',
        image: '/assets/Image (19).svg',
        actions: null,
        state: '',
        active: false
    }
]

// export default function CommunityBadges() {


//     return <div className="flex flex-col rounded-xl overflow-hidden">
//         <div className="h-9 flex items-center px-4 bg-elevation-2-dark border-b border-elevation-bg-dark text-text-primary-dark text-xs font-semibold">Community Badges</div>

//         <div className="flex flex-col gap-4 pt-4 pb-[6px] bg-elevation-1-dark ">
//             <div className="flex gap-2 overflow-x-hidden px-4">
//                 {
//                     badgeData.map(({ id, title, image, actions, state }) => (<BadgeCard key={id} title={title} image={image} actions={actions} state={state} />))
//                 }
//             </div>

//             <div className="w-full px-4 flex items-center h-[24px] ">
//                 <div className="w-full h-1 bg-elevation-3-dark rounded-full overflow-hidden">
//                     <div className="w-[200px] h-full bg-elevation-2-dark"></div>
//                 </div>
//             </div>
//         </div>
//     </div>
// }


export default function CommunityBadges() {


    return <Flex direction={"column"} className="rounded-xl overflow-hidden">

        <Flex height="36px" align="center" px="4" className="bg-elevation-2-dark border-b border-elevation-bg-dark">
            <AppText size="1" className="text-text-primary-dark">
                Community Badges
            </AppText>
        </Flex>

        <Flex direction="column" gap="4" pt="2px" pb="6px" className="bg-elevation-1-dark">
            <Flex wrap={{initial: "wrap", md: "nowrap"}} gap={{ initial : "1", md : "2" }} px="4" pt="4" className="overflow-x-hidden">
                {
                    badgeData.map(({id, title, image, actions, state, active}) => (
                        <BadgeCard key={id} title={title} image={image} actions={actions} state={state}
                                   active={active}/>))
                }
            </Flex>

            <Flex px="4" align="center" height="24px">
                <div className="w-full h-1 bg-elevation-3-dark rounded-full overflow-hidden">
                    <div className="w-[200px] h-full bg-elevation-2-dark"></div>
                </div>
            </Flex>
        </Flex>
    </Flex>
}
import {Flex, Text} from "@radix-ui/themes";
import Image from "next/image";
import MetricItem from '~/lib/components/core/MetricItem'
import AppBadge from "~/lib/components/core/AppBadge";
import AppText from "~/lib/components/core/AppText";
import {BadgeVariantType} from "~/lib/enums";
import Carousel from "~/lib/components/core/Carousel";


// export default function Preview() {
//     return <div className="p-4 rounded-3xl gap-3 flex flex-col bg-elevation-2-dark">

//         <div className="px-2 h-[244px]">

//         </div>


//         <div className="flex flex-col gap-3 ">
//             <div className="flex gap-2 items-center">
//                 <div className="flex-grow">
//                     <span className=" text-text-primary-dark text-sm font-semibold">How to Earn: </span> 
//                     <span className=" text-text-secondary-dark text-sm">Complete the actions for the badge, no specific order needed.</span></div>    
//                 <div className=" bg-elevation-3-dark rounded-full h-6 flex items-center px-2 py-0 text-xs text-text-secondary-dark">1/3 Completed</div>
//                 <div className=" bg-primary-disabled-dark bg-opacity-20 rounded-full h-6 flex items-center px-2 py-0 text-primary-hover text-xs">Total Earnings: 3,000</div>
//             </div>


//             <Flex gap="4">
//                 <MetricItem completed = {true} unit = {"$50"} currency = {"USDT/ETH"} />
//                 <MetricItem completed = {false} unit = {"$50"} currency = {"LINK/ETH"} />
//                 <MetricItem completed = {false} unit = {"$50"} currency = {"WBTC/ETH"} />
//             </Flex>

//             <div className='flex gap-1 py-2 items-center '>
//                 <button className='flex-grow h-1 bg-primary-dark rounded-full'></button>
//                 <button className='flex-grow h-1 bg-elevation-3-dark rounded-full hover:bg-primary-dark transition-none duration-150'></button>
//                 <button className='flex-grow h-1 bg-elevation-3-dark rounded-full hover:bg-primary-dark transition-none duration-150'></button>
//             </div>
//         </div>
//     </div>
// }


export default function Preview() {
    return <Flex direction="column" p="4" gap="3" className="rounded-3xl bg-elevation-1-dark relative">

        <Carousel/>

    </Flex>
}
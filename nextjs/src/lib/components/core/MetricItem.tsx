import {Box, Flex, Text} from "@radix-ui/themes";
import AppBadge from "./AppBadge";
import AppText from "./AppText";
import type {MetricItemProps} from "~/lib/types";

// export default function MetricItem({ completed, unit, currency }: MetricItem) {
//     return <div className="flex flex-col bg-elevation-2-dark rounded-xl min-w-[384px] overflow-hidden opacity-30">

//         <div className={`bg-elevation-3-dark border-b border-elevation-bg-dark w-full h-9 flex justify-between items-center ${completed ? 'px-4' : 'px-6'}`}>
//             <div className=" text-text-secondary-dark text-sm font-semibold">Action</div>
//             <div>
//                 {completed && (<div className="py-1 px-2 h-6 bg-states-success-main-dark bg-opacity-10 text-states-success-main-dark flex items-center justify-center rounded-full text-xs font-semibold">
//                     Completed
//                 </div>)}

//             </div>
//         </div>

// <div className="px-4 pt-1 pb-2 text-text-secondary-dark text-sm">
//     Provide at least {unit} Liquidity to {currency}
// </div>
//     </div>
// }


export default function MetricItem({completed, unit, currency}: MetricItemProps) {
    return <Box maxWidth="384px" minWidth={{initial: 'auto', md: "384px"}}>
        <Flex direction="column" className="bg-elevation-2-dark rounded-xl overflow-hidden">

            <Flex px={completed ? '4' : '5'} height="36px" justify="between" align="center"
                  className="bg-elevation-3-dark border-b border-elevation-bg-dark">
                <AppText size="2" className="text-text-secondary-dark">Action</AppText>

                {completed ? <AppBadge>Completed</AppBadge> : <div></div>}
            </Flex>


            <Flex px="4" pt="1" pb="2" className="text-text-secondary-dark">
                <Text size="2">Provide at least {unit} Liquidity to {currency}</Text>
            </Flex>

        </Flex>
    </Box>
}
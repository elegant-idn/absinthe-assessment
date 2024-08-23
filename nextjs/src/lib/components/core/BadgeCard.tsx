import { Text, Box, Flex } from "@radix-ui/themes";
import Image from "next/image";
import type { Badge } from "~/lib/types";
import AppText from "./AppText";

// export default function Badge({title, actions, image, state}: Badge){
//     return <div className="shrink min-w-[178px] rounded-xl bg-elevation-3-dark border border-states-success-main-dark flex flex-col overflow-hidden">
//         <div className="w-full h-8 bg-elevation-2-dark flex justify-between items-center px-2 ">
//             <span className="text-text-primary-dark text-xs">{title}</span>
//             <span className=" text-text-secondary-dark text-right text-xs">{actions} Actions</span>
//         </div>

//         <div className="w-full flex py-6 justify-center items-center">
//             <Image src={image} width = {0} height = {0} className="w-16 h-16 rounded-full" alt="" unoptimized/>
//         </div>

//         <div className="flex items-center justify-center w-full h-8 px-2 bg-states-success-main-dark bg-opacity-10">
//             <div className="h-6 w-full flex justify-center items-center text-xs text-states-success-main-dark">
//                 {state}
//             </div>
//         </div>
//     </div>
// } 

export default function Badge({ title, actions, image, state, active }: Badge) {
    return <Box maxWidth={{initial : "auto", md : "178px"} } minWidth="178px">
        <Flex direction="column" className={`bg-elevation-3-dark rounded-xl overflow-hidden border border-states-success-main-dark ${active ? '' : 'border-opacity-0'}`}>
            <Flex height="32px" align="center" justify={actions === null ? "center" : "between"} px="2" className="bg-elevation-2-dark">
                <AppText size="1" className="text-text-primary-dark">{title}</AppText>
                {actions !== null && (<AppText size="1" className="  text-text-secondary-dark">
                    {actions !== 0 && (<>{actions} Actions</>)}
                </AppText>)}
            </Flex>


            <Flex justify="center" align="center" pt="4" pb = "22px" className="">
                <Image src={image} width={0} height={0} className={`w-[72px] h-[72px] rounded-full border-4 border-states-success-main-dark ${active ? '' : 'border-opacity-0'}`} alt="" unoptimized />
            </Flex>

            <Flex height="32px" align="center" justify="center" px="1" className="bg-states-success-main-dark bg-opacity-10">
                <Text size='1' className="text-states-success-main-dark">{state}</Text>
            </Flex>
        </Flex>
    </Box>
} 
import {Flex, Text} from "@radix-ui/themes";
import Image from "next/image";
import MetricItem from '~/lib/components/core/MetricItem'
import AppBadge from "~/lib/components/core/AppBadge";
import AppText from "~/lib/components/core/AppText";
import {BadgeVariantType} from "~/lib/enums";


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
    return <Flex direction="column" p="4" gap="3" className="rounded-3xl bg-elevation-1-dark">

        <Flex height={{initial: '309px', md: '244px'}} px={{initial: '0', md: '2'}}
              className="relative" justify="between">

            <button
                className="min-w-[47px] h-full rounded-full flex justify-center items-center bg-elevation-3-dark cursor-pointer hover:brightness-125">
                <Image width={0} height={0} src="/assets/chevron (down).svg" className="w-[23px] h-[23px]" alt=""/>
            </button>

            <div
                className="relative md:absolute w-full h-full flex md:items-center justify-between top-0 left-0 px-4 md:px-[100px]">
                <Flex direction="column" gap="1" className="!hidden md:!flex">

                    <div
                        className=" bg-elevation-3-dark bg-opacity-30 rounded-xl flex items-center justify-center w-[62px] h-[58px]">
                        <Image src="/assets/Image (4).svg" width={0} height={0}
                               className="w-8 h-8 rounded-full brightness-50" alt=""/>
                    </div>

                    <div className="bg-elevation-3-dark bg-opacity-30 rounded-xl flex flex-col px-2 py-1 gap-[4px]">
                        <div className="flex gap-[2px]">
                            <div className="flex-grow h-[4px] bg-text-disabled-dark bg-opacity-30 rounded-full"></div>
                            <div className="flex-grow h-[4px] bg-text-disabled-dark bg-opacity-30 rounded-full"></div>
                            <div className="flex-grow h-[4px] bg-text-disabled-dark bg-opacity-30 rounded-full"></div>
                        </div>

                        <div className="h-[4px] bg-text-disabled-dark bg-opacity-30 rounded-full"></div>
                    </div>
                </Flex>


                <Flex direction="column" gap="1" className="!hidden md:!flex">

                    <div
                        className=" bg-elevation-3-dark bg-opacity-30 rounded-xl flex items-center justify-center w-[78px] h-[78px]">
                        <Image src="/assets/Image (20).svg" width={0} height={0}
                               className="w-10 h-10 rounded-full brightness-50" alt=""/>
                    </div>

                    <div className="bg-elevation-3-dark bg-opacity-30 rounded-xl flex flex-col px-2 py-1 gap-[4px]">
                        <div className="flex gap-[3px]">
                            <div className="flex-grow h-[5px] bg-text-disabled-dark bg-opacity-30"
                                 style={{borderRadius: '1.28px'}}></div>
                            <div className="flex-grow h-[5px] bg-text-disabled-dark bg-opacity-30"
                                 style={{borderRadius: '1.28px'}}></div>
                            <div className="flex-grow h-[5px] bg-text-disabled-dark bg-opacity-30"
                                 style={{borderRadius: '1.28px'}}></div>
                        </div>

                        <div className="h-[5px] bg-text-disabled-dark bg-opacity-30"
                             style={{borderRadius: '1.28px'}}></div>
                    </div>
                </Flex>


                <Flex direction="column" gap="1" className="!hidden md:!flex">

                    <div
                        className=" bg-elevation-3-dark bg-opacity-30 rounded-xl flex items-center justify-center w-[96px] h-[96px]">
                        <Image src="/assets/Image.svg" width={0} height={0}
                               className="w-12 h-12 rounded-full brightness-50" alt=""/>
                    </div>

                    <div className="bg-elevation-3-dark bg-opacity-30 rounded-xl flex flex-col px-2 py-1 gap-[4px]">
                        <div className="flex gap-[4px]">
                            <div className="flex-grow h-[7px] bg-text-disabled-dark bg-opacity-30 rounded-full"></div>
                            <div className="flex-grow h-[7px] bg-text-disabled-dark bg-opacity-30 rounded-full"></div>
                            <div className="flex-grow h-[7px] bg-text-disabled-dark bg-opacity-30 rounded-full"></div>
                        </div>

                        <div className="h-[7px] bg-text-disabled-dark bg-opacity-30 rounded-full"></div>
                    </div>
                </Flex>


                <Flex direction="column" gap="2" className="w-full md:w-auto">

                    <Flex direction="column" justify="start"
                          className={`w-full flex-grow  md:flex-grow-0 md:min-w-[178px] bg-elevation-3-dark rounded-xl overflow-hidden border border-states-success-main-dark border-opacity-0`}>
                        <Flex height="32px" align="center" justify={"between"} px="2" className="bg-elevation-2-dark">
                            <AppText size="1" className="text-text-primary-dark">{"Liquidity Machine"}</AppText>
                            <AppText size="1" className="  text-text-secondary-dark">
                                {3} Actions
                            </AppText>
                        </Flex>


                        <Flex justify="center" align="center" pt="4" pb="22px" className="flex-grow md:flex-grow-0">
                            <Image src={"/assets/Image (1).svg"} width={0} height={0}
                                   className={`w-[72px] h-[72px] rounded-full border-4 border-states-success-main-dark border-opacity-0`}
                                   alt="" unoptimized/>
                        </Flex>

                        <Flex height={{initial: 'auto', md: '32px'}} align="center" justify="center"
                              px={{initial: "4", md: "1"}} py={{initial: "2", md: "auto"}}
                              className="bg-states-success-main-dark bg-opacity-10">
                            <Text size='1' className="text-states-success-main-dark">{"1.15x"}</Text>
                        </Flex>
                    </Flex>
                    <div
                        className="w-full md:max-w-[178px] bg-elevation-3-dark rounded-xl flex flex-col px-4  py-1 gap-[2px]">
                        <AppText size="1" align="center" className="text-text-primary-dark">Reward Details</AppText>
                        <AppText size="1" align="center" className=" text-text-secondary-dark">Liquidity Provision to
                            ETH/USDC</AppText>
                    </div>

                </Flex>


                <Flex direction="column" gap="1" className="!hidden md:!flex">

                    <div
                        className=" bg-elevation-3-dark bg-opacity-30 rounded-xl flex items-center justify-center w-[96px] h-[96px]">
                        <Image src="/assets/Image (6).svg" width={0} height={0}
                               className="w-12 h-12 rounded-full brightness-50" alt=""/>
                    </div>

                    <div className="bg-elevation-3-dark bg-opacity-30 rounded-xl flex flex-col px-2 py-1 gap-[4px]">
                        <div className="flex gap-[4px]">
                            <div className="flex-grow h-[7px] bg-text-disabled-dark bg-opacity-30 rounded-full"></div>
                            <div className="flex-grow h-[7px] bg-text-disabled-dark bg-opacity-30 rounded-full"></div>
                            <div className="flex-grow h-[7px] bg-text-disabled-dark bg-opacity-30 rounded-full"></div>
                        </div>

                        <div className="h-[7px] bg-text-disabled-dark bg-opacity-30 rounded-full"></div>
                    </div>
                </Flex>


                <Flex direction="column" gap="1" className="!hidden md:!flex">

                    <div
                        className=" bg-elevation-3-dark bg-opacity-30 rounded-xl flex items-center justify-center w-[78px] h-[78px]">
                        <Image src="/assets/Image (8).svg" width={0} height={0}
                               className="w-10 h-10 rounded-full brightness-50" alt=""/>
                    </div>

                    <div className="bg-elevation-3-dark bg-opacity-30 rounded-xl flex flex-col px-2 py-1 gap-[4px]">
                        <div className="flex gap-[3px]">
                            <div className="flex-grow h-[5px] bg-text-disabled-dark bg-opacity-30"
                                 style={{borderRadius: '1.28px'}}></div>
                            <div className="flex-grow h-[5px] bg-text-disabled-dark bg-opacity-30"
                                 style={{borderRadius: '1.28px'}}></div>
                            <div className="flex-grow h-[5px] bg-text-disabled-dark bg-opacity-30"
                                 style={{borderRadius: '1.28px'}}></div>
                        </div>

                        <div className="h-[5px] bg-text-disabled-dark bg-opacity-30"
                             style={{borderRadius: '1.28px'}}></div>
                    </div>
                </Flex>

                <Flex direction="column" gap="1" className="!hidden md:!flex">

                    <div
                        className=" bg-elevation-3-dark bg-opacity-30 rounded-xl flex items-center justify-center w-[62px] h-[58px]">
                        <Image src="/assets/Image (10).svg" width={0} height={0}
                               className="w-8 h-8 rounded-full brightness-50" alt=""/>
                    </div>

                    <div className="bg-elevation-3-dark bg-opacity-30 rounded-xl flex flex-col px-2 py-1 gap-[4px]">
                        <div className="flex gap-[2px]">
                            <div className="flex-grow h-[4px] bg-text-disabled-dark bg-opacity-30 rounded-full"></div>
                            <div className="flex-grow h-[4px] bg-text-disabled-dark bg-opacity-30 rounded-full"></div>
                            <div className="flex-grow h-[4px] bg-text-disabled-dark bg-opacity-30 rounded-full"></div>
                        </div>

                        <div className="h-[4px] bg-text-disabled-dark bg-opacity-30 rounded-full"></div>
                    </div>
                </Flex>
            </div>

            <button
                className="min-w-[47px] h-full rounded-full flex justify-center items-center bg-elevation-3-dark cursor-pointer hover:brightness-125">
                <Image width={0} height={0} src="/assets/chevron (down).svg" className="w-[23px] h-[23px] rotate-180"
                       alt=""/>
            </button>
        </Flex>

        <Flex direction="column" gap="3">

            <Flex gap="2" align="center" direction={{initial: 'column', md: 'row'}}>
                <Flex align="center" gap="2px" flexGrow="1">
                    <AppText size="2" className="text-text-primary-dark hidden md:flex">How to Earn:</AppText>
                    <AppText size="2" className="text-text-secondary-dark hidden md:flex">Complete the actions for the
                        badge, no
                        specific order needed.</AppText>

                    <AppText size="2" className="text-text-secondary-dark flex md:hidden">How to Earn: Complete the
                        actions for the badge, no
                        specific order needed.</AppText>
                </Flex>


                <div className="w-full md:w-auto flex gap-2 md:gap-[2px] items-center">

                    <div className="w-1/2 md:w-auto">
                        <AppBadge variant={BadgeVariantType.DISABLED} className="w-full flex justify-center ">1/3
                            Completed</AppBadge>
                    </div>


                    <div className="w-1/2 md:w-auto">
                        <AppBadge variant={BadgeVariantType.GREEN} className="w-full flex justify-center">Total
                            Earnings: 3,000</AppBadge>
                    </div>
                </div>
            </Flex>

        </Flex>

        <Flex  direction = {{ initial : 'column', md : 'row' }} gap="4">
            <MetricItem completed={true} unit={"$50"} currency={"USDT/ETH"}/>
            <MetricItem completed={false} unit={"$50"} currency={"LINK/ETH"}/>
            <MetricItem completed={false} unit={"$100"} currency={"WBTC/ETH"}/>
        </Flex>

        <Flex gap="1" py="2" align="center">
            <button className='flex-grow h-1 bg-primary-dark rounded-full'></button>
            <button
                className='flex-grow h-1 bg-elevation-3-dark rounded-full hover:bg-primary-dark transition-none duration-150'></button>
            <button
                className='flex-grow h-1 bg-elevation-3-dark rounded-full hover:bg-primary-dark transition-none duration-150'></button>
        </Flex>
    </Flex>
}
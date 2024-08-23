import { Button } from "@radix-ui/themes";
import HeaderButton from "../components/pages/header/HeaderButton";
import Image from 'next/image'

export default function Header() {
    return <div className="w-full flex flex-col justify-center items-center gap-4 ">
        <div className="w-full lg:w-[1280px] h-[72px] px-4 md:px-8 flex items-center justify-between border-b border-elevation-2-dark bg-elevation-2-dark  bg-opacity-100 md:bg-opacity-0">

            <div className="flex items-center gap-6">
                <div className="px-2">
                    <button className="w-[122px] bg-white bg-opacity-5 h-8 px-6 rounded-lg flex justify-center items-center text-white logo-gradient">Logo</button>
                </div>
                
                <div className="hidden md:flex items-center gap-2 px-[2px] py-1">
                    <div className="flex gap-2">
                        <HeaderButton>Dashboard</HeaderButton>
                        <HeaderButton>Tasks</HeaderButton>
                        <HeaderButton>Badges</HeaderButton>
                        <HeaderButton>Leaderboard</HeaderButton>
                    </div>

                    <HeaderButton>Connections</HeaderButton>
                    
                </div>
            </div>


            <div className="flex items-center gap-2">
            
                <Button size="3" radius="full" className="font-inter !bg-elevation-2-dark !w-[112px] !text-text-secondary-dark !px-2 !py-2  !hidden md:!flex justify-center items-center !border !border-solid !border-primary-hover !text-sm !font-semibold !hover:text-primary-hover transition-all duration-200">How It Works</Button>

                <Button size="3" className="!px-[14px] !py-[10px] !rounded-xl  !bg-elevation-3-dark !flex !items-center !gap-2 !font-semibold !text-sm">
                    <Image width={0} height={0} alt="" src="/assets/Frame.svg" className="w-[18px] h-[18px] rounded-full text-text-primary-dark" />
                    <span>bongo.eth</span>
                </Button>

                <Image width= {0} height = {0} alt = "" className = "flex md:hidden w-6 h-6" src="/assets/menu-01.svg" />
            </div>
        </div>


        <div className="flex md:hidden flex-wrap gap-2 px-[8px] py-[10px] bg-elevation-2-dark  rounded-3xl mt-6 mx-4">
                    <div className="flex gap-2">
                        <HeaderButton>Dashboard</HeaderButton>
                        <HeaderButton>Tasks</HeaderButton>
                        <HeaderButton>Badges</HeaderButton>
                        <HeaderButton>Leaderboard</HeaderButton>
                    </div>

       <HeaderButton>Connections</HeaderButton>
                    
      </div>
    </div>
}
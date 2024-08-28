import React from 'react';
import {Text} from "@radix-ui/themes";
import Image from "next/image"; // Optional: You can style the card as needed
import AppText from "~/lib/components/core/AppText";

const Card = ({image, activeCard, far}) => {
    return (
        <div
            className={`flex flex-col w-full md:w-auto ${activeCard ? '' : 'gap-[5px]'} ${far ? 'gap-3' : 'gap-2'} h-full`}>
            <div
                className={`flex flex-col justify-center w-full flex-grow  md:flex-grow-0 w-full md:w-[178px] md:min-w-[178px] ${activeCard ? 'h-auto' : 'h-[178px]'} bg-elevation-3-dark rounded-xl overflow-hidden border border-states-success-main-dark border-opacity-0`}>
                <div
                    className={`h-8 ${activeCard ? 'flex' : 'hidden'} items-center justify-between px-2 bg-elevation-2-dark`}>
                    <AppText size="1" className="text-text-primary-dark">{"Liquidity Machine"}</AppText>
                    <AppText size="1" className="  text-text-secondary-dark">
                        {3} Actions
                    </AppText>
                </div>

                <div className='flex justify-center items-center pt-4 pb-[22px] flex-grow md:flex-grow-0'>
                    <div
                        className={`flex justify-center items-center border-4 border-states-success-main-dark rounded-full w-[72px] h-[72px] overflow-hidden ${activeCard ? 'border-opacity-100' : 'border-opacity-0'}`}>
                        <Image src={image} width={0} height={0}
                               style={{transform : 'scale(1.1)'}}
                               alt="" unoptimized/>
                    </div>
                </div>

                <div
                    className={`h-auto md:h-8 ${activeCard ? 'flex' : 'hidden'} items-center justify-center px-4 md:px-1 py-2 md:py-auto bg-states-success-main-dark bg-opacity-10`}>
                    <Text size='1'
                          className="text-states-success-main-dark">{"1.15x"}</Text>
                </div>
            </div>

            {
                activeCard ? (
                        <div
                            className="w-full md:max-w-[178px] bg-elevation-3-dark rounded-xl flex flex-col px-4  py-1 gap-[2px]">
                            <AppText size="1" align="center" className="text-text-primary-dark">Reward Details</AppText>
                            <AppText size="1" align="center" className=" text-text-secondary-dark">Liquidity Provision to ETH/USDC</AppText>
                        </div>) :
                    (
                        <div
                            className="bg-elevation-3-dark bg-opacity-30 rounded-3xl flex flex-col px-[14px] py-2 gap-2">
                            <div className="flex gap-2">
                                <div className="flex-grow h-[13px] bg-text-disabled-dark bg-opacity-30 rounded-full"/>
                                <div className="flex-grow h-[13px] bg-text-disabled-dark bg-opacity-30 rounded-full"/>
                                <div className="flex-grow h-[13px] bg-text-disabled-dark bg-opacity-30 rounded-full"/>
                            </div>

                            <div className="h-[13px] bg-text-disabled-dark bg-opacity-30 rounded-full"/>
                        </div>)
            }
        </div>
    );
};

export default Card;

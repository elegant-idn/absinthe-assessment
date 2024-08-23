import AppBadge from "~lib/components/core/AppBadge";
import { ACTIVITY_TYPE } from "~/lib/enums";
import type { LastActivitiesRow } from "~/lib/types";

export default function LastActivitiesRow({ activities = ACTIVITY_TYPE.TRANSACTION, points, date, time, txId, bgDark = true }: LastActivitiesRow) {

    return <div className={`${bgDark ? ' bg-elevation-1-dark' : 'bg-elevation-2-dark'} flex h-[64px] items-center border-b border-elevation-bg-dark text-text-primary-dark text-sm font-semibold`}>

        <div className="w-auto lg:w-[331px] px-6 py-3 flex items-center gap-1">
            {activities === ACTIVITY_TYPE.TRANSACTION ?
                (<>
                    <img src="/assets/icon-transaction.svg" className="w-4 h-4 " />
                    <span className="">Transaction</span>
                </>) :
                (<>
                    <img src="/assets/icon-bridged.svg" className="w-4 h-4" />
                    <span className="">Bridged</span>
                </>)}

        </div>

        <div className="w-auto lg:w-[279px] px-6 py-3 flex items-center justify-start !text-xs !font-semibold">
            {/* <div className="h-6 px-2 py-1 bg-states-success-main-dark bg-opacity-10 text-states-success-main-dark">{points}</div> */}
            <AppBadge>{points}</AppBadge>
        </div>

        <div className="flex-grow px-6 py-3 flex items-center gap-1 text-text-secondary-dark">
            <span className="">{date}</span>
            <span className="bg-elevation-3 px-2 py-1 rounded-full text-xs font-semibold">{time}</span>
        </div>

        <div className="w-auto lg:w-[266px] px-6 py-3 flex items-center justify-between text-text-secondary-dark">

            <div className="flex items-center gap-2">
                <span>{txId}</span>
                <span className="bg-elevation-3-dark px-2 py-1 rounded-full text-xs font-semibold">Copy</span>
            </div>

            <img src="/assets/icon-link.svg" className="w-4 h-4 cursor-pointer transition-all duration-200 hover:brightness-125" />
        </div>

    </div>
}
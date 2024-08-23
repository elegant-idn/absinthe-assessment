export default function LastActivitiesHeader(){
    return <div className="flex h-[44px] bg-elevation-3-dark border-b border-elevation-bg-dark text-xs text-text-secondary-dark">
    <div className="w-auto lg:w-[331px] px-6 py-3 ">Activities</div>
    <div className="w-auto lg:w-[279px] px-6 py-3">Points</div>
    <div className="flex-grow px-6 py-3">Date</div>
    <div className="w-auto lg:w-[266px] px-6 py-3">TXID</div>
</div>
}
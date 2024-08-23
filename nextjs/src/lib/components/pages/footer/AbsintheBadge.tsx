export default function AbsintheBadge(){
    return <div className="md:absin-badge md:absin-badge-gradient rounded-xl px-2 py-2 relative">
        <div className="opacity-0  absolute w-full h-full top-0 left-0 bg-gradient-to-r from-[#006253] to-[#cee900a4] md:opacity-[13%] rounded-xl">

        </div>

        <div className="flex items-center gap-2">
            <div className=" text-secondary-dark text-sm">Powered by</div>
            <img src="/assets/absin.svg" className="" alt=""/>
        </div>
    </div>
}
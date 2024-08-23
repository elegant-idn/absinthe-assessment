
import CommunityBadges from "./CommunityBadges";
import Preview from "./Preview";

export default function Badges(){
    return <div className="flex flex-col gap-4">
        <div className="hidden md:flex font-semibold text-text-secondary-dark">
            Badges
        </div>

        <Preview/>

        <CommunityBadges/>
    </div>
}
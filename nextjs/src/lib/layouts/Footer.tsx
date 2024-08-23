import AbsintheBadge from "../components/pages/footer/AbsintheBadge";
import FooterIconButton from "../components/pages/footer/FooterIconButton";
import {Text} from "@radix-ui/themes";

export default function Footer() {
    return <div
        className="w-full h-auto md:h-[49px] md:px-[112px] flex flex-col md:flex-row justify-between items-center bg-elevation-2-dark p-6 md:p-0">
        <div className="w-full md:w-auto flex justify-between pt-2 md:pt-0">
            <button
                className=" w-[122px] bg-white bg-opacity-5 h-8 px-6 rounded-lg flex  md:hidden justify-center items-center text-white logo-gradient">Logo
            </button>

            <div className="flex items-center justify-center gap-2 ">
                <FooterIconButton iconImage={'/assets/Symbol - Rounded.svg'}/>
                <FooterIconButton iconImage={'/assets/x-social-media-white-icon 1.svg'}/>
                <FooterIconButton iconImage={'/assets/github.svg'}/>
            </div>
        </div>

        <div className="w-full flex md:hidden mt-8 pb-2 justify-between">
            <Text size="3" className="font-inter font-semibold text-text-secondary-dark">Docs</Text>
            <Text size="3" className="font-inter font-semibold text-text-secondary-dark">Blog</Text>
            <Text size="3" className="font-inter font-semibold text-text-secondary-dark">Support</Text>
            <Text size="3" className="font-inter font-semibold text-text-secondary-dark">Terms & Conditions</Text>
        </div>

        <div className="flex-grow flex justify-center items-center mt-6 md:mt-0">
            <AbsintheBadge/>
        </div>

        <div className="hidden md:flex items-center justify-center gap-2 opacity-0">
            <FooterIconButton iconImage={'/assets/Symbol - Rounded.svg'}/>
            <FooterIconButton iconImage={'/assets/x-social-media-white-icon 1.svg'}/>
            <FooterIconButton iconImage={'/assets/github.svg'}/>
        </div>
    </div>
}
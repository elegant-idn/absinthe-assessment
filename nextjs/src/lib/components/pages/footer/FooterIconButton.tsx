export default function FooterIconButton({iconImage, ...etcProps}: { iconImage: string }) {
    return <button className="w-8 h-8 rounded-xl bg-elevation-3-dark flex justify-center items-center" {...etcProps}>
        <img src={iconImage}/>
    </button>
}
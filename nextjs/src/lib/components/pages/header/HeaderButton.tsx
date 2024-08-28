import {Button} from "@radix-ui/themes";
import {ReactNode} from "react";

// export default function HeaderButton({children, ...etcProps} : {  children: ReactNode}){
//     return <button className="outline-none h-9 px-3 py-3 flex justify-center items-center text-text-primary-dark hover:text-primary-hover transition-all duration-200 text-sm font-semibold" {...etcProps}>
//         {children}
//     </button>
// }

export default function HeaderButton({children, ...etcProps}: { children: ReactNode }) {
    return <Button
        className="!bg-transparent !cursor-pointer h-9 px-3 py-3 text-text-primary-dark hover:text-primary-hover text-sm font-bold font-inter">{children}</Button>
}
import { Badge } from "@radix-ui/themes";
import {AppBadgeProps} from "~/lib/types";
import {BadgeVariantType} from "~/lib/enums";

export default function AppBadge({ children, variant= BadgeVariantType.SUCCESS, className }: AppBadgeProps) {
    return <>
        {variant === BadgeVariantType.SUCCESS && (<Badge size="2" radius="full" className={`font-inter !text-states-success-main-dark !bg-states-success-main-dark !bg-opacity-10 ${className}`}>{children}</Badge>)}
        {variant === BadgeVariantType.DISABLED && (<Badge size="2" radius="full" className={`font-inter  !text-text-secondary-dark  !bg-elevation-3-dark ${className}`}>{children}</Badge>)}
        {variant === BadgeVariantType.GREEN && (<Badge size="2" radius="full" className={`font-inter  !text-primary-hover  !bg-primary-disabled-dark !bg-opacity-20 ${className}`}>{children}</Badge>)}
    </>
}
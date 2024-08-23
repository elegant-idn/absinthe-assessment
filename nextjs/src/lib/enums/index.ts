import type {BadgeVariant, Activity} from "~/lib/types";

export const ACTIVITY_TYPE = {
    TRANSACTION: 'TRANSACTION' as Activity,
    BRIDGED: 'BRIDGED' as Activity,

}

export const BadgeVariantType = {
    SUCCESS: 'SUCCESS' as BadgeVariant,
    DISABLED: 'DISABLED' as BadgeVariant,
    GREEN: 'GREEN' as BadgeVariant,
}
import {ReactNode} from "react";

export interface Badge {
    title: string;
    actions: number | null;
    image: string;
    state: string;
    active: boolean;
}

export interface MetricItemProps {
    completed: boolean;
    unit: string;
    currency: string;
}

export type Activity = 'TRANSACTION' | 'BRIDGED'

export interface LastActivitiesRow {
    activities: Activity,
    points: string,
    date: string,
    time: string,
    txId: string,
    className?: string,
    bgDark: boolean
}


export type TextSize = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
export type Align = 'left' | 'center' | 'right'

export interface AppTextProps {
    children: ReactNode,
    className?: string,
    size: TextSize,
    align?: Align
}

export type BadgeVariant = 'SUCCESS' | 'DISABLED' | 'GREEN'


export interface AppBadgeProps {
    children: ReactNode,
    variant?: BadgeVariant,
    className: string
}
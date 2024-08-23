import {Text} from "@radix-ui/themes";
import type {AppTextProps} from '~/lib/types'

export default function AppText({
                                    children,
                                    className,
                                    size,
                                    align = 'left'
                                }: AppTextProps) {
    return <Text size={size} align={align} className={`font-semibold ${className}`}>{children}</Text>
}
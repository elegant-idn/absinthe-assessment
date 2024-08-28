import { Flex, Table } from "@radix-ui/themes";
import AppBadge from "~/lib/components/core/AppBadge";
import {ACTIVITY_TYPE, BadgeVariantType} from "~/lib/enums";

export default function LastActivities() {

    const activityData = [
        {
            id: 1,
            activities: ACTIVITY_TYPE.TRANSACTION,
            points: "+560",
            date: "20.06.2024",
            time: "14:10:35",
            txId: "0xa12...1bac",
        },

        {
            id: 2,
            activities: ACTIVITY_TYPE.TRANSACTION,
            points: "+560",
            date: "20.06.2024",
            time: "13:47:22",
            txId: "0xa12...1bac",
        },

        {
            id: 3,
            activities: ACTIVITY_TYPE.BRIDGED,
            points: "+262",
            date: "20.06.2024",
            time: "13:40:35",
            txId: "0xa12...1bac",
        },

        {
            id: 4,
            activities: ACTIVITY_TYPE.TRANSACTION,
            points: "+194",
            date: "20.06.2024",
            time: "13:47:22",
            txId: "0xa12...1bac",
        },

        {
            id: 5,
            activities: ACTIVITY_TYPE.BRIDGED,
            points: "+155",
            date: "20.06.2024",
            time: "14:10:35",
            txId: "0xa12...1bac",
        },

        {
            id: 6,
            activities: ACTIVITY_TYPE.TRANSACTION,
            points: "142",
            date: "20.06.2024",
            time: "13:47:22",
            txId: "0xa12...1bac",
        }
    ]

    return <div className="hidden md:flex flex-col gap-4 ">
        <div className="text-text-secondary-dark font-semibold text-base">Last Activities</div>

        <Table.Root variant="ghost" className="rounded-xl overflow-hidden bg-elevation-2-dark">

            <Table.Header className="bg-elevation-3-dark border-b border-elevation-bg-dark">
                <Table.Row className="!text-xs !text-text-secondary-dark" align="center">
                    <Table.ColumnHeaderCell className="w-auto lg:w-[331px]" px="5" py="3">Activities</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell className="w-auto lg:w-[279px]" px="5" py="3">Points</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell px="5" py="3">Date</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell className="w-auto lg:w-[266px]" px="5" py="3">TXID</Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>

                {
                    activityData.map(({ id, activities, points, date, time, txId }, idx) => (

                        <Table.Row key={id} className={`h-16 !border-b !border-t-2 !border-elevation-bg-dark ${idx % 2 === 0 ? ' !bg-elevation-1-dark' : '!bg-elevation-2-dark'}`} align="center" >
                            <Table.RowHeaderCell className="" px="5" py="3">

                                <Flex gap="1" align="center">
                                    {activities === ACTIVITY_TYPE.TRANSACTION ?
                                        (<>
                                            <img src="/assets/icon-transaction.svg" className="w-4 h-4 " />
                                            <span className="text-text-primary-dark">Transaction</span>
                                        </>) :
                                        (<>
                                            <img src="/assets/icon-bridged.svg" className="w-4 h-4" />
                                            <span className="text-text-primary-dark">Bridged</span>
                                        </>)}
                                </Flex>

                            </Table.RowHeaderCell>

                            <Table.Cell px="5" py="3">
                                <div className="!text-xs !font-semibold">
                                    <AppBadge >{points}</AppBadge>
                                </div>

                            </Table.Cell>


                            <Table.Cell px="5" py="3">
                                <Flex gap="1" align="center">
                                    <span className="text-text-secondary-dark">{date}</span>
                                    <span className="text-text-secondary-dark">
                                        <AppBadge variant={BadgeVariantType.DISABLED}>{time}</AppBadge>
                                    </span>
                                </Flex>

                            </Table.Cell>


                            <Table.Cell px="5" py="3">
                                <Flex justify="between" align="center">
                                    <Flex gap="2" align="center">
                                        <span className="text-text-secondary-dark">{txId}</span>
                                        <span className="text-text-secondary-dark cursor-pointer">
                                            <AppBadge variant={BadgeVariantType.DISABLED}>Copy</AppBadge>
                                        </span>
                                    </Flex>

                                    <img src="/assets/icon-link.svg" className="w-4 h-4 cursor-pointer transition-all duration-200 hover:brightness-125" />
                                </Flex>
                            </Table.Cell>
                        </Table.Row>
                    ))
                }
            </Table.Body>
        </Table.Root>
    </div>
}
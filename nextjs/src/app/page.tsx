'use client'

import Badges from "~/lib/components/pages/badges/Badges";
import LastActivities from "~/lib/components/pages/last activities/LastActivities";
import Footer from "~/lib/layouts/Footer";
import Header from "~/lib/layouts/Header";


export default function HomePage() {

    return (
        <main className="w-full min-h-screen overflow-y-auto flex relative flex justify-center bg-elevation-bg-dark">

            <div className="w-full lg:w-[1440px] min-h-screen flex flex-col items-center bg-elevation-bg-dark">
                <Header/>

                <div className="w-full pt-6 md:pt-[40px] pb-[42px] px-4 md:px-[112px] flex flex-col items-center">

                    <div className="w-full flex flex-col gap-6">
                        <LastActivities/>

                        <Badges/>
                    </div>

                </div>

                <Footer/>
            </div>
        </main>
    );
}

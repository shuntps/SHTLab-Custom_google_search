import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function page() {
    return (
        <>
            <HomeHeader />
            <div className="flex flex-col items-center mt-64">
                <h1 className="text-6xl text-gray-700 font-bold mb-2">
                    SHT Labs
                </h1>
                <span className="text-xs text-slate-150">
                    Propulsé par Google
                </span>
                <HomeSearch />
            </div>
        </>
    );
}

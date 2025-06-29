import MusicCard from "@/components/MusicCard";

export default function Page() {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl w-full">
                    <MusicCard/>
                </div>
            </div>
        </>
    )
}
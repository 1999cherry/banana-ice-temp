import Image from "next/image";
import MainBanana from "@/components/main-banana";
import LinkButton from "@/components/link-button";
import BananaPackIcon from "@/components/banana-pack-icon";

export default function Home() {
    return (
        <>
            <main className="w-full h-dvh flex items-center justify-center flex-col">
                <MainBanana/>
                {/*<Image src={"/images/text.png"} width={300} height={100} alt={"text image"} className="mt-52"/>*/}
                <div className="absolute bottom-2 flex gap-6">
                    <LinkButton buttonType="insta"/>
                    <LinkButton buttonType="youtube"/>
                </div>
                <BananaPackIcon/>
            </main>

        </>
    );
}

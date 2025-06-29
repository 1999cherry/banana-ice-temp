import Link from "next/link";


export default function Page() {
    return (
        <div className='flex items-center justify-center h-dvh'>
        <Link href={'https://open.kakao.com/o/sUWrHGag'}
              className="items-center justify-center border rounded-2xl text-white border-white py-2 px-3" rel="noopener noreferrer" target="_blank">
            GET &#39;SHORTS&#39;
        </Link>
        </div>
    )
}
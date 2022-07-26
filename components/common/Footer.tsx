import Link from "next/link";

export const Footer = () => {
    return(
        <footer>
            <div className="flex flex-col items-center mt-16">
                <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <Link href="/common/introduce" target='_target'><a>팀소개</a></Link>
                    <Link href="/" target='_target'><a>프로젝트소개</a></Link>
                </div>
                <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
                    <p>Copyright ©2022 All rights reserved by Readvice</p>
                </div>
            </div>
        </footer>
    )
}


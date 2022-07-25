import Link from "next/link"
import React from "react"
import tw from "tailwind-styled-components"
import Image from 'next/image'


type Props = {
    Name: string
    ImgSrc: string
    LinkHref1: string
    LinkHref2: string
    Role: string
    Role2: string
    Skill: string
    Email: string
}

const IntroduceItem = ({Name, ImgSrc, LinkHref1, LinkHref2, Role, Role2, Skill, Email}: Props) => {
  return (
    <Box>
        <Item>
            <TeamImg
                alt="team"
                style={{width: "200px", height: "200px"}}
                src={ImgSrc}/>
            <div className="flex-grow sm:pl-8">
                <h2 className="text-lg font-medium text-gray-900 title-font">{Name}</h2>
                <h3 className="mb-3 text-gray-500">{Role}</h3>
                <p className="mb-4">{Role2}<br/>{Skill}<br/>{Email}</p>
                <span className="inline-flex">
                    <Link href={LinkHref1}>
                        <a className="text-gray-500">
                            <Image src="/svg/github.svg" alt="github" width={24} height={21}/>
                        </a>
                    </Link>
                    <Link href={LinkHref2}>
                        <a className="ml-2 text-gray-500">
                            <Image src="/svg/blog.svg" alt="blog" width={24} height={21}/>
                        </a>
                    </Link>
                </span>
            </div>
            <style jsx>{`
                h2::before {  
                    transform: scaleX(0);
                    transform-origin: bottom right;
                }
                h2:hover::before {
                    transform: scaleX(1);
                    transform-origin: bottom left;
                }
                h2::before {
                    content: " ";
                    display: block;
                    position: absolute;
                    top: 0; right: 0; bottom: 0; left: 0;
                    inset: 0 0 0 0;
                    background: hsl(200 100% 80%);
                    z-index: -1;
                    transition: transform .3s ease;
                }
                @media (orientation: landscape) {
                h2 {
                    grid-auto-flow: column;
                }}
            `}</style>
        </Item>
    </Box>
  )
}

export default IntroduceItem

const Box = tw.div`
    p-4
    lg:w-1/2
`
const Item = tw.div`
    flex
    flex-col
    items-center 
    justify-center 
    h-full 
    text-center 
    sm:flex-row 
    sm:justify-start 
    sm:text-left
`
const TeamImg = tw.img`
    flex-shrink-0 
    object-cover 
    object-center 
    w-48 
    h-48 
    mb-4 
    rounded-lg 
    sm:mb-0
`
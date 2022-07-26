import { SEO } from "@/components";
import IntroduceItem from "./IntroduceItem";

export function Introduce() {
    return (
    <>
        <section className="text-gray-600 body-font">
                <SEO title="팀소개"/>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col w-full mb-20 text-center">
                    <h1 className="mb-4 text-2xl font-medium tracking-widest text-gray-900 title-font">
                        TEAM READVICE</h1>
                    <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                        이미지 검색, GAN, 챗봇 등의 기술을 사용해 AI 사서를 만들었습니다.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <IntroduceItem 
                        ImgSrc={"https://avatars.githubusercontent.com/u/89237300?v=4"} 
                        Name={"Ah-reum Kim"}
                        LinkHref1={"https://github.com/BeautyKim"} 
                        LinkHref2={"https://ahreumi.notion.site/BeautyKim-c88127b740744819a333f91f3ba49eb2"} 
                        Role={"Front-end Developer"} 
                        Role2={"PO, 화면"} 
                        Skill={"TypeScript, Next.js, React.js, Tailwindcss"} 
                        Email={"shadowbubobubo@gmail.com"} />
                    <IntroduceItem 
                        ImgSrc={"https://avatars.githubusercontent.com/u/97998591?v=4"} 
                        Name={"Hong-ju Noh"}
                        LinkHref1={"https://github.com/nohhongju"} 
                        LinkHref2={"/"} 
                        Role={"AI Developer"} 
                        Role2={"챗봇(자연어 처리), Django 웹 서버 구축"} 
                        Skill={"Python"} 
                        Email={"ghdwn49@gmail.com"} />
                    <IntroduceItem 
                        ImgSrc={"https://avatars.githubusercontent.com/u/97998455?v=4"} 
                        Name={"Min-seo Choi"}
                        LinkHref1={"https://github.com/meanseo"} 
                        LinkHref2={"/"} 
                        Role={"AI Developer"} 
                        Role2={"GAN 활용 자연어 생성(독서기록장), Django 웹 서버 구축"} 
                        Skill={"GAN, Python"} 
                        Email={"chlalstjok97@gmail.com"} />
                    <IntroduceItem 
                        ImgSrc={"https://avatars.githubusercontent.com/u/97998284?v=4"} 
                        Name={"Ha-jin Hee"}
                        LinkHref1={"https://github.com/hajinhee"} 
                        LinkHref2={"/"} 
                        Role={"AI Developer"} 
                        Role2={"이미지 인식 및 텍스트 추출, Django 웹 서버 구축"} 
                        Skill={"Python"} 
                        Email={"hajinheee@gmail.com"} />
                </div>
            </div>
        </section>
    </>
    )
}

export default Introduce
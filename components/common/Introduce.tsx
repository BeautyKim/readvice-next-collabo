import { SEO } from "@/components";

export function Introduce() {
    return (
        <div>
            <SEO title="팀소개"/>
            <div >
                <h1>팀 북적북적</h1>
                <p>팀원들의 깃허브에서 개인 프로젝트를 보실 수 있습니다.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 place-content-center">
                <div className="p-8 shadow-lg md:flex bg-slate-100 rounded-xl md:p-0 dark:bg-slate-800">
                    <img className="w-24 h-24 mx-auto rounded-full md:w-48 md:h-auto md:rounded-none"
                        width='200px'
                        height='200px'
                        src='https://avatars.githubusercontent.com/u/89237300?v=4'/>
                    <div className="pt-6 space-y-4 text-center md:p-8 md:text-left">
                        <h4 className="text-lg font-medium">Ah-Reum Kim</h4>
                        <p className="font-medium">사장입니다. 성실합니다.</p>
                    </div>
                </div>
                <div className="p-8 shadow-lg md:flex bg-slate-100 rounded-xl md:p-0 dark:bg-slate-800">
                    <img className="w-24 h-24 mx-auto rounded-full md:w-48 md:h-auto md:rounded-none"
                        width='200px'
                        height='200px'
                        src='https://tumblbug-pci.imgix.net/3f4ea23c994f094e550351f65e4e3632b85cb39f/075481dc585b3a0d2808a1e46736e2818099c570/a5cc85663c49a03a533c7fb1d54091fb59ddb545/ef3e6bd7-11cd-4bdc-8705-44923a70f7f7.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=59fb2da14bbcae7ee4bdd71e50c02db4'/>
                    <div className="pt-6 space-y-4 text-center md:p-8 md:text-left">
                        <h4 >Hong-ju Noh</h4>
                        <h6>셋째입니다.<br/>
                            매의 눈을 담당하고 있습니다.</h6>
                    </div>
                </div>
                <div className="p-8 shadow-lg md:flex bg-slate-100 rounded-xl md:p-0 dark:bg-slate-800">
                    <img className="w-24 h-24 mx-auto rounded-full md:w-48 md:h-auto md:rounded-none"
                        width='200px'
                        height='200px'
                        src='http://image.yes24.com/goods/61814929/XL'/>
                    <div className="pt-6 space-y-4 text-center md:p-8 md:text-left">
                        <h4>Min-seo Choi</h4>
                        <h6>막내입니다.
                            <br/>
                            요정을 담당하고 있습니다.</h6>
                    </div>
                </div>
                <div className="p-8 shadow-lg md:flex bg-slate-100 rounded-xl md:p-0 dark:bg-slate-800">
                    <img className="w-24 h-24 mx-auto rounded-full md:w-48 md:h-auto md:rounded-none"
                        width='200px'
                        height='200px'
                        src='https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/3Wc7/image/8I3EoghFfj4qdOGebG_43qI2cxE.jpg'/>
                    <div className="pt-6 space-y-4 text-center md:p-8 md:text-left">
                        <h4 >Jin-hee Ha</h4>
                        <h6>첫째입니다.<br/>기둥을 담당하고있습니다.</h6>
                    </div>    
                </div>
            </div>
        </div>
    );
}
import css from "styled-jsx/css";
import { HeadTitle } from "@/components";

export function Introduce() {

    const style = css `
    .imgAll {
        float: center;
        display: flex;
    }
    `
    return (
        <form>
            <HeadTitle title="Introduce"/>
            <div >
                <h1>팀 북적북적</h1>
                <p>팀원들의 깃허브에서 개인 프로젝트를 보실 수 있습니다.</p>
            </div>
            <div className="imgAll">
                <div className="img1">
                    <img
                        width='200px'
                        height='200px'
                        src='https://avatars.githubusercontent.com/u/89237300?v=4'/>
                    <h4>Ah-Reum Kim</h4>
                    <h6>사장입니다.<br/>
                        성실합니다.
                    </h6>
                </div>
                <div className="img2">
                    <img
                        width='200px'
                        height='200px'
                        src='https://tumblbug-pci.imgix.net/3f4ea23c994f094e550351f65e4e3632b85cb39f/075481dc585b3a0d2808a1e46736e2818099c570/a5cc85663c49a03a533c7fb1d54091fb59ddb545/ef3e6bd7-11cd-4bdc-8705-44923a70f7f7.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=59fb2da14bbcae7ee4bdd71e50c02db4'/>
                    <h4 >Hong-ju Noh</h4>
                    <h6>셋째입니다.<br/>
                        매의 눈을 담당하고 있습니다.</h6>
                </div>
                <div className="img3">
                    <img
                        width='200px'
                        height='200px'
                        src='http://image.yes24.com/goods/61814929/XL'/>
                    <h4>Min-seo Choi</h4>
                    <h6>막내입니다.
                        <br/>
                        요정을 담당하고 있습니다.</h6>
                </div>
                <div className="img4">
                    <img
                        width='200px'
                        height='200px'
                        src='http://encykorea.aks.ac.kr/Contents/GetImage?id=3cc5b830-c5f1-44f9-ad2a-1be1908f5b22&w=260&h=260&fit=w&clip=1'/>
                    <h4 >Jin-hee Ha</h4>
                    <h6>첫째입니다.<br/>기둥을 담당하고있습니다.</h6>
                </div>
            </div>
            <style jsx>{style}</style>
        </form>

    );
}
import { SEO } from "@/components";

export default function Custom404() {
    return(
    <div id="main">
    	<div className="fof">
            <SEO title="404"/>
            <h1>잘못된 경로입니다</h1>
    	</div>
        <style jsx>{`
            div{
                transition: all 0.6s;
                height: 100%;
                font-family: 'Lato', sans-serif;
                color: #888;
                margin: 0;
            }

            #main{
                display: table;
                width: 100%;
                height: 100vh;
                text-align: center;
            }

            .fof{
                display: table-cell;
                vertical-align: middle;
            }

            .fof h1{
                font-size: 50px;
                display: inline-block;
                padding-right: 12px;
                animation: type .5s alternate infinite;
            }

            @keyframes type{
                from{box-shadow: inset -3px 0px 0px #888;}
                to{box-shadow: inset -3px 0px 0px transparent;}
            }
        `}</style>
    </div>
    )
  }
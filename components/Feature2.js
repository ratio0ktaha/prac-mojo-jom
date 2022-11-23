import stylus from "../styles/Feature2.module.css";
import Buttons from "./Button";
import main4 from "../public/images/main4.png";
import Image from "next/image"


export default function Feature2() {
   
   
    return(



    <div className={stylus.topics}>
        <div className={stylus.flex_one}>
          <div className={stylus.block}>
            <h2>Data Sources that we support</h2>
            <p>
            TopicMojo supports 50+ data sources. It's the easiest and most effective way to do topic research.{" "}
            </p>
            <buttons>
            <div className={stylus.buttons}>learn more
            </div>
              </buttons>
          </div>
          <div>
            <Image className={stylus.img} src={main4} />
          </div>
        </div>











        </div>)
}
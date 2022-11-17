import icon from"../styles/Icondisplay.module.css"

import Image from "next/image"
import message from "../public/images/repeat.png"
import contact from "../public/images/contact.png"
import area from "../public/images/area.png"

const Icondisplay = () => {
  return (
    <div className={icon.flex}>
        <div className={icon.block}>
            <div className={icon.black}>
                <Image className={icon.msg} src={contact}/>
            </div>
                <div>
                    <h3>500M+</h3>
                    <p>Content Pieces</p>
                </div>
        </div>
        <div className={icon.block}>
            <div className={icon.black}>
                <Image className={icon.msg} src={message}/>
            </div>
                <div>
                    <h3>200M+</h3>
                    <p>Influencers</p>
                </div>
        </div>
        <div className={icon.block}>
            <div className={icon.black}>
                <Image className={icon.msg} src={area}/>
            </div>
                <div>
                    <h3>50+</h3>
                    <p>Data Sources</p>
                </div>
        </div>
    </div>
  )
}

export default Icondisplay
import styles from "../styles/Cta.module.css";
import rocket from "../public/images/launch.png";
import Image from "next/image";

export default function Cta() {
  return (
    <div className={styles.maincta}>
      <div className={styles.bgimg}>
        <img src="https://d21b0h47110qhi.cloudfront.net/topicmojo/cta1bg-q3VvCEXme7w0swN.png" />
      </div>
 <div className={styles.text}>
  <Image className={styles.img} src={rocket}/>
  <h3>
  Start your easy way out today with TopicMojo along with data that never upsets.
  </h3>
  <button>Get started with $10/mon</button>
 </div>

    </div>

  )
}
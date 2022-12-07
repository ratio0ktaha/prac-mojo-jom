import styles from "../styles/Feature2.module.css";
import main4 from "../public/images/main4.png";
import Image from "next/image";

export default function Feature2() {
  return (
    <div className={styles.flex}>
      <div className={styles.allin}>
        <div className={styles.header}>
          <h2>
            Data Sources that we support
          </h2>
        </div>
        <div className={styles.paragraph}>
          <p>
            TopicMojo supports 50+ data sources. It's <br />
            the easiest and most effective way to do topic research.
          </p>
        </div>
        <button className={styles.press}>Learn more
        </button>
      </div>

      <div className={styles.img}>
        <Image className={styles.something} src={main4} />
      </div>
    </div>
  );
}

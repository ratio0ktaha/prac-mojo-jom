import styles from "../styles/Platform.module.css";
import Image from "next/image";
import p_one from "../public/images/p1.png";
import p_two from "../public/images/p2.png";
import p_three from "../public/images/p3.png";
import p_four from "../public/images/p4.png";
import p_five from "../public/images/p5.png";
import p_six from "../public/images/p6.png";
import p_seven from "../public/images/p7.png";
import p_eight from "../public/images/p8.png";
import p_nine from "../public/images/p9.png";

const Platform = () => {
  return (
    <div className={styles.glimpse}>
      <div className={styles.joji}>Platform Features</div>
    <div className={styles.pure}>
      
      
      <div>
      <Image className={styles.color_img} src={p_one} />


      <h4 className={styles.first}>Saved List</h4>
      <p className={styles.all}>
        Save your all favorite queries, questions, and intents in one
        file.
      </p>
    </div>
    <div>
        <Image className={styles.color_img} src={p_two} />


        <h4 className={styles.first}>Workspaces</h4>
        <p className={styles.all}>
          The user can be added to your account so that they work
          simultaneously.
        </p>
      </div>
      <div>
        <Image className={styles.color_img} src={p_three} />


        <h4 className={styles.first}>Teams</h4>
        <p className={styles.all}>
          You can get your entire team on board with one project to complete
          it faster.
        </p>

      </div>
      <div>
        <Image className={styles.color_img} src={p_four} />

        <h4 className={styles.first}>Priority Support</h4>
        <p className={styles.all}>
          We are here for you 24/7 with priority support to help and resolve
          your queries.
        </p>
      </div>
      <div>
        <Image className={styles.color_img} src={p_five} />

        <h4 className={styles.first}>30-day History</h4>
        <p className={styles.all}>
          You can maintain your report's history that allows you to see what
          was done in the past.
        </p>
      </div>
      <div>
        <Image className={styles.color_img} src={p_six} />

        <h4 className={styles.first}>CSV Export</h4>
        <p className={styles.all}>
          You can export almost everything from your report in CSV format.
        </p>
      </div>
      <div>
        <Image className={styles.color_img} src={p_seven} />


        <h4 className={styles.first}>Custom Domains</h4>
        <p className={styles.all}>
          Share your reports that reflect your organization's brand and
          voice.
        </p>
      </div>
      <div>
        <Image className={styles.color_img} src={p_eight} />
        <h4 className={styles.first}>Languages</h4>
        <p className={styles.all}>
          You can generate reports for 35 different languages with our
          easy-to-use interface.
        </p>
      </div>
      <div>

        <Image className={styles.color_img} src={p_nine} />
        <h4 className={styles.first}>Countries</h4>
        <p className={styles.all}>
          Generate your report in any country of the world. We are
          supporting 215+ countries.</p>
      </div>
      </div>
    
      </div>
  );
};

export default Platform;

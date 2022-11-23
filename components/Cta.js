import styles from "../styles/Cta.module.css";

export default function Cta() {
  return (
    <>
      <div>
        {" "}
        <img className={styles.back} src="/images/bg2.png" alt="green" />
        <div className={styles.parent1}>
          <div>
            {" "}
            <img
              className={styles.rocket}
              src="https://d21b0h47110qhi.cloudfront.net/topicmojo/ctarocketimg-pyziWejVXZt0RrU.png"
            />
          </div>

          <div className="paragraph">
            <h2>
              "Start your easy way out today with TopicMojo
              <br />
              along with data that never upsets"
            </h2>
          </div>
        </div>
        <div>
          <button className={styles._buttonalpha}>
            Get Started with $10/mo{" "}
          </button>
        </div>
      </div>
    </>
  );
}

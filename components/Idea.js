import styles from"../styles/Idea.module.css";
import Image from "next/image";
import bg from "../public/images/dream.png";  
import light from "../public/images/bulba.png";



const Idea = () => {
    return (
<div className={styles.owner}>
<Image className={styles.bg} src={bg} />
<div className={styles.flexer}>
<Image className={light} src={light}/>
    <h3>Running out of content ideas?</h3>
    <p>Fear not, we have the perfect solution for you</p>
   </div>



{/*       
    <button className={styles.button90}>Get Started with $10/mo</button> */}
    
    </div>





    )
}
        export default Idea
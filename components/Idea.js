import styles from"../styles/Idea.module.css";
import Image from "next/image";
import bg from "../public/images/dream.png";  
import light from "../public/images/bulba.png";
import snow from "../public/images/non.png";



const Idea = () => {
    return (
<div className={styles.owner}>
<div>
<Image className={styles.non} src={snow} />
</div>
    <div>
<Image className={styles.bg} src={bg} />
</div>
<div className={styles.flexer}>
<Image className={light} src={light}/>
    <h3>Running out of content ideas?</h3>
    <p>Fear not, we have the perfect solution for you</p>
<button className={styles.button90}>Get Started with $10/mo</button> 
{/* <button className={styles.button1}>Get the tool in pocket friendly pricing</button>  */}

   </div>




    
    </div>
    





    )
}
        export default Idea
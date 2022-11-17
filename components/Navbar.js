import styles from "../styles/Navbar.module.css"



export default function  Navbar (){
  return (
    <div className={styles.navbar}>
    <div>
      <img
        src="https://d21b0h47110qhi.cloudfront.net/old-free/logo-1e0f7LNTQLtqrsV.png"
      />
    </div>

    <div className={styles.navbar_items} >
      <div>TOOLS</div>
      <div>PRICING</div>
      <div>RESOURCES</div>
    </div>

    <div>
      <button className={styles.dashboard_button}>Dashboard</button>
    </div>
  </div>
    
  )
}



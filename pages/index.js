import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Icondisplay from "../components/Icondisplay";
import Transition1 from "../components/Transition1";
import Buttons from "../components/Button";
import Cta from "../components/Cta";
import Feature2 from "../components/Feature2";
import Cards from "../components/Card";
import Platform from "../components/Platform";
import Idea from "../components/Idea"
import Penny from "../components/Penny";
import Longercards from "../components/Longercards";
import Foot from "../components/Foot";


// import Cta from "../components/cta"

export default function Home() {
  return (
    <div>
      {/* <Cta/> */}
      <Navbar />
      <Hero />
      <Feature />
      <Icondisplay />
      <Transition1 />
      <Cta />
      <Feature2 />
      <Cards />
      <Platform/>
      <Idea/>
      <Penny/>
     <Longercards/>
     <Foot/>

      
    </div>
  );
}

import { Download, Features, SectionWrapper  } from "./components";
import assets from './assets'
import styles from "./styles/Global";

const App = () =>{
  return (
    <>
    <SectionWrapper
      title = "Your own store of Nifty NFTs. Start Selling and Growing"
      description= "Buy, Store, collect NFTs, exchange & earn crypto. Join 20+ million people using ProNef Marketplace."

      showBtn
      mockupImg = {assets.homeHero}
      banner = "banner"
    />
    <SectionWrapper
      title = "Smart User Interface MarketPlace"
      description= "Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design."
      reverse
    
      mockupImg = {assets.homeCards}
    />
    <Features />
    <SectionWrapper
      title = "Deployment"
      description= "ProNef is built using Expo which runs natively on all users' devices. You can easily get your app into peoples's hands."
      mockupImg = {assets.feature}
      reverse
    />
    <SectionWrapper
      title = "Creative way to showcase the store"
      description= "The app contains two screens. The first screen lists all NFTs while the second list the details of a specific NFT"
      mockupImg = {assets.mockup}
      banner ="banner02"
    />
    <Download />
    <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
      <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {""}
      <span className="bold">Denis Wachira</span>
      </p>
    </div>
    </>
  );
} 

export default App;

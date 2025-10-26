import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import MenuSection from "./components/MenuSection"
import CakesSection from "./components/CakesSection"
import ShopSection from "./components/ShopSection"
import PartiesSection from "./components/PartiesSection"
import PromoSection from "./components/PromoSection"
import Footer from "./components/Footer"
import AOSInit from "./components/AOSInit"


function App() {


  return (
    <>
      <AOSInit />
      <Header />
      <HeroSection />
      <MenuSection />
      <ShopSection />
      <CakesSection />
      <PartiesSection />
      <PromoSection />
      <Footer />

    </>

  )
}

export default App

import Hero from './components/hero';
import MyLifeStory from './components/MyLifeStory';
import VisualPortfolio from './components/visualportfolio';
import BodyInfo from './components/body';
import ContactMeSection from './components/reachout';

const Home = () => {
 return (
  <div className="overflow-hidden" >
   <Hero />
   <MyLifeStory />
   <VisualPortfolio />
   <BodyInfo />
   <ContactMeSection />
  </div>
 );
}

export default Home;
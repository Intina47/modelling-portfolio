import Hero from "./components/hero";
import MyLifeStory from "./components/MyLifeStory";
import VisualPortfolio from "./components/visualportfolio";
import BodyInfo from "./components/body";

export default function Home() {
  return (
    <div>
      <Hero />
      <MyLifeStory />
      <VisualPortfolio />
      <BodyInfo />
    </div>
  );
}
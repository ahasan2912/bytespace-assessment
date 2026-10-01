import Hero from "../components/Hero";
import LogoSlider from "../components/LogoSlider";
import BuildSkills from "../components/BuildSkills";
import LearningPathSection from "../components/LearningPathSection";
import ProfessionalGrowth from "../components/ProfessionalGrowth";
import PotentialCreators from "../components/PotentialCreators";

const Home = () => {
    return (
        <div>
            <Hero />
            <LogoSlider />
            <BuildSkills />
            <LearningPathSection />
            <ProfessionalGrowth />
            <PotentialCreators />
        </div>
    );
};

export default Home;
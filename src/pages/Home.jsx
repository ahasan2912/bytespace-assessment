import Hero from "../components/Hero";
import LogoSlider from "../components/LogoSlider";
import BuildSkills from "../components/BuildSkills";
import LearningPathSection from "../components/LearningPathSection";
import ProfessionalGrowth from "../components/ProfessionalGrowth";

const Home = () => {
    return (
        <div>
            <Hero />
            <LogoSlider />
            <BuildSkills />
            <LearningPathSection />
            <ProfessionalGrowth />
        </div>
    );
};

export default Home;
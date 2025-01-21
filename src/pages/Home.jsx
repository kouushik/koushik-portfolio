import Hero from '../components/home/Hero';
import About from '../components/home/About';
import TechStack from '../components/home/TechStack';
import ProjectShowcase from '../components/projects/ProjectShowcase';
import ExperienceTimeline from '../components/experience/ExperienceTimeline';
import SkillsMatrix from '../components/experience/SkillsMatrix';

export default function Home() {
    return (
        <div className="space-y-20">
            <Hero />
            <About />
            <TechStack />
            <ProjectShowcase />
            <ExperienceTimeline />
            <SkillsMatrix />
        </div>
    );
}
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectShowcase from './components/projects/ProjectShowcase';
import ExperienceTimeline from './components/experience/ExperienceTimeline';
import PublicationsGrid from './components/publications/PublicationsGrid';
import NotFound from './pages/NotFound';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectShowcase />} />
            <Route path="/experience" element={<ExperienceTimeline />} />
            <Route path="/publications" element={<PublicationsGrid />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { projects, getProjectBySlug, getProjectsByCategory } from './data/projects';
import { calculateDuration, experiences } from './data/experience';
import { profile } from './data/profile';
import TechBadge from './components/Common/TechBadge';
import SectionHeading from './components/Common/SectionHeading';
import ProjectCards from './components/Projects/ProjectCards';

  describe('Portfolio 2.0 Core Data & Logic Tests', () => {
    test('profile data matches AI Engineer specifications', () => {
      expect(profile.name).toBe('Siddaarth PT');
      expect(profile.title).toBe('AI Engineer');
      expect(profile.company.name).toBe('Coding Crisp');
      expect(profile.designations).toContain('AI Engineer');
      expect(profile.designations).toContain('Generative AI Engineer');
    });

    test('experience duration calculation works dynamically', () => {
      const duration = calculateDuration('2024-08-01', '2024-10-01');
      expect(duration).toBe('3 mos');

      const oneYr = calculateDuration('2023-01-01', '2024-01-01');
      expect(oneYr).toBe('1 yr 1 mo');
    });

    test('projects data contains required featured AI/ML and software engineering projects', () => {
      expect(projects.length).toBe(6);

      // Check Featured AI/ML projects
      const fleet = getProjectBySlug('fleet-digital-twin');
      expect(fleet).toBeDefined();
      expect(fleet.category).toBe('ai-ml');
      expect(fleet.featured).toBe(true);

      const opspulse = getProjectBySlug('opspulse');
      expect(opspulse).toBeDefined();
      expect(opspulse.category).toBe('ai-ml');

      const synaptiq = getProjectBySlug('synaptiq');
      expect(synaptiq).toBeDefined();
      expect(synaptiq.category).toBe('ai-ml');

      // Check Software Engineering projects
      const xcetra = getProjectBySlug('xcetra');
      expect(xcetra).toBeDefined();

      const devask = getProjectBySlug('devask');
      expect(devask).toBeDefined();
      expect(devask.links.github).toBe('https://github.com/sidhu-26/DevAsk');

      const syncspace = getProjectBySlug('syncspace');
      expect(syncspace).toBeDefined();
      expect(syncspace.links.github).toBe('https://github.com/sidhu-26/SyncSpace');
    });

    test('project categorization filters correctly', () => {
      const aiProjects = getProjectsByCategory('ai-ml');
      expect(aiProjects.length).toBe(3);

      const seProjects = getProjectsByCategory('software-engineering');
      expect(seProjects.length).toBe(3);

      const allProjects = getProjectsByCategory('all');
      expect(allProjects.length).toBe(6);
    });

    test('no references to outdated companies or projects exist in active data', () => {
      const rawData = JSON.stringify({ profile, projects, experiences });
      expect(rawData.toLowerCase()).not.toContain('fluentx');
      expect(rawData.toLowerCase()).not.toContain('sociofitt');
      expect(rawData.toLowerCase()).not.toContain('rrfx');
    });
  });

  describe('Portfolio 2.0 Component Rendering Tests', () => {
    test('renders SectionHeading component with title and subtitle', () => {
      render(
        <SectionHeading
          title="Engineering"
          highlight="Projects"
          subtitle="Test subtitle"
        />
      );
      expect(screen.getByText(/Engineering/i)).toBeInTheDocument();
      expect(screen.getByText(/Projects/i)).toBeInTheDocument();
      expect(screen.getByText(/Test subtitle/i)).toBeInTheDocument();
    });

    test('renders TechBadge with correct label', () => {
      render(<TechBadge name="FastAPI" variant="accent" />);
      expect(screen.getByText('FastAPI')).toBeInTheDocument();
    });

    test('renders ProjectCards with Case Study link and tags', () => {
      const project = getProjectBySlug('fleet-digital-twin');
      render(
        <BrowserRouter>
          <ProjectCards project={project} />
        </BrowserRouter>
      );
      expect(screen.getByText('Fleet Digital Twin')).toBeInTheDocument();
      expect(screen.getByText('Case Study')).toBeInTheDocument();
    });
  });

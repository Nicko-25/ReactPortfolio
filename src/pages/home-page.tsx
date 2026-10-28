import { AboutSection } from '@/components/organisms/about-section';
import { ContactSection } from '@/components/organisms/contact-section';
import { EducationSection } from '@/components/organisms/education-section';
import { ExperienceSection } from '@/components/organisms/experience-section';
import { HeroSection } from '@/components/organisms/hero-section';
import { ProjectsSection } from '@/components/organisms/projects-section';
import { TechStackSection } from '@/components/organisms/tech-stack-section';
import { MainLayout } from '@/components/templates/main-layout';
import { useTheme } from '@/hooks/use-theme.hook';

export const HomePage = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <MainLayout theme={theme} onToggleTheme={toggleTheme}>
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </MainLayout>
  );
};

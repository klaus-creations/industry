import { HeroSection } from '../components/home/hero-section';
import { StatsSection } from '../components/home/stats-section';
import { SolutionsGrid } from '../components/home/solutions-grid';
import { FAQSection } from '../components/home/faq-section';
import { CTASection } from '../components/home/cta-section';

interface HomePageProps {
  setActivePage: (page: string) => void;
}

export const HomePage = ({ setActivePage }: HomePageProps) => {
  return (
    <div className="w-full">
      <HeroSection setActivePage={setActivePage} />
      <StatsSection />
      <SolutionsGrid setActivePage={setActivePage} />
      <FAQSection />
      <CTASection />
    </div>
  );
};

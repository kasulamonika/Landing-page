import { Navbar } from './Navbar';
import { Button } from './ui/button';
import { 
  Brain, 
  Target, 
  Users, 
  BarChart, 
  GraduationCap, 
  Award, 
  BookOpen, 
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  Rocket,
  Shield,
  Zap,
  Globe,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { useScroll, useTransform, motion, MotionValue } from 'motion/react';
import { useRef } from 'react';
import EnhancedHeroSection from './EnhancedHeroSection';

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

const AnimatedHeroSection: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.7]);

  return (
    <motion.section
      style={{ scale, opacity }}
      className="relative overflow-hidden text-white w-full min-h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to bottom right, var(--blue4), var(--blue2))' }}></div>
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl" style={{ backgroundColor: 'var(--blue10)' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'var(--blue10)' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl group/title">
            Your Future Starts with
            <span 
              className="block mt-2 transition-all duration-300 cursor-pointer" 
              style={{ 
                backgroundImage: 'linear-gradient(to right, var(--blue10), white)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 25px rgba(165, 212, 245, 1))',
                textShadow: '0 0 30px rgba(165, 212, 245, 0.8)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 35px rgba(165, 212, 245, 1.2))';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 25px rgba(165, 212, 245, 1))';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Smart Career Decisions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto transition-all duration-300 hover:text-white" style={{ color: 'rgba(165, 212, 245, 0.9)' }}>
            CareerG1 combines AI assessments, personalized recommendations, learning pathways, 
            and mentorship to help you make informed, data-backed career choices.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
            <motion.div 
              className="rounded-lg p-4 border transition-all duration-300 cursor-pointer group/card" 
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(165, 212, 245, 0.2)', backdropFilter: 'blur(4px)' }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(165, 212, 245, 0.3)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false }}
            >
              <div className="text-3xl font-bold group-hover/card:text-white transition-colors">250M+</div>
              <div className="text-sm" style={{ color: 'rgba(165, 212, 245, 0.8)' }}>School Students</div>
            </motion.div>
            <motion.div 
              className="rounded-lg p-4 border transition-all duration-300 cursor-pointer group/card" 
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(165, 212, 245, 0.2)', backdropFilter: 'blur(4px)' }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(165, 212, 245, 0.3)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <div className="text-3xl font-bold group-hover/card:text-white transition-colors">40M+</div>
              <div className="text-sm" style={{ color: 'rgba(165, 212, 245, 0.8)' }}>College Students</div>
            </motion.div>
            <motion.div 
              className="rounded-lg p-4 border transition-all duration-300 cursor-pointer group/card" 
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(165, 212, 245, 0.2)', backdropFilter: 'blur(4px)' }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(165, 212, 245, 0.3)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
            >
              <div className="text-3xl font-bold group-hover/card:text-white transition-colors">12M</div>
              <div className="text-sm" style={{ color: 'rgba(165, 212, 245, 0.8)' }}>Graduates/Year</div>
            </motion.div>
            <motion.div 
              className="rounded-lg p-4 border transition-all duration-300 cursor-pointer group/card" 
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(165, 212, 245, 0.2)', backdropFilter: 'blur(4px)' }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(165, 212, 245, 0.3)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
            >
              <div className="text-3xl font-bold group-hover/card:text-white transition-colors">70%</div>
              <div className="text-sm" style={{ color: 'rgba(165, 212, 245, 0.8)' }}>Lack Guidance</div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export function LandingPage() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end center'],
  });

  return (
    <div ref={container} className="relative w-full">
      <Navbar />
      
      {/* Enhanced Animated Hero Section with Digital Serenity Effects */}
      <EnhancedHeroSection />
      
      {/* Regular sections below */}
      <div className="w-full" style={{ backgroundImage: 'linear-gradient(to bottom right, var(--blue10), white)' }}>

        {/* Problem Statement */}
      <motion.section 
        className="container mx-auto px-4 py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, margin: '-100px' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl mb-4" style={{ color: 'var(--blue4)' }}>
              The Career Guidance Crisis
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: 'rgba(28, 130, 180, 0.8)' }}>
              Millions of students face critical challenges that impact their future success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-slide-in-left" style={{ backgroundColor: 'rgba(165, 212, 245, 0.4)', borderColor: 'rgba(28, 130, 180, 0.3)', borderWidth: '2px' }}>
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: 'var(--blue4)' }} />
                <div>
                  <h3 className="text-xl mb-2" style={{ color: 'var(--blue4)' }}>Lack of Personalized Guidance</h3>
                  <p className="text-gray-700">
                    Generic career advice fails to account for individual strengths, interests, and aspirations, 
                    leaving students confused and directionless.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-slide-in-right" style={{ backgroundColor: 'rgba(165, 212, 245, 0.4)', borderColor: 'rgba(28, 130, 180, 0.3)', borderWidth: '2px' }}>
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: 'var(--blue4)' }} />
                <div>
                  <h3 className="text-xl mb-2" style={{ color: 'var(--blue4)' }}>Fragmented Platforms</h3>
                  <p className="text-gray-700">
                    Students juggle multiple disconnected tools for career exploration, college research, 
                    and skill development—creating confusion and inefficiency.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-slide-in-left" style={{ backgroundColor: 'rgba(165, 212, 245, 0.4)', borderColor: 'rgba(28, 130, 180, 0.3)', borderWidth: '2px' }}>
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: 'var(--blue4)' }} />
                <div>
                  <h3 className="text-xl mb-2" style={{ color: 'var(--blue4)' }}>No AI-Driven Recommendations</h3>
                  <p className="text-gray-700">
                    Traditional methods rely on outdated career tests without leveraging modern AI to provide 
                    intelligent, data-backed pathway recommendations.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-slide-in-right" style={{ backgroundColor: 'rgba(165, 212, 245, 0.4)', borderColor: 'rgba(28, 130, 180, 0.3)', borderWidth: '2px' }}>
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: 'var(--blue4)' }} />
                <div>
                  <h3 className="text-xl mb-2" style={{ color: 'var(--blue4)' }}>Limited Access in Tier-2 & Tier-3 Cities</h3>
                  <p className="text-gray-700">
                    Quality career counseling remains a privilege of metro cities, leaving millions 
                    of talented students in smaller towns without proper guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Solution Section */}
      <motion.section 
        className="py-20" 
        style={{ backgroundImage: 'linear-gradient(to bottom right, rgba(28, 130, 180, 0.1), rgba(165, 212, 245, 0.5))' }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, margin: '-100px' }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: 'var(--blue4)', color: 'var(--blue10)' }}>
                <Lightbulb className="w-4 h-4" />
                <span className="text-sm">The Solution ?</span>
              </div>
              <h2 className="text-3xl md:text-5xl mb-4" style={{ color: 'var(--blue4)' }}>
                CareerG1. One Platform, Complete Journey
              </h2>
              <p className="text-lg max-w-3xl mx-auto text-gray-700">
                From self-discovery to college admission—we unify your entire career planning experience
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-4 mb-12">
              <div className="rounded-lg p-6 text-center border-2 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group" style={{ backgroundColor: 'white', borderColor: 'var(--blue4)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: 'var(--blue4)' }}>
                  <Target className="w-8 h-8" style={{ color: 'var(--blue10)' }} />
                </div>
                <h3 className="mb-2" style={{ color: 'var(--blue4)' }}>Self-Discovery</h3>
                <p className="text-sm text-gray-600">AI-powered assessments</p>
              </div>

              <div className="rounded-lg p-6 text-center border-2 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group" style={{ backgroundColor: 'white', borderColor: 'var(--blue4)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: 'var(--blue4)' }}>
                  <Globe className="w-8 h-8" style={{ color: 'var(--blue10)' }} />
                </div>
                <h3 className="mb-2" style={{ color: 'var(--blue4)' }}>Exploration</h3>
                <p className="text-sm text-gray-600">Career & college insights</p>
              </div>

              <div className="rounded-lg p-6 text-center border-2 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group" style={{ backgroundColor: 'white', borderColor: 'var(--blue4)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: 'var(--blue4)' }}>
                  <BookOpen className="w-8 h-8" style={{ color: 'var(--blue10)' }} />
                </div>
                <h3 className="mb-2" style={{ color: 'var(--blue4)' }}>Skill Building</h3>
                <p className="text-sm text-gray-600">Adaptive pathways</p>
              </div>

              <div className="rounded-lg p-6 text-center border-2 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group" style={{ backgroundColor: 'white', borderColor: 'var(--blue4)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: 'var(--blue4)' }}>
                  <Users className="w-8 h-8" style={{ color: 'var(--blue10)' }} />
                </div>
                <h3 className="mb-2" style={{ color: 'var(--blue4)' }}>Mentorship</h3>
                <p className="text-sm text-gray-600">Expert guidance</p>
              </div>

              <div className="rounded-lg p-6 text-center border-2 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group" style={{ backgroundColor: 'white', borderColor: 'var(--blue4)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: 'var(--blue4)' }}>
                  <Rocket className="w-8 h-8" style={{ color: 'var(--blue10)' }} />
                </div>
                <h3 className="mb-2" style={{ color: 'var(--blue4)' }}>Success</h3>
                <p className="text-sm text-gray-600">College & job placement</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Core Features */}
      <motion.section 
        className="container mx-auto px-4 py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, margin: '-100px' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl mb-4" style={{ color: 'var(--blue4)' }}>
              Powerful Features, Seamless Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need for intelligent career planning, all in one platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group" style={{ backgroundColor: 'white', borderColor: 'rgba(28, 130, 180, 0.2)', borderWidth: '2px' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--blue4)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(28, 130, 180, 0.2)'}>
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ backgroundImage: 'linear-gradient(to bottom right, var(--blue4), var(--blue2))' }}>
                <Brain className="w-7 h-7" style={{ color: 'var(--blue10)' }} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: 'var(--blue4)' }}>AI Assessment Engine</h3>
              <p className="text-gray-600">
                Advanced psychometric tests analyze your personality, interests, aptitudes, and values 
                to create a comprehensive profile of your strengths.
              </p>
            </div>

            <div className="rounded-xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group" style={{ backgroundColor: 'white', borderColor: 'rgba(28, 130, 180, 0.2)', borderWidth: '2px' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--blue4)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(28, 130, 180, 0.2)'}>
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ backgroundImage: 'linear-gradient(to bottom right, var(--blue4), var(--blue2))' }}>
                <Target className="w-7 h-7" style={{ color: 'var(--blue10)' }} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: 'var(--blue4)' }}>Smart Recommendations</h3>
              <p className="text-gray-600">
                AI-powered matching system suggests personalized career paths, courses, and colleges 
                aligned with your unique profile and aspirations.
              </p>
            </div>

            <div className="rounded-xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group" style={{ backgroundColor: 'white', borderColor: 'rgba(28, 130, 180, 0.2)', borderWidth: '2px' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--blue4)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(28, 130, 180, 0.2)'}>
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ backgroundImage: 'linear-gradient(to bottom right, var(--blue4), var(--blue2))' }}>
                <Users className="w-7 h-7" style={{ color: 'var(--blue10)' }} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: 'var(--blue4)' }}>Everyone Gets a Personalized Dashboard</h3>
              <p className="text-gray-600">
                Dedicated dashboards for students, parents, and teachers enabling collaborative 
                decision making with real time progress tracking.
              </p>
            </div>

            <div className="rounded-xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group" style={{ backgroundColor: 'white', borderColor: 'rgba(28, 130, 180, 0.2)', borderWidth: '2px' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--blue4)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(28, 130, 180, 0.2)'}>
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ backgroundImage: 'linear-gradient(to bottom right, var(--blue4), var(--blue2))' }}>
                <BookOpen className="w-7 h-7" style={{ color: 'var(--blue10)' }} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: 'var(--blue4)' }}>Dynamic Learning Pathways</h3>
              <p className="text-gray-600">
                Personalized roadmaps with curated course recommendations, and skill-building 
                activities that adapt to your progress and goals.
              </p>
            </div>

            <div className="rounded-xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group" style={{ backgroundColor: 'white', borderColor: 'rgba(28, 130, 180, 0.2)', borderWidth: '2px' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--blue4)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(28, 130, 180, 0.2)'}>
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ backgroundImage: 'linear-gradient(to bottom right, var(--blue4), var(--blue2))' }}>
                <GraduationCap className="w-7 h-7" style={{ color: 'var(--blue10)' }} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: 'var(--blue4)' }}>College & Scholarship Hub</h3>
              <p className="text-gray-600">
                Comprehensive database of colleges with rankings, admission criteria, placement stats, 
                and scholarship opportunities all filtered to your profile.
              </p>
            </div>

            <div className="rounded-xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group" style={{ backgroundColor: 'white', borderColor: 'rgba(28, 130, 180, 0.2)', borderWidth: '2px' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--blue4)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(28, 130, 180, 0.2)'}>
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ backgroundImage: 'linear-gradient(to bottom right, var(--blue4), var(--blue2))' }}>
                <Award className="w-7 h-7" style={{ color: 'var(--blue10)' }} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: 'var(--blue4)' }}>Verified Mentor Matching</h3>
              <p className="text-gray-600">
                Connect with industry professionals and subject experts for 1:1 guidance, 
                resume reviews, and interview preparation.
              </p>
            </div>

            <div className="rounded-xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group" style={{ backgroundColor: 'white', borderColor: 'rgba(28, 130, 180, 0.2)', borderWidth: '2px' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--blue4)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(28, 130, 180, 0.2)'}>
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ backgroundImage: 'linear-gradient(to bottom right, var(--blue4), var(--blue2))' }}>
                <BarChart className="w-7 h-7" style={{ color: 'var(--blue10)' }} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: 'var(--blue4)' }}>Analytics Dashboard</h3>
              <p className="text-gray-600">
                Track progress, monitor skill development, and visualize your journey with 
                comprehensive analytics and actionable insights.
              </p>
            </div>

            <div className="rounded-xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group" style={{ backgroundColor: 'white', borderColor: 'rgba(28, 130, 180, 0.2)', borderWidth: '2px' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--blue4)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(28, 130, 180, 0.2)'}>
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ backgroundImage: 'linear-gradient(to bottom right, var(--blue4), var(--blue2))' }}>
                <TrendingUp className="w-7 h-7" style={{ color: 'var(--blue10)' }} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: 'var(--blue4)' }}>Career Market Insights</h3>
              <p className="text-gray-600">
                Stay informed with real time data on job trends, salary benchmarks, 
                industry growth, and emerging career opportunities.
              </p>
            </div>

            <div className="rounded-xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group" style={{ backgroundColor: 'white', borderColor: 'rgba(28, 130, 180, 0.2)', borderWidth: '2px' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--blue4)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(28, 130, 180, 0.2)'}>
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ backgroundImage: 'linear-gradient(to bottom right, var(--blue4), var(--blue2))' }}>
                <Shield className="w-7 h-7" style={{ color: 'var(--blue10)' }} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: 'var(--blue4)' }}>Institutional Support</h3>
              <p className="text-gray-600">
                Schools and colleges can access admin dashboards to monitor student progress, 
                generate reports, and provide institutional guidance.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* USPs Section */}
      <motion.section 
        className="py-20" 
        style={{ backgroundImage: 'linear-gradient(to bottom right, var(--blue4), var(--blue2))' }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, margin: '-100px' }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl mb-4" style={{ color: 'var(--blue10)' }}>
                Why Choose CareerG1?
              </h2>
              <p className="text-lg max-w-3xl mx-auto" style={{ color: 'rgba(165, 212, 245, 0.9)' }}>
                What sets us apart in the career guidance landscape
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="backdrop-blur-sm border-2 rounded-xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(165, 212, 245, 0.3)' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--blue10)' }}>
                    <Zap className="w-6 h-6" style={{ color: 'var(--blue4)' }} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2" style={{ color: 'var(--blue10)' }}>AI First Approach</h3>
                    <p style={{ color: 'rgba(165, 212, 245, 0.8)' }}>
                      Unlike traditional platforms, we leverage cutting edge AI for both assessment and 
                      recommendation delivering unmatched accuracy and personalization.
                    </p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-sm border-2 rounded-xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(165, 212, 245, 0.3)' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--blue10)' }}>
                    <Shield className="w-6 h-6" style={{ color: 'var(--blue4)' }} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2" style={{ color: 'var(--blue10)' }}>Data Driven Decisions</h3>
                    <p style={{ color: 'rgba(165, 212, 245, 0.8)' }}>
                      Every recommendation is backed by data, analytics, and real world outcomes 
                      giving you confidence that you're making informed career choices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-sm border-2 rounded-xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(165, 212, 245, 0.3)' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--blue10)' }}>
                    <TrendingUp className="w-6 h-6" style={{ color: 'var(--blue4)' }} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2" style={{ color: 'var(--blue10)' }}>Adaptive Learning Paths</h3>
                    <p style={{ color: 'rgba(165, 212, 245, 0.8)' }}>
                      Our skill development roadmaps dynamically adjust based on your progress, 
                      learning style, and evolving career interests keeping you always on track.
                    </p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-sm border-2 rounded-xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(165, 212, 245, 0.3)' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--blue10)' }}>
                    <Globe className="w-6 h-6" style={{ color: 'var(--blue4)' }} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2" style={{ color: 'var(--blue10)' }}>Democratizing Access</h3>
                    <p style={{ color: 'rgba(165, 212, 245, 0.8)' }}>
                      We're breaking geographical barriers bringing world class career guidance to 
                      Tier-2 and Tier-3 cities, making quality counseling accessible to all.
                    </p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-sm border-2 rounded-xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(165, 212, 245, 0.3)' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--blue10)' }}>
                    <CheckCircle className="w-6 h-6" style={{ color: 'var(--blue4)' }} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2" style={{ color: 'var(--blue10)' }}>End to End Journey</h3>
                    <p style={{ color: 'rgba(165, 212, 245, 0.8)' }}>
                      From initial self discovery to final college placement we support you at every 
                      step, eliminating the need for multiple disconnected tools.
                    </p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-sm border-2 rounded-xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(165, 212, 245, 0.3)' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--blue10)' }}>
                    <Users className="w-6 h-6" style={{ color: 'var(--blue4)' }} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2" style={{ color: 'var(--blue10)' }}>Complete Ecosystem</h3>
                    <p style={{ color: 'rgba(165, 212, 245, 0.8)' }}>
                      We bring students, parents, and teachers together on one platform fostering 
                      collaborative decision making and transparent progress tracking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section 
        className="container mx-auto px-4 py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, margin: '-100px' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4" style={{ color: 'var(--blue4)' }}>
              Your Journey in 4 Simple Steps
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Getting started with CareerG1 is easy and takes just minutes
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-lg" style={{ backgroundImage: 'linear-gradient(to bottom right, var(--blue4), var(--blue2))' }}>
                  <span className="text-3xl" style={{ color: 'var(--blue10)' }}>1</span>
                </div>
                <div className="absolute top-10 left-1/2 w-full h-0.5 hidden md:block" style={{ backgroundColor: 'rgba(28, 130, 180, 0.3)' }}></div>
              </div>
              <h3 className="text-xl mb-2" style={{ color: 'var(--blue4)' }}>Sign Up</h3>
              <p className="text-gray-600">
                Create your account in seconds using email or mobile number
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-lg" style={{ backgroundImage: 'linear-gradient(to bottom right, var(--blue4), var(--blue2))' }}>
                  <span className="text-3xl" style={{ color: 'var(--blue10)' }}>2</span>
                </div>
                <div className="absolute top-10 left-1/2 w-full h-0.5 hidden md:block" style={{ backgroundColor: 'rgba(28, 130, 180, 0.3)' }}></div>
              </div>
              <h3 className="text-xl mb-2" style={{ color: 'var(--blue4)' }}>Take Assessment</h3>
              <p className="text-gray-600">
                Complete our AI-powered tests to discover your strengths
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-lg" style={{ backgroundImage: 'linear-gradient(to bottom right, var(--blue4), var(--blue2))' }}>
                  <span className="text-3xl" style={{ color: 'var(--blue10)' }}>3</span>
                </div>
                <div className="absolute top-10 left-1/2 w-full h-0.5 hidden md:block" style={{ backgroundColor: 'rgba(28, 130, 180, 0.3)' }}></div>
              </div>
              <h3 className="text-xl mb-2" style={{ color: 'var(--blue4)' }}>Get Recommendations</h3>
              <p className="text-gray-600">
                Receive personalized career paths and college suggestions
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-lg" style={{ backgroundImage: 'linear-gradient(to bottom right, var(--blue4), var(--blue2))' }}>
                  <span className="text-3xl" style={{ color: 'var(--blue10)' }}>4</span>
                </div>
              </div>
              <h3 className="text-xl mb-2" style={{ color: 'var(--blue4)' }}>Start Learning</h3>
              <p className="text-gray-600">
                Follow your custom roadmap and connect with mentors
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Who Can Use CareerG1 */}
      <motion.section 
        className="py-20" 
        style={{ backgroundImage: 'linear-gradient(to bottom right, rgba(165, 212, 245, 0.5), white)' }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, margin: '-100px' }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl mb-4" style={{ color: 'var(--blue4)' }}>
                Built for Everyone in Education
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Whether you're a student, parent, teacher, or institution CareerG1 empowers you
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-xl p-8 border-2 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center" style={{ backgroundColor: 'white', borderColor: 'var(--blue4)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--blue4)' }}>
                  <GraduationCap className="w-8 h-8" style={{ color: 'var(--blue10)' }} />
                </div>
                <h3 className="text-xl mb-3" style={{ color: 'var(--blue4)' }}>Students</h3>
                <p className="text-gray-600 text-sm">
                  From 5th grade to postgraduate discover your path, build skills, and achieve your dreams
                </p>
              </div>

              <div className="rounded-xl p-8 border-2 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center" style={{ backgroundColor: 'white', borderColor: 'var(--blue4)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--blue4)' }}>
                  <Users className="w-8 h-8" style={{ color: 'var(--blue10)' }} />
                </div>
                <h3 className="text-xl mb-3" style={{ color: 'var(--blue4)' }}>Parents</h3>
                <p className="text-gray-600 text-sm">
                  Track your child's progress, view roadmaps, and make collaborative decisions together
                </p>
              </div>

              <div className="rounded-xl p-8 border-2 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center" style={{ backgroundColor: 'white', borderColor: 'var(--blue4)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--blue4)' }}>
                  <BookOpen className="w-8 h-8" style={{ color: 'var(--blue10)' }} />
                </div>
                <h3 className="text-xl mb-3" style={{ color: 'var(--blue4)' }}>Teachers</h3>
                <p className="text-gray-600 text-sm">
                  Guide multiple students, access analytics, and provide informed counseling at scale
                </p>
              </div>

              <div className="rounded-xl p-8 border-2 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center" style={{ backgroundColor: 'white', borderColor: 'var(--blue4)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--blue4)' }}>
                  <Award className="w-8 h-8" style={{ color: 'var(--blue10)' }} />
                </div>
                <h3 className="text-xl mb-3" style={{ color: 'var(--blue4)' }}>Professionals</h3>
                <p className="text-gray-600 text-sm">
                  Early career professionals seeking upskilling, career pivots, or advanced guidance
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20" 
        style={{ backgroundImage: 'linear-gradient(to bottom right, var(--blue4), var(--blue2))' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, margin: '-100px' }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl" style={{ color: 'var(--blue10)' }}>
                Start Your AI Powered Career Journey Today
              </h2>
              <p className="text-xl" style={{ color: 'rgba(165, 212, 245, 0.9)' }}>
                Join thousands of students making smarter, data backed career decisions with CareerG1
              </p>
            </div>

            
            <div className="pt-8 flex items-center justify-center gap-8 text-sm" style={{ color: 'rgba(165, 212, 245, 0.8)' }}>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Free assessment included</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="border-t-4 py-8" 
        style={{ backgroundColor: 'var(--blue4)', borderTopColor: 'var(--blue10)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, margin: '-100px' }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center" style={{ color: 'var(--blue10)' }}>
            <p className="mb-2">© 2025 CareerG1. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-up,
          .animate-slide-in-left,
          .animate-slide-in-right,
          .animate-fade-in {
            animation: none;
          }
        }
      `}</style>
      </div>
    </div>
  );
}

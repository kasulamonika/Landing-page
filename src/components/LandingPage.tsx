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

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FBF9D1] to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#659287] to-[#527368] text-[#FBF9D1]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#FBF9D1] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FBF9D1] rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-[#FBF9D1]/20 backdrop-blur-sm px-4 py-2 rounded-full border border-[#FBF9D1]/30">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">AI-Powered Career Guidance Ecosystem</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl">
              Your Future Starts with
              <span className="block mt-2 bg-gradient-to-r from-[#FBF9D1] to-white bg-clip-text text-transparent">
                Smart Career Decisions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#FBF9D1]/90 max-w-3xl mx-auto">
              CareerG1 combines AI assessments, personalized recommendations, learning pathways, 
              and mentorship to help you make informed, data-backed career choices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                className="bg-[#FBF9D1] text-[#659287] hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6 group cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  Start Your Journey
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent text-[#FBF9D1] border-2 border-[#FBF9D1] hover:bg-[#FBF9D1] hover:text-[#659287] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6 cursor-pointer"
              >
                Explore Platform
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-[#FBF9D1]/20 hover:bg-white/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl">250M+</div>
                <div className="text-sm text-[#FBF9D1]/80">School Students</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-[#FBF9D1]/20 hover:bg-white/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl">40M+</div>
                <div className="text-sm text-[#FBF9D1]/80">College Students</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-[#FBF9D1]/20 hover:bg-white/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl">12M</div>
                <div className="text-sm text-[#FBF9D1]/80">Graduates/Year</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-[#FBF9D1]/20 hover:bg-white/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl">70%</div>
                <div className="text-sm text-[#FBF9D1]/80">Lack Guidance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl text-[#659287] mb-4">
              The Career Guidance Crisis
            </h2>
            <p className="text-lg text-[#659287]/80 max-w-3xl mx-auto">
              Millions of students face critical challenges that impact their future success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#FBF9D1]/40 border-2 border-[#659287]/30 rounded-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-slide-in-left">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-[#659287] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl text-[#659287] mb-2">Lack of Personalized Guidance</h3>
                  <p className="text-gray-700">
                    Generic career advice fails to account for individual strengths, interests, and aspirations, 
                    leaving students confused and directionless.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#FBF9D1]/40 border-2 border-[#659287]/30 rounded-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-slide-in-right">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-[#659287] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl text-[#659287] mb-2">Fragmented Platforms</h3>
                  <p className="text-gray-700">
                    Students juggle multiple disconnected tools for career exploration, college research, 
                    and skill development—creating confusion and inefficiency.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#FBF9D1]/40 border-2 border-[#659287]/30 rounded-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-slide-in-left">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-[#659287] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl text-[#659287] mb-2">No AI-Driven Recommendations</h3>
                  <p className="text-gray-700">
                    Traditional methods rely on outdated career tests without leveraging modern AI to provide 
                    intelligent, data-backed pathway recommendations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#FBF9D1]/40 border-2 border-[#659287]/30 rounded-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-slide-in-right">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-[#659287] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl text-[#659287] mb-2">Limited Access in Tier-2 & Tier-3 Cities</h3>
                  <p className="text-gray-700">
                    Quality career counseling remains a privilege of metro cities, leaving millions 
                    of talented students in smaller towns without proper guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-gradient-to-br from-[#659287]/10 to-[#FBF9D1]/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-[#659287] text-[#FBF9D1] px-4 py-2 rounded-full mb-4">
                <Lightbulb className="w-4 h-4" />
                <span className="text-sm">The CareerG1 Solution</span>
              </div>
              <h2 className="text-3xl md:text-5xl text-[#659287] mb-4">
                One Platform, Complete Journey
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                From self-discovery to college admission—we unify your entire career planning experience
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-4 mb-12">
              <div className="bg-white rounded-lg p-6 text-center border-2 border-[#659287] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#659287] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-[#FBF9D1]" />
                </div>
                <h3 className="text-[#659287] mb-2">Self-Discovery</h3>
                <p className="text-sm text-gray-600">AI-powered assessments</p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center border-2 border-[#659287] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#659287] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-[#FBF9D1]" />
                </div>
                <h3 className="text-[#659287] mb-2">Exploration</h3>
                <p className="text-sm text-gray-600">Career & college insights</p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center border-2 border-[#659287] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#659287] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-[#FBF9D1]" />
                </div>
                <h3 className="text-[#659287] mb-2">Skill Building</h3>
                <p className="text-sm text-gray-600">Adaptive pathways</p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center border-2 border-[#659287] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#659287] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-[#FBF9D1]" />
                </div>
                <h3 className="text-[#659287] mb-2">Mentorship</h3>
                <p className="text-sm text-gray-600">Expert guidance</p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center border-2 border-[#659287] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#659287] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Rocket className="w-8 h-8 text-[#FBF9D1]" />
                </div>
                <h3 className="text-[#659287] mb-2">Success</h3>
                <p className="text-sm text-gray-600">College & job placement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl text-[#659287] mb-4">
              Powerful Features, Seamless Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need for intelligent career planning, all in one platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border-2 border-[#659287]/20 hover:border-[#659287] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#659287] to-[#527368] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Brain className="w-7 h-7 text-[#FBF9D1]" />
              </div>
              <h3 className="text-xl text-[#659287] mb-3">AI Assessment Engine</h3>
              <p className="text-gray-600">
                Advanced psychometric tests analyze your personality, interests, aptitudes, and values 
                to create a comprehensive profile of your strengths.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-[#659287]/20 hover:border-[#659287] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#659287] to-[#527368] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7 text-[#FBF9D1]" />
              </div>
              <h3 className="text-xl text-[#659287] mb-3">Smart Recommendations</h3>
              <p className="text-gray-600">
                AI-powered matching system suggests personalized career paths, courses, and colleges 
                aligned with your unique profile and aspirations.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-[#659287]/20 hover:border-[#659287] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#659287] to-[#527368] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-[#FBF9D1]" />
              </div>
              <h3 className="text-xl text-[#659287] mb-3">Everyone Gets a Personalized Dashboard</h3>
              <p className="text-gray-600">
                Dedicated dashboards for students, parents, and teachers enabling collaborative 
                decision making with real time progress tracking.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-[#659287]/20 hover:border-[#659287] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#659287] to-[#527368] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7 text-[#FBF9D1]" />
              </div>
              <h3 className="text-xl text-[#659287] mb-3">Dynamic Learning Pathways</h3>
              <p className="text-gray-600">
                Personalized roadmaps with curated courses, certifications, and skill building 
                activities that adapt to your progress and goals.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-[#659287]/20 hover:border-[#659287] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#659287] to-[#527368] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-7 h-7 text-[#FBF9D1]" />
              </div>
              <h3 className="text-xl text-[#659287] mb-3">College & Scholarship Hub</h3>
              <p className="text-gray-600">
                Comprehensive database of colleges with rankings, admission criteria, placement stats, 
                and scholarship opportunities all filtered to your profile.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-[#659287]/20 hover:border-[#659287] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#659287] to-[#527368] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7 text-[#FBF9D1]" />
              </div>
              <h3 className="text-xl text-[#659287] mb-3">Verified Mentor Matching</h3>
              <p className="text-gray-600">
                Connect with industry professionals and subject experts for 1:1 guidance, 
                resume reviews, and interview preparation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-[#659287]/20 hover:border-[#659287] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#659287] to-[#527368] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BarChart className="w-7 h-7 text-[#FBF9D1]" />
              </div>
              <h3 className="text-xl text-[#659287] mb-3">Analytics Dashboard</h3>
              <p className="text-gray-600">
                Track progress, monitor skill development, and visualize your journey with 
                comprehensive analytics and actionable insights.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-[#659287]/20 hover:border-[#659287] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#659287] to-[#527368] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-[#FBF9D1]" />
              </div>
              <h3 className="text-xl text-[#659287] mb-3">Career Market Insights</h3>
              <p className="text-gray-600">
                Stay informed with real time data on job trends, salary benchmarks, 
                industry growth, and emerging career opportunities.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-[#659287]/20 hover:border-[#659287] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#659287] to-[#527368] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7 text-[#FBF9D1]" />
              </div>
              <h3 className="text-xl text-[#659287] mb-3">Institutional Support</h3>
              <p className="text-gray-600">
                Schools and colleges can access admin dashboards to monitor student progress, 
                generate reports, and provide institutional guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="bg-gradient-to-br from-[#659287] to-[#527368] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl text-[#FBF9D1] mb-4">
                Why Choose CareerG1?
              </h2>
              <p className="text-lg text-[#FBF9D1]/90 max-w-3xl mx-auto">
                What sets us apart in the career guidance landscape
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm border-2 border-[#FBF9D1]/30 rounded-xl p-8 hover:bg-white/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FBF9D1] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-[#659287]" />
                  </div>
                  <div>
                    <h3 className="text-xl text-[#FBF9D1] mb-2">AI First Approach</h3>
                    <p className="text-[#FBF9D1]/80">
                      Unlike traditional platforms, we leverage cutting edge AI for both assessment and 
                      recommendation delivering unmatched accuracy and personalization.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border-2 border-[#FBF9D1]/30 rounded-xl p-8 hover:bg-white/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FBF9D1] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-[#659287]" />
                  </div>
                  <div>
                    <h3 className="text-xl text-[#FBF9D1] mb-2">Data Driven Decisions</h3>
                    <p className="text-[#FBF9D1]/80">
                      Every recommendation is backed by data, analytics, and real world outcomes 
                      giving you confidence that you're making informed career choices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border-2 border-[#FBF9D1]/30 rounded-xl p-8 hover:bg-white/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FBF9D1] rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-[#659287]" />
                  </div>
                  <div>
                    <h3 className="text-xl text-[#FBF9D1] mb-2">Adaptive Learning Paths</h3>
                    <p className="text-[#FBF9D1]/80">
                      Our skill development roadmaps dynamically adjust based on your progress, 
                      learning style, and evolving career interests keeping you always on track.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border-2 border-[#FBF9D1]/30 rounded-xl p-8 hover:bg-white/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FBF9D1] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-[#659287]" />
                  </div>
                  <div>
                    <h3 className="text-xl text-[#FBF9D1] mb-2">Democratizing Access</h3>
                    <p className="text-[#FBF9D1]/80">
                      We're breaking geographical barriers bringing world class career guidance to 
                      Tier-2 and Tier-3 cities, making quality counseling accessible to all.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border-2 border-[#FBF9D1]/30 rounded-xl p-8 hover:bg-white/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FBF9D1] rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-[#659287]" />
                  </div>
                  <div>
                    <h3 className="text-xl text-[#FBF9D1] mb-2">End to End Journey</h3>
                    <p className="text-[#FBF9D1]/80">
                      From initial self discovery to final college placement we support you at every 
                      step, eliminating the need for multiple disconnected tools.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border-2 border-[#FBF9D1]/30 rounded-xl p-8 hover:bg-white/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FBF9D1] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-[#659287]" />
                  </div>
                  <div>
                    <h3 className="text-xl text-[#FBF9D1] mb-2">Complete Ecosystem</h3>
                    <p className="text-[#FBF9D1]/80">
                      We bring students, parents, and teachers together on one platform fostering 
                      collaborative decision making and transparent progress tracking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl text-[#659287] mb-4">
              Your Journey in 4 Simple Steps
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Getting started with CareerG1 is easy and takes just minutes
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#659287] to-[#527368] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-3xl text-[#FBF9D1]">1</span>
                </div>
                <div className="absolute top-10 left-1/2 w-full h-0.5 bg-[#659287]/30 hidden md:block"></div>
              </div>
              <h3 className="text-xl text-[#659287] mb-2">Sign Up</h3>
              <p className="text-gray-600">
                Create your account in seconds using email or mobile number
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#659287] to-[#527368] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-3xl text-[#FBF9D1]">2</span>
                </div>
                <div className="absolute top-10 left-1/2 w-full h-0.5 bg-[#659287]/30 hidden md:block"></div>
              </div>
              <h3 className="text-xl text-[#659287] mb-2">Take Assessment</h3>
              <p className="text-gray-600">
                Complete our AI-powered tests to discover your strengths
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#659287] to-[#527368] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-3xl text-[#FBF9D1]">3</span>
                </div>
                <div className="absolute top-10 left-1/2 w-full h-0.5 bg-[#659287]/30 hidden md:block"></div>
              </div>
              <h3 className="text-xl text-[#659287] mb-2">Get Recommendations</h3>
              <p className="text-gray-600">
                Receive personalized career paths and college suggestions
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#659287] to-[#527368] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-3xl text-[#FBF9D1]">4</span>
                </div>
              </div>
              <h3 className="text-xl text-[#659287] mb-2">Start Learning</h3>
              <p className="text-gray-600">
                Follow your custom roadmap and connect with mentors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Use CareerG1 */}
      <section className="bg-gradient-to-br from-[#FBF9D1]/50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl text-[#659287] mb-4">
                Built for Everyone in Education
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Whether you're a student, parent, teacher, or institution CareerG1 empowers you
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-8 border-2 border-[#659287] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-[#659287] rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-[#FBF9D1]" />
                </div>
                <h3 className="text-xl text-[#659287] mb-3">Students</h3>
                <p className="text-gray-600 text-sm">
                  From 5th grade to postgraduate discover your path, build skills, and achieve your dreams
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-[#659287] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-[#659287] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#FBF9D1]" />
                </div>
                <h3 className="text-xl text-[#659287] mb-3">Parents</h3>
                <p className="text-gray-600 text-sm">
                  Track your child's progress, view roadmaps, and make collaborative decisions together
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-[#659287] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-[#659287] rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-[#FBF9D1]" />
                </div>
                <h3 className="text-xl text-[#659287] mb-3">Teachers</h3>
                <p className="text-gray-600 text-sm">
                  Guide multiple students, access analytics, and provide informed counseling at scale
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-[#659287] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-[#659287] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[#FBF9D1]" />
                </div>
                <h3 className="text-xl text-[#659287] mb-3">Professionals</h3>
                <p className="text-gray-600 text-sm">
                  Early career professionals seeking upskilling, career pivots, or advanced guidance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#659287] to-[#527368] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl text-[#FBF9D1]">
                Start Your AI Powered Career Journey Today
              </h2>
              <p className="text-xl text-[#FBF9D1]/90">
                Join thousands of students making smarter, data backed career decisions with CareerG1
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                className="bg-[#FBF9D1] text-[#659287] hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-lg px-10 py-7 group cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  Get Started Free
                  <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent text-[#FBF9D1] border-2 border-[#FBF9D1] hover:bg-[#FBF9D1] hover:text-[#659287] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-lg px-10 py-7 cursor-pointer"
              >
                Explore Dashboard
              </Button>
            </div>

            <div className="pt-8 flex items-center justify-center gap-8 text-[#FBF9D1]/80 text-sm">
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
      </section>

      {/* Footer */}
      <footer className="bg-[#659287] border-t-4 border-[#FBF9D1] py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-[#FBF9D1]">
            <p className="mb-2">© 2025 CareerG1. All rights reserved.</p>
            <p className="text-sm text-[#FBF9D1]/80">
              Empowering futures through AI-powered career guidance
            </p>
          </div>
        </div>
      </footer>

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
  );
}

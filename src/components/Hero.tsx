import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';
import { useScrollAnimation, useStaggeredScrollAnimation } from '@/hooks/useScrollAnimation';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.2);
  const { ref: statsRef, visibleItems: statsVisible } = useStaggeredScrollAnimation(3, 0.3);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-smooth"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 hero-gradient opacity-90 z-10"></div>
        <img 
          src={heroImage} 
          alt="Students learning financial literacy"
          className={`w-full h-full object-cover transition-all duration-1000 ${
            heroVisible ? 'scale-100' : 'scale-105'
          }`}
        />
      </div>

      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className={`absolute top-1/4 left-1/4 w-72 h-72 bg-primary-light/20 rounded-full blur-3xl transition-all duration-1000 ${
          heroVisible ? 'animate-pulse opacity-100' : 'opacity-0 scale-75'
        }`}></div>
        <div className={`absolute top-3/4 right-1/4 w-96 h-96 bg-primary-soft/20 rounded-full blur-3xl transition-all duration-1000 delay-300 ${
          heroVisible ? 'animate-pulse opacity-100' : 'opacity-0 scale-75'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 w-64 h-64 bg-primary/10 rounded-full blur-2xl transition-all duration-1000 delay-500 ${
          heroVisible ? 'animate-pulse opacity-100' : 'opacity-0 scale-75'
        }`}></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`reveal-on-scroll ${
          heroVisible ? 'revealed' : ''
        }`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className={`block transition-all duration-700 ${
              heroVisible ? 'animate-fade-in-up' : ''
            }`}>
              Empowering the Next Generation with
            </span>
            <span className={`block text-secondary mt-2 transition-all duration-700 delay-200 ${
              heroVisible ? 'animate-fade-in-up' : ''
            }`}>
              Financial Literacy
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-400 ${
            heroVisible ? 'animate-fade-in-up' : ''
          }`}>
            Through accessible education, innovative resources, and impactful partnerships, 
            we bridge the gap in financial literacy for young people everywhere.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-700 delay-600 ${
            heroVisible ? 'animate-fade-in-scale' : ''
          }`}>
            <Link to="/about">
              <Button 
                variant="coral" 
                size="lg" 
                className="text-lg px-8 py-4 hover-coral shadow-coral"
              >
                Discover Our Mission
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            
            <Link to="/programs">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
              >
                <Play className="mr-2" size={20} />
                Explore Programs
              </Button>
            </Link>
          </div>

          {/* Enhanced Stats with staggered animation */}
          <div 
            ref={statsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className={`reveal-scale ${
              statsVisible[0] ? 'revealed' : ''
            }`}>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 font-mono">200+</div>
              <div className="text-white/80 text-lg font-medium">Students Educated</div>
            </div>
            <div className={`reveal-scale ${
              statsVisible[1] ? 'revealed' : ''
            }`}>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 font-mono">7+</div>
              <div className="text-white/80 text-lg font-medium">Branches Worldwide</div>
            </div>
            <div className={`reveal-scale ${
              statsVisible[2] ? 'revealed' : ''
            }`}>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 font-mono">100%</div>
              <div className="text-white/80 text-lg font-medium">Student-Led Initiative</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-1000 delay-1000 ${
        heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center hover:border-secondary transition-colors duration-300">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollPosition * 0.4;

  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-chip-blue/30 to-transparent z-0"
        style={{ 
          backgroundImage: "url('/placeholder.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${parallaxOffset}px)`,
          opacity: 0.7
        }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-chip-orange/30 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-chip-green/20 rounded-full blur-3xl animate-float" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-white/30 backdrop-blur-sm rounded-full text-sm font-medium mb-6 animate-slide-down">
            <span className="text-chip-orange">🥔</span> The Ultimate Potato Chip Discovery Platform
          </span>
          
          <h1 className={cn(
            "text-4xl md:text-6xl font-bold mb-6 leading-tight",
            "bg-clip-text text-transparent bg-gradient-to-r from-chip-orange via-chip-pink to-chip-purple"
          )}>
            Discover the World's Most Delicious Potato Chips
          </h1>
          
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto animate-slide-up">
            Explore, rate, and share your favorite chip flavors from around the globe. 
            Join our community of chip enthusiasts today!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/explore">
              <Button size="lg" className="bg-chip-orange hover:bg-chip-orange/90 text-white px-8 h-12 shadow-lg shadow-chip-orange/30 text-lg transition-all duration-300 hover:scale-105">
                Explore Chips
              </Button>
            </Link>
            <Link to="/submit">
              <Button variant="outline" size="lg" className="border-chip-blue text-chip-blue hover:bg-chip-blue/10 px-8 h-12 text-lg transition-all duration-300 hover:scale-105">
                Submit a Chip
              </Button>
            </Link>
          </div>
          
          {/* Search bar */}
          <div className="relative max-w-xl mx-auto animate-scale-in">
            <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-full flex items-center p-2 border border-white/50">
              <div className="pl-4 pr-2">
                <Search size={20} className="text-chip-orange" />
              </div>
              <input
                type="text"
                placeholder="Search chips, flavors, brands..."
                className="flex-1 bg-transparent border-0 focus:ring-0 py-3 text-foreground"
              />
              <div className="flex items-center gap-2 pr-3">
                <span className="h-6 w-px bg-border"></span>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin size={16} />
                  <select className="bg-transparent border-0 focus:ring-0 pl-1 pr-8 py-1 text-sm">
                    <option value="global">Global</option>
                    <option value="north-america">North America</option>
                    <option value="europe">Europe</option>
                    <option value="asia">Asia</option>
                    <option value="australia">Australia</option>
                  </select>
                </div>
                <Button className="rounded-full bg-chip-orange hover:bg-chip-orange/90 text-white px-6">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;

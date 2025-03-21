
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Explore', path: '/explore' },
    { name: 'Submit', path: '/submit' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
      isScrolled ? 'bg-white/70 backdrop-blur-lg shadow-md py-2' : 'bg-transparent py-4'
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-chip-orange">
          <span className="text-3xl">🥔</span>
          <span className="animate-pulse-soft">ChipTopia</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-lg font-medium transition-all duration-300 hover:text-chip-orange relative group',
                  location.pathname === link.path ? 'text-chip-orange' : 'text-foreground'
                )}
              >
                {link.name}
                <span className={cn(
                  'absolute bottom-0 left-0 w-0 h-0.5 bg-chip-orange transition-all duration-300 group-hover:w-full',
                  location.pathname === link.path ? 'w-full' : ''
                )}></span>
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search chips..."
                className="pl-10 pr-4 py-2 rounded-full bg-muted border-0 focus:ring-2 focus:ring-chip-orange transition-all duration-300 w-48 focus:w-64"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            </div>
            
            <Button className="bg-chip-orange hover:bg-chip-orange/90 text-white">Sign In</Button>
          </div>
        </div>
        
        <button onClick={toggleMobileMenu} className="md:hidden text-foreground">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        'fixed inset-0 bg-white z-40 flex flex-col pt-24 px-8 md:hidden transition-transform duration-300 ease-in-out',
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                'text-xl font-medium py-2 border-b border-muted transition-colors',
                location.pathname === link.path ? 'text-chip-orange' : 'text-foreground'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className="mt-6">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search chips..."
              className="w-full pl-10 pr-4 py-3 rounded-full bg-muted border-0 focus:ring-2 focus:ring-chip-orange"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          </div>
          
          <Button className="w-full bg-chip-orange hover:bg-chip-orange/90 text-white py-6 text-lg">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

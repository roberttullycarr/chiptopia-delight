import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-muted pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-chip-orange">
              <span className="text-3xl">🥔</span>
              <span>Chipeaters</span>
            </Link>
            <p className="text-muted-foreground">
              Discover and share the best potato chips from around the world.
              Join our community of chip enthusiasts!
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-foreground hover:text-chip-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-foreground hover:text-chip-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground hover:text-chip-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-foreground hover:text-chip-orange transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-chip-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/explore" className="text-muted-foreground hover:text-chip-orange transition-colors">
                  Explore Chips
                </Link>
              </li>
              <li>
                <Link to="/submit" className="text-muted-foreground hover:text-chip-orange transition-colors">
                  Submit a Chip
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-chip-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-chip-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Popular Regions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/region/north-america" className="text-muted-foreground hover:text-chip-orange transition-colors flex items-center gap-1">
                  <MapPin size={14} />
                  North America
                </Link>
              </li>
              <li>
                <Link to="/region/europe" className="text-muted-foreground hover:text-chip-orange transition-colors flex items-center gap-1">
                  <MapPin size={14} />
                  Europe
                </Link>
              </li>
              <li>
                <Link to="/region/asia" className="text-muted-foreground hover:text-chip-orange transition-colors flex items-center gap-1">
                  <MapPin size={14} />
                  Asia
                </Link>
              </li>
              <li>
                <Link to="/region/south-america" className="text-muted-foreground hover:text-chip-orange transition-colors flex items-center gap-1">
                  <MapPin size={14} />
                  South America
                </Link>
              </li>
              <li>
                <Link to="/region/australia" className="text-muted-foreground hover:text-chip-orange transition-colors flex items-center gap-1">
                  <MapPin size={14} />
                  Australia
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} />
                <span>hello@chiptopia.com</span>
              </p>
              <div>
                <p className="text-foreground font-medium">Join Our Newsletter</p>
                <p className="text-sm text-muted-foreground mb-2">
                  Stay updated with the latest chip trends
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 rounded-lg bg-background border border-input focus:border-chip-orange transition-colors"
                  />
                  <button className="px-4 py-2 bg-chip-orange text-white rounded-lg hover:bg-chip-orange/90 transition-colors">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ChipTopia. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { useState } from 'react';
import Hero from '@/components/Hero';
import ChipCard from '@/components/ChipCard';
import FeaturedChip from '@/components/FeaturedChip';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star, MapPin, TrendingUp, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock data
const featuredChip = {
  id: "chip1",
  name: "Sea Salt & Vinegar",
  brand: "Kettle",
  imageUrl: "https://placehold.co/600x400/FF9500/ffffff?text=Sea+Salt+%26+Vinegar",
  description: "The perfect balance of tangy vinegar and sea salt creates a mouth-watering chip that's both sharp and satisfying. Made with the finest potatoes and cooked in small batches for that signature crunch.",
  flavor: "Tangy",
  region: "North America",
  country: "USA",
  rating: 4.8,
  reviewCount: 127,
  tags: ["Kettle-cooked", "Gluten-free", "Vegan"],
  createdAt: "2023-05-12"
};

const trendingChips = [
  {
    id: "chip2",
    name: "Sour Cream & Onion",
    brand: "Lay's",
    imageUrl: "https://placehold.co/600x400/4A90E2/ffffff?text=Sour+Cream+%26+Onion",
    description: "The classic combination of tangy sour cream and savory onion.",
    flavor: "Creamy",
    region: "North America",
    country: "USA",
    rating: 4.5,
    reviewCount: 98,
    tags: ["Classic", "Vegetarian"],
    createdAt: "2023-06-15"
  },
  {
    id: "chip3",
    name: "Jalapeño",
    brand: "Miss Vickie's",
    imageUrl: "https://placehold.co/600x400/4CD964/ffffff?text=Jalape%C3%B1o",
    description: "Spicy jalapeño peppers combined with kettle-cooked crunch.",
    flavor: "Spicy",
    region: "North America",
    country: "Canada",
    rating: 4.7,
    reviewCount: 112,
    tags: ["Kettle-cooked", "Spicy", "Vegetarian"],
    createdAt: "2023-04-28"
  },
  {
    id: "chip4",
    name: "Truffle & Cheese",
    brand: "Torres",
    imageUrl: "https://placehold.co/600x400/FF2D55/ffffff?text=Truffle+%26+Cheese",
    description: "Luxury chips with black truffle and aged cheese flavors.",
    flavor: "Savory",
    region: "Europe",
    country: "Spain",
    rating: 4.9,
    reviewCount: 76,
    tags: ["Gourmet", "Premium", "Vegetarian"],
    createdAt: "2023-07-02"
  },
  {
    id: "chip5",
    name: "Thai Sweet Chili",
    brand: "Kettle",
    imageUrl: "https://placehold.co/600x400/FFCC00/ffffff?text=Thai+Sweet+Chili",
    description: "Sweet and spicy Thai-inspired flavors on crunchy kettle chips.",
    flavor: "Sweet & Spicy",
    region: "North America",
    country: "USA",
    rating: 4.6,
    reviewCount: 91,
    tags: ["Kettle-cooked", "International", "Vegetarian"],
    createdAt: "2023-05-30"
  }
];

const regions = [
  {
    id: "region1",
    name: "North America",
    image: "https://placehold.co/600x400/FF9500/ffffff?text=North+America",
    chipCount: 342
  },
  {
    id: "region2",
    name: "Europe",
    image: "https://placehold.co/600x400/4A90E2/ffffff?text=Europe",
    chipCount: 286
  },
  {
    id: "region3",
    name: "Asia",
    image: "https://placehold.co/600x400/4CD964/ffffff?text=Asia",
    chipCount: 219
  },
  {
    id: "region4",
    name: "Australia",
    image: "https://placehold.co/600x400/FF2D55/ffffff?text=Australia",
    chipCount: 124
  }
];

const recentSubmissions = [
  {
    id: "chip6",
    name: "Roast Chicken",
    brand: "Walker's",
    imageUrl: "https://placehold.co/600x400/9B63F3/ffffff?text=Roast+Chicken",
    description: "The classic British chip flavor with savory notes of roast chicken and herbs.",
    flavor: "Savory",
    region: "Europe",
    country: "UK",
    rating: 4.3,
    reviewCount: 58,
    tags: ["Classic", "British"],
    createdAt: "2023-07-15"
  },
  {
    id: "chip7",
    name: "Nori Seaweed",
    brand: "Calbee",
    imageUrl: "https://placehold.co/600x400/FFCC00/ffffff?text=Nori+Seaweed",
    description: "Authentic Japanese seaweed flavor with hints of umami.",
    flavor: "Umami",
    region: "Asia",
    country: "Japan",
    rating: 4.7,
    reviewCount: 42,
    tags: ["Japanese", "Umami", "International"],
    createdAt: "2023-07-14"
  },
  {
    id: "chip8",
    name: "Chimichurri",
    brand: "Saladitas",
    imageUrl: "https://placehold.co/600x400/4A90E2/ffffff?text=Chimichurri",
    description: "Argentinian-inspired herb and garlic flavor with mild heat.",
    flavor: "Herbal",
    region: "South America",
    country: "Argentina",
    rating: 4.6,
    reviewCount: 37,
    tags: ["South American", "Herbal", "International"],
    createdAt: "2023-07-12"
  }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('trending');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Featured Chip */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-chip-orange to-chip-pink">
              Featured Delight
            </span>
            <div className="absolute h-1 w-24 bg-chip-orange rounded-full bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
          </h2>
          
          <FeaturedChip chip={featuredChip} />
        </section>
        
        {/* Trending Chips */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-end justify-between mb-12">
              <div>
                <span className="text-sm text-chip-orange font-medium mb-2 flex items-center gap-2">
                  <TrendingUp size={16} className="animate-pulse-soft" />
                  DISCOVER
                </span>
                <h2 className="text-3xl font-bold relative inline-block">
                  Trending Flavors
                  <div className="absolute h-1 w-1/2 bg-chip-green rounded-full bottom-0 left-0 mt-2"></div>
                </h2>
              </div>
              
              <div className="flex bg-white border border-border rounded-lg overflow-hidden shadow-sm">
                <button 
                  onClick={() => setActiveTab('trending')}
                  className={cn(
                    "px-6 py-2 text-sm font-medium transition-colors",
                    activeTab === 'trending' 
                      ? "bg-chip-orange text-white" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  Trending
                </button>
                <button 
                  onClick={() => setActiveTab('topRated')}
                  className={cn(
                    "px-6 py-2 text-sm font-medium transition-colors",
                    activeTab === 'topRated' 
                      ? "bg-chip-orange text-white" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  Top Rated
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingChips.map((chip) => (
                <ChipCard key={chip.id} chip={chip} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/explore">
                <Button variant="outline" className="border-chip-orange text-chip-orange hover:bg-chip-orange/5">
                  View All Chips
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Regions */}
        <section className="py-16 container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm text-chip-blue font-medium mb-2 inline-block">
              AROUND THE WORLD
            </span>
            <h2 className="text-3xl font-bold mb-4">
              Explore by Region
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover unique chip flavors from different parts of the world. 
              Each region offers its own special taste experience!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region) => (
              <Link 
                key={region.id} 
                to={`/region/${region.name.toLowerCase().replace(' ', '-')}`}
                className="group relative overflow-hidden rounded-xl h-60 transition-all duration-500 hover:shadow-xl"
              >
                <div className="absolute inset-0 transform group-hover:scale-110 transition-transform duration-700">
                  <img 
                    src={region.image} 
                    alt={region.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:via-black/30 transition-colors duration-300" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1 group-hover:translate-x-2 transition-transform duration-300">
                    {region.name}
                  </h3>
                  <div className="flex items-center gap-2 text-white/70">
                    <div className="w-2 h-2 rounded-full bg-chip-orange animate-pulse-soft"></div>
                    <span className="text-sm">{region.chipCount} chip varieties</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        
        {/* Recent Submissions */}
        <section className="py-16 bg-gradient-to-b from-white to-muted/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-end justify-between mb-12">
              <div>
                <span className="text-sm text-chip-pink font-medium mb-2 flex items-center gap-2">
                  FRESH ARRIVALS
                </span>
                <h2 className="text-3xl font-bold relative inline-block">
                  Recent Submissions
                  <div className="absolute h-1 w-1/2 bg-chip-pink rounded-full bottom-0 left-0 mt-2"></div>
                </h2>
              </div>
              
              <Link to="/explore?sort=newest">
                <Button variant="ghost" className="text-chip-blue hover:text-chip-blue/90 hover:bg-chip-blue/5">
                  View All Recent
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentSubmissions.map((chip) => (
                <ChipCard key={chip.id} chip={chip} />
              ))}
            </div>
            
            <div className="mt-16 glass-card p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">Have a Unique Chip to Share?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Discovered a rare or interesting chip flavor? Share it with our community!
                Upload photos, rate, and review your favorite chips.
              </p>
              <Link to="/submit">
                <Button size="lg" className="bg-chip-orange hover:bg-chip-orange/90 text-white">
                  Submit a Chip
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

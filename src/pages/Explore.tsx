
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChipCard from '@/components/ChipCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Filter, Grid, List, SlidersHorizontal, MapPin, X, Search, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Chip } from '@/lib/types';

// Mock data
const allChips: Chip[] = [
  {
    id: "chip1",
    name: "Sea Salt & Vinegar",
    brand: "Kettle",
    imageUrl: "https://placehold.co/600x400/FF9500/ffffff?text=Sea+Salt+%26+Vinegar",
    description: "The perfect balance of tangy vinegar and sea salt creates a mouth-watering chip that's both sharp and satisfying.",
    flavor: "Tangy",
    region: "North America",
    country: "USA",
    rating: 4.8,
    reviewCount: 127,
    tags: ["Kettle-cooked", "Gluten-free", "Vegan"],
    createdAt: "2023-05-12"
  },
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
  },
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
  },
  {
    id: "chip9",
    name: "Bacon & Maple Syrup",
    brand: "Deep River",
    imageUrl: "https://placehold.co/600x400/FF9500/ffffff?text=Bacon+%26+Maple",
    description: "Sweet maple syrup combined with savory bacon in perfect harmony.",
    flavor: "Sweet & Savory",
    region: "North America",
    country: "USA",
    rating: 4.4,
    reviewCount: 65,
    tags: ["Unique", "Sweet", "Kettle-cooked"],
    createdAt: "2023-06-05"
  },
  {
    id: "chip10",
    name: "Prawn Cocktail",
    brand: "Walker's",
    imageUrl: "https://placehold.co/600x400/FF2D55/ffffff?text=Prawn+Cocktail",
    description: "A British favorite with tangy tomato and seafood notes.",
    flavor: "Tangy",
    region: "Europe",
    country: "UK",
    rating: 4.2,
    reviewCount: 89,
    tags: ["British", "Seafood", "Classic"],
    createdAt: "2023-05-20"
  },
  {
    id: "chip11",
    name: "Wasabi",
    brand: "Tyrrells",
    imageUrl: "https://placehold.co/600x400/4CD964/ffffff?text=Wasabi",
    description: "Authentic Japanese wasabi heat with premium potatoes.",
    flavor: "Spicy",
    region: "Europe",
    country: "UK",
    rating: 4.5,
    reviewCount: 52,
    tags: ["Spicy", "Japanese-inspired", "Gourmet"],
    createdAt: "2023-06-28"
  },
  {
    id: "chip12",
    name: "Biltong",
    brand: "Simba",
    imageUrl: "https://placehold.co/600x400/9B63F3/ffffff?text=Biltong",
    description: "South African dried meat flavor with a spicy kick.",
    flavor: "Meaty",
    region: "Africa",
    country: "South Africa",
    rating: 4.7,
    reviewCount: 43,
    tags: ["African", "Meaty", "International"],
    createdAt: "2023-05-17"
  }
];

const flavors = [
  "Salty", "Sweet", "Sour", "Spicy", "Tangy", "Savory", "Smoky", "Umami",
  "Meaty", "Cheesy", "Creamy", "Herbal", "Sweet & Spicy", "Sweet & Savory"
];

const regions = [
  "North America", "Europe", "Asia", "South America", "Australia", "Africa"
];

const tags = [
  "Kettle-cooked", "Gluten-free", "Vegan", "Vegetarian", "Classic", "Gourmet",
  "Premium", "Spicy", "International", "Japanese", "British", "South American"
];

const Explore = () => {
  const [chips, setChips] = useState<Chip[]>(allChips);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [ratingRange, setRatingRange] = useState([0]);
  const [sortBy, setSortBy] = useState('popular');
  
  useEffect(() => {
    // Filter chips based on selected filters
    let filteredChips = allChips;
    
    // Search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredChips = filteredChips.filter(chip => 
        chip.name.toLowerCase().includes(query) || 
        chip.brand.toLowerCase().includes(query) ||
        chip.flavor.toLowerCase().includes(query)
      );
    }
    
    // Regions
    if (selectedRegions.length > 0) {
      filteredChips = filteredChips.filter(chip => 
        selectedRegions.includes(chip.region)
      );
    }
    
    // Flavors
    if (selectedFlavors.length > 0) {
      filteredChips = filteredChips.filter(chip => 
        selectedFlavors.some(flavor => 
          chip.flavor.toLowerCase().includes(flavor.toLowerCase())
        )
      );
    }
    
    // Tags
    if (selectedTags.length > 0) {
      filteredChips = filteredChips.filter(chip => 
        selectedTags.some(tag => 
          chip.tags.some(chipTag => 
            chipTag.toLowerCase().includes(tag.toLowerCase())
          )
        )
      );
    }
    
    // Rating
    if (ratingRange[0] > 0) {
      filteredChips = filteredChips.filter(chip => 
        chip.rating >= ratingRange[0]
      );
    }
    
    // Sort
    switch (sortBy) {
      case 'newest':
        filteredChips.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'highest-rated':
        filteredChips.sort((a, b) => b.rating - a.rating);
        break;
      case 'most-reviewed':
        filteredChips.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case 'a-z':
        filteredChips.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'z-a':
        filteredChips.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default: // popular (default)
        filteredChips.sort((a, b) => (b.rating * b.reviewCount) - (a.rating * a.reviewCount));
    }
    
    setChips(filteredChips);
  }, [searchQuery, selectedRegions, selectedFlavors, selectedTags, ratingRange, sortBy]);
  
  const toggleRegion = (region: string) => {
    setSelectedRegions(prevRegions => 
      prevRegions.includes(region)
        ? prevRegions.filter(r => r !== region)
        : [...prevRegions, region]
    );
  };
  
  const toggleFlavor = (flavor: string) => {
    setSelectedFlavors(prevFlavors => 
      prevFlavors.includes(flavor)
        ? prevFlavors.filter(f => f !== flavor)
        : [...prevFlavors, flavor]
    );
  };
  
  const toggleTag = (tag: string) => {
    setSelectedTags(prevTags => 
      prevTags.includes(tag)
        ? prevTags.filter(t => t !== tag)
        : [...prevTags, tag]
    );
  };
  
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedRegions([]);
    setSelectedFlavors([]);
    setSelectedTags([]);
    setRatingRange([0]);
    setSortBy('popular');
  };
  
  const toggleFilters = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  
  const totalFiltersApplied = 
    (selectedRegions.length + selectedFlavors.length + selectedTags.length) + 
    (ratingRange[0] > 0 ? 1 : 0);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="bg-gradient-to-b from-chip-blue/10 to-transparent">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">Explore Potato Chips</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover and filter through our extensive collection of potato chips from around the world.
                Find your next favorite snack!
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-3 mb-8">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  placeholder="Search chips, flavors, brands..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 focus:border-chip-orange focus:ring-chip-orange/20"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
              
              <div className="flex items-center gap-2 w-full md:w-auto">
                <Button
                  onClick={toggleFilters}
                  variant="outline"
                  className={cn(
                    "flex items-center gap-2",
                    isFilterOpen ? "bg-chip-orange/10 text-chip-orange border-chip-orange" : ""
                  )}
                >
                  <Filter size={16} />
                  <span>Filters</span>
                  {totalFiltersApplied > 0 && (
                    <span className="ml-1 w-5 h-5 rounded-full bg-chip-orange text-white text-xs flex items-center justify-center">
                      {totalFiltersApplied}
                    </span>
                  )}
                </Button>
                
                <div className="flex border rounded-md overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={cn(
                      "p-2",
                      viewMode === 'grid'
                        ? "bg-chip-blue text-white"
                        : "bg-white text-muted-foreground hover:bg-muted/50"
                    )}
                  >
                    <Grid size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={cn(
                      "p-2",
                      viewMode === 'list'
                        ? "bg-chip-blue text-white"
                        : "bg-white text-muted-foreground hover:bg-muted/50"
                    )}
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Applied filters badges */}
            {totalFiltersApplied > 0 && (
              <div className="max-w-4xl mx-auto mb-6">
                <div className="flex flex-wrap items-center gap-2">
                  {selectedRegions.map(region => (
                    <span 
                      key={region}
                      className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-chip-blue/20 text-chip-blue"
                    >
                      <MapPin size={12} />
                      {region}
                      <button onClick={() => toggleRegion(region)}>
                        <X size={12} />
                      </button>
                    </span>
                  ))}
                  
                  {selectedFlavors.map(flavor => (
                    <span 
                      key={flavor}
                      className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-chip-orange/20 text-chip-orange"
                    >
                      {flavor}
                      <button onClick={() => toggleFlavor(flavor)}>
                        <X size={12} />
                      </button>
                    </span>
                  ))}
                  
                  {selectedTags.map(tag => (
                    <span 
                      key={tag}
                      className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-chip-green/20 text-chip-green"
                    >
                      {tag}
                      <button onClick={() => toggleTag(tag)}>
                        <X size={12} />
                      </button>
                    </span>
                  ))}
                  
                  {ratingRange[0] > 0 && (
                    <span 
                      className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-chip-yellow/20 text-chip-yellow"
                    >
                      <Star size={12} />
                      {ratingRange[0]}+ rating
                      <button onClick={() => setRatingRange([0])}>
                        <X size={12} />
                      </button>
                    </span>
                  )}
                  
                  <button 
                    onClick={resetFilters}
                    className="text-xs text-muted-foreground hover:text-foreground ml-2"
                  >
                    Clear all filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="container mx-auto px-4 pb-16">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters sidebar - wider screens */}
            <div className={cn(
              "md:w-72 transition-all duration-300 hidden md:block",
              isFilterOpen ? "opacity-100" : "opacity-0 md:opacity-100"
            )}>
              <div className="sticky top-24 glass-card p-5 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold flex items-center gap-2">
                    <SlidersHorizontal size={16} />
                    Filters
                  </h2>
                  <Button variant="ghost" size="sm" onClick={resetFilters} className="h-8 text-muted-foreground hover:text-foreground">
                    Reset
                  </Button>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium mb-3">Rating</h3>
                    <div className="px-2">
                      <Slider
                        value={ratingRange}
                        onValueChange={setRatingRange}
                        max={5}
                        step={0.5}
                        className="mb-2"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Any</span>
                        <span>5 ⭐</span>
                      </div>
                      <p className="text-sm mt-2">
                        {ratingRange[0] === 0 ? 'Any rating' : `${ratingRange[0]}+ stars`}
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <h3 className="text-sm font-medium mb-3">Regions</h3>
                    <div className="space-y-2">
                      {regions.map(region => (
                        <div key={region} className="flex items-center">
                          <Checkbox
                            id={`region-${region}`}
                            checked={selectedRegions.includes(region)}
                            onCheckedChange={() => toggleRegion(region)}
                            className="data-[state=checked]:bg-chip-blue data-[state=checked]:border-chip-blue"
                          />
                          <label htmlFor={`region-${region}`} className="ml-2 text-sm cursor-pointer">
                            {region}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <h3 className="text-sm font-medium mb-3">Flavors</h3>
                    <div className="space-y-2">
                      {flavors.map(flavor => (
                        <div key={flavor} className="flex items-center">
                          <Checkbox
                            id={`flavor-${flavor}`}
                            checked={selectedFlavors.includes(flavor)}
                            onCheckedChange={() => toggleFlavor(flavor)}
                            className="data-[state=checked]:bg-chip-orange data-[state=checked]:border-chip-orange"
                          />
                          <label htmlFor={`flavor-${flavor}`} className="ml-2 text-sm cursor-pointer">
                            {flavor}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <h3 className="text-sm font-medium mb-3">Tags</h3>
                    <div className="space-y-2">
                      {tags.map(tag => (
                        <div key={tag} className="flex items-center">
                          <Checkbox
                            id={`tag-${tag}`}
                            checked={selectedTags.includes(tag)}
                            onCheckedChange={() => toggleTag(tag)}
                            className="data-[state=checked]:bg-chip-green data-[state=checked]:border-chip-green"
                          />
                          <label htmlFor={`tag-${tag}`} className="ml-2 text-sm cursor-pointer">
                            {tag}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile filters */}
            <div className={cn(
              "fixed inset-0 bg-background z-40 md:hidden transition-transform duration-300 overflow-auto py-16 px-4",
              isFilterOpen ? "translate-x-0" : "translate-x-full"
            )}>
              <button 
                onClick={toggleFilters}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground"
              >
                <X size={24} />
              </button>
              
              <div className="pt-4">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <SlidersHorizontal size={20} />
                    Filters
                  </h2>
                  <Button variant="ghost" onClick={resetFilters} className="text-muted-foreground hover:text-foreground">
                    Reset All
                  </Button>
                </div>
                
                <Tabs defaultValue="rating" className="mb-8">
                  <TabsList className="w-full grid grid-cols-4">
                    <TabsTrigger value="rating">Rating</TabsTrigger>
                    <TabsTrigger value="regions">Regions</TabsTrigger>
                    <TabsTrigger value="flavors">Flavors</TabsTrigger>
                    <TabsTrigger value="tags">Tags</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="rating" className="pt-4">
                    <h3 className="text-lg font-medium mb-4">Rating</h3>
                    <div className="px-4">
                      <Slider
                        value={ratingRange}
                        onValueChange={setRatingRange}
                        max={5}
                        step={0.5}
                        className="mb-4"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mb-2">
                        <span>Any</span>
                        <span>5 ⭐</span>
                      </div>
                      <p className="text-base">
                        {ratingRange[0] === 0 ? 'Any rating' : `${ratingRange[0]}+ stars`}
                      </p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="regions" className="pt-4">
                    <h3 className="text-lg font-medium mb-4">Regions</h3>
                    <div className="space-y-3">
                      {regions.map(region => (
                        <div key={region} className="flex items-center">
                          <Checkbox
                            id={`mobile-region-${region}`}
                            checked={selectedRegions.includes(region)}
                            onCheckedChange={() => toggleRegion(region)}
                            className="data-[state=checked]:bg-chip-blue data-[state=checked]:border-chip-blue"
                          />
                          <label htmlFor={`mobile-region-${region}`} className="ml-3 text-base cursor-pointer">
                            {region}
                          </label>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="flavors" className="pt-4">
                    <h3 className="text-lg font-medium mb-4">Flavors</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {flavors.map(flavor => (
                        <div key={flavor} className="flex items-center">
                          <Checkbox
                            id={`mobile-flavor-${flavor}`}
                            checked={selectedFlavors.includes(flavor)}
                            onCheckedChange={() => toggleFlavor(flavor)}
                            className="data-[state=checked]:bg-chip-orange data-[state=checked]:border-chip-orange"
                          />
                          <label htmlFor={`mobile-flavor-${flavor}`} className="ml-3 text-base cursor-pointer">
                            {flavor}
                          </label>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="tags" className="pt-4">
                    <h3 className="text-lg font-medium mb-4">Tags</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {tags.map(tag => (
                        <div key={tag} className="flex items-center">
                          <Checkbox
                            id={`mobile-tag-${tag}`}
                            checked={selectedTags.includes(tag)}
                            onCheckedChange={() => toggleTag(tag)}
                            className="data-[state=checked]:bg-chip-green data-[state=checked]:border-chip-green"
                          />
                          <label htmlFor={`mobile-tag-${tag}`} className="ml-3 text-base cursor-pointer">
                            {tag}
                          </label>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
                
                <div className="sticky bottom-0 bg-background pt-4 pb-8">
                  <Button 
                    onClick={toggleFilters}
                    className="w-full bg-chip-orange hover:bg-chip-orange/90 text-white"
                  >
                    Apply Filters ({totalFiltersApplied})
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <p className="text-muted-foreground">
                  Showing <span className="font-medium text-foreground">{chips.length}</span> results
                </p>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-white border border-input rounded-md px-2 py-1 text-sm focus:border-chip-orange focus:ring-chip-orange/20"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="newest">Newest</option>
                    <option value="highest-rated">Highest Rated</option>
                    <option value="most-reviewed">Most Reviewed</option>
                    <option value="a-z">Name (A-Z)</option>
                    <option value="z-a">Name (Z-A)</option>
                  </select>
                </div>
              </div>
              
              {chips.length === 0 ? (
                <div className="text-center py-16 glass-card rounded-xl">
                  <h3 className="text-xl font-bold mb-2">No chips found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                  <Button onClick={resetFilters}>
                    Reset All Filters
                  </Button>
                </div>
              ) : viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {chips.map(chip => (
                    <ChipCard key={chip.id} chip={chip} />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {chips.map(chip => (
                    <Link
                      key={chip.id}
                      to={`/chip/${chip.id}`}
                      className="block glass-card p-4 rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex gap-4">
                        <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={chip.imageUrl} alt={chip.name} className="w-full h-full object-cover" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <div>
                              <p className="text-sm text-chip-blue">{chip.brand}</p>
                              <h3 className="font-bold">{chip.name}</h3>
                            </div>
                            
                            <div className="flex items-center gap-1">
                              <Star size={16} className="fill-chip-yellow text-chip-yellow" />
                              <span className="font-medium">{chip.rating.toFixed(1)}</span>
                              <span className="text-xs text-muted-foreground">({chip.reviewCount})</span>
                            </div>
                          </div>
                          
                          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                            {chip.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mt-2">
                            <span className="text-xs px-2 py-0.5 rounded-full bg-chip-orange/10 text-chip-orange">
                              {chip.flavor}
                            </span>
                            
                            <span className="text-xs px-2 py-0.5 rounded-full bg-chip-blue/10 text-chip-blue flex items-center gap-1">
                              <MapPin size={10} />
                              {chip.region}
                            </span>
                            
                            {chip.tags.slice(0, 2).map((tag, index) => (
                              <span 
                                key={index}
                                className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                              >
                                {tag}
                              </span>
                            ))}
                            
                            {chip.tags.length > 2 && (
                              <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                                +{chip.tags.length - 2} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Explore;

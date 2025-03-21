
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, MapPin, TrendingUp } from 'lucide-react';
import { Chip } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FeaturedChipProps {
  chip: Chip;
}

const FeaturedChip = ({ chip }: FeaturedChipProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div 
      className="relative overflow-hidden rounded-2xl glass-card p-1 animate-scale-in"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex flex-col md:flex-row h-full">
        <div className="relative w-full md:w-2/5 overflow-hidden rounded-xl">
          <div className="aspect-[4/3] overflow-hidden">
            <img 
              src={chip.imageUrl} 
              alt={chip.name}
              className={cn(
                "w-full h-full object-cover transition-transform duration-700",
                isHovering ? "scale-110" : "scale-100"
              )}
            />
          </div>
          
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 text-xs font-bold bg-chip-orange text-white rounded-full flex items-center gap-1 shadow-lg">
              <Award size={14} className="animate-pulse-soft" />
              Featured
            </span>
          </div>
          
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 text-xs font-medium bg-white/80 backdrop-blur-sm rounded-full flex items-center gap-1">
              <MapPin size={12} />
              {chip.region}
            </span>
          </div>
        </div>
        
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="text-sm text-muted-foreground font-medium">{chip.brand}</p>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{chip.name}</h2>
              </div>
              
              <div className="flex items-center gap-1 px-2 py-1 bg-chip-yellow/10 rounded-lg">
                <Star size={18} className="fill-chip-yellow text-chip-yellow" />
                <span className="font-bold">{chip.rating.toFixed(1)}</span>
                <span className="text-xs text-muted-foreground">({chip.reviewCount})</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs px-3 py-1 rounded-full bg-chip-blue/10 text-chip-blue font-medium">
                {chip.flavor}
              </span>
              {chip.tags.slice(0, 3).map((tag, index) => (
                <span 
                  key={index}
                  className="text-xs px-3 py-1 rounded-full bg-muted/80 text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-muted-foreground mb-6 line-clamp-3">
              {chip.description}
            </p>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-chip-green">
              <TrendingUp size={16} />
              <span>Trending in {chip.country}</span>
            </div>
            
            <Link to={`/chip/${chip.id}`}>
              <Button 
                className={cn(
                  "bg-chip-orange hover:bg-chip-orange/90 text-white transition-all duration-300",
                  isHovering ? "shadow-lg shadow-chip-orange/30" : ""
                )}
              >
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedChip;

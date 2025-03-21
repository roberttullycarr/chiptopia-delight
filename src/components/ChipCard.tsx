
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Chip } from '@/lib/types';

interface ChipCardProps {
  chip: Chip;
  className?: string;
}

const ChipCard = ({ chip, className }: ChipCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorited(!isFavorited);
  };

  return (
    <Link 
      to={`/chip/${chip.id}`}
      className={cn(
        "relative overflow-hidden rounded-xl group transition-all duration-500",
        "transform hover:-translate-y-2 hover:shadow-xl",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={chip.imageUrl} 
          alt={chip.name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent",
          "transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-80"
        )} />
      </div>
      
      <button
        onClick={toggleFavorite}
        className={cn(
          "absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-all duration-300",
          isFavorited 
            ? "bg-chip-pink/80 text-white" 
            : "bg-white/30 text-white hover:bg-white/50"
        )}
      >
        <Heart 
          size={18} 
          className={cn(
            "transition-transform duration-300",
            isFavorited ? "fill-current scale-110" : "scale-100"
          )}
        />
      </button>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs text-white/80 font-medium mb-1">{chip.brand}</p>
            <h3 className="text-lg font-bold leading-tight mb-1">{chip.name}</h3>
            <div className="flex items-center gap-1 mb-2">
              <span className="text-xs px-2 py-0.5 rounded-full bg-chip-orange/80 backdrop-blur-sm">
                {chip.flavor}
              </span>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1 mb-1">
              <Star size={14} className="fill-chip-yellow text-chip-yellow" />
              <span className="text-sm font-bold">{chip.rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-white/70">
              <MapPin size={12} />
              <span>{chip.region}</span>
            </div>
          </div>
        </div>
        
        {/* Tags */}
        <div className={cn(
          "flex flex-wrap gap-1 mt-2 transition-all duration-300 max-h-0 overflow-hidden opacity-0",
          isHovered ? "max-h-20 opacity-100" : ""
        )}>
          {chip.tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ChipCard;

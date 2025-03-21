
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar } from '@/components/ui/avatar';
import { Star, ThumbsUp, MessageSquare, Heart, Flag, Share, MapPin, Award, BarChart, Calendar, User } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock data for the demo
const chipData = {
  id: "chip1",
  name: "Sea Salt & Vinegar",
  brand: "Kettle",
  imageUrl: "https://placehold.co/600x400/FF9500/ffffff?text=Sea+Salt+%26+Vinegar",
  description: "The perfect balance of tangy vinegar and sea salt creates a mouth-watering chip that's both sharp and satisfying. Made with the finest potatoes and cooked in small batches for that signature crunch. Each chip is carefully crafted to provide the optimal flavor experience, with just the right amount of vinegar tang and sea salt finish.",
  longDescription: "Kettle's Sea Salt & Vinegar chips represent the pinnacle of tangy chip perfection. Starting with select potatoes grown by trusted farmers, each batch is kettle-cooked in small batches to ensure the perfect crunch. The signature vinegar powder is applied immediately after cooking, allowing it to cling perfectly to the hot chips, followed by a sprinkling of premium sea salt harvested from the Pacific Ocean. The result is a harmonious balance of flavors that's simultaneously bold and refined. These chips contain no artificial flavors, colors, or preservatives, making them a better-for-you indulgence without sacrificing any of the taste you crave.",
  flavor: "Tangy",
  region: "North America",
  country: "USA",
  rating: 4.8,
  reviewCount: 127,
  tags: ["Kettle-cooked", "Gluten-free", "Vegan", "No artificial flavors", "Non-GMO"],
  ingredients: ["Potatoes", "Vegetable Oil (Sunflower Oil, Safflower Oil)", "Vinegar Powder", "Sea Salt", "Maltodextrin", "Citric Acid"],
  nutritionFacts: {
    servingSize: "28g (about 15 chips)",
    calories: 150,
    totalFat: "9g",
    saturatedFat: "1g",
    sodium: "180mg",
    totalCarbs: "15g",
    fiber: "1g",
    sugars: "0g",
    protein: "2g"
  },
  createdAt: "2023-05-12",
  similarChips: [
    {
      id: "chip5",
      name: "Salt & Vinegar",
      brand: "Lay's",
      imageUrl: "https://placehold.co/600x400/4A90E2/ffffff?text=Salt+%26+Vinegar",
      rating: 4.2
    },
    {
      id: "chip6",
      name: "Sea Salt & Cider Vinegar",
      brand: "Miss Vickie's",
      imageUrl: "https://placehold.co/600x400/4CD964/ffffff?text=Sea+Salt+%26+Cider+Vinegar",
      rating: 4.6
    },
    {
      id: "chip7",
      name: "Salt & Malt Vinegar",
      brand: "Cape Cod",
      imageUrl: "https://placehold.co/600x400/FF2D55/ffffff?text=Salt+%26+Malt+Vinegar",
      rating: 4.5
    }
  ]
};

const reviews = [
  {
    id: "review1",
    chipId: "chip1",
    userId: "user1",
    userName: "CrispyConnoisseur",
    userAvatar: "https://placehold.co/200/4A90E2/ffffff?text=CC",
    rating: 5,
    comment: "The perfect balance of tangy and salty. I can never have just one handful - these are absolutely addictive! The crunch is consistently perfect, and the vinegar flavor doesn't overwhelm like some other brands.",
    likes: 42,
    createdAt: "2023-07-15",
    replies: 3
  },
  {
    id: "review2",
    chipId: "chip1",
    userId: "user2",
    userName: "FlavorHunter",
    userAvatar: "https://placehold.co/200/4CD964/ffffff?text=FH",
    rating: 4,
    comment: "Really good flavor, though sometimes they can be a bit too tangy. The crunch is phenomenal though - these are definitely among the best kettle chips out there!",
    likes: 18,
    createdAt: "2023-06-22",
    replies: 1
  },
  {
    id: "review3",
    chipId: "chip1",
    userId: "user3",
    userName: "SnackExplorer",
    userAvatar: "https://placehold.co/200/FF2D55/ffffff?text=SE",
    rating: 5,
    comment: "These are hands down the best salt and vinegar chips I've ever had. The vinegar flavor is pronounced without being overpowering, and the extra thickness from the kettle cooking gives them the perfect crunch.",
    likes: 31,
    createdAt: "2023-05-30",
    replies: 4
  }
];

const ChipDetail = () => {
  const { id } = useParams();
  const [isFavorited, setIsFavorited] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [userRating, setUserRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  
  // Mock image gallery
  const chipImages = [
    chipData.imageUrl,
    "https://placehold.co/600x400/4A90E2/ffffff?text=Package+Front",
    "https://placehold.co/600x400/4CD964/ffffff?text=Package+Back",
    "https://placehold.co/600x400/FF2D55/ffffff?text=Close+Up"
  ];
  
  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };
  
  const handleRateClick = (rating: number) => {
    setUserRating(rating);
  };
  
  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the review to your backend
    alert(`Review submitted with rating: ${userRating} and comment: ${reviewText}`);
    setReviewText('');
    setUserRating(0);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <div className="mb-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-chip-orange transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/explore" className="hover:text-chip-orange transition-colors">Chips</Link>
            <span className="mx-2">/</span>
            <Link to={`/brand/${chipData.brand.toLowerCase()}`} className="hover:text-chip-orange transition-colors">{chipData.brand}</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{chipData.name}</span>
          </div>
          
          {/* Product header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Image gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square bg-muted rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={chipImages[activeImageIndex]} 
                  alt={chipData.name}
                  className="w-full h-full object-cover animate-scale-in"
                />
                <button
                  onClick={toggleFavorite}
                  className={cn(
                    "absolute top-4 right-4 p-3 rounded-full backdrop-blur-sm transition-all duration-300",
                    isFavorited 
                      ? "bg-chip-pink/80 text-white" 
                      : "bg-white/30 text-white hover:bg-white/50"
                  )}
                >
                  <Heart 
                    size={20} 
                    className={cn(
                      "transition-transform duration-300",
                      isFavorited ? "fill-current scale-110" : "scale-100"
                    )}
                  />
                </button>
              </div>
              
              <div className="flex gap-3 overflow-auto pb-2">
                {chipImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={cn(
                      "flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200",
                      activeImageIndex === index 
                        ? "border-chip-orange scale-105 shadow-md" 
                        : "border-transparent opacity-70 hover:opacity-100"
                    )}
                  >
                    <img src={img} alt={`${chipData.name} view ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product info */}
            <div className="animate-slide-up">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Link 
                      to={`/brand/${chipData.brand.toLowerCase()}`}
                      className="text-chip-blue hover:text-chip-blue/80 font-medium"
                    >
                      {chipData.brand}
                    </Link>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-chip-green/10 text-chip-green">
                      Verified
                    </span>
                  </div>
                  
                  <h1 className="text-3xl lg:text-4xl font-bold mb-3">{chipData.name}</h1>
                  
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star}
                          size={18} 
                          className={star <= Math.round(chipData.rating) 
                            ? "fill-chip-yellow text-chip-yellow" 
                            : "text-muted"
                          }
                        />
                      ))}
                      <span className="ml-2 font-medium">{chipData.rating.toFixed(1)}</span>
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      {chipData.reviewCount} reviews
                    </div>
                    
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin size={14} className="text-chip-pink" />
                      <Link 
                        to={`/region/${chipData.region.toLowerCase().replace(' ', '-')}`}
                        className="text-foreground hover:text-chip-orange"
                      >
                        {chipData.region}
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-end">
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground hover:bg-muted">
                      <Flag size={18} />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground hover:bg-muted">
                      <Share size={18} />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="my-6">
                <h2 className="text-lg font-medium mb-2">Description</h2>
                <p className="text-muted-foreground">{chipData.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {chipData.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="text-xs px-3 py-1 rounded-full bg-muted/80 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                <div className="glass-card p-3 rounded-xl flex flex-col items-center text-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-chip-orange/10 text-chip-orange mb-2">
                    <Award size={20} />
                  </div>
                  <h3 className="text-sm font-medium">Flavor</h3>
                  <p className="text-xs text-muted-foreground">{chipData.flavor}</p>
                </div>
                
                <div className="glass-card p-3 rounded-xl flex flex-col items-center text-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-chip-blue/10 text-chip-blue mb-2">
                    <BarChart size={20} />
                  </div>
                  <h3 className="text-sm font-medium">Popularity</h3>
                  <p className="text-xs text-muted-foreground">Very Popular</p>
                </div>
                
                <div className="glass-card p-3 rounded-xl flex flex-col items-center text-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-chip-green/10 text-chip-green mb-2">
                    <Calendar size={20} />
                  </div>
                  <h3 className="text-sm font-medium">Added</h3>
                  <p className="text-xs text-muted-foreground">May 12, 2023</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Button className="bg-chip-orange hover:bg-chip-orange/90 text-white flex-1">
                  Rate This Chip
                </Button>
                <Button 
                  variant="outline" 
                  className={cn(
                    "border-chip-pink transition-all duration-300",
                    isFavorited
                      ? "bg-chip-pink/10 text-chip-pink" 
                      : "text-muted-foreground hover:text-chip-pink hover:bg-chip-pink/5"
                  )}
                  onClick={toggleFavorite}
                >
                  <Heart 
                    size={18} 
                    className={cn(
                      "mr-2 transition-transform duration-300",
                      isFavorited ? "fill-chip-pink text-chip-pink scale-110" : ""
                    )}
                  />
                  <span>{isFavorited ? 'Favorited' : 'Add to Favorites'}</span>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <Tabs defaultValue="details" className="mb-16">
            <TabsList className="mb-8 w-full justify-start bg-muted border-b border-border pb-0 rounded-none">
              <TabsTrigger value="details" className="data-[state=active]:border-b-2 data-[state=active]:border-chip-orange rounded-none">
                Details
              </TabsTrigger>
              <TabsTrigger value="nutrition" className="data-[state=active]:border-b-2 data-[state=active]:border-chip-orange rounded-none">
                Nutrition
              </TabsTrigger>
              <TabsTrigger value="reviews" className="data-[state=active]:border-b-2 data-[state=active]:border-chip-orange rounded-none">
                Reviews ({chipData.reviewCount})
              </TabsTrigger>
              <TabsTrigger value="similar" className="data-[state=active]:border-b-2 data-[state=active]:border-chip-orange rounded-none">
                Similar Chips
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="animate-slide-up">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h2 className="text-xl font-bold mb-4">About This Chip</h2>
                  <p className="text-muted-foreground mb-6">
                    {chipData.longDescription}
                  </p>
                  
                  <h3 className="text-lg font-bold mb-2">Ingredients</h3>
                  <ul className="list-disc pl-5 text-muted-foreground mb-6">
                    {chipData.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <div className="glass-card p-6 rounded-xl">
                    <h3 className="text-lg font-bold mb-4">Region Information</h3>
                    <div className="mb-4">
                      <p className="text-sm font-medium">Country of Origin</p>
                      <p className="text-muted-foreground">{chipData.country}</p>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-medium">Region</p>
                      <p className="text-muted-foreground">{chipData.region}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Availability</p>
                      <p className="text-muted-foreground">Widely available</p>
                    </div>
                    
                    <div className="mt-6">
                      <Link to={`/region/${chipData.region.toLowerCase().replace(' ', '-')}`}>
                        <Button variant="outline" className="w-full">
                          Explore Region
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="nutrition" className="animate-slide-up">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-xl font-bold mb-6">Nutrition Facts</h2>
                
                <div className="glass-card p-6 rounded-xl">
                  <p className="font-bold text-lg border-b border-border pb-2 mb-2">
                    Nutrition Facts
                  </p>
                  <p className="text-sm border-b border-border pb-2 mb-4">
                    Serving Size {chipData.nutritionFacts.servingSize}
                  </p>
                  
                  <div className="space-y-2 border-b border-border pb-4 mb-4">
                    <div className="flex justify-between">
                      <p className="font-bold">Calories</p>
                      <p>{chipData.nutritionFacts.calories}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <p className="font-medium">Total Fat</p>
                      <p>{chipData.nutritionFacts.totalFat}</p>
                    </div>
                    <div className="flex justify-between pl-6">
                      <p>Saturated Fat</p>
                      <p>{chipData.nutritionFacts.saturatedFat}</p>
                    </div>
                    <div className="flex justify-between border-t border-border pt-2">
                      <p className="font-medium">Sodium</p>
                      <p>{chipData.nutritionFacts.sodium}</p>
                    </div>
                    <div className="flex justify-between border-t border-border pt-2">
                      <p className="font-medium">Total Carbohydrates</p>
                      <p>{chipData.nutritionFacts.totalCarbs}</p>
                    </div>
                    <div className="flex justify-between pl-6">
                      <p>Dietary Fiber</p>
                      <p>{chipData.nutritionFacts.fiber}</p>
                    </div>
                    <div className="flex justify-between pl-6">
                      <p>Sugars</p>
                      <p>{chipData.nutritionFacts.sugars}</p>
                    </div>
                    <div className="flex justify-between border-t border-border pt-2">
                      <p className="font-medium">Protein</p>
                      <p>{chipData.nutritionFacts.protein}</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mt-4">
                  * Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="animate-slide-up">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-xl font-bold mb-6">Customer Reviews</h2>
                  
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="glass-card rounded-xl p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <img src={review.userAvatar} alt={review.userName} />
                            </Avatar>
                            <div>
                              <p className="font-medium">{review.userName}</p>
                              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star 
                                      key={star}
                                      size={14} 
                                      className={star <= review.rating 
                                        ? "fill-chip-yellow text-chip-yellow" 
                                        : "text-muted"
                                      }
                                    />
                                  ))}
                                </div>
                                <span>{new Date(review.createdAt).toLocaleDateString()}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-1">
                            <Button variant="ghost" size="sm" className="h-8 text-muted-foreground hover:text-foreground">
                              <Flag size={14} />
                            </Button>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">
                          {review.comment}
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm">
                          <Button variant="ghost" size="sm" className="h-8 flex items-center gap-1 text-muted-foreground hover:text-foreground">
                            <ThumbsUp size={14} />
                            <span>{review.likes}</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 flex items-center gap-1 text-muted-foreground hover:text-foreground">
                            <MessageSquare size={14} />
                            <span>{review.replies} replies</span>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="sticky top-24 glass-card rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-4">Write a Review</h3>
                    
                    <form onSubmit={handleSubmitReview}>
                      <div className="mb-4">
                        <p className="text-sm font-medium mb-2">Rate this chip</p>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((rating) => (
                            <button
                              key={rating}
                              type="button"
                              onClick={() => handleRateClick(rating)}
                              className="text-2xl cursor-pointer transition-colors duration-200"
                            >
                              <Star 
                                size={24} 
                                className={rating <= userRating 
                                  ? "fill-chip-yellow text-chip-yellow" 
                                  : "text-muted hover:text-chip-yellow"
                                }
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="review" className="text-sm font-medium mb-2 block">
                          Your review
                        </label>
                        <textarea
                          id="review"
                          rows={4}
                          value={reviewText}
                          onChange={(e) => setReviewText(e.target.value)}
                          placeholder="Share your thoughts about this chip..."
                          className="w-full rounded-lg border border-input px-3 py-2 focus:border-chip-orange focus:ring-1 focus:ring-chip-orange/50"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-chip-orange hover:bg-chip-orange/90 text-white"
                        disabled={userRating === 0 || !reviewText.trim()}
                      >
                        Submit Review
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="similar" className="animate-slide-up">
              <h2 className="text-xl font-bold mb-6">Similar Chips You Might Like</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {chipData.similarChips.map((chip) => (
                  <Link 
                    key={chip.id}
                    to={`/chip/${chip.id}`}
                    className="glass-card p-4 rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden">
                        <img src={chip.imageUrl} alt={chip.name} className="w-full h-full object-cover" />
                      </div>
                      
                      <div>
                        <p className="text-sm text-muted-foreground">{chip.brand}</p>
                        <h3 className="font-medium">{chip.name}</h3>
                        <div className="flex items-center gap-1 mt-1">
                          <Star size={14} className="fill-chip-yellow text-chip-yellow" />
                          <span className="text-sm">{chip.rating.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ChipDetail;

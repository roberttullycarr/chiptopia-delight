
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Check, Upload, X, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const flavorTags = [
  "Salty", "Sweet", "Sour", "Spicy", "Savory", "Tangy", "Smoky", "Cheesy",
  "Barbecue", "Umami", "Herbal", "Meaty", "Onion", "Garlic", "Creamy"
];

const dietaryTags = [
  "Gluten-free", "Vegan", "Vegetarian", "Organic", "Non-GMO", "No artificial flavors", 
  "No preservatives", "Kosher", "Halal", "Low-sodium", "Baked", "Kettle-cooked"
];

const SubmitChip = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const removeImage = () => {
    setSelectedImage(null);
  };
  
  const toggleFlavorTag = (tag: string) => {
    if (selectedFlavors.includes(tag)) {
      setSelectedFlavors(selectedFlavors.filter(t => t !== tag));
    } else {
      setSelectedFlavors([...selectedFlavors, tag]);
    }
  };
  
  const toggleDietaryTag = (tag: string) => {
    if (selectedDietary.includes(tag)) {
      setSelectedDietary(selectedDietary.filter(t => t !== tag));
    } else {
      setSelectedDietary([...selectedDietary, tag]);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };
  
  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto glass-card p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-chip-green/20 flex items-center justify-center rounded-full mx-auto mb-6">
                <Check size={32} className="text-chip-green" />
              </div>
              
              <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
              
              <p className="text-muted-foreground mb-8">
                Your chip has been submitted successfully and will be reviewed by our team.
                We appreciate your contribution to the ChipTopia community!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => setSubmitted(false)}
                  className="bg-chip-orange hover:bg-chip-orange/90 text-white"
                >
                  Submit Another Chip
                </Button>
                
                <Button variant="outline" onClick={() => window.location.href = "/"}>
                  Return to Home
                </Button>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">Submit a Chip</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Found a delicious or unique chip flavor? Share it with our community!
                Fill out the form below with as much detail as possible.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="glass-card p-6 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left column */}
                <div>
                  <div className="mb-6">
                    <Label htmlFor="chipName" className="mb-2 block">Chip Name</Label>
                    <Input
                      id="chipName"
                      placeholder="e.g. Sea Salt & Vinegar"
                      required
                      className="focus:border-chip-orange focus:ring-chip-orange/20"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="brand" className="mb-2 block">Brand</Label>
                    <Input
                      id="brand"
                      placeholder="e.g. Kettle"
                      required
                      className="focus:border-chip-orange focus:ring-chip-orange/20"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="description" className="mb-2 block">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe the flavor, texture, and overall experience..."
                      rows={4}
                      required
                      className="focus:border-chip-orange focus:ring-chip-orange/20 resize-none"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <Label htmlFor="region" className="mb-2 block">Region</Label>
                      <Select required>
                        <SelectTrigger id="region">
                          <SelectValue placeholder="Select region" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="north-america">North America</SelectItem>
                          <SelectItem value="europe">Europe</SelectItem>
                          <SelectItem value="asia">Asia</SelectItem>
                          <SelectItem value="south-america">South America</SelectItem>
                          <SelectItem value="australia">Australia</SelectItem>
                          <SelectItem value="africa">Africa</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="country" className="mb-2 block">Country</Label>
                      <Input
                        id="country"
                        placeholder="e.g. USA"
                        required
                        className="focus:border-chip-orange focus:ring-chip-orange/20"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="flavor" className="mb-2 block">Primary Flavor</Label>
                    <Input
                      id="flavor"
                      placeholder="e.g. Tangy, Sweet, Spicy"
                      required
                      className="focus:border-chip-orange focus:ring-chip-orange/20"
                    />
                  </div>
                </div>
                
                {/* Right column */}
                <div>
                  <div className="mb-6">
                    <Label className="mb-2 block">Chip Image</Label>
                    {!selectedImage ? (
                      <div
                        className={cn(
                          "border-2 border-dashed rounded-xl p-8 text-center transition-colors",
                          isDragging ? "border-chip-orange bg-chip-orange/5" : "border-muted"
                        )}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                      >
                        <div className="flex flex-col items-center justify-center">
                          <Upload size={36} className="text-muted-foreground mb-3" />
                          <p className="text-muted-foreground mb-2">
                            Drag & drop an image here, or click to browse
                          </p>
                          <p className="text-xs text-muted-foreground mb-4">
                            (JPG, PNG, WebP, max 5MB)
                          </p>
                          <Button 
                            type="button" 
                            variant="outline"
                            className="relative overflow-hidden"
                          >
                            Select Image
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageChange}
                              className="absolute inset-0 cursor-pointer opacity-0"
                            />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="relative rounded-xl overflow-hidden border border-muted">
                        <img 
                          src={selectedImage} 
                          alt="Selected chip" 
                          className="w-full aspect-square object-cover"
                        />
                        <button
                          type="button"
                          onClick={removeImage}
                          className="absolute top-2 right-2 p-1 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <Label className="mb-2 block">Flavor Tags (select all that apply)</Label>
                    <div className="flex flex-wrap gap-2">
                      {flavorTags.map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => toggleFlavorTag(tag)}
                          className={cn(
                            "text-xs px-3 py-1 rounded-full transition-colors",
                            selectedFlavors.includes(tag)
                              ? "bg-chip-blue text-white"
                              : "bg-muted text-muted-foreground hover:bg-muted/80"
                          )}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <Label className="mb-2 block">Dietary & Feature Tags (select all that apply)</Label>
                    <div className="flex flex-wrap gap-2">
                      {dietaryTags.map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => toggleDietaryTag(tag)}
                          className={cn(
                            "text-xs px-3 py-1 rounded-full transition-colors",
                            selectedDietary.includes(tag)
                              ? "bg-chip-green text-white"
                              : "bg-muted text-muted-foreground hover:bg-muted/80"
                          )}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 border-t border-border pt-6 flex justify-end">
                <Button
                  type="submit"
                  className="bg-chip-orange hover:bg-chip-orange/90 text-white min-w-[150px]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Chip'
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SubmitChip;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cat, Heart, Info, Paw, Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const catImages = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/1200px-Kittyply_edit1.jpg",
];

const Index = () => {
  const [likes, setLikes] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % catImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress + 1) % 101);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <header className="bg-purple-600 text-white py-16 px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: index * 0.1 }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              <Paw size={24} />
            </motion.div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h1 
            className="text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Purrfect Companions
          </motion.h1>
          <motion.p 
            className="text-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover the fascinating world of cats
          </motion.p>
        </div>
      </header>
      
      <main className="max-w-6xl mx-auto py-12 px-8">
        <div className="relative mb-12">
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentImageIndex}
              src={catImages[currentImageIndex]}
              alt="Cute cat" 
              className="mx-auto object-cover w-full h-[500px] rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          <Progress value={progress} className="w-full mt-4" />
        </div>
        
        <Tabs defaultValue="facts" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="facts">Feline Facts</TabsTrigger>
            <TabsTrigger value="breeds">Popular Breeds</TabsTrigger>
          </TabsList>
          <TabsContent value="facts">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center"><Info className="mr-2" /> Feline Facts</CardTitle>
                <CardDescription>Interesting tidbits about our furry friends</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    "Cats have been domesticated for over 4,000 years.",
                    "An adult cat has 30 teeth.",
                    "Cats can jump up to six times their length.",
                    "A group of cats is called a 'clowder'.",
                    "Cats spend 70% of their lives sleeping."
                  ].map((fact, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Paw className="text-purple-500" size={16} />
                      <span>{fact}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center"><Cat className="mr-2" /> Popular Cat Breeds</CardTitle>
                <CardDescription>Some well-known feline friends</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    { breed: "Siamese", description: "Known for their distinctive coloring and vocal nature." },
                    { breed: "Maine Coon", description: "One of the largest domestic cat breeds with a friendly personality." },
                    { breed: "Persian", description: "Recognized for their long fur and flat faces." },
                    { breed: "Bengal", description: "Wild-looking cats with leopard-like spots." },
                    { breed: "Scottish Fold", description: "Characterized by their folded ears and round faces." }
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start space-x-2"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Star className="text-yellow-500 mt-1 flex-shrink-0" size={16} />
                      <div>
                        <span className="font-semibold">{item.breed}:</span> {item.description}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="text-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button 
              onClick={() => setLikes(likes + 1)}
              className="bg-pink-500 hover:bg-pink-600 text-lg px-6 py-3"
            >
              <Heart className="mr-2 h-5 w-5" /> Like Cats
            </Button>
          </motion.div>
          <motion.p 
            className="mt-4 text-2xl font-bold text-purple-700"
            key={likes}
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
          >
            {likes} cat lovers have clicked this button!
          </motion.p>
        </div>
      </main>
    </div>
  );
};

export default Index;

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cat, Heart, Info } from "lucide-react";

const Index = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <header className="bg-purple-600 text-white py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
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
        <motion.img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
          alt="Cute cat" 
          className="mx-auto object-cover w-full h-[500px] rounded-lg mb-12 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        
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
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cats have been domesticated for over 4,000 years.</li>
                  <li>An adult cat has 30 teeth.</li>
                  <li>Cats can jump up to six times their length.</li>
                  <li>A group of cats is called a "clowder".</li>
                  <li>Cats spend 70% of their lives sleeping.</li>
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
                <ul className="list-disc pl-6 space-y-2">
                  <li>Siamese: Known for their distinctive coloring and vocal nature.</li>
                  <li>Maine Coon: One of the largest domestic cat breeds with a friendly personality.</li>
                  <li>Persian: Recognized for their long fur and flat faces.</li>
                  <li>Bengal: Wild-looking cats with leopard-like spots.</li>
                  <li>Scottish Fold: Characterized by their folded ears and round faces.</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="text-center">
          <Button 
            onClick={() => setLikes(likes + 1)}
            className="bg-pink-500 hover:bg-pink-600"
          >
            <Heart className="mr-2 h-4 w-4" /> Like Cats
          </Button>
          <p className="mt-4 text-lg font-semibold">
            {likes} cat lovers have clicked this button!
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;

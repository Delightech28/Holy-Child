import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import peterObiImg from "@/assets/peterobi.jpg";

const Gallery = () => {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "events", label: "Events" },
    { id: "academics", label: "Academics" },
    { id: "sports", label: "Sports" },
  ];

  const photos = [
    {
      id: 0,
      category: "events",
      title: "Peter Obi Inspiring Our Students",
      src: peterObiImg,
    },
  ];

  const filteredPhotos =
    filter === "all" ? photos : photos.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary py-20 text-center">
        <div className="container">
          <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            Our Gallery
          </h1>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />
          <p className="mt-6 font-sans text-lg text-primary-foreground/80 md:text-xl max-w-2xl mx-auto">
            Capturing the moments that define our school life—from academic
            milestones to sports triumphs and cultural celebrations.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-muted/30 border-b border-border">
        <div className="container flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={filter === cat.id ? "default" : "outline"}
              onClick={() => setFilter(cat.id)}
              className="rounded-full font-sans text-sm"
              size="sm"
            >
              {cat.label}
            </Button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <Card
                key={photo.id}
                className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-0 relative aspect-[4/3]">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <span className="text-secondary text-xs font-bold uppercase tracking-wider">
                        {photo.category}
                      </span>
                      <h3 className="text-white font-display text-lg font-semibold mt-1">
                        {photo.title}
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;

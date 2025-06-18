import React, { useState } from 'react';
import Nav from '../Components/Nav';
import { FaSearch } from 'react-icons/fa';
const imageData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop",
    title: "Woman with Laptop",
    category: "People",
    tags: ["laptop", "work", "woman", "technology"]
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
    title: "Laptop Computer",
    category: "Technology",
    tags: ["laptop", "computer", "technology", "workspace"]
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    title: "Circuit Board",
    category: "Technology",
    tags: ["circuit", "electronics", "technology", "macro"]
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
    title: "Deer in Forest",
    category: "Nature",
    tags: ["deer", "forest", "wildlife", "nature"]
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop",
    title: "Mountain Bridge",
    category: "Nature",
    tags: ["bridge", "mountain", "waterfall", "landscape"]
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=600&fit=crop",
    title: "Orange Flowers",
    category: "Nature",
    tags: ["flowers", "orange", "nature", "bloom"]
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=800&h=600&fit=crop",
    title: "Modern Architecture",
    category: "Architecture",
    tags: ["building", "architecture", "modern", "design"]
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&h=600&fit=crop",
    title: "Glass Building",
    category: "Architecture",
    tags: ["building", "glass", "architecture", "urban"]
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop",
    title: "White Building",
    category: "Architecture",
    tags: ["building", "white", "architecture", "minimal"]
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=800&h=600&fit=crop",
    title: "Tabby Kitten",
    category: "Animals",
    tags: ["cat", "kitten", "pet", "cute"]
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937?w=800&h=600&fit=crop",
    title: "Flying Bees",
    category: "Animals",
    tags: ["bees", "nature", "insects", "flying"]
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop",
    title: "Starry Night",
    category: "Nature",
    tags: ["stars", "night", "sky", "dark"]
  }
];

const categories = ["All", "Technology", "Nature", "Architecture", "Animals", "People"];



function Home() {
   const [selectedImage, setSelectedImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);
const [activeImage, setActiveImage] = useState(null);

     const filteredImages = imageData.filter((image) => {
    const matchesCategory = selectedCategory === "All" || image.category === selectedCategory;
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.tags.join(" ").toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return (
  <div className="px-4 py-6">
      {/* Gradient Title */}
      <h1 className="text-5xl font-bold text-center mb-6  bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        Image Gallery
      </h1>
        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 mb-6">
        {/* Search Bar */}
        <div className="relative w-full max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search images..."
            className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

      <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium border ${
                selectedCategory === cat
                  ? "bg-purple-600 text-white shadow"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <div key={image.id} className="rounded-lg overflow-hidden shadow-md cursor-pointer group"
            onClick={() => {
            setActiveImage(image);
             setShowModal(true);
  }}
          >
          <div className="overflow-hidden">  
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75"
            />
             </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{image.title}</h3>
              <p className="text-sm text-gray-500">{image.category}</p>
            </div>
          </div>
        ))}
  

      </div>
         {showModal && activeImage && (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
    <div className="bg-white p-4 rounded-lg max-w-3xl w-full relative">
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
      >
        &times;
      </button>
      <img src={activeImage.src} alt={activeImage.title} className="w-full h-auto rounded-lg" />
      <h2 className="text-xl font-bold mt-4">{activeImage.title}</h2>
      <p className="text-gray-500">{activeImage.category}</p>
    </div>
  </div>
)}
   
      {filteredImages.length === 0 && (
        <p className="text-center mt-10 text-gray-500">No images found.</p>
      )}
    </div>
  );
}

export default Home;

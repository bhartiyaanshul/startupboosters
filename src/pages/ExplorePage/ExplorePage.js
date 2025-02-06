import { React, useState } from 'react'
import './ExplorePage.css'
import image from './images/company.svg'

const ExplorePage = () => {

    const [tech, setTech] = useState([
        {
            name: "Nexora",
            description: "A cutting-edge AI platform that revolutionizes personalized learning for students and professionals.",
            longDesc: "Nexora uses advanced machine learning algorithms to create customized learning paths for individuals, helping them achieve their educational and career goals faster and more efficiently.",
            image: "https://fakeimg.pl/200x100/?text=Nexora&font=lobster",
            founders: ["Dr. Elena Martinez", "Rajiv Kapoor"],
            overview: "Founded in 2020, Nexora is headquartered in San Francisco, California. It has already partnered with over 50 universities and corporate training programs.",
            mission: "To democratize education through AI-driven personalized learning.",
            vision: "A world where everyone has access to tailored education that fits their unique needs.",
            services: [
                "Personalized Learning Plans",
                "Skill Assessment Tools",
                "Career Pathway Recommendations",
                "Corporate Training Modules"
            ],
            features: [
                "AI-powered learning recommendations",
                "Real-time progress tracking",
                "Gamified learning experiences",
                "Integration with LMS platforms"
            ]
        },
        {
            name: "QuantumLeap",
            description: "A quantum computing startup focused on solving complex problems in healthcare and logistics.",
            longDesc: "QuantumLeap develops quantum algorithms to optimize drug discovery, supply chain management, and financial modeling. Their proprietary quantum hardware is among the fastest in the world.",
            image: "https://fakeimg.pl/200x100/?text=QuantumLeap&font=lobster",
            founders: ["Dr. Sophia Chen", "Michael O'Donnell"],
            overview: "Founded in 2021, QuantumLeap is based in Boston, Massachusetts. It has raised $50 million in Series A funding.",
            mission: "To harness the power of quantum computing for real-world applications.",
            vision: "To solve humanity's most complex problems through quantum innovation.",
            services: [
                "Quantum Drug Discovery",
                "Supply Chain Optimization",
                "Financial Modeling",
                "Quantum Hardware Development"
            ],
            features: [
                "Proprietary quantum algorithms",
                "Cloud-based quantum computing access",
                "Industry-specific solutions",
                "High-speed quantum processors"
            ]
        },
        {
            name: "SkyForge",
            description: "A drone technology company specializing in autonomous delivery and aerial mapping.",
            longDesc: "SkyForge designs and manufactures drones for commercial and industrial use, including last-mile delivery, agricultural monitoring, and disaster relief operations.",
            image: "https://fakeimg.pl/200x100/?text=SkyForge&font=lobster",
            founders: ["Alexei Volkov", "Priya Desai"],
            overview: "Founded in 2019, SkyForge is headquartered in Berlin, Germany. It has deployed drones in over 20 countries.",
            mission: "To make autonomous aerial technology accessible and impactful.",
            vision: "A future where drones are an integral part of everyday life.",
            services: [
                "Drone Delivery Services",
                "Aerial Mapping",
                "Agricultural Monitoring",
                "Disaster Relief Operations"
            ],
            features: [
                "Fully autonomous drones",
                "Long battery life",
                "AI-powered navigation",
                "Real-time data analytics"
            ]
        },
        {
            name: "NeuroSync",
            description: "A neurotechnology company developing brain-computer interfaces for medical and consumer applications.",
            longDesc: "NeuroSync creates wearable devices that allow users to control technology with their thoughts, enabling breakthroughs in healthcare, gaming, and accessibility.",
            image: "https://fakeimg.pl/200x100/?text=NeuroSync&font=lobster",
            founders: ["Dr. Emily Zhang", "Carlos Rivera"],
            overview: "Founded in 2018, NeuroSync is based in Austin, Texas. It has received FDA approval for its medical-grade brain-computer interface.",
            mission: "To bridge the gap between the human brain and technology.",
            vision: "A world where thought-controlled devices enhance human potential.",
            services: [
                "Medical Brain-Computer Interfaces",
                "Consumer Wearables",
                "Gaming Controllers",
                "Accessibility Devices"
            ],
            features: [
                "Non-invasive brainwave detection",
                "Real-time thought-to-action translation",
                "Customizable software applications",
                "High-precision sensors"
            ]
        },
        {
            name: "EcoGrid",
            description: "A smart energy company that optimizes power consumption for homes and businesses.",
            longDesc: "EcoGrid uses IoT and AI to create intelligent energy grids that reduce waste, lower costs, and promote sustainability.",
            image: "https://fakeimg.pl/200x100/?text=EcoGrid&font=lobster",
            founders: ["Sarah Thompson", "James Lee"],
            overview: "Founded in 2020, EcoGrid is headquartered in Seattle, Washington. It has partnered with major utility companies across the U.S.",
            mission: "To create a sustainable future through smart energy solutions.",
            vision: "A world where energy is used efficiently and responsibly.",
            services: [
                "Smart Energy Grids",
                "Home Energy Management",
                "Commercial Energy Optimization",
                "Renewable Energy Integration"
            ],
            features: [
                "AI-driven energy optimization",
                "Real-time consumption tracking",
                "Integration with renewable energy sources",
                "Customizable energy plans"
            ]
        },
        {
            name: "VirtuCraft",
            description: "A virtual reality (VR) company focused on immersive training and education.",
            longDesc: "VirtuCraft creates VR simulations for industries like healthcare, manufacturing, and education, providing realistic and interactive training experiences.",
            image: "https://fakeimg.pl/200x100/?text=VirtuCraft&font=lobster",
            founders: ["Daniel Kim", "Laura Bennett"],
            overview: "Founded in 2017, VirtuCraft is based in London, UK. It has developed over 100 VR training modules for global clients.",
            mission: "To revolutionize training and education through immersive VR experiences.",
            vision: "A future where learning is as real as life itself.",
            services: [
                "VR Training Simulations",
                "Educational VR Content",
                "Corporate Training Programs",
                "Custom VR Development"
            ],
            features: [
                "High-fidelity VR environments",
                "Interactive learning modules",
                "Multi-user collaboration",
                "Cross-platform compatibility"
            ]
        },
        {
            name: "BioNest",
            description: "A biotech company specializing in synthetic biology and bioengineered materials.",
            longDesc: "BioNest develops sustainable materials and products using synthetic biology, including biodegradable plastics, lab-grown leather, and bio-based textiles.",
            image: "https://fakeimg.pl/200x100/?text=BioNest&font=lobster",
            founders: ["Dr. Anika Patel", "Ethan Clarke"],
            overview: "Founded in 2019, BioNest is headquartered in Singapore. It has partnered with major fashion and manufacturing brands.",
            mission: "To create a sustainable future through bioengineered materials.",
            vision: "A world where all materials are eco-friendly and biodegradable.",
            services: [
                "Bioengineered Textiles",
                "Lab-Grown Leather",
                "Biodegradable Plastics",
                "Sustainable Packaging"
            ],
            features: [
                "Eco-friendly materials",
                "Scalable production processes",
                "Customizable bioengineered solutions",
                "Reduced environmental footprint"
            ]
        },
        {
            name: "CodeCrafters",
            description: "A no-code platform that enables anyone to build apps without programming knowledge.",
            longDesc: "CodeCrafters provides a drag-and-drop interface for creating web and mobile apps, making app development accessible to non-technical users.",
            image: "https://fakeimg.pl/200x100/?text=CodeCrafters&font=lobster",
            founders: ["Maya Rodriguez", "Chris Evans"],
            overview: "Founded in 2021, CodeCrafters is based in Toronto, Canada. It has over 100,000 users worldwide.",
            mission: "To democratize app development through no-code technology.",
            vision: "A world where anyone can turn their ideas into apps.",
            services: [
                "No-Code App Builder",
                "Web App Development",
                "Mobile App Development",
                "API Integrations"
            ],
            features: [
                "Drag-and-drop interface",
                "Pre-built templates",
                "Real-time collaboration",
                "Cloud hosting"
            ]
        },
        {
            name: "Solaris Robotics",
            description: "A robotics company focused on solar-powered autonomous robots for agriculture and construction.",
            longDesc: "Solaris Robotics designs robots that operate on solar energy, performing tasks like planting, harvesting, and construction with minimal human intervention.",
            image: "https://fakeimg.pl/200x100/?text=SolarisRobotics&font=lobster",
            founders: ["Dr. Hiroshi Tanaka", "Maria Gonzalez"],
            overview: "Founded in 2020, Solaris Robotics is headquartered in Tokyo, Japan. It has deployed robots in over 15 countries.",
            mission: "To revolutionize industries with solar-powered robotics.",
            vision: "A future where robots work alongside humans to build a sustainable world.",
            services: [
                "Agricultural Robots",
                "Construction Robots",
                "Solar-Powered Drones",
                "Autonomous Maintenance Robots"
            ],
            features: [
                "Solar-powered operation",
                "AI-driven navigation",
                "Multi-functional capabilities",
                "Low environmental impact"
            ]
        },
        {
            name: "HealthSync",
            description: "A health tech company that integrates wearable devices with personalized healthcare solutions.",
            longDesc: "HealthSync connects wearable devices like smartwatches and fitness trackers with healthcare providers, enabling real-time monitoring and personalized treatment plans.",
            image: "https://fakeimg.pl/200x100/?text=HealthSync&font=lobster",
            founders: ["Dr. Olivia Carter", "Ryan Park"],
            overview: "Founded in 2018, HealthSync is based in Chicago, Illinois. It has partnered with major hospitals and insurance providers.",
            mission: "To bridge the gap between wearable technology and healthcare.",
            vision: "A future where healthcare is proactive, personalized, and accessible.",
            services: [
                "Wearable Device Integration",
                "Remote Patient Monitoring",
                "Personalized Health Plans",
                "Data Analytics for Healthcare Providers"
            ],
            features: [
                "Real-time health monitoring",
                "AI-driven health insights",
                "Secure data sharing",
                "Customizable health plans"
            ]
        }
    ]);

    const [food, setFood] = useState([
        {
            name: "GreenBite",
            description: "A plant-based meal delivery service offering chef-curated, sustainable meals.",
            longDesc: "GreenBite delivers ready-to-eat, plant-based meals made from locally sourced, organic ingredients. Their mission is to make sustainable eating convenient and delicious.",
            image: "https://fakeimg.pl/200x100/?text=GreenBite&font=lobster",
            founders: ["Emma Carter", "Liam Nguyen"],
            overview: "Founded in 2020, GreenBite is headquartered in Portland, Oregon. It has expanded to over 20 cities across the U.S.",
            mission: "To make plant-based eating accessible, affordable, and enjoyable.",
            vision: "A world where sustainable food choices are the norm.",
            services: [
                "Meal Delivery",
                "Custom Meal Plans",
                "Corporate Catering",
                "Cooking Workshops"
            ],
            features: [
                "100% plant-based meals",
                "Locally sourced ingredients",
                "Eco-friendly packaging",
                "Customizable dietary options"
            ]
        },
        {
            name: "UrbanHarvest",
            description: "A vertical farming company that grows fresh produce in urban environments.",
            longDesc: "UrbanHarvest uses hydroponic and aeroponic systems to grow fruits and vegetables in urban areas, reducing the need for long-distance transportation and ensuring fresh, local produce year-round.",
            image: "https://fakeimg.pl/200x100/?text=UrbanHarvest&font=lobster",
            founders: ["Sophia Martinez", "David Kim"],
            overview: "Founded in 2019, UrbanHarvest operates farms in New York, Chicago, and Los Angeles. It supplies produce to local restaurants and grocery stores.",
            mission: "To bring fresh, sustainable produce to urban communities.",
            vision: "A future where cities are self-sufficient in food production.",
            services: [
                "Fresh Produce Sales",
                "Farm-to-Table Partnerships",
                "Urban Farming Consultancy",
                "Educational Tours"
            ],
            features: [
                "Year-round growing",
                "No pesticides or herbicides",
                "Reduced carbon footprint",
                "Locally grown and delivered"
            ]
        },
        {
            name: "FlavorFusion",
            description: "A food tech company creating personalized spice blends using AI.",
            longDesc: "FlavorFusion uses artificial intelligence to analyze individual taste preferences and create custom spice blends tailored to each customer's palate.",
            image: "https://fakeimg.pl/200x100/?text=FlavorFusion&font=lobster",
            founders: ["Aisha Patel", "Michael Brown"],
            overview: "Founded in 2021, FlavorFusion is based in San Francisco, California. It has shipped over 100,000 custom spice blends worldwide.",
            mission: "To revolutionize home cooking with personalized flavors.",
            vision: "A world where every meal is perfectly seasoned.",
            services: [
                "Custom Spice Blends",
                "Recipe Recommendations",
                "Cooking Kits",
                "Flavor Profiling"
            ],
            features: [
                "AI-driven flavor analysis",
                "Customizable spice blends",
                "Recipe pairing suggestions",
                "Eco-friendly packaging"
            ]
        },
        {
            name: "OceanBites",
            description: "A sustainable seafood company offering plant-based alternatives to seafood.",
            longDesc: "OceanBites creates plant-based seafood products that mimic the taste and texture of real seafood, helping to reduce overfishing and promote ocean conservation.",
            image: "https://fakeimg.pl/200x100/?text=OceanBites&font=lobster",
            founders: ["Carlos Rivera", "Priya Desai"],
            overview: "Founded in 2020, OceanBites is headquartered in Miami, Florida. Its products are available in over 1,000 grocery stores nationwide.",
            mission: "To protect our oceans by offering delicious, sustainable seafood alternatives.",
            vision: "A future where seafood is enjoyed without harming marine ecosystems.",
            services: [
                "Plant-Based Seafood Products",
                "Retail Distribution",
                "Food Service Partnerships",
                "Sustainability Education"
            ],
            features: [
                "Realistic taste and texture",
                "100% plant-based ingredients",
                "High protein content",
                "Eco-friendly production"
            ]
        },
        {
            name: "SweetRoots",
            description: "A farm-to-table bakery specializing in organic, gluten-free desserts.",
            longDesc: "SweetRoots uses locally sourced, organic ingredients to create gluten-free and allergen-friendly desserts. Their products are sold online and in select cafes.",
            image: "https://fakeimg.pl/200x100/?text=SweetRoots&font=lobster",
            founders: ["Hannah Lee", "Ethan Carter"],
            overview: "Founded in 2018, SweetRoots is based in Austin, Texas. It has gained a loyal following for its innovative and healthy desserts.",
            mission: "To make indulgent desserts that are both delicious and nutritious.",
            vision: "A world where everyone can enjoy dessert without compromise.",
            services: [
                "Gluten-Free Desserts",
                "Online Sales",
                "Cafe Partnerships",
                "Custom Orders"
            ],
            features: [
                "Organic ingredients",
                "Gluten-free and allergen-friendly",
                "Locally sourced",
                "Eco-friendly packaging"
            ]
        },
        {
            name: "FarmToFork",
            description: "A subscription service delivering fresh, seasonal produce directly from local farms.",
            longDesc: "FarmToFork connects consumers with local farmers, delivering fresh, seasonal produce straight to their doors. Each box includes recipes and tips for using the ingredients.",
            image: "https://fakeimg.pl/200x100/?text=FarmToFork&font=lobster",
            founders: ["Olivia Green", "James Wilson"],
            overview: "Founded in 2019, FarmToFork operates in the Pacific Northwest and has partnered with over 50 local farms.",
            mission: "To support local farmers and provide fresh, seasonal produce to consumers.",
            vision: "A future where everyone has access to fresh, locally grown food.",
            services: [
                "Produce Subscription Boxes",
                "Farm Tours",
                "Cooking Classes",
                "Farm-to-Table Events"
            ],
            features: [
                "Seasonal produce",
                "Direct from local farms",
                "Recipe cards included",
                "Customizable box sizes"
            ]
        },
        {
            name: "BrewCraft",
            description: "A craft brewery specializing in small-batch, experimental beers.",
            longDesc: "BrewCraft creates unique, small-batch beers using locally sourced ingredients and innovative brewing techniques. Their taproom offers a rotating selection of experimental brews.",
            image: "https://fakeimg.pl/200x100/?text=BrewCraft&font=lobster",
            founders: ["Jake Thompson", "Mia Rodriguez"],
            overview: "Founded in 2017, BrewCraft is based in Denver, Colorado. It has won multiple awards for its innovative beers.",
            mission: "To push the boundaries of craft brewing.",
            vision: "A world where beer is an art form.",
            services: [
                "Craft Beer Production",
                "Taproom Experience",
                "Beer Subscriptions",
                "Brewing Workshops"
            ],
            features: [
                "Small-batch production",
                "Locally sourced ingredients",
                "Rotating beer selection",
                "Experimental flavors"
            ]
        },
        {
            name: "Snackify",
            description: "A snack company creating healthy, protein-packed snacks for active lifestyles.",
            longDesc: "Snackify offers a range of protein bars, nuts, and trail mixes designed to fuel active lifestyles. Their products are made with natural ingredients and no artificial additives.",
            image: "https://fakeimg.pl/200x100/?text=Snackify&font=lobster",
            founders: ["Sarah Johnson", "Daniel Kim"],
            overview: "Founded in 2020, Snackify is headquartered in Boulder, Colorado. Its products are sold in gyms, health stores, and online.",
            mission: "To provide healthy, delicious snacks for people on the go.",
            vision: "A world where snacking is both nutritious and satisfying.",
            services: [
                "Protein Bars",
                "Trail Mixes",
                "Nut Packs",
                "Custom Snack Boxes"
            ],
            features: [
                "High protein content",
                "No artificial additives",
                "Natural ingredients",
                "Eco-friendly packaging"
            ]
        },
        {
            name: "ChefBox",
            description: "A meal kit service offering gourmet recipes from world-renowned chefs.",
            longDesc: "ChefBox partners with celebrity chefs to create exclusive meal kits that allow home cooks to recreate restaurant-quality dishes in their own kitchens.",
            image: "https://fakeimg.pl/200x100/?text=ChefBox&font=lobster",
            founders: ["Emily Carter", "Ryan Park"],
            overview: "Founded in 2021, ChefBox is based in New York City. It has collaborated with chefs from Michelin-starred restaurants.",
            mission: "To bring the world's best recipes to your kitchen.",
            vision: "A world where everyone can cook like a chef.",
            services: [
                "Gourmet Meal Kits",
                "Chef Collaborations",
                "Cooking Tutorials",
                "Custom Meal Plans"
            ],
            features: [
                "Chef-curated recipes",
                "Pre-portioned ingredients",
                "Step-by-step instructions",
                "Global cuisine options"
            ]
        },
        {
            name: "PurePops",
            description: "A company creating organic, fruit-based popsicles with no added sugar.",
            longDesc: "PurePops makes delicious, all-natural popsicles using real fruit and no added sugar. Their products are perfect for health-conscious consumers and kids alike.",
            image: "https://fakeimg.pl/200x100/?text=PurePops&font=lobster",
            founders: ["Lily Chen", "Ethan Brown"],
            overview: "Founded in 2019, PurePops is headquartered in San Diego, California. Its popsicles are sold in grocery stores and at local farmers' markets.",
            mission: "To create healthy, refreshing treats for everyone.",
            vision: "A world where snacks are both delicious and nutritious.",
            services: [
                "Organic Popsicles",
                "Retail Distribution",
                "Event Catering",
                "Custom Flavors"
            ],
            features: [
                "No added sugar",
                "Made with real fruit",
                "Organic ingredients",
                "Kid-friendly flavors"
            ]
        }
    ]);

    const [b2c, setB2C] = useState([
        {
            name: "StyleSphere",
            description: "A personalized fashion styling platform that uses AI to curate outfits for users.",
            longDesc: "StyleSphere combines AI and human stylists to create personalized fashion recommendations based on user preferences, body type, and lifestyle. Users can shop directly through the platform.",
            image: "https://fakeimg.pl/200x100/?text=StyleSphere&font=lobster",
            founders: ["Sophia Lee", "James Carter"],
            overview: "Founded in 2020, StyleSphere is headquartered in Los Angeles, California. It has over 500,000 users and partnerships with major fashion brands.",
            mission: "To make personalized fashion accessible to everyone.",
            vision: "A world where everyone feels confident in their style.",
            services: [
                "Personalized Outfit Recommendations",
                "Virtual Styling Sessions",
                "Direct-to-Consumer Shopping",
                "Wardrobe Planning"
            ],
            features: [
                "AI-driven style recommendations",
                "Human stylist support",
                "Seamless shopping experience",
                "Customizable style profiles"
            ]
        },
        {
            name: "HomeHaven",
            description: "A smart home solutions company offering affordable, easy-to-install smart devices.",
            longDesc: "HomeHaven provides a range of smart home products, including security cameras, smart lights, and voice-controlled assistants, designed to make homes safer and more efficient.",
            image: "https://fakeimg.pl/200x100/?text=HomeHaven&font=lobster",
            founders: ["Emma Johnson", "Liam Brown"],
            overview: "Founded in 2019, HomeHaven is based in Seattle, Washington. It has sold over 1 million devices worldwide.",
            mission: "To make smart home technology accessible to all.",
            vision: "A future where every home is a smart home.",
            services: [
                "Smart Security Cameras",
                "Voice-Controlled Assistants",
                "Smart Lighting Systems",
                "Home Automation Kits"
            ],
            features: [
                "Easy installation",
                "Affordable pricing",
                "Compatibility with major platforms",
                "Energy-efficient solutions"
            ]
        },
        {
            name: "PetPals",
            description: "A subscription service delivering premium pet food and accessories directly to your door.",
            longDesc: "PetPals offers customized subscription boxes for pets, including high-quality food, toys, and grooming products. Each box is tailored to the pet's breed, age, and preferences.",
            image: "https://fakeimg.pl/200x100/?text=PetPals&font=lobster",
            founders: ["Olivia Martinez", "Noah Wilson"],
            overview: "Founded in 2021, PetPals is headquartered in Chicago, Illinois. It has over 100,000 subscribers and partnerships with veterinarians and pet experts.",
            mission: "To make pet care convenient and personalized.",
            vision: "A world where every pet is happy and healthy.",
            services: [
                "Customized Pet Food Boxes",
                "Toy and Accessory Subscriptions",
                "Grooming Product Kits",
                "Veterinary-Approved Recommendations"
            ],
            features: [
                "Personalized boxes",
                "High-quality ingredients",
                "Eco-friendly packaging",
                "Expert-curated products"
            ]
        },
        {
            name: "FitFusion",
            description: "A fitness app offering on-demand workout classes and personalized training plans.",
            longDesc: "FitFusion provides access to thousands of workout classes, from yoga to HIIT, led by world-class trainers. Users can also create personalized fitness plans based on their goals.",
            image: "https://fakeimg.pl/200x100/?text=FitFusion&font=lobster",
            founders: ["Ava Thompson", "Ethan Davis"],
            overview: "Founded in 2020, FitFusion is based in New York City. It has over 2 million active users and partnerships with top fitness influencers.",
            mission: "To make fitness accessible and enjoyable for everyone.",
            vision: "A world where everyone can achieve their fitness goals.",
            services: [
                "On-Demand Workout Classes",
                "Personalized Training Plans",
                "Live Virtual Classes",
                "Fitness Challenges"
            ],
            features: [
                "Wide variety of workout styles",
                "Personalized recommendations",
                "Progress tracking",
                "Community support"
            ]
        },
        {
            name: "BloomBox",
            description: "A subscription service delivering fresh flowers and plants to your home every month.",
            longDesc: "BloomBox curates and delivers beautiful arrangements of fresh flowers and plants, along with care tips and styling ideas, to brighten up your home.",
            image: "https://fakeimg.pl/200x100/?text=BloomBox&font=lobster",
            founders: ["Lily Chen", "Ryan Park"],
            overview: "Founded in 2019, BloomBox is headquartered in San Francisco, California. It has delivered over 500,000 boxes to happy customers.",
            mission: "To bring the beauty of nature into every home.",
            vision: "A world where everyone can enjoy fresh flowers and plants.",
            services: [
                "Monthly Flower Subscriptions",
                "Plant Delivery",
                "Custom Arrangements",
                "Care Tips and Guides"
            ],
            features: [
                "Fresh, seasonal flowers",
                "Eco-friendly packaging",
                "Customizable subscriptions",
                "Expert care advice"
            ]
        },
        {
            name: "GameSphere",
            description: "A cloud gaming platform that lets users play high-quality games on any device.",
            longDesc: "GameSphere streams AAA games directly to users' devices, eliminating the need for expensive consoles or PCs. It offers a vast library of games for all ages.",
            image: "https://fakeimg.pl/200x100/?text=GameSphere&font=lobster",
            founders: ["Daniel Kim", "Sophia Brown"],
            overview: "Founded in 2021, GameSphere is based in Austin, Texas. It has partnered with major game developers and has over 1 million active users.",
            mission: "To make gaming accessible to everyone, everywhere.",
            vision: "A future where anyone can play any game on any device.",
            services: [
                "Cloud Gaming Subscriptions",
                "Game Library Access",
                "Multiplayer Gaming",
                "Exclusive Game Releases"
            ],
            features: [
                "No hardware required",
                "High-quality streaming",
                "Cross-platform compatibility",
                "Affordable pricing"
            ]
        },
        {
            name: "SnuggleNest",
            description: "A baby products company specializing in eco-friendly, ergonomic baby gear.",
            longDesc: "SnuggleNest designs and manufactures sustainable baby products, including cribs, carriers, and strollers, that prioritize safety, comfort, and environmental responsibility.",
            image: "https://fakeimg.pl/200x100/?text=SnuggleNest&font=lobster",
            founders: ["Emily Carter", "Michael Lee"],
            overview: "Founded in 2020, SnuggleNest is headquartered in Portland, Oregon. Its products are sold in over 1,000 stores nationwide.",
            mission: "To create safe, sustainable products for babies and parents.",
            vision: "A world where every child grows up in a healthy, eco-friendly environment.",
            services: [
                "Eco-Friendly Cribs",
                "Ergonomic Baby Carriers",
                "Sustainable Strollers",
                "Organic Baby Clothing"
            ],
            features: [
                "Eco-friendly materials",
                "Ergonomic designs",
                "Safety-certified products",
                "Stylish and functional"
            ]
        },
        {
            name: "TasteTrail",
            description: "A food discovery app that helps users find and explore local restaurants and cuisines.",
            longDesc: "TasteTrail uses AI to recommend restaurants, dishes, and food experiences based on user preferences and location. It also offers exclusive discounts and rewards.",
            image: "https://fakeimg.pl/200x100/?text=TasteTrail&font=lobster",
            founders: ["Priya Desai", "Carlos Rivera"],
            overview: "Founded in 2021, TasteTrail is based in Miami, Florida. It has partnered with over 10,000 restaurants across the U.S.",
            mission: "To make food discovery fun and rewarding.",
            vision: "A world where everyone can explore and enjoy local cuisines.",
            services: [
                "Restaurant Recommendations",
                "Exclusive Discounts",
                "Food Experience Guides",
                "User Reviews and Ratings"
            ],
            features: [
                "AI-driven recommendations",
                "Location-based search",
                "Exclusive deals",
                "Community-driven reviews"
            ]
        },
        {
            name: "LuxeLift",
            description: "A luxury skincare brand offering personalized, science-backed skincare solutions.",
            longDesc: "LuxeLift creates high-end skincare products tailored to individual skin types and concerns. Their formulations are developed by dermatologists and backed by clinical research.",
            image: "https://fakeimg.pl/200x100/?text=LuxeLift&font=lobster",
            founders: ["Sophia Green", "Ethan Carter"],
            overview: "Founded in 2020, LuxeLift is headquartered in New York City. Its products are sold online and in luxury department stores.",
            mission: "To deliver personalized, effective skincare solutions.",
            vision: "A world where everyone feels confident in their skin.",
            services: [
                "Personalized Skincare Kits",
                "Anti-Aging Products",
                "Hydration Solutions",
                "Dermatologist Consultations"
            ],
            features: [
                "Science-backed formulations",
                "Personalized recommendations",
                "Luxury packaging",
                "Clinically tested"
            ]
        },
        {
            name: "ChillBox",
            description: "A subscription service delivering curated self-care boxes to promote relaxation and wellness.",
            longDesc: "ChillBox sends monthly boxes filled with self-care products like candles, bath salts, teas, and journals to help users unwind and recharge.",
            image: "https://fakeimg.pl/200x100/?text=ChillBox&font=lobster",
            founders: ["Emma Wilson", "Liam Brown"],
            overview: "Founded in 2021, ChillBox is based in Denver, Colorado. It has over 50,000 subscribers and partnerships with wellness brands.",
            mission: "To help people prioritize self-care and relaxation.",
            vision: "A world where everyone takes time to recharge and rejuvenate.",
            services: [
                "Monthly Self-Care Boxes",
                "Customizable Subscriptions",
                "Wellness Product Sales",
                "Guided Relaxation Resources"
            ],
            features: [
                "Curated self-care items",
                "Eco-friendly packaging",
                "Customizable boxes",
                "Expert wellness tips"
            ]
        }
    ]);

    const [b2b, setB2B] = useState([
        {
            name: "CloudForge",
            description: "A cloud infrastructure provider offering scalable and secure cloud solutions for businesses.",
            longDesc: "CloudForge provides businesses with customizable cloud infrastructure, including storage, computing, and networking solutions. Their platform is designed for scalability, security, and ease of use.",
            image: "https://fakeimg.pl/200x100/?text=CloudForge&font=lobster",
            founders: ["Sophia Lee", "James Carter"],
            overview: "Founded in 2019, CloudForge is headquartered in San Francisco, California. It serves over 10,000 businesses worldwide.",
            mission: "To empower businesses with scalable and secure cloud solutions.",
            vision: "A future where every business can leverage the power of the cloud.",
            services: [
                "Cloud Storage",
                "Virtual Servers",
                "Network Solutions",
                "Data Security"
            ],
            features: [
                "Scalable infrastructure",
                "Enterprise-grade security",
                "24/7 customer support",
                "Customizable solutions"
            ]
        },
        {
            name: "DataPulse",
            description: "A data analytics platform that helps businesses make data-driven decisions.",
            longDesc: "DataPulse offers advanced data analytics tools that enable businesses to collect, analyze, and visualize data in real-time. Their platform integrates with existing systems for seamless data management.",
            image: "https://fakeimg.pl/200x100/?text=DataPulse&font=lobster",
            founders: ["Emma Johnson", "Liam Brown"],
            overview: "Founded in 2020, DataPulse is based in New York City. It has partnered with over 500 enterprises across various industries.",
            mission: "To transform raw data into actionable insights.",
            vision: "A world where every decision is driven by data.",
            services: [
                "Data Collection",
                "Real-Time Analytics",
                "Data Visualization",
                "Predictive Analytics"
            ],
            features: [
                "Real-time data processing",
                "Customizable dashboards",
                "AI-driven insights",
                "Seamless integration"
            ]
        },
        {
            name: "LogiChain",
            description: "A supply chain management platform that optimizes logistics and inventory for businesses.",
            longDesc: "LogiChain provides end-to-end supply chain solutions, including inventory management, logistics optimization, and demand forecasting. Their platform helps businesses reduce costs and improve efficiency.",
            image: "https://fakeimg.pl/200x100/?text=LogiChain&font=lobster",
            founders: ["Olivia Martinez", "Noah Wilson"],
            overview: "Founded in 2018, LogiChain is headquartered in Chicago, Illinois. It serves over 1,000 businesses in retail, manufacturing, and e-commerce.",
            mission: "To streamline supply chain operations for businesses.",
            vision: "A future where supply chains are efficient, transparent, and sustainable.",
            services: [
                "Inventory Management",
                "Logistics Optimization",
                "Demand Forecasting",
                "Supplier Collaboration"
            ],
            features: [
                "Real-time tracking",
                "AI-driven optimization",
                "Customizable workflows",
                "Integration with ERP systems"
            ]
        },
        {
            name: "SecureNet",
            description: "A cybersecurity company offering enterprise-grade security solutions for businesses.",
            longDesc: "SecureNet provides comprehensive cybersecurity solutions, including threat detection, data encryption, and network security. Their platform is designed to protect businesses from evolving cyber threats.",
            image: "https://fakeimg.pl/200x100/?text=SecureNet&font=lobster",
            founders: ["Ava Thompson", "Ethan Davis"],
            overview: "Founded in 2017, SecureNet is based in Austin, Texas. It has protected over 5,000 businesses from cyberattacks.",
            mission: "To safeguard businesses from cyber threats.",
            vision: "A world where businesses operate securely in the digital age.",
            services: [
                "Threat Detection",
                "Data Encryption",
                "Network Security",
                "Incident Response"
            ],
            features: [
                "Real-time threat monitoring",
                "Advanced encryption protocols",
                "24/7 security support",
                "Customizable security policies"
            ]
        },
        {
            name: "MarketMaven",
            description: "A marketing automation platform that helps businesses streamline their marketing efforts.",
            longDesc: "MarketMaven offers tools for email marketing, social media management, and campaign analytics. Their platform helps businesses automate repetitive tasks and focus on strategy.",
            image: "https://fakeimg.pl/200x100/?text=MarketMaven&font=lobster",
            founders: ["Lily Chen", "Ryan Park"],
            overview: "Founded in 2019, MarketMaven is headquartered in Seattle, Washington. It has over 20,000 users worldwide.",
            mission: "To simplify marketing for businesses of all sizes.",
            vision: "A world where marketing is efficient, effective, and data-driven.",
            services: [
                "Email Marketing",
                "Social Media Management",
                "Campaign Analytics",
                "Lead Generation"
            ],
            features: [
                "Automated workflows",
                "Customizable templates",
                "Real-time analytics",
                "Integration with CRM systems"
            ]
        },
        {
            name: "TalentForge",
            description: "A talent management platform that helps businesses recruit, onboard, and retain top talent.",
            longDesc: "TalentForge provides tools for recruitment, employee onboarding, performance management, and learning and development. Their platform helps businesses build and manage high-performing teams.",
            image: "https://fakeimg.pl/200x100/?text=TalentForge&font=lobster",
            founders: ["Daniel Kim", "Sophia Brown"],
            overview: "Founded in 2020, TalentForge is based in Boston, Massachusetts. It serves over 2,000 businesses across various industries.",
            mission: "To help businesses build and retain top talent.",
            vision: "A future where every business has the right people in the right roles.",
            services: [
                "Recruitment",
                "Employee Onboarding",
                "Performance Management",
                "Learning and Development"
            ],
            features: [
                "AI-driven recruitment",
                "Customizable onboarding workflows",
                "Performance tracking",
                "Integration with HR systems"
            ]
        },
        {
            name: "PayFlow",
            description: "A payment processing platform that simplifies transactions for businesses.",
            longDesc: "PayFlow offers secure and efficient payment processing solutions, including invoicing, subscription billing, and international payments. Their platform is designed for businesses of all sizes.",
            image: "https://fakeimg.pl/200x100/?text=PayFlow&font=lobster",
            founders: ["Emily Carter", "Michael Lee"],
            overview: "Founded in 2018, PayFlow is headquartered in San Diego, California. It processes over $1 billion in transactions annually.",
            mission: "To simplify payment processing for businesses.",
            vision: "A world where transactions are seamless and secure.",
            services: [
                "Payment Processing",
                "Invoicing",
                "Subscription Billing",
                "International Payments"
            ],
            features: [
                "Secure transactions",
                "Customizable invoicing",
                "Real-time payment tracking",
                "Multi-currency support"
            ]
        },
        {
            name: "EcoWorks",
            description: "A sustainability consulting firm that helps businesses adopt eco-friendly practices.",
            longDesc: "EcoWorks provides consulting services to help businesses reduce their environmental impact through sustainable practices, energy efficiency, and waste reduction.",
            image: "https://fakeimg.pl/200x100/?text=EcoWorks&font=lobster",
            founders: ["Sophia Green", "Ethan Carter"],
            overview: "Founded in 2021, EcoWorks is based in Portland, Oregon. It has worked with over 500 businesses to improve their sustainability efforts.",
            mission: "To help businesses operate sustainably.",
            vision: "A future where businesses thrive while protecting the planet.",
            services: [
                "Sustainability Consulting",
                "Energy Efficiency Audits",
                "Waste Reduction Strategies",
                "Carbon Footprint Analysis"
            ],
            features: [
                "Customized sustainability plans",
                "Expert consulting",
                "Data-driven recommendations",
                "Ongoing support"
            ]
        },
        {
            name: "InnovateX",
            description: "A business innovation platform that helps companies develop and implement new ideas.",
            longDesc: "InnovateX provides tools and frameworks for ideation, prototyping, and innovation management. Their platform helps businesses stay competitive by fostering a culture of innovation.",
            image: "https://fakeimg.pl/200x100/?text=InnovateX&font=lobster",
            founders: ["Emma Wilson", "Liam Brown"],
            overview: "Founded in 2020, InnovateX is headquartered in Denver, Colorado. It has partnered with over 1,000 businesses to drive innovation.",
            mission: "To empower businesses to innovate and grow.",
            vision: "A world where innovation drives business success.",
            services: [
                "Ideation Workshops",
                "Prototyping Tools",
                "Innovation Management",
                "Market Research"
            ],
            features: [
                "Collaborative ideation",
                "Rapid prototyping",
                "Innovation tracking",
                "Integration with project management tools"
            ]
        },
        {
            name: "BrandForge",
            description: "A branding and design agency that helps businesses create compelling brand identities.",
            longDesc: "BrandForge offers branding, design, and marketing services to help businesses build strong, recognizable brands. Their team of experts works closely with clients to deliver tailored solutions.",
            image: "https://fakeimg.pl/200x100/?text=BrandForge&font=lobster",
            founders: ["Lily Chen", "Ryan Park"],
            overview: "Founded in 2019, BrandForge is based in Los Angeles, California. It has worked with over 500 businesses to create impactful brands.",
            mission: "To help businesses stand out with powerful branding.",
            vision: "A world where every brand tells a compelling story.",
            services: [
                "Brand Strategy",
                "Logo Design",
                "Marketing Collateral",
                "Digital Branding"
            ],
            features: [
                "Custom branding solutions",
                "Expert design team",
                "Comprehensive brand guidelines",
                "Ongoing brand support"
            ]
        }
    ]);

    const [healthcare, setHealthcare] = useState([
        {
            name: "MediTrack",
            description: "A digital health platform that helps patients and doctors manage chronic conditions.",
            longDesc: "MediTrack provides a suite of tools for tracking symptoms, medications, and appointments. It also offers telemedicine services to connect patients with healthcare providers remotely.",
            image: "https://fakeimg.pl/200x100/?text=MediTrack&font=lobster",
            founders: ["Dr. Emily Zhang", "Carlos Rivera"],
            overview: "Founded in 2020, MediTrack is headquartered in Austin, Texas. It has over 100,000 users and partnerships with major healthcare providers.",
            mission: "To empower patients to take control of their health.",
            vision: "A future where chronic conditions are managed effectively through technology.",
            services: [
                "Symptom Tracking",
                "Medication Management",
                "Telemedicine",
                "Appointment Scheduling"
            ],
            features: [
                "User-friendly interface",
                "Real-time health monitoring",
                "Integration with wearable devices",
                "Secure data storage"
            ]
        },
        {
            name: "GenoCare",
            description: "A genetic testing company that provides personalized health insights based on DNA analysis.",
            longDesc: "GenoCare offers at-home genetic testing kits that analyze DNA to provide insights into health risks, ancestry, and personalized wellness recommendations.",
            image: "https://fakeimg.pl/200x100/?text=GenoCare&font=lobster",
            founders: ["Dr. Anika Patel", "Ethan Clarke"],
            overview: "Founded in 2019, GenoCare is based in San Francisco, California. It has processed over 500,000 DNA samples.",
            mission: "To make personalized health insights accessible to everyone.",
            vision: "A world where healthcare is tailored to individual genetic profiles.",
            services: [
                "At-Home Genetic Testing",
                "Health Risk Analysis",
                "Ancestry Reports",
                "Personalized Wellness Plans"
            ],
            features: [
                "Easy-to-use testing kits",
                "Comprehensive DNA analysis",
                "Secure and private results",
                "Expert genetic counseling"
            ]
        },
        {
            name: "HealthSync",
            description: "A health tech company that integrates wearable devices with personalized healthcare solutions.",
            longDesc: "HealthSync connects wearable devices like smartwatches and fitness trackers with healthcare providers, enabling real-time monitoring and personalized treatment plans.",
            image: "https://fakeimg.pl/200x100/?text=HealthSync&font=lobster",
            founders: ["Dr. Olivia Carter", "Ryan Park"],
            overview: "Founded in 2018, HealthSync is based in Chicago, Illinois. It has partnered with major hospitals and insurance providers.",
            mission: "To bridge the gap between wearable technology and healthcare.",
            vision: "A future where healthcare is proactive, personalized, and accessible.",
            services: [
                "Wearable Device Integration",
                "Remote Patient Monitoring",
                "Personalized Health Plans",
                "Data Analytics for Healthcare Providers"
            ],
            features: [
                "Real-time health monitoring",
                "AI-driven health insights",
                "Secure data sharing",
                "Customizable health plans"
            ]
        },
        {
            name: "CareSphere",
            description: "A telemedicine platform that connects patients with specialists worldwide.",
            longDesc: "CareSphere offers virtual consultations with specialists in various fields, including cardiology, dermatology, and mental health. Their platform ensures quick and convenient access to expert care.",
            image: "https://fakeimg.pl/200x100/?text=CareSphere&font=lobster",
            founders: ["Dr. Sophia Chen", "Michael O'Donnell"],
            overview: "Founded in 2021, CareSphere is headquartered in Boston, Massachusetts. It has over 1 million users and partnerships with top hospitals.",
            mission: "To make specialist care accessible to everyone, everywhere.",
            vision: "A world where distance is no barrier to quality healthcare.",
            services: [
                "Virtual Consultations",
                "Second Opinions",
                "Mental Health Support",
                "Chronic Disease Management"
            ],
            features: [
                "Wide range of specialists",
                "Quick appointment scheduling",
                "Secure video consultations",
                "Integration with health records"
            ]
        },
        {
            name: "PharmaGen",
            description: "A biotech company specializing in personalized medicine and drug development.",
            longDesc: "PharmaGen uses genetic data to develop personalized treatments for patients. Their research focuses on targeted therapies for cancer, rare diseases, and chronic conditions.",
            image: "https://fakeimg.pl/200x100/?text=PharmaGen&font=lobster",
            founders: ["Dr. Hiroshi Tanaka", "Maria Gonzalez"],
            overview: "Founded in 2020, PharmaGen is based in Tokyo, Japan. It has developed over 50 personalized treatments and partnered with leading research institutions.",
            mission: "To revolutionize medicine through personalized treatments.",
            vision: "A future where every patient receives the right treatment at the right time.",
            services: [
                "Personalized Drug Development",
                "Clinical Trials",
                "Genetic Research",
                "Targeted Therapies"
            ],
            features: [
                "Cutting-edge genetic research",
                "Patient-specific treatments",
                "Collaboration with research institutions",
                "Focus on rare diseases"
            ]
        },
        {
            name: "WellnessWave",
            description: "A mental health platform offering therapy and wellness resources.",
            longDesc: "WellnessWave provides online therapy sessions, self-help tools, and wellness resources to support mental health. Their platform is designed to be accessible and affordable.",
            image: "https://fakeimg.pl/200x100/?text=WellnessWave&font=lobster",
            founders: ["Ava Thompson", "Ethan Davis"],
            overview: "Founded in 2019, WellnessWave is headquartered in New York City. It has over 500,000 users and partnerships with mental health professionals.",
            mission: "To make mental health support accessible to everyone.",
            vision: "A world where mental health is prioritized and stigma-free.",
            services: [
                "Online Therapy",
                "Self-Help Tools",
                "Wellness Workshops",
                "Mental Health Resources"
            ],
            features: [
                "Licensed therapists",
                "Affordable pricing",
                "Anonymous sessions",
                "Customizable wellness plans"
            ]
        },
        {
            name: "SurgiTech",
            description: "A medical technology company developing advanced surgical robots.",
            longDesc: "SurgiTech designs and manufactures robotic systems for minimally invasive surgeries. Their technology improves precision, reduces recovery time, and enhances patient outcomes.",
            image: "https://fakeimg.pl/200x100/?text=SurgiTech&font=lobster",
            founders: ["Dr. Emily Zhang", "Carlos Rivera"],
            overview: "Founded in 2018, SurgiTech is based in San Diego, California. Its robotic systems are used in over 1,000 hospitals worldwide.",
            mission: "To revolutionize surgery through advanced robotics.",
            vision: "A future where every surgery is precise, safe, and minimally invasive.",
            services: [
                "Surgical Robots",
                "Training for Surgeons",
                "Maintenance and Support",
                "Research and Development"
            ],
            features: [
                "High-precision robotics",
                "Minimally invasive technology",
                "Real-time imaging",
                "Surgeon training programs"
            ]
        },
        {
            name: "VitaCare",
            description: "A home healthcare company providing medical services to patients at home.",
            longDesc: "VitaCare offers a range of home healthcare services, including nursing, physical therapy, and chronic disease management. Their goal is to make healthcare accessible and convenient.",
            image: "https://fakeimg.pl/200x100/?text=VitaCare&font=lobster",
            founders: ["Sarah Thompson", "James Lee"],
            overview: "Founded in 2020, VitaCare is headquartered in Seattle, Washington. It serves over 10,000 patients annually.",
            mission: "To bring quality healthcare to patients in the comfort of their homes.",
            vision: "A world where healthcare is accessible to everyone, regardless of location.",
            services: [
                "Home Nursing",
                "Physical Therapy",
                "Chronic Disease Management",
                "Post-Surgery Care"
            ],
            features: [
                "Skilled healthcare professionals",
                "Personalized care plans",
                "Convenient scheduling",
                "Integration with electronic health records"
            ]
        },
        {
            name: "BioNest",
            description: "A biotech company specializing in synthetic biology and bioengineered materials.",
            longDesc: "BioNest develops sustainable materials and products using synthetic biology, including biodegradable plastics, lab-grown leather, and bio-based textiles.",
            image: "https://fakeimg.pl/200x100/?text=BioNest&font=lobster",
            founders: ["Dr. Anika Patel", "Ethan Clarke"],
            overview: "Founded in 2019, BioNest is headquartered in Singapore. It has partnered with major fashion and manufacturing brands.",
            mission: "To create a sustainable future through bioengineered materials.",
            vision: "A world where all materials are eco-friendly and biodegradable.",
            services: [
                "Bioengineered Textiles",
                "Lab-Grown Leather",
                "Biodegradable Plastics",
                "Sustainable Packaging"
            ],
            features: [
                "Eco-friendly materials",
                "Scalable production processes",
                "Customizable bioengineered solutions",
                "Reduced environmental footprint"
            ]
        },
        {
            name: "NeuroSync",
            description: "A neurotechnology company developing brain-computer interfaces for medical and consumer applications.",
            longDesc: "NeuroSync creates wearable devices that allow users to control technology with their thoughts, enabling breakthroughs in healthcare, gaming, and accessibility.",
            image: "https://fakeimg.pl/200x100/?text=NeuroSync&font=lobster",
            founders: ["Dr. Emily Zhang", "Carlos Rivera"],
            overview: "Founded in 2018, NeuroSync is based in Austin, Texas. It has received FDA approval for its medical-grade brain-computer interface.",
            mission: "To bridge the gap between the human brain and technology.",
            vision: "A world where thought-controlled devices enhance human potential.",
            services: [
                "Medical Brain-Computer Interfaces",
                "Consumer Wearables",
                "Gaming Controllers",
                "Accessibility Devices"
            ],
            features: [
                "Non-invasive brainwave detection",
                "Real-time thought-to-action translation",
                "Customizable software applications",
                "High-precision sensors"
            ]
        }
    ]);

    const categories = [
        {
            name: 'Tech',
            startups: tech,
        },
        {
            name: 'Health Care',
            startups: healthcare,
        },
        {
            name: 'Food',
            startups: food,
        },
        {
            name: 'B2B',
            startups: b2b,
        },
        {
            name: 'B2C',
            startups: b2c,
        },
    ]
    return (
        <div className='explore-page'>
            <div className='heading'>Invest in founders building the future</div>
            <div className='categories'>
                {categories.map((category, index) => {
                    return (
                        <div className='category' key={index}>
                            <div className='category-name'>{category.name}</div>
                            <div className='startup-cards'>
                                {category.startups.map((startup, index) => {
                                    return (
                                        <div className='startup-card' key={index}>
                                            <img src={startup.image} alt='' />
                                            <div className='startup-details'>
                                                <div className='startup-name'>{startup.name}</div>
                                                <div className='startup-description'>{startup.description}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* <div className='startup-cards'>
                {startups.map((startup, index) => {
                    return (
                        <div className='startup-card' key={index}>
                            <img src={startup.image} alt='' />
                            <div className='startup-details'>
                                <div className='startup-name'>{startup.name}</div>
                                <div className='startup-description'>{startup.description}</div>
                            </div>
                        </div>
                    )
                })}
            </div> */}
        </div>
    )
}

export default ExplorePage
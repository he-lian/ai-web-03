import { Article, Category } from '../types/article';

export const categories: Category[] = [
  { id: 'zero-waste', name: 'Zero Waste', icon: 'Trash2', color: 'bg-green-100 text-green-700' },
  { id: 'energy-saving', name: 'Energy Saving', icon: 'Zap', color: 'bg-yellow-100 text-yellow-700' },
  { id: 'eco-shopping', name: 'Eco Shopping', icon: 'ShoppingBag', color: 'bg-blue-100 text-blue-700' },
  { id: 'sustainable-food', name: 'Sustainable Food', icon: 'Apple', color: 'bg-emerald-100 text-emerald-700' },
  { id: 'eco-home', name: 'Eco Home', icon: 'Home', color: 'bg-amber-100 text-amber-700' },
  { id: 'green-transport', name: 'Green Transport', icon: 'Bike', color: 'bg-sky-100 text-sky-700' },
];

export const articles: Article[] = [
  {
    slug: '10-easy-ways-reduce-waste',
    title: '10 Easy Ways to Reduce Waste at Home',
    description: 'Simple, actionable tips to minimize your environmental footprint and save money while living more sustainably.',
    category: 'zero-waste',
    date: '2024-01-15',
    thumbnail: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop',
    featured: true,
    content: `# 10 Easy Ways to Reduce Waste at Home

Living a zero-waste lifestyle doesn't have to be complicated. Here are 10 simple changes you can make today.

## 1. Ditch Single-Use Plastics
Invest in reusable bags, water bottles, and coffee cups. This small change can eliminate hundreds of plastic items each year.

## 2. Compost Your Food Scraps
Food waste makes up a significant portion of landfill waste. Start composting to create nutrient-rich soil for your garden.

## 3. Buy in Bulk
Bring your own containers to buy grains, nuts, and spices without packaging.

## 4. Choose Products with Minimal Packaging
Opt for products that come in recyclable or compostable packaging, or no packaging at all.

## 5. Repair Instead of Replace
Before throwing something away, see if you can fix it first.

## 6. Use Reusable Containers for Leftovers
Glass containers are durable, non-toxic, and can be used repeatedly.

## 7. Make Your Own Cleaning Products
Many household cleaners can be made with simple ingredients like vinegar, baking soda, and lemon.

## 8. Avoid Disposable Tableware
Use cloth napkins, real plates, and silverware instead of disposable options.

## 9. Donate or Sell Unwanted Items
Give your gently used items a second life instead of sending them to landfill.

## 10. Shop Secondhand First
Thrift stores and online marketplaces are great places to find clothing, furniture, and more.

Remember, every small change adds up! You don't have to be perfect to make a difference.
`,
  },
  {
    slug: 'save-energy-money',
    title: 'How to Save Energy (and Money) This Winter',
    description: 'Practical strategies to lower your energy bills while staying warm and reducing your carbon footprint.',
    category: 'energy-saving',
    date: '2024-01-10',
    thumbnail: 'https://images.unsplash.com/photo-1490077476609-d95151d21b4d?w=800&h=600&fit=crop',
    featured: true,
    content: `# How to Save Energy (and Money) This Winter

Heating costs can skyrocket during winter months. Here's how to stay warm without breaking the bank.

## Seal Drafts
Check windows and doors for air leaks. Use weatherstripping or draft stoppers to keep cold air out.

## Lower Your Thermostat
Each degree you lower your thermostat can save up to 3% on your heating bill.

## Use Curtains Strategically
Open curtains during the day to let sunlight warm your home, and close them at night to trap heat.

## Maintain Your Heating System
Change filters regularly and have your system serviced annually for optimal efficiency.

## Use Space Heaters Wisely
Only heat the rooms you're using instead of the entire house.

## Add Insulation
Proper attic insulation can significantly reduce heat loss.

## Wear Warm Clothing
Layer up and use blankets instead of turning up the heat.

## Cook at Home
Using your oven and stove helps warm your home while preparing meals.

## Switch to LED Bulbs
LEDs use up to 80% less energy than traditional incandescent bulbs.

## Unplug Electronics
Even when turned off, many devices continue to draw power.
`,
  },
  {
    slug: 'beginners-guide-composting',
    title: 'Beginner\'s Guide to Composting',
    description: 'Everything you need to know to start composting at home, even if you live in an apartment.',
    category: 'sustainable-food',
    date: '2024-01-05',
    thumbnail: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
    featured: true,
    content: `# Beginner's Guide to Composting

Composting is easier than you think! Turn your kitchen scraps into garden gold.

## What You Can Compost
- Fruit and vegetable peels
- Coffee grounds and filters
- Tea bags (remove staples)
- Eggshells
- Dry leaves
- Grass clippings
- Shredded paper

## What to Avoid
- Meat and dairy products
- Oily foods
- Diseased plants
- Weeds with seeds
- Pet waste
- Glossy paper

## Choose Your Compost Bin
Options range from simple piles to fancy tumblers. Even a small bin works for apartment dwellers.

## Layer Your Materials
Alternate green (nitrogen-rich) and brown (carbon-rich) materials for best results.

## Keep It Moist
Your compost should be damp like a wrung-out sponge.

## Turn It Regularly
Aerating your compost speeds up the decomposition process.

## Use Your Compost
When it's dark, crumbly, and earthy-smelling, it's ready to use in your garden!

## Apartment Composting Options
- Worm composting (vermicomposting)
- Electric composters
- Community compost bins
`,
  },
  {
    slug: 'eco-friendly-grocery-shopping',
    title: 'Eco-Friendly Grocery Shopping Guide',
    description: "Smart tips for sustainable shopping that's good for the planet and your wallet.",
    category: 'eco-shopping',
    date: '2024-01-01',
    thumbnail: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop',
    featured: false,
    content: `# Eco-Friendly Grocery Shopping Guide

Transform your grocery shopping habits with these sustainable practices.

## Bring Your Own Bags
Keep reusable bags in your car or purse so you're never caught without them.

## Shop the Perimeter
The outer aisles typically have less processed food and less packaging.

## Buy Local and Seasonal
Local produce travels fewer miles and is often fresher.

## Choose Loose Produce
Skip the plastic bags for fruits and vegetables.

## Bring Your Own Containers
Many stores let you weigh your own containers for bulk items.

## Avoid Single-Serve Items
Buy larger sizes and portion at home instead.

## Check Labels
Look for certifications like Organic, Fair Trade, and B Corp.

## Plan Your Meals
Reduce food waste by planning what you'll eat before you shop.

## Avoid Overbuying
Stick to your list and don't be tempted by sales on items you won't use.

## Bring Your Own Coffee Cup
Many coffee shops offer discounts for bringing your own mug.
`,
  },
  {
    slug: 'green-cleaning-products',
    title: 'Make Your Own Green Cleaning Products',
    description: 'Simple, non-toxic cleaning recipes that work great and save money.',
    category: 'eco-home',
    date: '2023-12-28',
    thumbnail: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&h=600&fit=crop',
    featured: false,
    content: `# Make Your Own Green Cleaning Products

Ditch the harsh chemicals with these easy homemade cleaning solutions.

## All-Purpose Cleaner
- 1 cup white vinegar
- 1 cup water
- 10-15 drops essential oil (optional)
Mix in a spray bottle. Great for most surfaces!

## Glass Cleaner
- 1 cup water
- 1 cup rubbing alcohol
- 1 tablespoon white vinegar
Spray and wipe with newspaper or a microfiber cloth.

## Bathroom Cleaner
- 1/2 cup baking soda
- Liquid castile soap
Mix into a paste for scrubbing sinks and tubs.

## Kitchen Disinfectant
- 2 cups water
- 3 tablespoons castile soap
- 20-30 drops tea tree oil
Effective against germs without harsh chemicals.

## Wood Furniture Polish
- 1/4 cup olive oil
- 1/4 cup white vinegar
Mix and apply with a soft cloth.

## Drain Cleaner
- 1/2 cup baking soda
- 1 cup white vinegar
Pour followed by boiling water (not for PVC pipes!).

## Benefits of Homemade Cleaners
- Less expensive
- Fewer chemicals
- Customizable scents
- Less packaging waste
`,
  },
  {
    slug: 'sustainable-commuting',
    title: 'Sustainable Commuting Options',
    description: 'Explore greener ways to get around that reduce your carbon footprint.',
    category: 'green-transport',
    date: '2023-12-25',
    thumbnail: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=800&h=600&fit=crop',
    featured: false,
    content: `# Sustainable Commuting Options

Reduce your environmental impact while getting where you need to go.

## Walk or Bike
Great for short distances and good for your health too!

## Public Transit
Buses, trains, and subways are much more efficient than driving alone.

## Carpool
Share rides with coworkers or neighbors to cut emissions and costs.

## Electric Vehicles
Consider an EV for your next car if it fits your lifestyle and budget.

## Work From Home
If possible, ask about remote work options even part-time.

## Flexible Hours
Avoid rush hour traffic and save time by adjusting your schedule.

## Combine Trips
Plan errands to minimize driving.

## Maintain Your Vehicle
Proper tire pressure and regular maintenance improve fuel efficiency.

## Car Sharing
Use services like Zipcar for when you really need a car.

## Live Closer to Work
If possible, consider housing options that reduce your commute time.
`,
  },
];

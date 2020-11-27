export const state = () => ({
  // FEATURED RESTAURANT
  featured: 
    {
      name: "Brew Bridge",
      category: "Bar & Grill",
      website: "https://www.bigotakeout.com/r/1101/restaurants/delivery/Bar-Grill/Brew-Bridge-Owensoro",
      logo: 'brew_bridge-logo.png',
      thumbnail: 'brew_bridge-thumbnail.jpg'
    },
  // RESTAURANT NAMES
  // Need to eventually create a mutation/getter to automatically append new restaurants
  restaurantNames: [
   "Big Dipper","Bill's Restaurant","Brew Bridge","Briarpatch","Carnival Cafe","City Walk of Owensboro","Colby's","Dee's Diner","Don Mario","Fetta Specialty Pizza","Gary's Drive In","Hong Kong","The Lure","Mendy's Kitchen","Mi Ranchito","The Miller House","Moonlite Bar-B-Q","Niko's Bakery & Cafe","Niko's Italian Cuisine","Owensboro Karen","Pan Asian","Papa Grande's","PeezO's Pizza","Real Hacienda","Ritzy's","Thai Food Owensboro"
  ],
  // ALL RESTAURANTS
  restaurants: [
    {
      name: "Big Dipper",
      category: "Fast Food",
      website: "",
      logo: 'big_dipper-logo.jpg',
      thumbnail: 'big_dipper-thumbnail.jpg',
      description: "Owensboro, KY's First Brewery in over 100 years! Come join us for an awesome tap offering (30+!), food, music, and a great time!",
      address: '2820 W. Parrish Avenue',
      googleMaps: "https://www.google.com/maps/dir/37.7638672,-87.152262/big+dipper+owensboro/@37.7617909,-87.1538935,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x886fb9f39394e0f7:0x40a647a62c217716!2m2!1d-87.1482453!2d37.7569912",
      phoneNumber: '270-684-4806',
      options: 'Drive-through, Carry-Out'
    },
    {
      name: "Bill's Restaurant",
      category: "Fine Dining",
      website: "http://www.atbills.com/",
      logo: 'bills_restaurant-logo.jpg',
      thumbnail: 'bills_restaurant-thumbnail.jpg',
      description: "Independently owned choice offering seasonal New American cuisine in simple, low-lit surrounds.",
      address: '420 Frederica Street',
      googleMaps: "https://www.google.com/maps/dir//bill's+restaurant/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x886fba7795d2db5f:0xdfc974589cec7a14?sa=X&ved=2ahUKEwjb6fqmlqPtAhXHxlkKHU-3BmEQ9RcwC3oECBEQBA",
      phoneNumber: '270-215-7742',
      options: 'Carry-Out'
    },
    {
      name: "Brew Bridge",
      category: "Bar & Grill",
      website: "https://www.OwensboroBrewBridge.com/",
      logo: 'brew_bridge-logo.png',
      thumbnail: 'brew_bridge-thumbnail.jpg',
      description: "Owensboro, KY's First Brewery in over 100 years! Come join us for an awesome tap offering (30+!), food, music, and a great time!",
      address: '800 W 2nd Street',
      googleMaps: "https://www.google.com/maps/dir//brew+bridge+order+online/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x886fb1e4a1391a49:0x2a3635c59431dcd5?sa=X&ved=2ahUKEwiW2buo5JbtAhXJuVkKHTi4BNsQ9RcwC3oECBIQBQ",
      phoneNumber: '270-215-7742',
      options: 'Carry-Out, Outdoor Dining, Online Ordering',
      bigOTakeoutLink: 'https://www.bigotakeout.com/r/1101/restaurants/delivery/Bar-Grill/Brew-Bridge-Owensoro',
      bigOTakeoutLogo: 'big_o_takeout-logo.png',
      toastLink: 'https://www.toasttab.com/the-brew-bridge/v3',
      toastLogo: 'toast-logo.png',
      grubhubLink: 'https://www.grubhub.com/restaurant/the-brew-bridge-800-w-2nd-st-owensboro/2405867',
      grubhubLogo: 'grubhub-logo.png'
    },
    {
      name: "Briarpatch",
      category: "Steak House",
      website: "http://www.brpatch.com/",
      logo: 'briarpatch-logo.png',
      thumbnail: 'briarpatch-thumbnail.jpg',
      description: "Venerable American steak & seafood place with a quaint vibe, garden & bar with unpretentious wines.",
      address: '2760 Veach Road',
      googleMaps: "https://www.google.com/maps/dir//briarpatch/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x886fbaf5ff931ec3:0xcc91befb1c48e40?sa=X&ved=2ahUKEwjBg5C0mqPtAhXG1FkKHalNB54Q9RcwH3oECCMQBA",
      phoneNumber: '270-685-3329',
      options: 'Carry-Out'
    },
    {
      name: "Carnival Cafe",
      category: "Restaurant",
      website: "",
      logo: 'carnival_cafe-logo.jpg',
      thumbnail: 'carnival_cafe-thumbnail.jpg',
      description: "Carnival food and drinks restaurant! Family friendly!",
      address: '1741 Scherm Road',
      googleMaps: "https://www.google.com/maps/dir//carnival+cafe+owensboro+ky/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x886fbbfd0290f317:0x23001a1d16266e33?sa=X&ved=2ahUKEwjmuMfanKPtAhVSSDABHZ8FDbUQ9RcwFHoECBMQBA",
      phoneNumber: '270-478-1002',
      options: 'Carry-Out, Curbside Pickup, Online Ordering',
      doordashLink: 'https://www.doordash.com/store/carnival-cafe-owensboro-863972/en-US',
      doordashLogo: 'doordash-logo.png',
      grubhubLink: 'https://www.grubhub.com/restaurant/carnival-cafe-1741-scherm-rd-owensboro/1441920',
      grubhubLogo: 'grubhub-logo.png'
    },
    {
      name: "City Walk",
      category: "American Restaurant",
      website: "https://www.citywalkofowensboro.com/",
      logo: 'city_walk_of_owensboro-logo.jpg',
      thumbnail: 'city_walk_of_owensboro-thumbnail.jpg',
      description: "City Walk is a casual dining spot for lunch and for dinner.",
      address: '222 Allen Street',
      googleMaps: "https://www.google.com/maps/dir//city+walk+of+owensboro/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x886fb082a3543b13:0xc7216434f6ed5d4f?sa=X&ved=2ahUKEwjalN-In6PtAhXHtlkKHTRBDrIQ9RcwC3oECBIQBQ",
      phoneNumber: '270-478-4958',
      options: 'Curbside Pickup, Online Ordering',
      grubhubLink: 'https://www.grubhub.com/restaurant/city-walk-of-owensboro-222-allen-street-owensboro/1893093',
      grubhubLogo: 'grubhub-logo.png'
    },
    {
      name: "Colby's",
      category: "American Restaurant",
      website: "http://www.colbysfinefoodandspirits.com/",
      logo: 'colbys-logo.jpg',
      thumbnail: 'colbys-thumbnail.jpg',
      description: "Traditional, diner-style eatery featuring American fare in a no-frills, family-friendly space.",
      address: '204 W. 3rd Street',
      googleMaps: "https://www.google.com/maps/dir//colby's/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x886fb09d54d6878d:0x42fc61b68d3035c7?sa=X&ved=2ahUKEwi2mYfMo6PtAhXSQc0KHey2BNQQ9RcwAHoECAQQBQ",
      phoneNumber: '270-685-4239',
      options: 'Curbside Pickup, Online Ordering'
    },
    {
      name: "Dee's Diner",
      category: 'Diner',
      website: "",
      logo: 'dees_diner-logo.jpg',
      thumbnail: 'dees_diner-thumbnail.jpg',
      description: "Owensboro’s pick for best breakfast in town! Also serving a variety of home-cooked style dishes with a daily plate lunch special Monday-Friday.",
      address: '1362 E. 4th Street',
      googleMaps: "https://www.google.com/maps/dir//dee's+diner/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x886fb0789685f047:0xcda7ab73b6677b07?sa=X&ved=2ahUKEwjlr5CyrqPtAhVOp1kKHSXjAoMQ9RcwDXoECBEQBA",
      phoneNumber: '270-686-0022',
      options: 'Carry-Out, Delivery'
    },
    {
      name: "Don Mario's",
      category: "Mexican",
      website: "https://www.donmariomex.com/",
      logo: 'don_mario-logo.png',
      thumbnail: 'don_mario-thumbnail.jpg',
      description: '',
      address: '122 W. 2nd Street suite A',
      googleMaps: 'https://www.google.com/maps/dir//don+mario/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x886fb1c805e645bd:0xb15649ceb32a832b?sa=X&ved=2ahUKEwjmg_nLr6PtAhXGTDABHVENDLwQ9RcwC3oECBEQBQ',
      phoneNumber: '270-684-6678',
      options: 'Curbside Pickup, Delivery, Online Ordering',
      bigOTakeoutLink: 'https://www.bigotakeout.com/r/321/restaurants/delivery/Mexican/Don-Marios-Owensboro',
      bigOTakeoutLogo: 'big_o_takeout-logo.png',
      grubhubLink: 'https://www.grubhub.com/restaurant/don-marios-122-west-2nd-street-owensboro/1943417',
      grubhubLogo: 'grubhub-logo.png'
    },
    {
      name: "Fetta Specialty Pizza",
      category: "Pizza",
      website: "http://www.fettaspecialtypizza.com/home.html",
      logo: 'fetta_specialty_pizza-logo.jpg',
      thumbnail: 'fetta_specialty_pizza-thumbnail.jpg',
      description: 'While there are many places that make pizza in Owensboro, Fetta wants to be your hometown pizzeria. We take great pride in our business and our community and the services that we provide to you.  Locally owned and operated, and ready to serve you, Fetta is your home for riverfront entertainment and dining.',
      address: '118 St. Ann Street',
      googleMaps: 'https://www.google.com/maps/dir/37.7638672,-87.152262/don+fetta+pizza+owensboro/@37.7673407,-87.1500503,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x886fb09d2ce6c8f1:0xf10e1242c42d4b3!2m2!1d-87.1126318!2d37.7752961',
      phoneNumber: '270-926-0005',
      options: 'Curbside Pickup, Online Ordering',
      bigOTakeoutLink: 'https://www.bigotakeout.com/r/12/restaurants/delivery/Pizza/Fetta-Specialty-Pizza-Spirit-Owensboro',
      bigOTakeoutLogo: 'big_o_takeout-logo.png'
    },
    {
      name: "Gary's Drive In",
      category: "Hamburger Restaurant",
      website: "http://garys-drive-in.edan.io/",
      logo: 'garys_drive_in-logo.jpg',
      thumbnail: 'garys_drive_in-thumbnail.jpg',
      description: 'While there are many places that make pizza in Owensboro, Fetta wants to be your hometown pizzeria. We take great pride in our business and our community and the services that we provide to you.  Locally owned and operated, and ready to serve you, Fetta is your home for riverfront entertainment and dining.',
      address: '118 St. Ann Street',
      googleMaps: 'https://www.google.com/maps/dir/37.7638672,-87.152262/don+fetta+pizza+owensboro/@37.7673407,-87.1500503,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x886fb09d2ce6c8f1:0xf10e1242c42d4b3!2m2!1d-87.1126318!2d37.7752961',
      phoneNumber: '270-926-0005',
      options: 'Curbside Pickup, Online Ordering',
      grubhubLink: 'https://www.grubhub.com/restaurant/garys-drive-inn-2220-veach-road-owensboro/1640143',
      grubhubLogo: 'grubhub-logo.png'
    },
    {
      name: "Lure Seafood & Grille",
      category: "Seafood Restaurant",
      website: "https://www.lureowensboro.com/",
      logo: 'lure_seafood_and_grille-logo.jpg',
      thumbnail: 'lure_seafood_and_grille-thumbnail.jpg',
      description: 'Casual stop with soaring ceilings specializing in seafood dishes plus pasta, burgers & cocktails.',
      address: '401 W. 2nd Street',
      googleMaps: 'https://www.google.com/maps/dir//the+lure+owensboro/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x886fb09da16b5a75:0xdd52826849ef91c8?sa=X&ved=2ahUKEwjv06q1t6PtAhWLzVkKHasGAEMQ9RcwC3oECBAQBQ',
      phoneNumber: '270-240-4556',
      options: 'Outdoor Dining, Online Ordering',
      bigOTakeoutLink: 'https://www.bigotakeout.com/r/74/restaurants/delivery/Seafood/Lure-Seafood-and-Grille-Owensboro',
      bigOTakeoutLogo: 'big_o_takeout-logo.png'
    },
    {
      name: "Mendy's Kitchen"
    },
    {
      name: "Mi Ranchito"
    },
    {
      name: "The Miller House"
    },
    {
      name: "Moonlite Bar-B-Q"
    },
    {
      name: "Niko's Bakery & Cafe"
    },
    {
      name: "Niko's Italian Cuisine"
    },
    {
      name: "Owensboro Karen"
    },
    {
      name: "Pan Asian"
    },
    {
      name: "Papa Grande's"
    },
    {
      name: "PeezO's Pizza"
    },
    {
      name: "Real Hacienda"
    },
    {
      name: "Ritzy's"
    },
    {
      name: "Thai Food Owensboro"
    },
  ]
})

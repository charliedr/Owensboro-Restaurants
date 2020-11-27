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
      address: '2820 W. Parrish Ave.',
      googleMaps: "https://www.google.com/maps/dir/37.7638672,-87.152262/big+dipper+owensboro/@37.7617909,-87.1538935,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x886fb9f39394e0f7:0x40a647a62c217716!2m2!1d-87.1482453!2d37.7569912",
      phoneNumber: '270-684-4806',
      options: 'Drive-through, Carry-Out',
    },
    {
      name: "Bill's Restaurant",
      category: "Fine Dining",
      website: "http://www.atbills.com/",
      logo: 'bills_restaurant-logo.jpg',
      thumbnail: 'bills_restaurant-thumbnail.jpg',
      description: "Independently owned choice offering seasonal New American cuisine in simple, low-lit surrounds.",
      address: '420 Frederica St.',
      googleMaps: "https://www.google.com/maps/dir//bill's+restaurant/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x886fba7795d2db5f:0xdfc974589cec7a14?sa=X&ved=2ahUKEwjb6fqmlqPtAhXHxlkKHU-3BmEQ9RcwC3oECBEQBA",
      phoneNumber: '270-215-7742',
      options: 'Carry-Out',
    },
    {
      name: "Brew Bridge",
      category: "Bar & Grill",
      website: "https://www.OwensboroBrewBridge.com/",
      logo: 'brew_bridge-logo.png',
      thumbnail: 'brew_bridge-thumbnail.jpg',
      description: "Owensboro, KY's First Brewery in over 100 years! Come join us for an awesome tap offering (30+!), food, music, and a great time!",
      address: '800 W 2nd St',
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
      address: '2760 Veach Rd.',
      googleMaps: "https://www.google.com/maps/dir//briarpatch/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x886fbaf5ff931ec3:0xcc91befb1c48e40?sa=X&ved=2ahUKEwjBg5C0mqPtAhXG1FkKHalNB54Q9RcwH3oECCMQBA",
      phoneNumber: '270-685-3329',
      options: 'Carry-Out',
    },
    {
      name: "Carnival Cafe",
      category: "Restaurant",
      website: "",
      logo: 'carnival_cafe-logo.jpg',
      thumbnail: 'carnival_cafe-thumbnail.jpg',
      description: "Carnival food and drinks restaurant! Family friendly!",
      address: '1741 Scherm Rd.',
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
      address: '222 Allen St.',
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
      address: '204 W. 3rd St.',
      googleMaps: "https://www.google.com/maps/dir//colby's/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x886fb09d54d6878d:0x42fc61b68d3035c7?sa=X&ved=2ahUKEwi2mYfMo6PtAhXSQc0KHey2BNQQ9RcwAHoECAQQBQ",
      phoneNumber: '270-685-4239',
      options: 'Curbside Pickup, Online Ordering',
    },
    {
      name: "Dee's Diner"
    },
    {
      name: "Don Mario",
      category: "Mexican",
      website: "https://www.donmariomex.com/",
      logo: 'don_mario-logo.png',
      thumbnail: 'don_mario-thumbnail.jpg'
    },
    {
      name: "Fetta Specialty Pizza",
      category: "Pizza",
      website: "http://www.fettaspecialtypizza.com/home.html",
      logo: 'fetta_specialty_pizza-logo.jpg',
      thumbnail: 'fetta_specialty_pizza-thumbnail.jpg'
    },
    {
      name: "Gary's Drive In"
    },
    {
      name: "Hong Kong"
    },
    {
      name: "The Lure"
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

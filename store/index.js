export const state = () => ({
  // FEATURED RESTAURANT
  featured: 
    {
      name: "brew bridge",
      category: "Bar & Grill",
      website: "https://www.OwensboroBrewBridge.com/",
      logo: 'brew_bridge-logo.png',
      thumbnail: 'brew_bridge-thumbnail.jpg'
    },
  // ALL RESTAURANTS
  // Names *HAVE* to be lowercase in order to not break routes
  restaurants: [
    {
      name: "big dipper",
      category: "Hamburger Restaurant",
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
      name: "bill's Restaurant",
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
      name: "brew bridge",
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
      name: "briarpatch",
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
      name: "bubba gandy",
      category: "Seafood",
      website: "https://www.bubbagandyowensboro.com/",
      logo: 'bubba_gandy-logo.jpg',
      thumbnail: 'bubba_gandy-thumbnail.jpg',
      description: "Bubba Gandy Seafood Cajun Market is here to provide Owensboro with Florida-fresh seafood. We provide superior options with zero additives.",
      address: '3600 Frederica Street Suite K',
      googleMaps: "https://www.google.com/maps/dir//owensboro+bubba+gandy's/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x886fbbfb64b47233:0x7bea2e6f4f8e3cf2?sa=X&ved=2ahUKEwjhy_DfxsHtAhUL2VkKHd18Ca8Q9RcwC3oECBkQBQ",
      phoneNumber: '270-240-1016',
      options: 'Carry-Out, Online Ordering',
      doordashLink: 'https://www.doordash.com/store/bubba-gandy-seafood-owensboro-797331/en-US',
      doordashLogo: 'doordash-logo.png'
    },
    {
      name: "carnival cafe",
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
      name: "city walk",
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
      name: "colby's",
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
      name: "the creme coffee house",
      category: "Coffee Shop",
      website: "https://thecremecoffeehouse.co",
      logo: 'the_creme_coffee_house-logo.png',
      thumbnail: 'the_creme_coffee_house-thumbnail.jpg',
      description: "We're locally owned and operated, with a warm and inviting atmosphere. Our variety of specialty drinks, delicious treats, and yummy sammiches are all here!",
      address: '109 East 2nd Street',
      googleMaps: 'https://www.google.com/maps/dir//the+creme+coffee+house/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x886fb082eea9578f:0x621ce710e3e6d771?sa=X&ved=2ahUKEwi5jKXFo7_tAhWSHM0KHTwVBqgQ9RcwC3oECBAQBA',
      phoneNumber: '270-683-7787',
      options: 'Curbside Pickup, Online Ordering',
      doordashLink: 'https://thecremecoffeehouse.co/menu/',
      doordashLogo: 'doordash-logo.png'
    },
    {
      name: "dee's diner",
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
      name: "don mario's",
      category: "Mexican Restaurant",
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
      name: "el toribio",
      category: "Mexican Restaurant",
      website: "",
      logo: "el_toribio-logo.jpg",
      thumbnail: "el_toribio-thumbnail.jpg",
      description: "A first locally owned Mexican Restaurant in Owensboro since 1985. Come join the fiesta to know the regular specials as well as NEW!",
      address: '3034 East 4th Street',
      googleMaps: 'https://www.google.com/maps/dir//el+toribio/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x886fb011d73196b7:0xb8fdbc069e8546e1?sa=X&ved=2ahUKEwjCsLvh2rTtAhXQZs0KHcBxCWkQ9RcwDXoECBAQBQ',
      phoneNumber: '270-683-8361',
      options: 'Curbside Pickup, Delivery, Online Ordering',
      bigOTakeoutLink: 'https://www.bigotakeout.com/r/73/restaurants/delivery/Mexican/El-Toribio-Mexican-Restaurant-Owensboro',
      bigOTakeoutLogo: 'big_o_takeout-logo.png'
    },
    {
      name: "fetta specialty pizza",
      category: "Pizza",
      website: "https://www.fettapizza.net/",
      logo: 'fetta_specialty_pizza-logo.jpg',
      thumbnail: 'fetta_specialty_pizza-thumbnail.jpg',
      description: 'While there are many places that make pizza in Owensboro, Fetta wants to be your hometown pizzeria. We take great pride in our business and our community and the services that we provide to you.  Locally owned and operated, and ready to serve you, Fetta is your home for riverfront entertainment and dining.',
      address: '118 St. Ann Street',
      googleMaps: 'https://www.google.com/maps/dir/37.7638672,-87.152262/don+fetta+pizza+owensboro/@37.7673407,-87.1500503,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x886fb09d2ce6c8f1:0xf10e1242c42d4b3!2m2!1d-87.1126318!2d37.7752961',
      phoneNumber: '270-926-0005',
      options: 'Curbside Pickup, Online Ordering',
      cloverLink: 'https://www.clover.com/online-ordering/fetta-specialty-pizza--owensboro#FEFGYPJT24GJE',
      cloverLogo: 'clover-logo.jpg',
      bigOTakeoutLink: 'https://www.bigotakeout.com/r/12/restaurants/delivery/Pizza/Fetta-Specialty-Pizza-Spirit-Owensboro',
      bigOTakeoutLogo: 'big_o_takeout-logo.png'
    },
    {
      name: "gary's drive in",
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
      name: "lure seafood & grille",
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
      name: "mendy's kitchen",
      category: "Diner",
      website: "https://mendyskitchen.me/",
      logo: 'mendys_kitchen-logo.jpg',
      thumbnail: 'mendys_kitchen-thumbnail.jpg',
      description: '',
      address: '924 Crabtree Avenue',
      googleMaps: "https://www.google.com/maps/dir//mendy's+kitchen/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x886fba050658ee0d:0x1ddff3dbbf2b1c06?sa=X&ved=2ahUKEwjv-dKA5qPtAhVJiFkKHW0ZBW0Q9RcwC3oECBIQBQ",
      phoneNumber: '270-685-0835',
      options: 'Curbside Pickup, Online Ordering',
      grubhubLink: 'https://www.grubhub.com/restaurant/mendys-kitchen-924-crabtree-ave-owensboro/1095913',
      grubhubLogo: 'grubhub-logo.png',
      bigOTakeoutLink: 'https://www.bigotakeout.com/r/382/restaurants/delivery/Diner/Mendys-Kitchen-Owensboro',
      bigOTakeoutLogo: 'big_o_takeout-logo.png'
    },
    {
      name: "mi ranchito",
      category: "Mexican Restaurant",
      website: "https://miranchito.restaurant/",
      logo: 'mi_ranchito-logo.jpg',
      thumbnail: 'mi_ranchito-thumbnail.jpg',
      description: 'We are very grateful for the opportunity that people have given us in these 6 years we have tried to give them the best service and the best Mexican food Our team has a lot of experience in this business and we will always try to satisfy our clients in the best way "GRACIAS POR SER PARTE DE MI RANCHITO"',
      address: '1146 Carter Road',
      googleMaps: "https://www.google.com/maps/dir//mi+ranchito/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x886fb9f5ffe9f58f:0x90cc45bb3d93602b?sa=X&ved=2ahUKEwjt656IyartAhWAB50JHXy2DJkQ9RcwAHoECAYQBA",
      phoneNumber: '270-240-4493',
      options: 'Curbside Pickup, Online Ordering, Outdoor Dining',
      grubhubLink: 'https://www.grubhub.com/restaurant/mi-ranchito-restaurante-mixicano-2425-west-parrish-avenue-owensboro/1640205',
      grubhubLogo: 'grubhub-logo.png'
    },
    {
      name: "the miller house",
      category: "American Restaurant",
      website: "http://www.themillerhouserestaurant.com/",
      logo: 'the_miller_house-logo.png',
      thumbnail: 'the_miller_house-thumbnail.jpg',
      description: 'Upscale-casual restaurant & lounge housed in state landmark offering Southern-tinged American fare.',
      address: '301 East 5th Street',
      googleMaps: "https://www.google.com/maps/dir//the+miller+house/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x886fba78c0dd76ad:0xbfe55c658096754?sa=X&ved=2ahUKEwiY6vanyqrtAhWNwVkKHW68BIYQ9RcwFHoECBEQBQ",
      phoneNumber: '270-685-5878',
      options: 'Curbside Pickup, Online Ordering',
      toastLink: 'https://www.toasttab.com/the-miller-house',
      toastLogo: 'toast-logo.png'
    },
    {
      name: "moonlite bar-b-q",
      category: "Barbecue Restaurant",
      website: "https://www.moonlite.com/",
      logo: 'moonlite_bbq-logo.jpg',
      thumbnail: 'moonlite_bbq-thumbnail.jpg',
      description: 'Revered BBQ mainstay known for its smoked meats (including mutton), plus lunch & dinner buffets.',
      address: '2840 West Parrish Avenue',
      googleMaps: "https://www.google.com/maps/dir//moonlite+bbq/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x886fb9f3b8df48c7:0x501b12cc0f58bf54?sa=X&ved=2ahUKEwi31OT1yqrtAhWDjVkKHT7IBeMQ9RcwF3oECBsQBQ",
      phoneNumber: '270-684-8143',
      options: 'Curbside Pickup'
    },
    {
      name: "niko's bakery & cafe",
      category: "Bakery & Cafe",
      website: "https://www.nikosbakeryandcafe.com/",
      logo: 'nikos_bakery_and_cafe-logo.png',
      thumbnail: 'nikos_bakery_and_cafe-thumbnail.jpg',
      description: "Niko's is a European-style bakery, unlike anything else in town.",
      address: '601 Emory Drive',
      googleMaps: "https://www.google.com/maps/dir//niko's+bakery/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x886fc1afce289e5f:0xa7b1dec05884b3ca?sa=X&ved=2ahUKEwixx6SGzartAhVIlVkKHYTODToQ9RcwC3oECBMQBQ",
      phoneNumber: '270-478-4441',
      options: 'Curbside Pickup, Drive-Through, Online Ordering, Outdoor Dining',
      grubhubLink: 'https://www.grubhub.com/restaurant/nikos-bakery-and-cafe-601-emory-dr-owensboro/2252640',
      grubhubLogo: 'grubhub-logo.png',
      doordashLink: 'https://www.doordash.com/store/niko-s-bakery-and-cafe-owensboro-873226/en-US',
      doordashLogo: 'doordash-logo.png'
    },
    {
      name: "niko's italian cuisine",
      category: "Italian Restaurant",
      website: "http://www.nikositalianonline.com/",
      logo: 'nikos_italian_cuisine-logo.jpg',
      thumbnail: 'nikos_italian_cuisine-thumbnail.jpg',
      description: "We are a small, yet elegant Italian restaurant serving great food in Owensboro, Kentucky.",
      address: '2200 East Parrish Avenue',
      googleMaps: "https://www.google.com/maps/dir//niko's+italian+cuisine/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x886fbabcf744ce6f:0x7e29167c046366ee?sa=X&ved=2ahUKEwid5fvBzqrtAhUIq1kKHbEDBdAQ9RcwC3oECBIQBQ",
      phoneNumber: '270-852-1618',
      options: 'Curbside Pickup, Delivery, Online Ordering',
      doordashLink: 'https://www.doordash.com/store/nikos-italian-cuisine-owensboro-465792/613453/en-US',
      doordashLogo: 'doordash-logo.png'
    },
    {
      name: "old hickory bar-b-q",
      category: "Barbecue Restaurant",
      website: "https://www.oldhickorybar-b-q.com/",
      logo: 'old_hickory_bbq-logo.png',
      thumbnail: 'old_hickory_bbq-thumbnail.jpg',
      description: "BBQ restaurant serving mutton, burgoo, fried chicken & catfish in a cozy, country-style setting.",
      address: '338 Washington Avenue',
      googleMaps: "https://www.google.com/maps/dir//Old+Hickory+Bar-B-Que/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x886fba42b17b6a1b:0xd5237158bc04d71b?sa=X&ved=2ahUKEwiR5LuO0KrtAhUso1kKHSfJABEQ9RcwC3oECBEQBQ",
      phoneNumber: '270-926-9000',
      options: 'Curbside Pickup, Online Ordering',
      bigOTakeoutLink: 'https://www.bigotakeout.com/r/916/restaurants/delivery/Barbeque/Old-Hickory-BBQ-Owensboro',
      bigOTakeoutLogo: 'big_o_takeout-logo.png',
      doordashLink: 'https://www.doordash.com/store/old-hickory-bar-b-que-owensboro-465804/en-US/',
      doordashLogo: 'doordash-logo.png'
    },
    {
      name: "owensboro karen",
      category: "Asian Restaurant",
      website: "",
      logo: 'owensboro_karen-logo.jpg',
      thumbnail: 'owensboro_karen-thumbnail.jpg',
      description: "",
      address: '7046 KY-56',
      googleMaps: "https://www.google.com/maps/dir//owensboro+karen/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x886fc7b36512258b:0x43f0e9d2e6496f83?sa=X&ved=2ahUKEwiBy8y20artAhXKxFkKHbAABVQQ9RcwDHoECBEQBA",
      phoneNumber: '270-344-0706',
      options: 'Carry-Out, Online Ordering',
      bigOTakeoutLink: 'https://www.bigotakeout.com/r/1079/restaurants/delivery/Asian/Owensboro-Karen-Restaurant-Owensboro',
      bigOTakeoutLogo: 'big_o_takeout-logo.png'
    },
    {
      name: "pan asian",
      category: "Asian Restaurant",
      website: "https://www.panasianowensboro.com/",
      logo: 'pan_asian-logo.png',
      thumbnail: 'pan_asian-thumbnail.jpg',
      description: "Pan Asian Chinese & Japanese Restaurant offers authentic and delicious tasting Chinese and Japanese cuisine in Owensboro, KY.",
      address: '7046 KY-56',
      googleMaps: "https://www.google.com/maps/dir//pan+asian/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x886fba432c866f8b:0x5a125aad274d94b2?sa=X&ved=2ahUKEwibo_SQ1KrtAhWm1FkKHf8vA0EQ9RcwE3oECCUQBA",
      phoneNumber: '270-852-5288',
      options: 'Carry-Out, Online Ordering',
      bigOTakeoutLink: 'https://www.bigotakeout.com/r/22/restaurants/delivery/Pan-Asian/Pan-Asian-Chinese--Japanese-Owensboro',
      bigOTakeoutLogo: 'big_o_takeout-logo.png',
      doordashLink: 'https://www.doordash.com/store/panasian-chinese-japanese-restaurant-owensboro-465806/en-US',
      doordashLogo: 'doordash-logo.png',
      grubhubLink: 'https://www.grubhub.com/restaurant/panasian-chinese-japanese-restaurant-2656-frederica-st-owensboro/1285828',
      grubhubLogo: 'grubhub-logo.png'
    },
    {
      name: "papa grande's 54",
      category: "Mexican Restaurant",
      website: "https://www.papagrande54.com/",
      logo: 'papa_grande-logo.png',
      thumbnail: 'papa_grande-thumbnail.jpg',
      description: "Come & try the best Mexican restaurant in Owensboro, Ky!",
      address: '3830 KY-54 #203',
      googleMaps: "https://www.google.com/maps/dir//papa+grande/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x886fa5388bb3d505:0xe7b9ffd3a206cd82?sa=X&hl=en&ved=2ahUKEwj97IOT2KrtAhWaKs0KHaufDLIQ9RcwAHoECAQQBA",
      phoneNumber: '270-240-4430',
      options: 'Carry-Out, Online Ordering',
      doordashLink: 'https://www.doordash.com/store/papa-grande-owensboro-465798/616710/en-US',
      doordashLogo: 'doordash-logo.png',
      grubhubLink: 'https://www.grubhub.com/restaurant/papa-grande-mexican-restaurant-544-southtown-blvd-owensboro/1531581',
      grubhubLogo: 'grubhub-logo.png'
    },
    {
      name: "peezo's pizza",
      category: "Pizza",
      website: "http://peezos-pizza.jany.io/",
      logo: 'peezos_pizza-logo.jpg',
      thumbnail: 'peezos_pizza-thumbnail.jpg',
      description: "",
      address: '2100 West 2nd Street',
      googleMaps: "https://www.google.com/maps/dir//peezo's+pizza/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x886fbbf0bad9aa75:0xeee60ade72d159?sa=X&ved=2ahUKEwj927PZ2KrtAhVZZM0KHaycDVwQ9RcwC3oECBEQBA",
      phoneNumber: '270-478-4098',
      options: 'Carry-Out',
      grubhubLink: 'https://www.grubhub.com/restaurant/peezos-pizza-2100-west-2nd-street-owensboro/2432919',
      grubhubLogo: 'grubhub-logo.png'
    },
    {
      name: "real hacienda",
      category: "Mexican Restaurant",
      website: "https://www.therealhacienda.com/",
      logo: 'real_hacienda-logo.jpg',
      thumbnail: 'real_hacienda-thumbnail.jpg',
      description: "",
      address: '3023 Highland Pointe Drive',
      googleMaps: "https://www.google.com/maps/dir//real+hacienda/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x886fbab4210eaa73:0x3e182d66ddb14f8a?sa=X&ved=2ahUKEwjGrMuT2qrtAhUmnOAKHSjSA0oQ9RcwAHoECAQQBA",
      phoneNumber: '270-684-5595',
      options: 'Carry-Out, Delivery, Online Ordering',
      bigOTakeoutLink: 'https://www.bigotakeout.com/r/936/restaurants/delivery/Mexican/Real-Hacienda-54-Owensboro',
      bigOTakeoutLogo: 'big_o_takeout-logo.png',
      doordashLink: 'https://www.doordash.com/store/real-hacienda-mexican-restaurant-owensboro-465799/en-US',
      doordashLogo: 'doordash-logo.png',
      grubhubLink: 'https://www.grubhub.com/restaurant/the-real-hacienda-3023-highland-pointe-dr-ste-106-owensboro/1299715',
      grubhubLogo: 'grubhub-logo.png',
    },
    {
      name: "ritzy's 54",
      category: "Hamburger Restaurant",
      website: "http://www.ritzysofowensboro.com/",
      logo: 'ritzys-logo.png',
      thumbnail: 'ritzys-thumbnail.jpg',
      description: "",
      address: '4527 KY-54',
      googleMaps: "https://www.google.com/maps/dir//ritzy's/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x886fa516651d2cdb:0xfd5b377920deb318?sa=X&ved=2ahUKEwjDzry23KrtAhVmk-AKHYGOAPkQ9RcwAHoECAQQBA",
      phoneNumber: '270-852-8887',
      options: 'Drive-Through, Online Ordering',
    },
    {
      name: "thai food owensboro",
      category: "Asian Restaurant",
      website: "https://thaifoodowensboro.com/",
      logo: 'thai_food_owensboro-logo.jpg',
      thumbnail: 'thai_food_owensboro-thumbnail.jpg',
      description: "With 13 years of experience cooking in the finest restaurants, our chef is excited to present their vision to you and all our guests. Our caring and committed staff will ensure you have a fantastic experience with us.",
      address: '1401 Carter Road',
      googleMaps: "https://www.google.com/maps/dir//thai+food+owensboro/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x886fb907b06711a5:0xff0b82229c0c1764?sa=X&ved=2ahUKEwjdnKiJ3artAhVRHs0KHSXPAYAQ9RcwC3oECCEQBQ",
      phoneNumber: '270-478-4334',
      options: 'Curbside Pickup, Online Ordering',
      bigOTakeoutLink: 'https://www.bigotakeout.com/r/135/restaurants/delivery/Thai/Thai-Food-Owensboro-Owensboro',
      bigOTakeoutLogo: 'big_o_takeout-logo.png',
      toastLink: 'https://www.toasttab.com/thaifoodowensboro/v2/online-order#!/',
      toastLogo: 'toast-logo.png',
    },
  ]
}
)

This script parses airbnb urls and displays property name, property type (e.g Apartment), number of bedrooms, bathrooms and list of the amenities

# Installation
-   `npm install`

# Run script
-   `npm start <urls>(optional)`
  The script will use a default set of urls if it is not provided.  
  Examples:  
    `npm start`  
    `npm start https://www.airbnb.co.uk/rooms/892504245505498346`  
  
  Sample output:  
  ```
  scrapedPages => [
    {
        "url": "https://www.airbnb.co.uk/rooms/892504245505498346",
        "data": {
            "title": "Purlie Lodge Apartment",
            "propertyType": "Entire rental unit",
            "bedrooms": "1",
            "bathrooms": "2",
            "amenities": [
                "Garden view",
                "Mountain view",
                "Hair dryer",
                "Cleaning products",
                "Shampoo",
                "Conditioner",
                "Liquid body soap",
                "Hot water",
                "Shower gel",
                "Free washer – In unit",
                "Essentials",
                "Hangers",
                "Bed linen",
                "Extra pillows and blankets",
                "Room-darkening shades",
                "Iron",
                "Clothes drying rack",
                "Clothes storage: wardrobe and chest of drawers",
                "Ethernet connection",
                "43\" HDTV with Fire TV, cable/satellite TV",
                "Books and reading material",
                "Portable fans",
                "Radiant heating",
                "Security cameras on property",
                "Smoke alarm",
                "Carbon monoxide alarm",
                "Fire extinguisher",
                "First aid kit",
                "Wifi",
                "Kitchen",
                "Logic refrigerator",
                "Microwave",
                "Cooking basics",
                "Dishes and silverware",
                "Freezer",
                "Lamona (Howdens) stainless steel electric cooker",
                "Lamona (Howdens) stainless steel single oven",
                "Kettle",
                "Coffee maker: cafetière",
                "Wine glasses",
                "Toaster",
                "Baking sheet",
                "Dining table",
                "Private patio or balcony",
                "Private back garden – Not fully fenced",
                "Outdoor furniture",
                "Outdoor dining area",
                "Sun loungers",
                "Free driveway parking on premises – 4 spaces",
                "Luggage drop-off allowed",
                "Long-term stays allowed",
                "Self check-in",
                "Lockbox"
            ]
        }
    }
]```
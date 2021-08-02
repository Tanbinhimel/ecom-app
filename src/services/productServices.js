const products = [
  {
    _id: "G6Ndk3at7r",
    productName: "Tequila Rose Cream Liquor",
    productImage: "",
    productDescription:
      "id mauris vulputate elementum nullam varius nulla facilisi cras non velit",
    catagory: "Beauty",
    price: 84.831,
    discount: 10,
    numberInStock: 29,
    rating: 4,
  },
  {
    _id: "0D8gx6Eioy",
    productName: "Jam - Raspberry",
    productImage: "",
    productDescription:
      "maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin",
    catagory: "Automotive",
    price: 7.495,
    discount: 18,
    numberInStock: 70,
    rating: 2,
  },
  {
    _id: "l5KJr9yvMe",
    productName: "Mustard Prepared",
    productImage: "",
    productDescription:
      "in purus eu magna vulputate luctus cum sociis natoque penatibus",
    catagory: "Jewelry",
    price: 88.336,
    discount: 15,
    numberInStock: 69,
    rating: 0,
  },
  {
    _id: "ejzYh2cU5J",
    productName: "Tea - Herbal - 6 Asst",
    productImage: "",
    productDescription:
      "vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien",
    catagory: "Music",
    price: 88.823,
    discount: 18,
    numberInStock: 73,
    rating: 1,
  },
  {
    _id: "1AOzf8dxh6",
    productName: "Bagelers - Cinn / Brown Sugar",
    productImage: "",
    productDescription:
      "donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim",
    catagory: "Beauty",
    price: 79.212,
    discount: 9,
    numberInStock: 7,
    rating: 0,
  },
  {
    _id: "vOiHl44wF3",
    productName: "Cheese - Ricotta",
    productImage: "",
    productDescription:
      "sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam",
    catagory: "Outdoors",
    price: 29.968,
    discount: 0,
    numberInStock: 16,
    rating: 0,
  },
  {
    _id: "4xNRx3nbyr",
    productName: "Juice - Lagoon Mango",
    productImage: "",
    productDescription:
      "at nunc commodo placerat praesent blandit nam nulla integer pede justo",
    catagory: "Garden",
    price: 93.511,
    discount: 10,
    numberInStock: 38,
    rating: 5,
  },
  {
    _id: "Fkntm1H1uy",
    productName: "Wine - Chateau Bonnet",
    productImage: "",
    productDescription:
      "quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus",
    catagory: "Kids",
    price: 98.406,
    discount: 9,
    numberInStock: 20,
    rating: 1,
  },
  {
    _id: "8sB9u4kScS",
    productName: "Wine - Rosso Del Veronese Igt",
    productImage: "",
    productDescription:
      "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    catagory: "Shoes",
    price: 51.931,
    discount: 5,
    numberInStock: 26,
    rating: 1,
  },
  {
    _id: "GMdge6Xd4z",
    productName: "Gatorade - Cool Blue Raspberry",
    productImage: "",
    productDescription:
      "consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices",
    catagory: "Garden",
    price: 65.313,
    discount: 17,
    numberInStock: 58,
    rating: 4,
  },
  {
    _id: "gEjRj7JgUy",
    productName: "Sole - Iqf",
    productImage: "",
    productDescription:
      "risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci",
    catagory: "Sports",
    price: 64.66,
    discount: 14,
    numberInStock: 97,
    rating: 3,
  },
  {
    _id: "tumrz655cH",
    productName: "Mushroom - Crimini",
    productImage: "",
    productDescription:
      "duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a",
    catagory: "Baby",
    price: 61.942,
    discount: 20,
    numberInStock: 85,
    rating: 2,
  },
  {
    _id: "su9ay3d2Sm",
    productName: "Ham - Procutinni",
    productImage: "",
    productDescription:
      "auctor sed tristique in tempus sit amet sem fusce consequat",
    catagory: "Books",
    price: 14.718,
    discount: 8,
    numberInStock: 20,
    rating: 3,
  },
  {
    _id: "9TBRd50VzT",
    productName: "Oil - Olive, Extra Virgin",
    productImage: "",
    productDescription:
      "faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit",
    catagory: "Baby",
    price: 94.601,
    discount: 18,
    numberInStock: 54,
    rating: 4,
  },
  {
    _id: "34KKz4fntr",
    productName: "Chicken - Soup Base",
    productImage: "",
    productDescription:
      "pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus",
    catagory: "Health",
    price: 85.541,
    discount: 0,
    numberInStock: 6,
    rating: 0,
  },
  {
    _id: "fmMTp8RNsR",
    productName: "Gelatine Leaves - Envelopes",
    productImage: "",
    productDescription:
      "sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar",
    catagory: "Computers",
    price: 29.005,
    discount: 15,
    numberInStock: 65,
    rating: 5,
  },
  {
    _id: "yYSbl7qk9A",
    productName: "Garlic - Elephant",
    productImage: "",
    productDescription:
      "tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in",
    catagory: "Electronics",
    price: 12.763,
    discount: 7,
    numberInStock: 53,
    rating: 5,
  },
  {
    _id: "hD3Vo1O7NH",
    productName: "Tea Leaves - Oolong",
    productImage: "",
    productDescription:
      "ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis",
    catagory: "Industrial",
    price: 52.845,
    discount: 14,
    numberInStock: 97,
    rating: 5,
  },
  {
    _id: "y1Fmg7uj63",
    productName: "Red Snapper - Fresh, Whole",
    productImage: "",
    productDescription:
      "eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas",
    catagory: "Health",
    price: 21.802,
    discount: 14,
    numberInStock: 63,
    rating: 5,
  },
  {
    _id: "RNbEb5xAng",
    productName: "Lamb - Whole, Fresh",
    productImage: "",
    productDescription:
      "id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam",
    catagory: "Electronics",
    price: 98.149,
    discount: 8,
    numberInStock: 69,
    rating: 4,
  },
  {
    _id: "fPDJi2hLF9",
    productName: "Rabbit - Frozen",
    productImage: "",
    productDescription:
      "curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et",
    catagory: "Health",
    price: 58.062,
    discount: 0,
    numberInStock: 90,
    rating: 4,
  },
  {
    _id: "3QI8z8FK4e",
    productName: "Spice - Pepper Portions",
    productImage: "",
    productDescription:
      "lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non",
    catagory: "Electronics",
    price: 62.848,
    discount: 16,
    numberInStock: 74,
    rating: 4,
  },
  {
    _id: "rOGnz9mCg2",
    productName: "Artichokes - Jerusalem",
    productImage: "",
    productDescription:
      "est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium",
    catagory: "Beauty",
    price: 75.671,
    discount: 0,
    numberInStock: 35,
    rating: 5,
  },
  {
    _id: "nHNgm4QpPn",
    productName: "Cheese - Comtomme",
    productImage: "",
    productDescription:
      "non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem",
    catagory: "Music",
    price: 76.616,
    discount: 16,
    numberInStock: 62,
    rating: 5,
  },
  {
    _id: "v4Nvf9rvm7",
    productName: "Venison - Liver",
    productImage: "",
    productDescription:
      "habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem",
    catagory: "Electronics",
    price: 19.416,
    discount: 6,
    numberInStock: 73,
    rating: 3,
  },
  {
    _id: "o61vk3mbAx",
    productName: "Wine - Red, Cooking",
    productImage: "",
    productDescription:
      "turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi",
    catagory: "Home",
    price: 58.944,
    discount: 12,
    numberInStock: 39,
    rating: 0,
  },
  {
    _id: "7BLVx8jxiq",
    productName: "Soup - Campbells Beef Noodle",
    productImage: "",
    productDescription:
      "lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat",
    catagory: "Beauty",
    price: 25.989,
    discount: 19,
    numberInStock: 42,
    rating: 4,
  },
  {
    _id: "yYGZv8PUWK",
    productName: "Soup - Campbells Tomato Ravioli",
    productImage: "",
    productDescription:
      "augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc",
    catagory: "Games",
    price: 54.87,
    discount: 9,
    numberInStock: 49,
    rating: 0,
  },
  {
    _id: "WgMEl7oOjS",
    productName: "Pasta - Orzo, Dry",
    productImage: "",
    productDescription:
      "justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper",
    catagory: "Home",
    price: 13.334,
    discount: 14,
    numberInStock: 62,
    rating: 2,
  },
  {
    _id: "1cGsr61Smy",
    productName: "Pimento - Canned",
    productImage: "",
    productDescription:
      "rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc",
    catagory: "Industrial",
    price: 27.067,
    discount: 20,
    numberInStock: 66,
    rating: 4,
  },
  {
    _id: "QyQow7jLVr",
    productName: "Cheese Cloth No 60",
    productImage: "",
    productDescription:
      "arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in",
    catagory: "Jewelry",
    price: 29.213,
    discount: 10,
    numberInStock: 14,
    rating: 3,
  },
  {
    _id: "ZTOVy98Gmh",
    productName: "Soup - Campbells, Beef Barley",
    productImage: "",
    productDescription:
      "vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo",
    catagory: "Automotive",
    price: 54.406,
    discount: 6,
    numberInStock: 71,
    rating: 4,
  },
  {
    _id: "YYvFa3BOFx",
    productName: "Crab Meat Claw Pasteurise",
    productImage: "",
    productDescription:
      "convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit",
    catagory: "Kids",
    price: 98.677,
    discount: 18,
    numberInStock: 26,
    rating: 5,
  },
  {
    _id: "bfbJw57epG",
    productName: "Tuna - Salad Premix",
    productImage: "",
    productDescription:
      "dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam",
    catagory: "Jewelry",
    price: 82.125,
    discount: 16,
    numberInStock: 74,
    rating: 0,
  },
  {
    _id: "f12zt8fUXi",
    productName: "Squash - Pattypan, Yellow",
    productImage: "",
    productDescription:
      "eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat",
    catagory: "Toys",
    price: 80.919,
    discount: 6,
    numberInStock: 67,
    rating: 5,
  },
  {
    _id: "q9Cgb1d4SQ",
    productName: "Trout Rainbow Whole",
    productImage: "",
    productDescription:
      "eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim",
    catagory: "Home",
    price: 11.389,
    discount: 11,
    numberInStock: 56,
    rating: 5,
  },
  {
    _id: "vJKLs01qDs",
    productName: "Brandy Cherry - Mcguinness",
    productImage: "",
    productDescription:
      "nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede",
    catagory: "Home",
    price: 50.073,
    discount: 15,
    numberInStock: 47,
    rating: 1,
  },
  {
    _id: "hC32d8qdpp",
    productName: "Seedlings - Buckwheat, Organic",
    productImage: "",
    productDescription:
      "ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
    catagory: "Games",
    price: 39.897,
    discount: 5,
    numberInStock: 42,
    rating: 4,
  },
  {
    _id: "fnYCt6wIEa",
    productName: "Tomatoes - Grape",
    productImage: "",
    productDescription:
      "accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam",
    catagory: "Kids",
    price: 64.41,
    discount: 10,
    numberInStock: 11,
    rating: 0,
  },
  {
    _id: "t5nvn2DTvk",
    productName: "Glass - Juice Clear 5oz 55005",
    productImage: "",
    productDescription:
      "nunc donec quis orci eget orci vehicula condimentum curabitur in",
    catagory: "Grocery",
    price: 28.042,
    discount: 18,
    numberInStock: 8,
    rating: 2,
  },
  {
    _id: "EKfoy7Dzpg",
    productName: "Brocolinni - Gaylan, Chinese",
    productImage: "",
    productDescription:
      "tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis",
    catagory: "Games",
    price: 87.967,
    discount: 9,
    numberInStock: 4,
    rating: 0,
  },
  {
    _id: "tD02n7nyrC",
    productName: "Crab - Claws, 26 - 30",
    productImage: "",
    productDescription:
      "quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis",
    catagory: "Automotive",
    price: 1.693,
    discount: 1,
    numberInStock: 56,
    rating: 1,
  },
  {
    _id: "ueS7h6zo2G",
    productName: "Bread - White Mini Epi",
    productImage: "",
    productDescription:
      "duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque",
    catagory: "Baby",
    price: 10.609,
    discount: 7,
    numberInStock: 55,
    rating: 3,
  },
  {
    _id: "b6I2v3QytI",
    productName: "Lid - 3oz Med Rec",
    productImage: "",
    productDescription:
      "vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
    catagory: "Outdoors",
    price: 71.756,
    discount: 9,
    numberInStock: 6,
    rating: 2,
  },
  {
    _id: "Vjd5r8yDmF",
    productName: "Cornstarch",
    productImage: "",
    productDescription:
      "justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio",
    catagory: "Computers",
    price: 25.014,
    discount: 4,
    numberInStock: 62,
    rating: 4,
  },
  {
    _id: "af0Yz8tBna",
    productName: "Sherry - Dry",
    productImage: "",
    productDescription:
      "vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum",
    catagory: "Outdoors",
    price: 18.741,
    discount: 17,
    numberInStock: 40,
    rating: 1,
  },
  {
    _id: "4wWfu88nMM",
    productName: "Truffle Paste",
    productImage: "",
    productDescription:
      "quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea",
    catagory: "Jewelry",
    price: 17.611,
    discount: 14,
    numberInStock: 58,
    rating: 4,
  },
  {
    _id: "bnixb2vSRF",
    productName: "Fish - Base, Bouillion",
    productImage: "",
    productDescription:
      "ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin",
    catagory: "Clothing",
    price: 67.017,
    discount: 0,
    numberInStock: 71,
    rating: 3,
  },
  {
    _id: "Bzx0d0rGGY",
    productName: "Pheasants - Whole",
    productImage: "",
    productDescription:
      "viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a",
    catagory: "Jewelry",
    price: 68.548,
    discount: 20,
    numberInStock: 74,
    rating: 3,
  },
  {
    _id: "Xja6h8JipW",
    productName: "Pastry - Banana Tea Loaf",
    productImage: "",
    productDescription:
      "pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur",
    catagory: "Tools",
    price: 64.941,
    discount: 17,
    numberInStock: 43,
    rating: 0,
  },
  {
    _id: "HzCzi23SXk",
    productName: "Chocolate Bar - Coffee Crisp",
    productImage: "",
    productDescription:
      "duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis",
    catagory: "Industrial",
    price: 77.925,
    discount: 16,
    numberInStock: 40,
    rating: 3,
  },
  {
    _id: "lnlQe3nDbu",
    productName: "Syrup - Monin, Swiss Choclate",
    productImage: "",
    productDescription:
      "mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue",
    catagory: "Movies",
    price: 34.15,
    discount: 11,
    numberInStock: 47,
    rating: 0,
  },
  {
    _id: "rsAGa2ylsR",
    productName: "Wine - Sake",
    productImage: "",
    productDescription:
      "vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique",
    catagory: "Beauty",
    price: 33.615,
    discount: 19,
    numberInStock: 62,
    rating: 3,
  },
  {
    _id: "CXX7i94Ovm",
    productName: "Wine - Coteaux Du Tricastin Ac",
    productImage: "",
    productDescription:
      "ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis",
    catagory: "Home",
    price: 40.037,
    discount: 17,
    numberInStock: 82,
    rating: 0,
  },
  {
    _id: "ZvTht9jlb0",
    productName: "Wine - Barolo Fontanafredda",
    productImage: "",
    productDescription:
      "sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla",
    catagory: "Electronics",
    price: 17.376,
    discount: 16,
    numberInStock: 79,
    rating: 4,
  },
  {
    _id: "HQVnx5DFe5",
    productName: "Puree - Strawberry",
    productImage: "",
    productDescription:
      "blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus",
    catagory: "Tools",
    price: 66.182,
    discount: 1,
    numberInStock: 90,
    rating: 3,
  },
  {
    _id: "IqEMr0ZXXf",
    productName: "Tuna - Fresh",
    productImage: "",
    productDescription:
      "viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi",
    catagory: "Music",
    price: 39.984,
    discount: 1,
    numberInStock: 33,
    rating: 3,
  },
  {
    _id: "hBEtw9nhdf",
    productName: "Syrup - Monin - Passion Fruit",
    productImage: "",
    productDescription:
      "lobortis est phasellus sit amet erat nulla tempus vivamus in",
    catagory: "Games",
    price: 40.849,
    discount: 0,
    numberInStock: 3,
    rating: 2,
  },
  {
    _id: "k5zdk7PJCh",
    productName: "Irish Cream - Baileys",
    productImage: "",
    productDescription:
      "nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi",
    catagory: "Toys",
    price: 89.555,
    discount: 8,
    numberInStock: 3,
    rating: 1,
  },
  {
    _id: "wbOod3qyEt",
    productName: "Wine - White, French Cross",
    productImage: "",
    productDescription:
      "maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien",
    catagory: "Electronics",
    price: 20.481,
    discount: 7,
    numberInStock: 19,
    rating: 4,
  },
  {
    _id: "jvD8e40RXo",
    productName: "Eggplant - Asian",
    productImage: "",
    productDescription:
      "aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer",
    catagory: "Clothing",
    price: 73.843,
    discount: 14,
    numberInStock: 28,
    rating: 1,
  },
  {
    _id: "kb5qt07t0X",
    productName: "Table Cloth 120 Round White",
    productImage: "",
    productDescription:
      "sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui",
    catagory: "Movies",
    price: 25.829,
    discount: 15,
    numberInStock: 87,
    rating: 0,
  },
  {
    _id: "fKjIi2Gkjc",
    productName: "Wine - Fontanafredda Barolo",
    productImage: "",
    productDescription:
      "interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus",
    catagory: "Baby",
    price: 55.457,
    discount: 6,
    numberInStock: 86,
    rating: 2,
  },
  {
    _id: "dBJ7m3ASav",
    productName: "Chicken - Tenderloin",
    productImage: "",
    productDescription:
      "penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et",
    catagory: "Shoes",
    price: 44.826,
    discount: 3,
    numberInStock: 77,
    rating: 1,
  },
  {
    _id: "30aMi7qvf2",
    productName: "Lamb - Rack",
    productImage: "",
    productDescription:
      "vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    catagory: "Music",
    price: 57.31,
    discount: 2,
    numberInStock: 1,
    rating: 1,
  },
  {
    _id: "Jd3Wk7ZPh3",
    productName: "Squid Ink",
    productImage: "",
    productDescription:
      "nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at",
    catagory: "Beauty",
    price: 96.942,
    discount: 4,
    numberInStock: 70,
    rating: 2,
  },
  {
    _id: "3tiLg4Dt2F",
    productName: "Longos - Assorted Sandwich",
    productImage: "",
    productDescription:
      "nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti",
    catagory: "Sports",
    price: 36.49,
    discount: 4,
    numberInStock: 88,
    rating: 3,
  },
  {
    _id: "hG9Vw4mISo",
    productName: "Oats Large Flake",
    productImage: "",
    productDescription:
      "duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam",
    catagory: "Shoes",
    price: 21.118,
    discount: 16,
    numberInStock: 54,
    rating: 2,
  },
  {
    _id: "VnVli7BJWw",
    productName: "Scallop - St. Jaques",
    productImage: "",
    productDescription:
      "dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim",
    catagory: "Clothing",
    price: 67.032,
    discount: 13,
    numberInStock: 8,
    rating: 2,
  },
  {
    _id: "7SoTh4IGuI",
    productName: "White Baguette",
    productImage: "",
    productDescription:
      "purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at",
    catagory: "Sports",
    price: 97.854,
    discount: 14,
    numberInStock: 1,
    rating: 4,
  },
  {
    _id: "lRtGx6uWFq",
    productName: "French Pastry - Mini Chocolate",
    productImage: "",
    productDescription:
      "sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam",
    catagory: "Baby",
    price: 91.639,
    discount: 20,
    numberInStock: 46,
    rating: 1,
  },
  {
    _id: "ar6Eg0Slxo",
    productName: "Potatoes - Parissienne",
    productImage: "",
    productDescription:
      "lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque",
    catagory: "Electronics",
    price: 54.931,
    discount: 20,
    numberInStock: 85,
    rating: 4,
  },
  {
    _id: "l0U3y5UTKW",
    productName: "Wine - Niagara,vqa Reisling",
    productImage: "",
    productDescription:
      "duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam",
    catagory: "Electronics",
    price: 48.365,
    discount: 12,
    numberInStock: 5,
    rating: 2,
  },
  {
    _id: "Q5oFh9mcZH",
    productName: "Muffin Hinge Container 6",
    productImage: "",
    productDescription:
      "lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac",
    catagory: "Health",
    price: 42.813,
    discount: 9,
    numberInStock: 21,
    rating: 1,
  },
  {
    _id: "fqbcx2azh4",
    productName: "Napkin Colour",
    productImage: "",
    productDescription:
      "pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi",
    catagory: "Toys",
    price: 56.561,
    discount: 15,
    numberInStock: 21,
    rating: 1,
  },
  {
    _id: "Ty8xr12aCJ",
    productName: "Cheese - Oka",
    productImage: "",
    productDescription:
      "parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean",
    catagory: "Books",
    price: 44.925,
    discount: 6,
    numberInStock: 64,
    rating: 5,
  },
  {
    _id: "LrPnb2C6ug",
    productName: "Croissants Thaw And Serve",
    productImage: "",
    productDescription:
      "nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam",
    catagory: "Books",
    price: 24.557,
    discount: 19,
    numberInStock: 4,
    rating: 5,
  },
  {
    _id: "ezqBx0bSP2",
    productName: "Chinese Foods - Chicken",
    productImage: "",
    productDescription:
      "sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in",
    catagory: "Home",
    price: 73.431,
    discount: 9,
    numberInStock: 56,
    rating: 5,
  },
  {
    _id: "Mo7sm32Tsc",
    productName: "Apple - Granny Smith",
    productImage: "",
    productDescription:
      "risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet",
    catagory: "Computers",
    price: 1.781,
    discount: 2,
    numberInStock: 96,
    rating: 0,
  },
  {
    _id: "ohhTw4VWGG",
    productName: "Amaretto",
    productImage: "",
    productDescription:
      "viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper",
    catagory: "Beauty",
    price: 97.576,
    discount: 7,
    numberInStock: 31,
    rating: 4,
  },
  {
    _id: "lIMPe49eZu",
    productName: "Ecolab - Hand Soap Form Antibac",
    productImage: "",
    productDescription:
      "at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget",
    catagory: "Music",
    price: 19.471,
    discount: 5,
    numberInStock: 12,
    rating: 2,
  },
  {
    _id: "Q64bc06sWy",
    productName: "Beef - Roasted, Cooked",
    productImage: "",
    productDescription:
      "donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper",
    catagory: "Automotive",
    price: 4.751,
    discount: 5,
    numberInStock: 2,
    rating: 5,
  },
  {
    _id: "J8Rqg5RDxu",
    productName: "Lamb - Sausage Casings",
    productImage: "",
    productDescription:
      "faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec",
    catagory: "Jewelry",
    price: 86.715,
    discount: 12,
    numberInStock: 30,
    rating: 4,
  },
  {
    _id: "GuQgx78vAb",
    productName: "Carrots - Jumbo",
    productImage: "",
    productDescription:
      "est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
    catagory: "Music",
    price: 6.83,
    discount: 2,
    numberInStock: 63,
    rating: 3,
  },
  {
    _id: "lluzy9gkaG",
    productName: "Pasta - Fettuccine, Egg, Fresh",
    productImage: "",
    productDescription:
      "erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus",
    catagory: "Games",
    price: 17.703,
    discount: 20,
    numberInStock: 18,
    rating: 1,
  },
  {
    _id: "OnUfm8rz0I",
    productName: "Syrup - Monin - Passion Fruit",
    productImage: "",
    productDescription:
      "sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus",
    catagory: "Clothing",
    price: 22.807,
    discount: 11,
    numberInStock: 26,
    rating: 5,
  },
  {
    _id: "cLPxy3Xtr1",
    productName: "Basil - Pesto Sauce",
    productImage: "",
    productDescription:
      "ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae",
    catagory: "Shoes",
    price: 82.006,
    discount: 2,
    numberInStock: 21,
    rating: 0,
  },
  {
    _id: "vR0ds8UR1g",
    productName: "Lotus Leaves",
    productImage: "",
    productDescription:
      "suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce",
    catagory: "Health",
    price: 75.658,
    discount: 10,
    numberInStock: 12,
    rating: 3,
  },
  {
    _id: "kYVRa7Ww7V",
    productName: "Beef - Cooked, Corned",
    productImage: "",
    productDescription:
      "nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh",
    catagory: "Grocery",
    price: 46.093,
    discount: 20,
    numberInStock: 87,
    rating: 2,
  },
  {
    _id: "QBHZm5ZBNV",
    productName: "Flour - So Mix Cake White",
    productImage: "",
    productDescription:
      "ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo",
    catagory: "Health",
    price: 22.422,
    discount: 10,
    numberInStock: 71,
    rating: 2,
  },
  {
    _id: "Oga1b5cLNJ",
    productName: "Heavy Duty Dust Pan",
    productImage: "",
    productDescription:
      "tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh",
    catagory: "Grocery",
    price: 94.086,
    discount: 4,
    numberInStock: 53,
    rating: 1,
  },
  {
    _id: "d6N4w4oeu4",
    productName: "Wine - Mondavi Coastal Private",
    productImage: "",
    productDescription:
      "vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium",
    catagory: "Jewelry",
    price: 85.282,
    discount: 11,
    numberInStock: 41,
    rating: 0,
  },
  {
    _id: "XMafk7C8dT",
    productName: "Tomatoes - Cherry, Yellow",
    productImage: "",
    productDescription:
      "amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris",
    catagory: "Home",
    price: 84.427,
    discount: 17,
    numberInStock: 23,
    rating: 4,
  },
  {
    _id: "NkRKm7XqoU",
    productName: "Mousse - Mango",
    productImage: "",
    productDescription:
      "nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum",
    catagory: "Shoes",
    price: 53.84,
    discount: 20,
    numberInStock: 51,
    rating: 5,
  },
  {
    _id: "2eD8q5KaU5",
    productName: "Cheese - Goat With Herbs",
    productImage: "",
    productDescription:
      "tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit",
    catagory: "Books",
    price: 89.356,
    discount: 2,
    numberInStock: 9,
    rating: 2,
  },
  {
    _id: "uKORv3Biyx",
    productName: "Lentils - Green Le Puy",
    productImage: "",
    productDescription:
      "semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor",
    catagory: "Baby",
    price: 20.654,
    discount: 10,
    numberInStock: 87,
    rating: 4,
  },
  {
    _id: "fnfPc4Dbj7",
    productName: "Snapple - Mango Maddness",
    productImage: "",
    productDescription:
      "massa donec dapibus duis at velit eu est congue elementum in hac habitasse",
    catagory: "Jewelry",
    price: 54.108,
    discount: 14,
    numberInStock: 18,
    rating: 0,
  },
  {
    _id: "ZAxDg6JAS0",
    productName: "Bread - Pita",
    productImage: "",
    productDescription:
      "in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer",
    catagory: "Games",
    price: 91.127,
    discount: 5,
    numberInStock: 9,
    rating: 2,
  },
  {
    _id: "WRDOy3yddz",
    productName: "Beer - Moosehead",
    productImage: "",
    productDescription:
      "vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non",
    catagory: "Computers",
    price: 91.907,
    discount: 16,
    numberInStock: 60,
    rating: 5,
  },
  {
    _id: "iHGQi0Qg03",
    productName: "Beef - Rouladin, Sliced",
    productImage:
      "lorem ipsum dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor eu pede",
    productDescription:
      "nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
    catagory: "Grocery",
    price: 84.844,
    discount: 14,
    numberInStock: 13,
    rating: 2,
  },
];

export function getProducts() {
  return products;
}

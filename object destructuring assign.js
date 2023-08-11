const order = {
    id: 1011,
    productName: "iPhone 14 Pro Max",
    brandDetails: {
      brandName: "Apple",
      origin: "USA",
      assembledIn: "India",
    },
    price: 145000,
    condition: "New",
  };
  const { id, productName, price, condition,brandDetails } = order;
  const {origin, brandName, assembledIn } = brandDetails;

  var generateMessage = (destructure) => {
    return `Hello Team. I have ordered a new ${productName} which cost me ${price}. Let me know when will i get it?`;
  };

  console.log(generateMessage(destructure));
  

import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Deepak',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'Arun',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
    products: [
      {
        
        name: 'Nike Slim Shirt',
        category: 'Shirts',
        image: '/images/shirt.webp',
        price: 1350,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
        countInStock:14,
      },
      {
       
        name: 'Adidas Fit Shirt',
        category: 'Shirts',
        image: '/images/shirt.webp',
        price: 100,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
        countInStock:14,
      },
      {
        
        name: 'Lacoste Free Shirt',
        category: 'Shirts',
        image: '/images/shirt.webp',
        price: 220,
        brand: 'Lacoste',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product',
        countInStock:14,
      },
      {
        
        name: 'Nike Slim Pant',
        category: 'Pants',
        image: '/images/shirt.webp',
        price: 78,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
        countInStock:14,
      },
      {
       
        name: 'Puma Slim Pant',
        category: 'Pants',
        image: '/images/shirt.webp',
        price: 65,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
        countInStock:0,
      },
      {
       
        name: 'Adidas Fit Pant',
        category: 'Pants',
        image: '/images/shirt.webp',
        price: 139,
        brand: 'Adidas',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
        countInStock:9,
      },
    ],
  };
  export default data;
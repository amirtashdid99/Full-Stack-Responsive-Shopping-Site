import { PrismaClient, Category } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Clear existing data
  await prisma.review.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.cartItem.deleteMany();
  await prisma.address.deleteMany();
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();

  // Create demo user
  const hashedPassword = await bcrypt.hash('demo123', 10);
  const demoUser = await prisma.user.create({
    data: {
      email: 'demo@luxeshop.com',
      password: hashedPassword,
      firstName: 'Alex',
      lastName: 'Morgan',
      phone: '555-0123',
    },
  });

  console.log('✅ Created demo user');

  // Create products
  const products = [
    {
      name: 'Wireless Noise-Cancelling Headphones',
      slug: 'wireless-noise-cancelling-headphones',
      description: 'Premium over-ear headphones with active noise cancellation, 30-hour battery life, and studio-quality sound. Perfect for music lovers and professionals.',
      price: 299.99,
      comparePrice: 399.99,
      category: Category.ELECTRONICS,
      inventory: 45,
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
      images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800'],
      featured: true,
    },
    {
      name: 'Smart Watch Pro',
      slug: 'smart-watch-pro',
      description: 'Advanced fitness tracking, heart rate monitor, GPS, and smartphone notifications. Water resistant up to 50m. Available in multiple colors.',
      price: 249.99,
      comparePrice: 349.99,
      category: Category.ELECTRONICS,
      inventory: 67,
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
      images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800'],
      featured: true,
    },
    {
      name: 'Minimalist Leather Backpack',
      slug: 'minimalist-leather-backpack',
      description: 'Handcrafted genuine leather backpack with laptop compartment. Timeless design meets modern functionality. Perfect for daily commute or travel.',
      price: 189.99,
      comparePrice: null,
      category: Category.CLOTHING,
      inventory: 32,
      imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
      images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800'],
      featured: false,
    },
    {
      name: 'Organic Cotton T-Shirt Set',
      slug: 'organic-cotton-tshirt-set',
      description: 'Pack of 3 premium organic cotton t-shirts. Soft, breathable, and sustainably sourced. Available in classic neutral colors.',
      price: 59.99,
      comparePrice: 79.99,
      category: Category.CLOTHING,
      inventory: 120,
      imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
      images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800'],
      featured: false,
    },
    {
      name: 'Stainless Steel Coffee Maker',
      slug: 'stainless-steel-coffee-maker',
      description: 'Programmable 12-cup coffee maker with thermal carafe. Brew strength control and automatic shut-off. Start every morning right.',
      price: 129.99,
      comparePrice: null,
      category: Category.HOME_GARDEN,
      inventory: 28,
      imageUrl: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800',
      images: ['https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800'],
      featured: false,
    },
    {
      name: 'Indoor Plant Collection',
      slug: 'indoor-plant-collection',
      description: 'Set of 4 air-purifying indoor plants with decorative pots. Low-maintenance varieties perfect for home or office. Includes care guide.',
      price: 79.99,
      comparePrice: null,
      category: Category.HOME_GARDEN,
      inventory: 54,
      imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800',
      images: ['https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800'],
      featured: true,
    },
    {
      name: 'Yoga Mat Premium',
      slug: 'yoga-mat-premium',
      description: 'Extra-thick non-slip yoga mat with carrying strap. Eco-friendly TPE material, excellent cushioning for joints. Perfect for all yoga styles.',
      price: 49.99,
      comparePrice: 69.99,
      category: Category.SPORTS_OUTDOORS,
      inventory: 89,
      imageUrl: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800',
      images: ['https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800'],
      featured: false,
    },
    {
      name: 'Camping Tent 4-Person',
      slug: 'camping-tent-4-person',
      description: 'Waterproof family camping tent with easy setup. Spacious interior with ventilation windows. Includes carrying bag and stakes.',
      price: 199.99,
      comparePrice: 279.99,
      category: Category.SPORTS_OUTDOORS,
      inventory: 23,
      imageUrl: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800',
      images: ['https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800'],
      featured: false,
    },
    {
      name: 'The Art of Modern Living',
      slug: 'the-art-of-modern-living',
      description: 'Hardcover coffee table book featuring contemporary interior design. Over 300 full-color photographs showcasing stunning homes worldwide.',
      price: 45.99,
      comparePrice: null,
      category: Category.BOOKS,
      inventory: 41,
      imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800',
      images: ['https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800'],
      featured: false,
    },
    {
      name: 'Building Blocks Creative Set',
      slug: 'building-blocks-creative-set',
      description: '500-piece building blocks set for endless creativity. Compatible with major brands. Includes storage box. Ages 4+.',
      price: 39.99,
      comparePrice: null,
      category: Category.TOYS,
      inventory: 76,
      imageUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800',
      images: ['https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800'],
      featured: false,
    },
    {
      name: 'Natural Skincare Gift Set',
      slug: 'natural-skincare-gift-set',
      description: 'Luxury 5-piece skincare collection with organic ingredients. Includes cleanser, toner, serum, moisturizer, and face mask. Cruelty-free.',
      price: 89.99,
      comparePrice: 119.99,
      category: Category.BEAUTY,
      inventory: 58,
      imageUrl: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800',
      images: ['https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800'],
      featured: true,
    },
    {
      name: 'Sterling Silver Necklace',
      slug: 'sterling-silver-necklace',
      description: 'Elegant minimalist sterling silver necklace with cubic zirconia pendant. Hypoallergenic and tarnish-resistant. Comes with gift box.',
      price: 79.99,
      comparePrice: null,
      category: Category.JEWELRY,
      inventory: 34,
      imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800',
      images: ['https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800'],
      featured: false,
    },
  ];

  for (const product of products) {
    await prisma.product.create({ data: product });
  }

  console.log(`✅ Created ${products.length} products`);

  // Create sample address for demo user
  await prisma.address.create({
    data: {
      userId: demoUser.id,
      fullName: 'Alex Morgan',
      addressLine1: '742 Evergreen Terrace',
      city: 'Springfield',
      state: 'OR',
      zipCode: '97475',
      country: 'United States',
    },
  });

  console.log('✅ Created demo address');

  // Create coupons
  const coupons = [
    {
      code: 'LUCKY10',
      type: 'PERCENTAGE' as const,
      value: 10,
      minPurchase: 0,
      maxDiscount: 50,
      isActive: true,
    },
    {
      code: 'LUCKY15',
      type: 'PERCENTAGE' as const,
      value: 15,
      minPurchase: 50,
      maxDiscount: 75,
      isActive: true,
    },
    {
      code: 'LUCKY20',
      type: 'PERCENTAGE' as const,
      value: 20,
      minPurchase: 100,
      maxDiscount: 100,
      isActive: true,
    },
    {
      code: 'LUCKY25',
      type: 'PERCENTAGE' as const,
      value: 25,
      minPurchase: 150,
      maxDiscount: 150,
      isActive: true,
    },
    {
      code: 'SAVE5',
      type: 'FIXED_AMOUNT' as const,
      value: 5,
      minPurchase: 25,
      isActive: true,
    },
    {
      code: 'SAVE10',
      type: 'FIXED_AMOUNT' as const,
      value: 10,
      minPurchase: 50,
      isActive: true,
    },
    {
      code: 'FREESHIP',
      type: 'FREE_SHIPPING' as const,
      value: 10,
      minPurchase: 0,
      isActive: true,
    },
    {
      code: 'WELCOME20',
      type: 'PERCENTAGE' as const,
      value: 20,
      minPurchase: 0,
      maxDiscount: 100,
      usageLimit: 100,
      isActive: true,
    },
  ];

  for (const coupon of coupons) {
    await prisma.coupon.create({ data: coupon });
  }

  console.log(`✅ Created ${coupons.length} coupons`);

  console.log('🎉 Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

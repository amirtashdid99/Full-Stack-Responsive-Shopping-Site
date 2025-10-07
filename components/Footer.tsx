import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400 mt-auto border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <h3 className="text-white text-lg font-bold">Amir&apos;s Shop</h3>
            </div>
            <p className="text-sm">
              Premium e-commerce platform offering quality products across multiple categories with exceptional service.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-white transition">All Products</Link></li>
              <li><Link href="/products?category=ELECTRONICS" className="hover:text-white transition">Electronics</Link></li>
              <li><Link href="/products?category=CLOTHING" className="hover:text-white transition">Clothing</Link></li>
              <li><Link href="/products?category=HOME_GARDEN" className="hover:text-white transition">Home & Garden</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/features" className="hover:text-white transition">Features</Link></li>
              <li><Link href="/skills" className="hover:text-white transition">Skills Showcase</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 className="text-white font-semibold mb-4">Account</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/auth/login" className="hover:text-white transition">Login</Link></li>
              <li><Link href="/auth/register" className="hover:text-white transition">Register</Link></li>
              <li><Link href="/profile" className="hover:text-white transition">My Orders</Link></li>
              <li><Link href="/profile" className="hover:text-white transition">Account Settings</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 dark:border-gray-900 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Amir&apos;s Shop. All rights reserved. Built with Next.js & TypeScript.</p>
          <p className="mt-2 text-xs text-gray-500">
            A portfolio project demonstrating full-stack development skills | 
            <Link href="/about" className="hover:text-white transition ml-2">Learn More</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

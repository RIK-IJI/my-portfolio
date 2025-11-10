'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-10 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link 
              href="/"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                pathname === '/' 
                  ? 'border-b-2 border-black text-gray-900' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              About Me
            </Link>
            <Link
              href="/projects"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                pathname === '/projects'
                  ? 'border-b-2 border-black text-gray-900'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
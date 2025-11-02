'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: '홈' },
    { href: '/about', label: '프로젝트 소개' },
    { href: '/my-itineraries', label: '저장된 일정' },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-3xl">🏝️</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-2xl font-bold tracking-tight">
                JejU-Again
              </span>
              <span className="text-blue-100 text-sm font-medium">
                제주어게인
              </span>
            </div>
          </Link>

          {/* Navigation Menu */}
          <nav className="flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                  pathname === item.href
                    ? 'bg-white text-blue-800 shadow-md'
                    : 'text-white hover:bg-white/10 hover:shadow-sm'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

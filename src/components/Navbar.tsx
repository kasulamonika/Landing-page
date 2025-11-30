import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from './ui/sheet';
import { useState } from 'react';

export function Navbar() {
  const [isVersionHovered, setIsVersionHovered] = useState(false);

  return (
    <nav className="border-b border-gray-100 sticky top-0 z-50 bg-white" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Hamburger Menu + Logo */}
          <div className="flex items-center gap-3">
            {/* Hamburger Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <button 
                  className="p-1 rounded transition-colors duration-200 hover:bg-gray-100" style={{ color: 'var(--blue4)' }}
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-white border-r border-gray-100">
                <SheetTitle style={{ color: 'var(--blue4)' }} className="mb-1 text-lg font-semibold">Menu</SheetTitle>
                <SheetDescription style={{ color: '#666' }} className="mb-6 text-sm">
                  Navigate to different sections
                </SheetDescription>
                <div className="flex flex-col gap-3 mt-6">
                  <div 
                    className="py-2 px-3 rounded transition-colors duration-200 cursor-pointer flex items-center justify-between"
                    style={{ color: 'var(--blue4)' }}
                    onMouseEnter={() => setIsVersionHovered(true)}
                    onMouseLeave={() => setIsVersionHovered(false)}
                  >
                    <span className="text-sm">Version</span>
                    <span className="transition-all duration-200" style={{ color: isVersionHovered ? 'var(--blue6)' : '#999' }}>
                      0.1
                    </span>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-8 h-8 rounded flex items-center justify-center transition-colors duration-200 group-hover:bg-gray-50" style={{ backgroundColor: 'var(--blue4)', color: 'white', fontSize: '0.75rem', fontWeight: '600' }}>
                G1
              </div>
              <span className="text-lg font-semibold tracking-tight" style={{ color: 'var(--blue4)' }}>CareerG1</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
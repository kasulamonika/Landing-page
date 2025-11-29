import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from './ui/sheet';
import { useState } from 'react';

export function Navbar() {
  const [isVersionHovered, setIsVersionHovered] = useState(false);

  return (
    <nav className="border-b bg-[#659287] sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Hamburger Menu + Logo */}
          <div className="flex items-center gap-4">
            {/* Hamburger Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <button 
                  className="text-[#FBF9D1] hover:bg-[#659287]/80 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 p-2 rounded-md"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-[#659287]">
                <SheetTitle className="text-[#FBF9D1] mb-2">Menu</SheetTitle>
                <SheetDescription className="text-[#FBF9D1]/80 mb-4">
                  Navigate to different sections
                </SheetDescription>
                <div className="flex flex-col gap-4 mt-8">
                  <div 
                    className="text-[#FBF9D1] hover:text-white py-3 px-4 rounded-lg hover:bg-[#659287]/80 transition-all cursor-pointer flex items-center justify-between group"
                    onMouseEnter={() => setIsVersionHovered(true)}
                    onMouseLeave={() => setIsVersionHovered(false)}
                  >
                    <span>Version</span>
                    <span className={`transition-all duration-200 ${isVersionHovered ? 'text-white scale-110' : 'text-[#FBF9D1]/60'}`}>
                      0.1
                    </span>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 bg-[#FBF9D1] rounded-lg flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                <span className="text-[#659287]">G1</span>
              </div>
              <span className="text-xl text-[#FBF9D1]">Career-G1</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
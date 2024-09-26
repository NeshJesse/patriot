"use client"
import { ArrowLeftCircle } from 'lucide-react';
import { useState } from 'react';

export default function TopNav () {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
      setIsCollapsed(!isCollapsed);
    };
  
    return(
    <>  
        <header class="bg-green-600 text-white py-4">
         <div class="w-[40rem] space-x-4 space-y-2 container flex  items-center">
            
            <button id="menu-toggle" class="menu-button">
               <ArrowLeftCircle/>
            </button>
            <br/>
            <nav id="menu-content" class=" md:flex">
                <ul class="flex flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <button>All</button>
                    <li><a href="#home" class="hover:underline">Arrested</a></li>
                    <li><a href="#services" class="hover:underline">Injured</a></li>
                    
                </ul>
            </nav>
         </div>
        </header>
         
    </>
    );

}

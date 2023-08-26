import { useEffect, useRef } from "react";
import { useState } from "react";

function Header() {
   const [links, setLinks] = useState(["Features", "Team", "SignIn"]);
   const headerRef = useRef(null);

   useEffect(() => {
      addEventListener("scroll", () => {
         if (window.scrollY > 100) {
            headerRef.current.style.background = "#0c1524";
            headerRef.current.style.padding = "20px 0 ";
         } else {
            headerRef.current.style.background = "transparent";
            headerRef.current.style.padding = "60px 0 ";
         }
      });
   }, []);

   return (
      <header
         className="pt-[60px] fixed top-0 left-0 w-full z-50 trasition-all duration-200"
         ref={headerRef}
      >
         <div className="container flex justify-between items-center gap-[30px] sm:gap-0 flex-col sm:flex-row">
            <a href="/">
               <img src="/src/assets/images/logo.svg" alt="logo-image" />
            </a>
            <nav>
               <ul className="flex items-center gap-[50px]">
                  {links.map((link) => {
                     return (
                        <li key={link}>
                           <a
                              href={`/${link.toLowerCase()}`}
                              className="text-white opacity-[0.9] hover:opacity[1] hover:underline transition-opacity duration-200"
                           >
                              {link}
                           </a>
                        </li>
                     );
                  })}
               </ul>
            </nav>
         </div>
      </header>
   );
}

export default Header;

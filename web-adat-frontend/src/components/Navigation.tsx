import { NavLink } from "react-router";
import { useState } from "react";
import {
  FaChartLine,
  FaClipboardCheck,
  FaRegBookmark,
  FaRegCircleCheck,
  FaServer,
  FaX,
  FaBars
} from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-600 shadow">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        
          <div className="hidden justify-between h-16 sm:ml-6 sm:flex sm:space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-white font-bold text-2xl flex gap-2 items-center ${isActive ? "underline" : "decoration-indigo-600"}`
              }
            >
              <FaClipboardCheck />
              Web & Adatbázis tesztelés
            </NavLink>
            <NavLink
              to="/manual"
              className={({ isActive }) =>
                `text-white text-xl flex gap-2 items-center ${isActive ? "underline" : "decoration-indigo-600"}`
              }
            >
              <FaRegBookmark />
              Használati útmutató
            </NavLink>
            <NavLink
              to="/backend-tests"
              className={({ isActive }) =>
                `text-white text-xl flex gap-2 items-center ${isActive ? "underline" : "decoration-indigo-600"}`
              }
            >
              <FaServer />
              Backend Tesztek
            </NavLink>
            <NavLink
              to="/frontend-tests"
              className={({ isActive }) =>
                `text-white text-xl flex gap-2 items-center ${isActive ? "underline" : "decoration-indigo-600"}`
              }
            >
              <FaRegCircleCheck />
              Frontend Tesztek
            </NavLink>
            <NavLink
              to="/performance-tests"
              className={({ isActive }) =>
                `text-white text-xl flex gap-2 items-center ${isActive ? "bg-neutral-800 p-3 rounded-3xl" : ""}`
              }
            >
              <FaChartLine />
              Adatbázis Teljesítménytesztek
            </NavLink>
          </div>
        </div>
        <div className="-mr-2 flex items-center sm:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <FaX className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <FaBars className="block h-6 w-6" aria-hidden="true" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="sm:hidden h-full">
              <div className="pt-2 py-20 h-full flex flex-col justify-evenly gap-5 scale-110 space-y-1">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-white text-2xl font-bold flex gap-2 items-center ${isActive ? "bg-neutral-800 p-3 rounded-3xl" : ""}`
                  }
                >
                  <FaClipboardCheck />
                  Web & Adatbázis tesztelés
                </NavLink>
                <NavLink
                  to="/manual"
                  className={({ isActive }) =>
                    `text-white text-xl flex gap-2 items-center ${isActive ? "bg-neutral-800 p-3 rounded-3xl" : ""}`
                  }
                >
                  <FaRegBookmark />
                  Használati útmutató
                </NavLink>
                <NavLink
                  to="/backend-tests"
                  className={({ isActive }) =>
                    `text-white text-xl flex gap-2 items-center ${isActive ? "bg-neutral-800 p-3 rounded-3xl" : ""}`
                  }
                >
                  <FaServer />
                  Backend Tesztek
                </NavLink>
                <NavLink
                  to="/frontend-tests"
                  className={({ isActive }) =>
                    `text-white text-xl flex gap-2 items-center ${isActive ? "bg-neutral-800 p-3 rounded-3xl" : ""}`
                  }
                >
                  <FaRegCircleCheck />
                  Frontend Tesztek
                </NavLink>
                <NavLink
                  to="/performance-tests"
                  className={({ isActive }) =>
                    `text-white text-xl flex gap-2 items-center ${isActive ? "bg-neutral-800 p-3 rounded-3xl" : ""}`
                  }
                >
                  <FaChartLine />
                  Adatbázis Teljesítménytesztek
                </NavLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>

    </nav>
  );
}

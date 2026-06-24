"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    title: "Services",
    href: "/solutions",
    description: "Our outdoor lighting design and installation services",
    items: [
      {
        title: "Exterior Lighting",
        href: "/solutions/exterior-lighting",
        description: "Architectural and facade lighting that elevates your home",
      },
      {
        title: "Landscape Lighting",
        href: "/solutions/landscape-lighting",
        description: "Path, garden, and accent lighting for your yard",
      },
      {
        title: "Deck & Patio Lighting",
        href: "/solutions/deck-patio-lighting",
        description: "Warm, inviting lighting for outdoor living spaces",
      },
      {
        title: "Underwater Lighting",
        href: "/solutions/underwater-lighting",
        description: "Pool, pond, and fountain lighting that dazzles",
      },
    ],
  },
  {
    title: "Resources",
    href: "/resources",
    items: [
      {
        title: "Blog",
        href: "/resources/blog",
        description: "Tips, inspiration, and outdoor lighting guides",
      },
      {
        title: "Support",
        href: "/resources/support",
        description: "Get help from our team",
      },
    ],
  },
  {
    title: "About",
    href: "/about",
  },
];

export function Topbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  // Prevent hydration mismatch by only rendering NavigationMenu after mount
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/20 dark:bg-black/20 backdrop-blur-md shadow-sm"
          : "bg-white dark:bg-black"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/bdoutdoors-logo.png"
                alt="BD Outdoor Lighting Logo"
                width={36}
                height={36}
                className="rounded-lg transition-transform group-hover:scale-105"
              />
              <span className="text-xl font-semibold text-gray-900 dark:text-white">
                BD Outdoor Lighting
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {isMounted && (
              <NavigationMenu viewport={true}>
                <NavigationMenuList>
                  {navigationItems.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      {item.items ? (
                        <>
                          <NavigationMenuTrigger>
                            {item.title}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[350px] gap-3 p-4 md:w-[400px] md:grid-cols-2">
                              {item.items.map((subItem) => (
                                <ListItem
                                  key={subItem.title}
                                  title={subItem.title}
                                  href={subItem.href}
                                >
                                  {subItem.description}
                                </ListItem>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <NavigationMenuLink asChild>
                          <Link 
                            href={item.href}
                            className={navigationMenuTriggerStyle()}
                          >
                            {item.title}
                          </Link>
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            )}

            {/* CTA Button */}
            <Link
              href="/get-started"
              className="ml-4 rounded-md bg-linear-to-br from-amber-600 to-amber-800 px-4 py-2 text-sm font-medium text-white transition-all hover:scale-105 hover:shadow-lg"
            >
              Free Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-black/95 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-1">
            {navigationItems.map((item) => (
              <div key={item.title}>
                {item.items ? (
                  <details className="group">
                    <summary className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 transition-colors">
                      {item.title}
                      <svg
                        className="h-5 w-5 transition-transform group-open:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </summary>
                    <div className="ml-4 mt-2 space-y-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white transition-colors"
                        >
                          <div className="font-medium">{subItem.title}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-500">
                            {subItem.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 transition-colors"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile Get Started */}
            <div className="mt-4 flex gap-2">
              <Link
                href="/get-started"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex-1 rounded-md bg-linear-to-br from-amber-600 to-amber-800 px-3 py-2 text-center text-base font-medium text-white transition-all hover:scale-105 hover:shadow-lg"
              >
                Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

import Link from "next/link"
import { Home, Clock, Dice5 } from "lucide-react"

export function NavBar() {
  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">VideoApp</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-primary text-sm font-medium"
              >
                <Home className="mr-2 h-4 w-4" />
                Home
              </Link>
              <Link
                href="/future"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                <Clock className="mr-2 h-4 w-4" />
                Future
              </Link>
              <Link
                href="/dicemilar"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                <Dice5 className="mr-2 h-4 w-4" />
                Dicemilar
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className="bg-primary/10 border-l-4 border-primary text-primary-foreground block pl-3 pr-4 py-2 text-base font-medium"
          >
            <div className="flex items-center">
              <Home className="mr-2 h-4 w-4" />
              Home
            </div>
          </Link>
          <Link
            href="/future"
            className="border-l-4 border-transparent hover:bg-muted hover:border-muted-foreground block pl-3 pr-4 py-2 text-base font-medium"
          >
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              Future
            </div>
          </Link>
          <Link
            href="/dicemilar"
            className="border-l-4 border-transparent hover:bg-muted hover:border-muted-foreground block pl-3 pr-4 py-2 text-base font-medium"
          >
            <div className="flex items-center">
              <Dice5 className="mr-2 h-4 w-4" />
              Dicemilar
            </div>
          </Link>
        </div>
      </div>
    </nav>
  )
}


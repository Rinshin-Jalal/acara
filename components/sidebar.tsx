"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { CalendarDays, LayoutDashboard } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="pb-12 border-r">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Admin Dashboard
          </h2>
          <div className="space-y-1">
            <Button
              asChild
              variant={pathname === "/admin" ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              <Link href="/admin">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
            </Button>
            <Button
              asChild
              variant={pathname === "/admin/events" ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              <Link href="/admin/events">
                <CalendarDays className="mr-2 h-4 w-4" />
                Events
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
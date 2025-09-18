"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <header className="flex items-center justify-between p-6 relative z-10 animate-in fade-in slide-in-from-top duration-1000">
      <div className="flex items-center gap-2 animate-in slide-in-from-left duration-700 delay-200">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden hover:bg-primary/10 "
        >
          <Menu className="h-5 w-5 text-primary" />
        </Button>
        <div className="text-primary text-xl font-bold animate-pulse hover:scale-110 transition-transform duration-300 cursor-pointer">
          ✿
        </div>
      </div>
      <Button
        variant="outline"
        className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-primary hover:from-primary/90 hover:to-accent/90 rounded-full px-6 animate-in slide-in-from-right duration-700 delay-300 hover:scale-105 transition-all shadow-lg hover:shadow-primary/25"
      >
        Contact
      </Button>
    </header>
  );
}

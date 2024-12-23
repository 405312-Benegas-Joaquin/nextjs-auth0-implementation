import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@components/ui/avatar";
import { ChevronDown, Settings, UserRound } from "lucide-react";
import Link from "next/link";
import { auth } from "../config/auth";

export default async function Navbar() {
  const session = await auth();

  if (!session?.user) {
    return null;
  }

  return (
    <div className="flex justify-end items-center py-3 px-10 bg-white dark:bg-gray-900 h-16 border-b border-gray-200 dark:border-gray-700">
      {/* User Profile Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 cursor-pointer focus:outline-none ">
          {/* Avatar */}
          <Avatar className="w-8 h-8">
            <AvatarImage src={session.user.image || ""} alt="User Avatar" />
            <AvatarFallback>{session.user.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          {/* Name and Icon */}
          <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
            {session.user.name}
          </span>
          <ChevronDown className="w-4 h-4 text-gray-800 dark:text-gray-100" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem asChild>
            <Link href="/profile" className="flex gap-3 cursor-pointer">
              <UserRound /> <p>Perfil</p>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/profile" className="flex gap-3 cursor-pointer">
              <Settings /> <p>Configuración</p>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

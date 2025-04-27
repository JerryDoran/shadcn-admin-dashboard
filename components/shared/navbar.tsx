import Link from 'next/link';
import { LogOut, Settings, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ThemeToggle } from '@/components/theme-toggle';
import { SidebarTrigger } from '@/components/ui/sidebar';

export default function Navbar() {
  return (
    <nav className='flex p-4 items-center justify-between'>
      {/* Left */}
      <SidebarTrigger />
      {/* Right */}
      <div className='flex items-center gap-4'>
        <Link href='/'>Dashboard</Link>
        <ThemeToggle />

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className='size-4 mr-1' />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className='size-4 mr-1' />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant='destructive'>
              <LogOut className='size-4 mr-1' />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

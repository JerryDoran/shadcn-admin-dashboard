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
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <nav className='flex p-3.5 items-center justify-between sticky top-0 bg-background/90 border-b border-border z-10 '>
      {/* Left */}
      <SidebarTrigger />
      {/* Right */}
      <div className='flex items-center gap-4'>
        <Link href='/' className='text-small'>
          <Button
            variant='outline'
            className='text-small uppercase cursor-pointer'
          >
            Dashboard
          </Button>
        </Link>
        <Link href='/payments' className='text-small'>
          <Button
            variant='outline'
            className='text-small uppercase cursor-pointer'
          >
            Payments
          </Button>
        </Link>
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
              <Link href='/users/jdoe' className='flex items-center gap-2'>
                <User className='size-4 mr-1' />
                Profile
              </Link>
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

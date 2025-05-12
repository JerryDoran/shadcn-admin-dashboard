'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import CardList from '@/components/shared/card-list';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { BadgeCheck, Candy, Citrus, Shield } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import EditUserForm from '@/components/edit-user-form';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import AppLineChart from '@/components/charts/app-line-chart';

export default function SingleUserPage() {
  const { username } = useParams(); // Extract the username from the URL

  const breadcrumbItems = [
    { label: 'Dashboard', href: '/' },
    { label: 'Users', href: '/users' },
    { label: username, href: null }, // Current page, no link
  ];

  return (
    <div className=''>
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {item.href ? (
                  <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      {/* Container */}
      <div className='mt-8 flex flex-col xl:flex-row gap-8'>
        {/* Left Side */}
        <div className='w-full xl:w-1/3 space-y-6 '>
          <div className='bg-primary-foreground p-4 rounded-lg'>
            <h2 className='text-lg font-medium mb-4'>User Badges</h2>
            <div className='flex gap-4 mt-4'>
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className='rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2'
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h2 className='font-bold mb-2'>Verified User</h2>
                  <p className='text-sm text-muted-foreground'>
                    This user is verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className='rounded-full bg-green-500/30 border-1 border-green-500/50 p-2'
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h2 className='font-bold mb-2'>Admin</h2>
                  <p className='text-sm text-muted-foreground'>
                    Admin users have full access to all the features of the
                    system.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className='rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2'
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h2 className='font-bold mb-2'>Awarded</h2>
                  <p className='text-sm text-muted-foreground'>
                    This user has received an award for their contributions.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className='rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2'
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h2 className='font-bold mb-2'>Popular</h2>
                  <p className='text-sm text-muted-foreground'>
                    This user has been popular in the community.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          <div className='bg-primary-foreground p-4 rounded-lg'>
            <div className='flex items-center justify-between'>
              <h2 className='text-lg font-medium'>User Information</h2>
              <Sheet>
                <SheetTrigger asChild>
                  <Button size='sm' className='cursor-pointer'>
                    Edit User
                  </Button>
                </SheetTrigger>
                <EditUserForm />
              </Sheet>
            </div>

            <div className='space-y-2 mt-4'>
              <div className='flex flex-col gap-2 mb-8'>
                <p className='text-sm text-muted-foreground'>
                  Profile Completion
                </p>
                <Progress value={66} />
              </div>
              <div className='flex items-center gap-2'>
                <span className='font-bold text-muted-foreground text-sm'>
                  Username:{' '}
                </span>
                <span className='text-muted-foreground text-sm'>john.doe</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='font-bold text-muted-foreground text-sm'>
                  Email:{' '}
                </span>
                <span className='text-muted-foreground text-sm'>
                  john.doe@example.com
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='font-bold text-muted-foreground text-sm'>
                  Phone:{' '}
                </span>
                <span className='text-muted-foreground text-sm'>
                  555-222-3333
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='font-bold text-muted-foreground text-sm'>
                  Location:{' '}
                </span>
                <span className='text-muted-foreground text-sm'>
                  New York, NY
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='font-bold text-muted-foreground text-sm'>
                  Role:{' '}
                </span>
                <Badge>Admin</Badge>
              </div>
            </div>
            <p className='text-xs text-muted-foreground mt-4'>
              Joined on 01.25.2025
            </p>
          </div>
          <div className='bg-primary-foreground p-4 rounded-lg'>
            <CardList title='Latest Transactions' />
          </div>
        </div>

        {/* Main Content */}
        <div className='w-full xl:w-2/3 space-y-6'>
          <div className='bg-primary-foreground p-4 rounded-lg space-y-2'>
            <div className='flex items-center gap-2'>
              <Avatar className='size-12'>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <h1 className='text-xl font-semibold'>John Doe</h1>
            </div>
            <p className='text-sm text-muted-foreground'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, nunc at bibendum facilisis, nunc nisl aliquet nunc, nec
              aliquet nunc nisl nec nunc.
            </p>
          </div>

          <div className='bg-primary-foreground p-4 rounded-lg space-y-4'>
            <h1 className='text-xl font-semibold'>User Analytics</h1>
            <AppLineChart />
          </div>
        </div>
      </div>
    </div>
  );
}

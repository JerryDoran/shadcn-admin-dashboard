'use client';

import { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { CalendarIcon } from 'lucide-react';

export default function TodoList() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <div className=''>
      {/* Calendar */}
      <h1 className='text-lg font-medium mb-4'>Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className='w-full justify-start text-left'>
            <CalendarIcon />
            {date ? date.toDateString() : <span>Select date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0'>
          <Calendar
            mode='single'
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>

      <ScrollArea className='max-h-[400px] mt-4 overflow-y-auto'>
        <div className='flex flex-col gap-2'>
          <Card className='p-4'>
            <div className='flex items-center gap-4'>
              <Checkbox id='item1' />
              <Label htmlFor='item1' className='text-sm text-muted-foreground'>
                Complete dashboard design
              </Label>
            </div>
          </Card>
          <Card className='p-4'>
            <div className='flex items-center gap-4'>
              <Checkbox id='item2' />
              <Label htmlFor='item2' className='text-sm text-muted-foreground'>
                Build landing page
              </Label>
            </div>
          </Card>
          <Card className='p-4'>
            <div className='flex items-center gap-4'>
              <Checkbox id='item3' />
              <Label htmlFor='item3' className='text-sm text-muted-foreground'>
                Database migration
              </Label>
            </div>
          </Card>
          <Card className='p-4'>
            <div className='flex items-center gap-4'>
              <Checkbox id='item4' />
              <Label htmlFor='item4' className='text-sm text-muted-foreground'>
                Complete server setup
              </Label>
            </div>
          </Card>
          <Card className='p-4'>
            <div className='flex items-center gap-4'>
              <Checkbox id='item5' />
              <Label htmlFor='item5' className='text-sm text-muted-foreground'>
                Design auth pages
              </Label>
            </div>
          </Card>
          <Card className='p-4'>
            <div className='flex items-center gap-4'>
              <Checkbox id='item6' />
              <Label htmlFor='item6' className='text-sm text-muted-foreground'>
                Implement admin panel
              </Label>
            </div>
          </Card>
          <Card className='p-4'>
            <div className='flex items-center gap-4'>
              <Checkbox id='item7' />
              <Label htmlFor='item7' className='text-sm text-muted-foreground'>
                Setup CI/CD
              </Label>
            </div>
          </Card>
          <Card className='p-4'>
            <div className='flex items-center gap-4'>
              <Checkbox id='item8' />
              <Label htmlFor='item8' className='text-sm text-muted-foreground'>
                Deploy to production
              </Label>
            </div>
          </Card>
          <Card className='p-4'>
            <div className='flex items-center gap-4'>
              <Checkbox id='item9' />
              <Label htmlFor='item9' className='text-sm text-muted-foreground'>
                Write documentation
              </Label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
}

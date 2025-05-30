import AppAreaChart from '@/components/charts/app-area-chart';
import AppBarChart from '@/components/charts/app-bar-chart';
import AppPieChart from '@/components/charts/app-pie-chart';
import CardList from '@/components/shared/card-list';
import TodoList from '@/components/shared/todo-list';

export default function Home() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 mb-4'>
      <div className='bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2'>
        <AppBarChart />
      </div>
      <div className='bg-primary-foreground p-4 rounded-lg'>
        <CardList title='Latest Transactions' />
      </div>
      <div className='bg-primary-foreground p-4 rounded-lg'>
        <AppPieChart />
      </div>
      <div className='bg-primary-foreground p-4 rounded-lg'>
        <TodoList />
      </div>
      <div className='bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2'>
        <AppAreaChart />
      </div>
      <div className='bg-primary-foreground p-4 rounded-lg'>
        <CardList title='Popular Content' />
      </div>
    </div>
  );
}

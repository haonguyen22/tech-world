import AllProduct from '@/app/components/admin/AllProduct';

export const metadata = {
    title: 'Admin site | TechWorld',
    icons: '/images/logo.png',
};

export default function Page() {
    return (
        <div className='w-full'>
            {/* @ts-expect-error Server Component */}
            <AllProduct />
        </div>
    );
}

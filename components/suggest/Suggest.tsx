'use client';
import Button from '../widgets/button/Button';
import ListProduct from '../listProduct/ListProduct';
import Link from 'next/link';
import { useState } from 'react';

type Filter = {
    icon: string;
    name: string;
};

export default function Suggest({ filter }: { filter: Array<Filter> }) {
    const [curindex, setIndex] = useState(0);
    return (
        <div className='bg-transparent mb-10'>
            <p className='text-2xl mb-5 mt-5 ms-5 font-bold'>GỢI Ý HÔM NAY</p>
            <div className='flex justify-between mb-10'>
                {filter.map(({ icon, name }, index) => (
                    <div key=''>
                        <Link
                            href={''}
                            onClick={event => {
                                event.preventDefault();
                                setIndex(index);
                            }}
                        >
                            <div
                                className={
                                    'flex justify-center items-center ' +
                                    (curindex == index ? 'bg-amber-500 text-white' : 'bg-white ') +
                                    ' rounded-xl px-4 py-4 w-72 h-20'
                                }
                            >
                                <img src={icon} className='w-14 h-14'></img>
                                <p className='ms-4 text-lg'>{name}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            {/* TODO: Render product theo index */}
            <div className={curindex == 0 ? 'visible' : 'hidden'}>
                <ListProduct />
                <div className='m-0 p-0 flex justify-center'>
                    <Button className='w-32 bg-white'>Xem thêm &gt;</Button>
                </div>
            </div>
            <div className={curindex == 1 ? 'visible' : 'hidden'}>
                <ListProduct />
                <div className='m-0 p-0 flex justify-center'>
                    <Button className='w-32 bg-white'>Xem thêm &gt;</Button>
                </div>
            </div>
            <div className={curindex == 2 ? 'visible' : 'hidden'}>
                <ListProduct />
                <div className='m-0 p-0 flex justify-center'>
                    <Button className='w-32 bg-white'>Xem thêm &gt;</Button>
                </div>
            </div>
            <div className={curindex == 3 ? 'visible' : 'hidden'}>
                <ListProduct />
                <div className='m-0 p-0 flex justify-center'>
                    <Button className='w-32 bg-white'>Xem thêm &gt;</Button>
                </div>
            </div>
        </div>
    );
}
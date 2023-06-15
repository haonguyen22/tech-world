'use client';

import Image from 'next/image';
import React from 'react';
import Button from '../widgets/button/Button';
import Input from '../widgets/input/Input';
import Review from './Review';
import ListProduct from './ListProduct';
import { formatCurrency } from '@/utils/helper';
import { FullProduct } from '@/models/product';

interface ProductDetailProps {
    product: FullProduct | null;
}

function ProductDetail({ product }: ProductDetailProps) {
    const [imgSelect, setImgSelect] = React.useState(1);

    return (
        <>
            <div className='p-4 bg-slate-50 flex flex-row'>
                <div className='flex flex-col '>
                    <div style={{ height: '500px' }} className='mb-4'>
                        <Image
                            src={
                                product?.attachments[imgSelect]?.path ??
                                'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png'
                            }
                            alt='Image'
                            className='mr-4 rounded-md'
                            width={400}
                            height={400}
                            quality={100}
                            style={{ width: '500px', height: '500px', objectFit: 'contain' }}
                        />
                    </div>
                    <div className='flex flex-row items-center justify-center mb-4'>
                        {product?.attachments?.map((attachment, index) => {
                            return (
                                <Image
                                    onClick={() => setImgSelect(index)}
                                    key={index}
                                    src={
                                        attachment?.path ??
                                        'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png'
                                    }
                                    alt='Image'
                                    width={80}
                                    height={80}
                                    quality={100}
                                    className='mr-4 rounded-md cursor-pointer'
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        objectFit: 'cover',
                                    }}
                                />
                            );
                        })}
                    </div>
                </div>

                <div className='flex-1 ml-8'>
                    <h2 className='font-semibold text-2xl tracking-wider '>{product?.name}</h2>
                    <div className='flex flex-row text-lg my-2'>
                        <span className='text-amber-600 font-bold text-base mr-2 border-amber-600 border-b'>
                            4.5
                        </span>
                        <div className='text-amber-500 w-28 flex flex-row justify-between'>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star'></i>
                        </div>
                        <span className='mx-4 font-sans text-gray-300 text-2xl relative -top-1'>
                            |
                        </span>
                        <p className='font-normal text-lg text-gray-500'>
                            <span className='text-black font-semibold text-xl mr-2 border-black border-b'>
                                22k
                            </span>
                            Đánh giá
                        </p>
                        <span className='mx-4 font-sans text-gray-300 text-2xl relative -top-1'>
                            |
                        </span>
                        <p className='font-normal text-lg text-gray-500'>
                            <span className='text-black font-semibold text-xl mr-2'>
                                {product?.sold}
                            </span>
                            Đã bán
                        </p>
                    </div>
                    <div className='p-6 flex flex-row bg-gray-100 items-center'>
                        <div className='line-through text-gray-500 text-lg mr-6'>
                            {product?.price != null &&
                                formatCurrency(product?.price * (1 + product?.sale))}
                        </div>
                        <div className='text-amber-600 text-3xl font-semibold mr-6'>
                            {formatCurrency(product?.price || 0)}
                        </div>
                        <div className='inline-block bg-amber-500 text-white text-sm rounded-sm uppercase font-bold text-center px-1 py-0'>
                            {product?.sale != null && `${product?.sale * 100}% giảm`}
                        </div>
                    </div>
                    <div className='flex flex-row mt-12 items-center'>
                        <div className='text-lg text-gray-500 mr-12'>Số lượng</div>
                        <Button className=' bg-white text-base px-4 '>-</Button>
                        <Input
                            type='text'
                            className='w-12 text-center text-base px-4'
                            defaultValue='1'
                        />
                        <Button className=' bg-white text-base px-4 mr-6'>+</Button>
                        <div className='text-gray-600'>{product?.quantity} sản phâm có sẵn</div>
                    </div>
                    <div className='flex flex-row items-center mt-12'>
                        <Button className='border-amber-600 px-4 py-3 font-normal mr-8 flex flex-row items-center text-amber-800 bg-amber-100 hover:bg-amber-50'>
                            <i className='bi bi-cart-plus text-xl pr-2'></i>
                            <div className='text-xl'>Thêm Vào Giỏ Hàng</div>
                        </Button>
                        <Button className='border-amber-600 px-4 py-3 mr-8 flex flex-row items-center text-white bg-amber-600 hover:bg-amber-500'>
                            <div className='text-xl'>Mua Ngay</div>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Description */}
            <div className='p-4 bg-slate-50 mt-6'>
                <div className='w-full mb-5 bg-gray-100 uppercase text-xl tracking-wider font-medium px-2 py-4 '>
                    Mô tả sản phẩm
                </div>
                <ul className='px-6 pb-6'>{product?.description}</ul>
            </div>

            {/* Review */}
            <div className='p-4 bg-slate-50 mt-6'>
                <div className='w-full mb-5 bg-gray-100 uppercase text-xl tracking-wider font-medium px-2 py-4 '>
                    Đánh giá sản phẩm
                </div>
                <div className='flex flex-row px-5 py-8 border border-amber-300 bg-amber-50'>
                    <div className='flex flex-col items-center justify-center w-40 text-amber-600 text-xl font-medium'>
                        <div className='mb-5'>
                            <span className='tracking-wide text-3xl '>4.5</span> trên 5
                        </div>
                        <div className='flex flex-row w-32 items-center justify-between text-2xl'>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                        </div>
                    </div>
                    <div className='ml-8 '>
                        <Button className='bg-white text-xl mr-5 px-8 py-2 border border-amber-500 text-amber-500'>
                            Tất cả
                        </Button>
                        <Button className='bg-white text-xl mr-5 px-8 py-2'>5 sao</Button>
                        <Button className='bg-white text-xl mr-5 px-8 py-2'>4 sao</Button>
                        <Button className='bg-white text-xl mr-5 px-8 py-2'>3 sao</Button>
                        <Button className='bg-white text-xl mr-5 px-8 py-2'>2 sao</Button>
                        <Button className='bg-white text-xl mr-5 px-8 py-2'>1 sao</Button>
                    </div>
                </div>

                <Review />
                <Review />
                <Review />

                {/* Pagination */}
                <div className='flex flex-row items-center justify-end mt-4'>
                    <Button className=' bg-white px-4 py-2'>{'<'}</Button>
                    <h2 className='py-1 px-3 bg-amber-500 mx-2 rounded-lg'>1</h2>
                    <Button className=' bg-white px-4 py-2'>{'>'}</Button>
                </div>
            </div>

            {/* List item same categories */}

            <div className='flex flex-col my-12 '>
                <h2 className='font-medium uppercase text-lg tracking-wider mb-6 text-gray-500'>
                    Các sản phẩm cùng thể loại
                </h2>
                <ListProduct products={[]} />
            </div>
        </>
    );
}

export default ProductDetail;

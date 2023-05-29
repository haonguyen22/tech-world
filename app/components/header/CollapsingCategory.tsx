'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function CollapsingCategory() {
    const [isPhukienHovering, setIsPhukienHovering] = useState(false);

    const handleMouseOverPhuKien = () => {
        setIsPhukienHovering(true);
    };

    const handleMouseOutPhuKien = () => {
        setIsPhukienHovering(false);
    };
    return (
        <>
            <Link
                onMouseOver={handleMouseOverPhuKien}
                onMouseOut={handleMouseOutPhuKien}
                href='#'
                className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
            >
                <i className='bi bi-headphones' style={{ fontSize: 20 }}></i> Phụ kiện &#9660;
            </Link>
            {isPhukienHovering && (
                <div
                    className='absolute z-10 px-4 py-4 bg-white rounded-md'
                    onMouseOver={handleMouseOverPhuKien}
                    onMouseOut={handleMouseOutPhuKien}
                >
                    <div className='flex flex-row justify-around'>
                        <div className='flex flex-col mx-4'>
                            <Link href='#' className='font-bold'>
                                PHỤ KIỆN DI ĐỘNG
                            </Link>
                            <hr className='mt-1 mb-2'></hr>
                            <Link href='#' className='hover:text-amber-600'>
                                Pin, sạc dự phòng
                            </Link>
                            <Link href='#' className='hover:text-amber-600'>
                                Sạc, cáp
                            </Link>
                            <Link href='#' className='hover:text-amber-600'>
                                Ốp lưng điện thoại
                            </Link>
                            <Link href='#' className='hover:text-amber-600'>
                                Ốp lưng máy tính bảng
                            </Link>
                            <Link href='#' className='hover:text-amber-600'>
                                Miếng dán màn hình
                            </Link>
                            <Link href='#' className='hover:text-amber-600'>
                                Gậy chụp ảnh, Gimbal
                            </Link>
                            <Link href='#' className='hover:text-amber-600'>
                                Giá đỡ điện thoại
                            </Link>
                            <Link href='#' className='hover:text-amber-600'>
                                Đế, móc điện thoại
                            </Link>
                            <Link href='#' className='hover:text-amber-600'>
                                Túi chống nước
                            </Link>
                            <Link href='#' className='hover:text-amber-600'>
                                Túi đựng AirPods
                            </Link>
                            <Link href='#' className='hover:text-amber-600'>
                                AirTag, Vỏ bảo vệ AirTag
                            </Link>
                            <Link href='#' className='hover:text-amber-600'>
                                Phụ kiện Tablet
                            </Link>
                        </div>
                        <div className='flex flex-col mx-4'>
                            <Link href='#' className='font-bold'>
                                PHỤ KIỆN LAP TOP
                            </Link>
                            <hr className='mt-1 mb-2'></hr>
                            <Link href='#' className='hover:text-amber-600'>
                                Chuột, bàn phím
                            </Link>
                            <Link href='#' className='hover:text-amber-600'>
                                Thiết bị mạng
                            </Link>
                            <Link href='#' className='hover:text-amber-600'>
                                Balo, túi chống sốc
                            </Link>
                            <Link href='#' className='hover:text-amber-600'>
                                Giá đỡ laptop
                            </Link>
                            <Link href='#' className='hover:text-amber-600'>
                                Miếng dán màn hình
                            </Link>
                            <Link href='#' className='font-bold mt-2'>
                                THIẾT BỊ ÂM THANH
                            </Link>
                            <hr className='mt-1 mb-2'></hr>
                            <Link href='#' className='hover:text-amber-600'>
                                Tai nghe
                            </Link>
                            <Link href='#' className='hover:text-amber-600'>
                                Loa
                            </Link>
                            <Link href='#' className='hover:text-amber-600'>
                                Micro
                            </Link>
                        </div>
                        <div className='flex flex-col mx-4'>
                            <Link href='#' className='font-bold'>
                                THIẾT BỊ NHÀ THÔNG MINH
                            </Link>
                            <hr className='mt-1 mb-2'></hr>
                            <Link href='#' className='hover:text-amber-600'>
                                Khóa điện tử
                            </Link>
                            <Link href='#' className='hover:text-amber-600'>
                                Camera, webcam
                            </Link>
                            <Link href='#' className='hover:text-amber-600'>
                                Máy chiếu
                            </Link>
                            <Link href='#' className='hover:text-amber-600'>
                                TV Box
                            </Link>
                            <Link href='#' className='hover:text-amber-600'>
                                Ổ cắm, bóng đèn thông minh
                            </Link>
                            <Link href='#' className='font-bold mt-2'>
                                THIẾT BỊ LƯU TRỮ
                            </Link>
                            <hr className='mt-1 mb-2'></hr>
                            <Link href='#' className='hover:text-amber-600'>
                                Ổ cứng di động
                            </Link>
                            <Link href='#' className='hover:text-amber-600'>
                                Thẻ nhớ
                            </Link>
                            <Link href='#' className='hover:text-amber-600'>
                                USB
                            </Link>
                        </div>
                        <div className='flex flex-col mx-4'>
                            <Link href='#' className='font-bold'>
                                THƯƠNG HIỆU HÀNG ĐẦU
                            </Link>
                            <hr className='mt-1 mb-2'></hr>
                            <Link href='#' className='hover:text-amber-600'>
                                Apple
                            </Link>
                            <Link href='#' className='hover:text-amber-600'>
                                Samsung
                            </Link>
                            <Link href='#' className='hover:text-amber-600'>
                                Sony
                            </Link>
                            <Link href='#' className='hover:text-amber-600'>
                                JBL
                            </Link>
                            <Link href='#' className='hover:text-amber-600'>
                                Anker
                            </Link>
                            <Link href='#' className='font-bold mt-2'>
                                PHỤ KIỆN KHÁC
                            </Link>
                            <hr className='mt-1 mb-2'></hr>
                            <Link href='#' className='hover:text-amber-600'>
                                Phụ kiện ô tô
                            </Link>
                            <Link href='#' className='hover:text-amber-600'>
                                Máy tính cầm tay
                            </Link>
                            <Link href='#' className='hover:text-amber-600'>
                                Quạt mini
                            </Link>
                            <Link href='#' className='hover:text-amber-600'>
                                Pin tiểu
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
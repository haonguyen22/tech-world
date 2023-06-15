import React from 'react';
import Breadcrumbs from '@/app/components/widgets/breadcumbs/Breadcumbs';
import ProductDetail from '@/app/components/product/ProductDetail';
import { getProductById } from '@/models/product';

async function Page({ params: { id } }: { params: { id: string } }) {
    const product = await getProductById(id);

    return (
        <div className='flex flex-col'>
            <Breadcrumbs />
            {/* Quantity & Add cart & Buy */}
            {/* @ts-expect-error Server Component */}
            <ProductDetail product={product} />
        </div>
    );
}

export default Page;

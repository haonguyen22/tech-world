import React from 'react';
import Breadcrumbs from '@/app/components/widgets/breadcumbs/Breadcumbs';
import ProductDetail from '@/app/components/product/ProductDetail';
import { getProduct } from '../../../../models/product';


async function Page({ params: { id } }: { params: { id: string } }) {
    const product = await getProduct(id);
    console.log(product);

    return (
        <div className='flex flex-col'>
            <Breadcrumbs />
            {/* Quantity & Add cart & Buy */}
            <ProductDetail product={product} />
        </div>
    );
}

export default Page;

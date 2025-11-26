import React, { use } from 'react';

const DynamicProductPage = async({ params ,searchParams})=> {
  const {productId} = await params;
  const {ref} = await searchParams;
  console.log(ref)
    return (
        <div>
            <h1>This is Dynamic Product Page for Product ID: {productId}</h1>
            <h2>Referrer: {ref}</h2>
        </div>
    );
};

export default DynamicProductPage;
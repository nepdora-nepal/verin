"use client";

import React from 'react';
import { ProductGrid } from '@/components/product/ProductGrid';

export const PopularProducts: React.FC = () => {
    return (
        <ProductGrid
            title="The Essentials"
            subtitle="Our most coveted signatures. Timeless pieces that have become the foundation of every wardrobe."
            limit={4}
        />
    );
};

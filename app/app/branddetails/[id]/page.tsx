import { getspacificbrand } from '@/api/services/productapi';
import React from 'react'

export default async function Brandproduct({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const data = await getspacificbrand(id);
    console.log('brandproduct', data);

    return (
        <div>
            Brandproduct
        </div>
    )
}

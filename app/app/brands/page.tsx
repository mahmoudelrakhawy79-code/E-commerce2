'use client'
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import Brandcard from '../-componants/brandcard/brandcard';
import LoadingSpinner from '@/components/ui/loading-spinner';

export default function Brand() {
    const { data: branddata, isLoading } = useQuery({
        queryKey: ['getbrand'],
        queryFn: async () => {
            const response = await fetch(`/api/brands`)
            if (!response.ok) throw new Error('failed to fetch')
            return response.json();
        }
    })
    console.log('brandss', branddata?.data);

    return (
        <LoadingSpinner isLoading={isLoading}>
            <>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {branddata?.data.map((brand) => { return <Brandcard key={brand._id} brand={brand} /> })}
                </div>
            </>
        </LoadingSpinner>
    )
}

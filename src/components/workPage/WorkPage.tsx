import { Viewer, ViewerNav } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface PhotosDataType {
    id: number;
    title: string;
    url: string;
    alt: string;
    date: Date;
    tags: Tag[];
    publish: boolean;
}
enum Tag {
    Advertisement = " Advertisement",
    Celebs = "Celebs",
    Grooming = "Grooming",
    Kids = "Kids",
    Woman = "Woman",
}
interface WorkProps {
    id?: string,
    data: PhotosDataType[],
    path: string,
}

function calculateVari(type: string, data: PhotosDataType[]): string {
    const length = data.length;

    if (type === "a") {
        if (length <= 3) return '1';
        if (length === 4) return '2';
        if (length > 4 && length <= 7) return '3';
        if (length > 7 && length <= 10) return '4';
    } else if (type === "b") {
        if (length <= 2) return '1';
        if (length === 3) return '2';
        if (length === 4) return '3';
        if (length === 5) return '4';
        if (length > 5 && length <= 7) return '5';
        if (length > 7 && length <= 10) return '6';
    } else if (type === "c") {
        if (length <= 2) return '1';
        if (length > 2 && length <= 4) return '2';
        if (length === 5) return '3';
        if (length > 5 && length <= 7) return '4';
        if (length === 8) return '5';
        if (length === 9) return '6';
        if (length === 10) return '7';
        if (length === 11) return '8';
    } else if (type === "d") {
        if (length <= 2) return '1';
        if (length === 3) return '2';
        if (length === 4) return '3';
        if (length === 5) return '4';
        if (length > 5 && length <= 8) return '5';
        if (length === 9) return '6';
        if (length === 10) return '7';
    } else if (type === "e") {
        if (length <= 2) return '1';
        if (length === 3) return '2';
        if (length === 4) return '3';
        if (length > 4 && length <= 6) return '4';
        if (length > 6 && length <= 8) return '5';
        if (length === 9) return '6';
        if (length > 9 && length <= 11) return '7';
    }

    return '';
}

export const WorkPage = ({ id, data, path }: WorkProps) =>{

    const order = ['a', 'b', 'c', 'd', 'e', 'c', 'd', 'b', 'c', 'e', 'd', 'b', 'c', 'd', 'e', 'a',
        'b', 'e', 'c', 'b', 'd', 'c', 'a', 'd', 'b', 'c', 'a', 'e', 'd', 'c', 'a', 'b',
        'c', 'e', 'b', 'a', 'c', 'd', 'b', 'c', 'e', 'b', 'c', 'd', 'a', 'c', 'b', 'e',
        'd', 'a', 'e', 'd', 'c', 'a', 'e', 'c', 'd', 'e', 'a', 'd', 'c', 'e', 'a', 'b',
        'c', 'd', 'e', 'b', 'd', 'e', 'a', 'd', 'b', 'a', 'e', 'd', 'c', 'e', 'b', 'a',
        'd', 'e', 'b', 'a', 'e', 'b', 'a', 'd', 'b', 'e', 'c', 'b', 'e', 'c', 'a', 'e',
        'c', 'a', 'd', 'e',
        'a', 'b', 'c', 'd', 'e', 'c', 'd', 'b', 'c', 'e', 'd', 'b', 'c', 'd', 'e', 'a',
        'b', 'e', 'c', 'b', 'd', 'c', 'a', 'd', 'b', 'c', 'a', 'e', 'd', 'c', 'a', 'b',
        'c', 'e', 'b', 'a', 'c', 'd', 'b', 'c', 'e', 'b', 'c', 'd', 'a', 'c', 'b', 'e',
        'd', 'a', 'e', 'd', 'c', 'a', 'e', 'c', 'd', 'e', 'a', 'd', 'c', 'e', 'a', 'b',
        'c', 'd', 'e', 'b', 'd', 'e', 'a', 'd', 'b', 'a', 'e', 'd', 'c', 'e', 'b', 'a',
        'd', 'e', 'b', 'a', 'e', 'b', 'a', 'd', 'b', 'e', 'c', 'b', 'e', 'c', 'a', 'e',
        'c', 'a', 'd', 'e']

    const sliced = []

    for (let i = 0; i < data.length; i += 12) {
        sliced.push(data.slice(i, i + 12));
    }



    return (
        <>
            <section className='work'>
                {data.length === 0 ? (
                    <p>No hay datos disponibles.</p>
                ) : (
                    <>
                        {sliced.map((item: PhotosDataType[], i: number) => (
                            <section className={`grid_${order[i]}${calculateVari(order[i], item)}`} key={i}>
                                <span className='cell' />
                                {item.map((item: PhotosDataType, ix: number) => (
                                    <Link href={path + '/' + item.id}
                                        scroll={false}
                                        className={`cell_${order[i]}_${ix} image visible bg-gray-700`} key={ix}>
                                        <Image
                                            src={item.url}
                                            alt={item.alt}
                                            width={1000}
                                            height={1000}
                                            quality={80}
                                            placeholder="blur"
                                        />
                                    </Link>

                                ))}
                            </section>
                        ))}
                    </>
                )}
            </section>
            {id &&
                <>
                    <Viewer id={id} data={data} path={path} />
                    <ViewerNav data={data} path={path} id={id} />
                </>
            }
        </>

    );
}

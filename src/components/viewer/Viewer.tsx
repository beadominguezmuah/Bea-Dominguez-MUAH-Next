'use client'
import Link from 'next/link'
import './photoViewer.scss'
import { IoIosArrowBack, IoIosArrowForward, IoIosClose } from "react-icons/io";
import { Button } from "@/components";
import Image from "next/image";

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
interface ViewerProps {
    data: PhotosDataType[],
    id: string,
    path: string,
}

export const Viewer = ({data, id, path}: ViewerProps) => {

    const allIds = data.map((obj: PhotosDataType) => ({ id: obj.id.toString() }));

    if (!id) {
        throw new Error("El parámetro 'id' es necesario para esta página.");
    }
    if (!allIds.some((item: {id: string}) => item.id.toString() == id)) {
        throw new Error("El parámetro 'id' no es un parametro válido");
    }



    //get the position of the id

    function findPositionById(index: { id: string }[], id: string): number {
        const result = index.findIndex(item => item.id === id)
        return result;
    }

    const objectPosition = findPositionById(allIds, id)    

    //next and back imgs
    const nextPosition = objectPosition + 1;
    const backPosition = objectPosition - 1;

    return (

        <section className="w-screen h-screen fixed top-0 z-20 flex justify-center items-center">
            <Link
                href={path}
                scroll={false}
                className='close' >
                <Button icon={<IoIosClose size={40} />} type="icon" />
            </Link>
            <section className='viewer z-10'>
                <main className='viewer_main'>
                    {objectPosition > 0 &&
                        <Link className='back'
                        href={`${path}/${allIds[backPosition].id}`}
                        scroll={false} >
                        <Button
                            icon={<IoIosArrowBack size={30} />} 
                            type="icon" />
                    </Link>}

                    <figure>
                        <Image className='img'
                            src={data[objectPosition].url}
                            alt={data[objectPosition].alt}
                            width={400}
                            height={600}
                            quality={80}
                            priority
                        />
                    </figure>
                    {objectPosition != (allIds.length - 1) &&
                        <Link className='next'
                        href={`${path}/${allIds[nextPosition].id}`}
                        scroll={false} >
                        <Button icon={<IoIosArrowForward size={30} />} type="icon" />
                        </Link>}
                </main>
            </section>
            <Link
                href={path}
                scroll={false}
                className='w-full h-full absolute top-0 bg-black bg-opacity-65'>
            </Link>
        </section>

    )
}

import { fetchAllPhotosData } from "@/api/allPhotosData";
import Work from "../page";
import Link from "next/link";
import { IoIosClose } from "react-icons/io";
import { Button, PhotoViewer } from "@/components";

interface PhotoId {
    id: string;
}
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

export async function generateStaticParams() {
    const allPhotosData = await fetchAllPhotosData();    
    
    return allPhotosData.map((obj: PhotoId) => ({ id: obj.id.toString() }));
}

export default async function WorkId({
    params,
}: {
    params: Promise<{ id: string }>; 
}) {
    const resolvedParams = await params; 
    const id = resolvedParams.id.toString(); 


//comprobar si id existe 

const allPhotosData = await fetchAllPhotosData(); 
const allIds = allPhotosData.map((obj: PhotosDataType) => ({ id: obj.id.toString() }));

    if (!id) {
        throw new Error("El parámetro 'id' es necesario para esta página.");
    }
    if (!allIds.some((item: PhotosDataType) => item.id.toString() === id)) {
        throw new Error("El parámetro 'id' no es un parametro válido");
    }


    const data = await fetchAllPhotosData(); 

    return (
        <>
            <Work />
            { id &&
                <section className="w-screen h-screen fixed top-0 z-20 flex justify-center items-center">
                <Link
                    href={'/work'}
                    scroll={false}
                    className='absolute top-12 right-1/4 z-20' >
                        <Button icon={<IoIosClose  size={30}  /> } type="icon"/>
                </Link>
                <PhotoViewer path="/work" id={id} data={data}/>
                <Link
                    href={'/work'}
                    scroll={false}
                    className='w-full h-full absolute top-0 bg-black bg-opacity-65'>
                </Link>
                </section>
            }
        </>
    );
}
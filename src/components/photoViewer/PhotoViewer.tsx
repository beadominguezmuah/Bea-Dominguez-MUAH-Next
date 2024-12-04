import React from 'react'
import './photoViewer.scss'
import Image from 'next/image';
import { Button } from '../button/Button';
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Link from 'next/link';

interface PhotoViewerProps {
    path: string;
    id: string;
    data: PhotosDataType[];
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

export const PhotoViewer = ({path, id, data}: PhotoViewerProps) => {  

//get the position of the id

const allIds = data.map((obj: PhotosDataType) => ({ id: obj.id.toString() }));



function findPositionById(index: { id: string }[], id: string): number {
    const result = index.findIndex(item => item.id === id)
    return result;
}

    const objectPosition = findPositionById(allIds, id)

//next and back imgs
const nextPosition = objectPosition + 1;
const backPosition = objectPosition - 1;

  return (
    <section className='viewer z-10'>
        <main className='viewer_main'>
            <Link className='back' 
                href={objectPosition > 0 ?
                    `${path}/${allIds[backPosition].id}`:
                    `${path}/${allIds[objectPosition].id}`
                } >
                <Button icon={<IoChevronBack  size={30}  /> } type="icon"/>
            </Link>
            
            <figure>{objectPosition > -1 && 
                <Image className='img'
                    src={data[objectPosition].url}
                    alt={data[objectPosition].alt}
                    width={400}
                    height={400}
                    quality={100}
                    />}
                </figure>
            <Link className='next'
                href={objectPosition == allIds.length ?
                    `${path}/${allIds[nextPosition].id}`:
                    `${path}/${allIds[objectPosition].id}`
                } >
                <Button icon={<IoChevronForward  size={30}  /> } type="icon"/>
            </Link>
        </main>
        {/* <nav className='viewer_nav' id='viewer_nav'>
            <button className='nav_back back' onClick={regress}>
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" ><path d="m142-480 294 294q15 15 14.5 35T435-116q-15 15-35 15t-35-15L57-423q-12-12-18-27t-6-30q0-15 6-30t18-27l308-308q15-15 35.5-14.5T436-844q15 15 15 35t-15 35L142-480Z"/></svg>
            </button>
            <div className='viewer_nav_div' style={navX > 0 ? { width: `${navX}px`, right: `${position}px` } : {}}>
                {data.map((item, i) => (
                <Link to={`${cleanedPath}/${item.id}`} 
                style={{ opacity: isVisible ? '1' : '0' }} 
                className={item.id == id ? 'focus' : ''} key={i} >
                    <img className='viewer_img' src={item.url} key={i}/>
                </Link>
                ))}
            </div>
            <button className='nav_next next' onClick={advance} >
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" ><path d="M579-480 285-774q-15-15-14.5-35.5T286-845q15-15 35.5-15t35.5 15l307 308q12 12 18 27t6 30q0 15-6 30t-18 27L356-115q-15 15-35 14.5T286-116q-15-15-15-35.5t15-35.5l293-293Z"/></svg>
            </button>
        </nav>
        <div className='viewer_back' ref={elementRef} /> */}
    </section>
)}

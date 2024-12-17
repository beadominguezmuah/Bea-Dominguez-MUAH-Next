'use client'

import Image from 'next/image';
import './viewerNav.scss'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Button } from '../button/Button';

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
interface viewerNavProps {
    data: PhotosDataType[],
    id: string,
    path: string,
}

export const ViewerNav = ({ data, path, id }: viewerNavProps) => {

    const [maxDx, setMaxDx] = useState(0)
    const [navX, setNavX] = useState(0)
    const [ΔX, setΔX] = useState(-30)
    const [viewportWidth, setViewportWidth] = useState(0);

    //get the position of the id

    const allIds = data.map((obj: PhotosDataType) => ({ id: obj.id.toString() }));

    function findPositionById(index: { id: string }[], id: string): number {
        const result = index.findIndex(item => item.id === id)
        return result;
    }

    const position = findPositionById(allIds, id)


    //ajustar a viewport

    useEffect(() => {
        const handleResize = () => setViewportWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        if (viewportWidth !== window.innerWidth) {
            setViewportWidth(window.innerWidth)
        } 

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    useEffect(() => {
        //   console.log(viewportWidth);
        setMaxDx(((45 * (data.length - ((viewportWidth * 0.8) / 45))) + 60))

    }, [viewportWidth, data.length])

    useEffect(() => {
        setNavX(data.length * 45 + 60)

        setMaxDx(((45 * (data.length - ((viewportWidth * 0.8) / 45))) + 60))
    }, [data, viewportWidth])

    //origin

    useEffect(() => {
        const oPosition = 45 * (Number(position) - ((viewportWidth * 0.8) / 45 / 2) + 1.3);
        
        if (oPosition > maxDx) {
            setΔX(maxDx)
        } else if (oPosition < 0) {
            setΔX(0)
        } else {
            setΔX(oPosition)
        }

    }, [maxDx, position, viewportWidth]);

    //advance & regress

    const advance = () => {
        // console.log('advance');
        // console.log(ΔX);

        if (ΔX < maxDx) {
            if (ΔX === maxDx) {
                setΔX(maxDx)
            } else if ((ΔX + 240) > (maxDx)) {
                setΔX(maxDx)
            } else {
                setΔX(ΔX + 240)
            }

        }
    }

    const regress = () => {

        if (ΔX > 0) {
            if (ΔX === -30) {
                setΔX(-30)
            } else if ((ΔX - 240) < -30) {
                setΔX(-30)
            } else {
                setΔX(ΔX - 240)
            }

        }
    }
    //opacity while charging

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(data.length > 5)
        }, 700);;
    }, [data.length]);



    return (
        <nav className={(navX > (viewportWidth * 0.8)) ? 'viewer_nav' : 'viewer_nav flex justify-center' } id='viewer_nav'>
            {(navX > (viewportWidth * 0.8)) ?
                <>
                    <button className='nav_back back' onClick={regress} >
                        <Button icon={<IoIosArrowBack size={30} />} type="icon" />
                    </button>
                    <div className='viewer_nav_div' style={navX > 0 ? { width: `${navX}px`, right: `${ΔX}px` } : {}} >
                        {data.map((item, i) => (
                            <Link href={`${path}/${item.id}`} key={i} className={(i == position) ? 'focus' : ''} scroll={false} >
                                <Image className='viewer_img'
                                    src={item.url}
                                    alt={item.alt}
                                    width={50}
                                    height={50}
                                    quality={20}
                                    style={{ opacity: isVisible ? '1' : '0' }}
                                />
                            </Link>
                        ))}
                    </div>
                    <button className='nav_next next' onClick={advance}  >
                        <Button icon={<IoIosArrowForward size={30} />} type="icon" />
                    </button>
                </> :
                <>
                    <div className='viewer_nav_div' style={navX > 0 ? { width: `${navX}px`} : {}} >
                        {data.map((item, i) => (
                            <Link href={`${path}/${item.id}`} key={i} className={(i == position) ? 'focus' : ''} scroll={false} >
                                <Image className='viewer_img'
                                    src={item.url}
                                    alt={item.alt}
                                    width={50}
                                    height={50}
                                    quality={20}
                                    style={{ opacity: isVisible ? '1' : '0' }}
                                />
                            </Link>
                        ))}
                    </div>
                </>
            }
        </nav>
    )
}

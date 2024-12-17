'use client'
import { useRouter } from 'next/navigation';
import './button.scss'

interface ButtonProps {
    icon: JSX.Element;
    type: string;
    route?: string;
}

export const Button = ({icon, type, route }: ButtonProps) => {
   
        //go to with shallow

        const router = useRouter()

        const goTo = (url: string) => {
            router.push(`${url}`)
        }

    switch(type){
        case 'icon':
            return (
                <span className={`button_${type}`}>
                    { icon }
                </span>   
            );

        case 'client':
            if(route){return(
                <button className={`button_${type}`} onClick={() => goTo(route)}>
                    { icon }
                </button> 
            )}


    }
  
}

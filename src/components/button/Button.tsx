'use client'
import { useRouter } from 'next/navigation';
import './button.scss'

interface ButtonProps {
    icon: JSX.Element;
    type: string;
    route?: string;
}

export const Button = ({icon, type, route }: ButtonProps) => {
    const router = useRouter();
    const goTo = (to: string) => {
        
        router.push(`${to}`);
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

import { useEffect, useState } from "react";



const useCheckMobile = () => {
    const [isMobile, setMobile] = useState(false);
    
    useEffect(() => {
        const updateSize = () => {
        setMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);
    
    return isMobile;
    }

export default useCheckMobile;
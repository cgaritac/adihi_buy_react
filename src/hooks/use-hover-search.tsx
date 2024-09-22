import { useState } from 'react';

export const useHoverSearch = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return {
        isHovered,
        handleMouseEnter,
        handleMouseLeave,
    };
};
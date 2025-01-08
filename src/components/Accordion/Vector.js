import React from 'react'

export const Vector = ({ fill, size }) => {
    return (
        <svg viewBox="0 0 24 24" fill={'none'} width={size || 24} height={size || 24} xmlns="http://www.w3.org/2000/svg">
            <path d="M23 12H1M12 23L12 1" stroke-width="2" stroke-linecap="round" stroke={fill || "#786F77"} />
        </svg>
    )
}






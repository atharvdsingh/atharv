import React from 'react';

export default function Youtube({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 256 256"
            className={className}
        >
            <path d="M234.33,69.52a24,24,0,0,0-16.85-16.85C198.67,48,128,48,128,48s-70.67,0-89.48,4.67A24,24,0,0,0,21.67,69.52C17,88.33,17,128,17,128s0,39.67,4.67,58.48a24,24,0,0,0,16.85,16.85C57.33,208,128,208,128,208s70.67,0,89.48-4.67a24,24,0,0,0,16.85-16.85C239,167.67,239,128,239,128S239,88.33,234.33,69.52ZM104,160V96l64,32Z"></path>
        </svg>
    );
}

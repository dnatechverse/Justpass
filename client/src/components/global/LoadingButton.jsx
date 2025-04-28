// src/components/LoadingButton.jsx
import React from 'react';

const LoadingButton = ({ loading, text, className, onClick, ...props }) => {
    return (
        <button
            type="submit"
            className={`flex items-center justify-center space-x-4 py-3 rounded-lg transition duration-200 ${loading ? 'cursor-not-allowed opacity-70' : ''} ${className}`}
            disabled={loading} onClick={onClick}
            {...props}
        >
            {loading ? (
                <div className="w-5 h-5 cursor-pointer border-t-white border-gray-500 rounded-full border-[3px] animate-spin"></div>
            ) : (
                <span>{text}</span>
            )}
        </button>
    );
};

export default LoadingButton;

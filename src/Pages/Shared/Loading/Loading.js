import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="spinner-border animate-spin inlineblock w-8 h-8 border">
                <span className="visually-hidden">...</span>
            </div>
        </div>
    );
};

export default Loading;
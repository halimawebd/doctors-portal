import React from 'react';

const Loading = () => {
    return (
        <div class="flex justify-center items-center">
            <div class="spinner-border animate-spin inlineblock w-8 h-8 border">
                <span class="visually-hidden">...</span>
            </div>
        </div>
    );
};

export default Loading;
import { SectionTitleProps } from '@/app/types'
import React from 'react'

const SectionText: React.FC<SectionTitleProps> = ({ label, className = '' }) => {
    return (
        <h5
            className={`sm:text-lg text-base font-medium text-gray-600 ${className}`}
        >
            {label}
        </h5>
    )
}

export default SectionText

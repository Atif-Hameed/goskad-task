import { SectionTitleProps } from '@/app/types'
import React from 'react'

const SectionHeading: React.FC<SectionTitleProps> = ({ label, className = '' }) => {
  return (
    <h1
      className={`sm:text-3xl text-2xl font-medium text-gray-900 ${className}`}
    >
      {label}
    </h1>
  )
}

export default SectionHeading;

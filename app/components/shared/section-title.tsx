import { SectionTitleProps } from '@/app/types'
import React from 'react'

const SectionTitle: React.FC<SectionTitleProps> = ({ label, className = '' }) => {
  return (
    <h5
      className={`sm:text-xl text-lg font-medium text-secondary ${className}`}
    >
      {label}
    </h5>
  )
}

export default SectionTitle

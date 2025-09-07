import { Amazon, Anthropic, Google, OpenAI } from '@/public/svgs'
import React from 'react'
import CustomLink from '../../shared/custom-link'

const Logos = () => {
    const logos = [
        { logo: OpenAI, label: 'openAi' },
        { logo: Amazon, label: 'Amazon' },
        { logo: Google, label: 'Google' },
        { logo: Anthropic, label: 'Anthropic' },
        { logo: OpenAI, label: 'openAi' },
        { logo: Amazon, label: 'Amazon' },
        { logo: Google, label: 'Google' },
        { logo: Anthropic, label: 'Anthropic' },
    ]

    return (
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 py-20">
            {logos.map((e, i) => {
                const LogoIcon = e.logo
                return (
                    <CustomLink href="#" key={i} ariaLabel={e.label} className="flex items-center">
                        <LogoIcon className="h-20 sm:w-48 w-44" />
                    </CustomLink>
                )
            })}
        </div>
    )
}

export default Logos

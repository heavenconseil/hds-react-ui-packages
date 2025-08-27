import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select'
import {Tooltip, TooltipContent, TooltipTrigger} from '@/components/ui/tooltip';
import React, {forwardRef} from 'react'
import CTA from "@/components/CTA/CTA";
import Picto from "@/components/Picto/Picto";

export interface Option {
    value: string
    label: string
    title?: string
    description?: string
    icon?: string
    img?: string
    disabled?: boolean
}

export interface SelectorProps {
    options: Option[]
    onChange: (value: string) => void
    value: string
    placeholder?: string
    className?: string
    label?: string
    name?: string
    variant?: 'default' | 'radio' | 'tab' | 'option'
    ctaVariant?: string
    displayMode?: 'standard' | 'text' | 'icon' | 'sans-label' | 'icon-only'
    expand?: boolean
    iconSize?: 'small' | 'medium' | 'large'
    labelPosition?: 'top' | 'left'
    showIcons?: boolean
}

const Selector = forwardRef<HTMLDivElement, SelectorProps>((
        {
            options,
            onChange,
            value,
            placeholder = 'Select an option',
            className = '',
            label,
            name,
            variant = 'default',
            ctaVariant,
            displayMode = 'standard',
            expand = false,
            labelPosition,
            showIcons = true,
        },
        ref) => {
        const translate = (value: string) => value

        const effectiveLabelPosition = labelPosition || (variant === 'radio' || variant === 'option' ? 'left' : 'top')

        if (variant === 'option' || variant === 'radio') {
            return (
                <div
                    className={`${
                        effectiveLabelPosition === 'left' ? 'flex flex-row items-center gap-4' : 'flex flex-col'
                    } ${className}`}
                >
                    <div
                        className="flex items-center justify-center gap-1.5 p-1.5 rounded-[11px]">
                        {label && (
                            <label
                                className={`ps-3 pe-6 h-fit text-black ${
                                    effectiveLabelPosition === 'left' ? 'text-sm font-medium' : 'mb-2 text-sm font-medium'
                                }`}
                            >
                                {translate(label)}
                            </label>
                        )}
                        {options.map((option) => {
                            let content: React.ReactNode
                            const dimensions = ''
                            let padding = ''
                            let startIcon = showIcons && option.icon ? option.icon : undefined

                            if (value === option.value) {
                                startIcon = showIcons && option.icon ? option.icon : undefined
                            }

                            if (option.disabled) {
                                startIcon = showIcons && option.icon ? option.icon : undefined
                            }

                            if (displayMode === 'standard') {
                                padding = 'px-3'
                                content = <span className="text-nowrap text-[14px] text-black">{translate(option.label)}</span>
                            } else if (displayMode === 'text') {
                                padding = 'px-4'
                                startIcon = undefined
                                content = <span className="text-[14px]">{translate(option.label)}</span>
                            } else if (displayMode === 'icon') {
                                padding = 'px-3'
                                content = null
                                startIcon = option.icon || 'portrait'
                            }

                            return (
                                <Tooltip key={option.value}>
                                    <TooltipTrigger asChild>
                                        <CTA
                                            variant={ctaVariant}
                                            size="small"
                                            onClick={() => !option.disabled && onChange(option.value)}
                                            className={`
                                        ${dimensions}
                                        ${padding}
                                    `}
                                            startIcon={startIcon}
                                            disabled={option.disabled}

                                        >
                                            {content}
                                        </CTA>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className="font-medium">{translate(option.label)}</p>
                                        {option.description && (
                                            <p className="text-sm mt-1">{translate(option.description)}</p>
                                        )}
                                    </TooltipContent>
                                </Tooltip>
                            )
                        })}
                    </div>
                </div>
            )
        }

        if (variant === 'tab') {
            return (
                <div
                    className={`${
                        effectiveLabelPosition === 'left' ? 'flex flex-row items-center gap-4' : 'flex flex-col'
                    } ${className}`}
                >
                    {label && (
                        <label
                            className={`${
                                effectiveLabelPosition === 'left'
                                    ? 'text-sm font-medium min-w-[120px]'
                                    : 'mb-2 text-sm font-medium'
                            }`}
                        >
                            {translate(label)}
                        </label>
                    )}
                    <div className="flex">
                        {options.map((option) => {
                            // let content: React.ReactNode
                            let dimensions = 'min-w-[120px] h-[45px]'
                            let padding = 'px-4'

                            if (displayMode === 'standard') {
                                // content = (
                                //     <div className="flex items-center gap-2">
                                //         {showIcons && option.icon && <Picto name={option.icon} size="medium" />}
                                //         <span className="text-nowrap font-medium">{translate(option.label)}</span>
                                //     </div>
                                // )
                            } else if (displayMode === 'sans-label') {
                                // content = <span className="font-medium">{translate(option.label)}</span>
                            } else if (displayMode === 'icon-only') {
                                dimensions = 'w-[45px] h-[45px]'
                                padding = 'p-0'
                                // content = <Picto name={option.icon || 'portrait'} size="medium" />
                            }

                            return (
                                <CTA
                                    key={option.value}
                                    size="small"
                                    onClick={() => !option.disabled && onChange(option.value)}
                                    className={`
                                        ${dimensions}
                                        ${padding}
                                    `}
                                    startIcon={option.icon}
                                    disabled={option.disabled}
                                >
                                    {translate(option.label)}
                                </CTA>
                            )

                            // let btnClassName = 'bg-background hover:bg-gray-100 text-foreground'
                            // if (value === option.value) {
                            //     btnClassName = 'bg-primitive-primary text-settings-button-reverse-text shadow-md'
                            // }
                            // if (option.disabled) {
                            //     btnClassName =
                            //         'text-settings-button-disabled-text border-primitive-secondary-layer-15 border-dashed cursor-not-allowed'
                            // }

                            // return (
                            //     <Tooltip key={option.value}>
                            //         <TooltipTrigger asChild>
                            //             <button
                            //                 onClick={() => !option.disabled && onChange(option.value)}
                            //                 className={`
                            //                     ${btnClassName}
                            //                     ${dimensions}
                            //                     ${padding}
                            //                     ${index === 0 ? 'rounded-l-md' : ''}
                            //                     ${index === options.length - 1 ? 'rounded-r-md' : ''}
                            //                     ${index > 0 ? 'border-l-0' : ''}
                            //                     border border-gray-200
                            //                     flex items-center justify-center
                            //                     transition-all
                            //                     focus:outline-none
                            //                     ${option.disabled ? '' : 'focus:ring-2 focus:ring-ring focus:ring-offset-1'}
                            //                     ${expand ? 'flex-1' : ''}
                            //                 `}
                            //                 disabled={option.disabled}
                            //             >
                            //                 {content}
                            //             </button>
                            //         </TooltipTrigger>
                            //         <TooltipContent>
                            //             <p className="font-medium">{translate(option.label)}</p>
                            //             {option.description && (
                            //                 <p className="text-sm mt-1">{translate(option.description)}</p>
                            //             )}
                            //         </TooltipContent>
                            //     </Tooltip>
                            // )
                        })}
                    </div>
                </div>
            )
        }

        return (
            <div
                className={`${
                    effectiveLabelPosition === 'left' ? 'flex flex-row items-center gap-4' : 'flex flex-col'
                } ${className}`}
            >
                {label && (
                    <label
                        className={`${
                            effectiveLabelPosition === 'left'
                                ? 'text-sm font-medium min-w-[120px]'
                                : 'mb-2 text-sm font-medium'
                        }`}
                    >
                        {translate(label)}
                    </label>
                )}
                <Select value={value} onValueChange={onChange} name={name}>
                    <SelectTrigger className={expand ? 'w-full' : 'w-[180px]'}>
                        <SelectValue placeholder={placeholder}/>
                    </SelectTrigger>
                    <SelectContent>
                        {options.map((option) => (
                            <SelectItem key={option.value} value={option.value} disabled={option.disabled}>
                            <span className="flex items-center gap-2 w-full text-text-reverse">
                                {showIcons && option.icon && <Picto name={option.icon} size="medium"/>}
                                {option.img && <img src={option.img} alt={option.label} width={100} height={100}/>}
                                {option.label}
                                {option.description && (
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <span className="ml-1 text-muted-foreground cursor-help">ⓘ</span>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{option.description}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                )}
                            </span>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        )
    }
)


export default Selector

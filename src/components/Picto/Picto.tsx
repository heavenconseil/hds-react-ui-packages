import React, { FC } from 'react'
import { cn } from '../../utils'
import {
    ArrowDownIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CheckIcon, CogIcon, ErrorIcon, EyeIcon, EyeSlashIcon, HeartIcon, HomeIcon, MagnifyingGlassIcon,
    MinusIcon, PlusIcon, SpinnerIcon, StarIcon, UserIcon,
    XMarkIcon
} from "@/components/Picto/PictoIcons";

type PictoComponent = React.FC<{ className?: string; strokeWidth?: string | number }>

export const PictoLib: Record<string, PictoComponent> = {
  check: CheckIcon,
  close: XMarkIcon,
  'arrow-left': ArrowLeftIcon,
  'arrow-right': ArrowRightIcon,
  'arrow-up': ArrowUpIcon,
  'arrow-down': ArrowDownIcon,
  eye: EyeIcon,
  'eye-off': EyeSlashIcon,
  heart: HeartIcon,
  star: StarIcon,
  home: HomeIcon,
  user: UserIcon,
  settings: CogIcon,
  search: MagnifyingGlassIcon,
  plus: PlusIcon,
  minus: MinusIcon,
  spinner: SpinnerIcon,
  error: ErrorIcon
}

export interface PictoProps {
  name: string
  className?: string
  size?: 'small' | 'medium' | 'large' | 'selecttabs'
}

export const sizeMap: Record<string, string> = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6',
    selecttabs: 'w-3 h-3'
}

export const Picto: FC<PictoProps> = ({ name, className = '', size = 'medium' }) => {
  const getPicto = () => {
    if (typeof name !== 'string') {
      const fallbackSizeClass = sizeMap[size] || sizeMap['medium']
      console.warn(`Picto name is not a string: ${name}. Rendering ErrorIcon.`)
      return <ErrorIcon className={cn(fallbackSizeClass, className)} />
    }

    const PictoComponent = PictoLib[name.toLowerCase()]
    const sizeClass = sizeMap[size] || sizeMap['medium']

    if (PictoComponent) {
      return <PictoComponent className={cn(sizeClass, className)} strokeWidth={2} />
    } else {
      console.warn(`Picto not found for name: ${name}. Rendering ErrorIcon.`)
      return <ErrorIcon className={cn(sizeClass, className)} />
    }
  }

  return getPicto()
}

export default Picto
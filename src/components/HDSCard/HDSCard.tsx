import * as React from 'react';
import { forwardRef } from 'react';
import { cn } from '@/utils';
import CTA from "@/components/CTA/CTA";

export interface HDSCardProps {
    title?: string;
    publishDate?: Date;
    image?: string;
    onClick?: () => void;
    className?: string;
    subtitle?: string;
    badgeLabel?: string;
    badgeIcon?: string;
    primaryButtonText?: string;
    secondaryButtonText?: string;
    onPrimaryClick?: () => void;
    onSecondaryClick?: (e: Event) => void;
    variant?: 'default' | 'small' | 'bento-left-large' | 'bento-right-large' | 'bento-top-large' | 'bento-equal';
    bgColor?: string;
    textColor?: string;
    primaryButtonVariant?: 'primary' | 'secondary' | 'outline';
    secondaryButtonVariant?: 'primary' | 'secondary' | 'outline';
    primaryButtonClassName?: string;
    secondaryButtonClassName?: string;
    primaryButtonStyle?: React.CSSProperties;
    secondaryButtonStyle?: React.CSSProperties;
    titlePosition?: 'above' | 'below' | 'overlay';
    backgroundImage?: string;
    overlayOpacity?: number;
    children?: React.ReactNode;
    customContent?: React.ReactNode;
    hideDefaultContent?: boolean;
    // Props spécifiques au Bento
    images?: { src: string; alt?: string }[];
    imageHeight?: number;
    onImageClick?: (index: number, image: { src: string; alt?: string }) => void;
}

const HDSImage = ({
    width,
    height,
    src,
    alt,
    className,
}: {
    width: number;
    height: number;
    src: string;
    alt?: string;
    className?: string;
}) => {
    if (!src) {
        return <div className={cn('rounded-xl bg-gray-200', className)} style={{ height, width }}></div>;
    }
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={cn('rounded-xl object-cover', className)}
            style={{ height, width }}
        />
    );
};

// Record des variants de HDSCard
const HDSCardVariants: Record<string, {
    padding: string;
    bentoLayout?: 'left-large' | 'right-large' | 'top-large' | 'equal';
    isBento: boolean;
}> = {
    'default': {
        padding: 'p-6',
        isBento: false
    },
    'small': {
        padding: 'p-3',
        isBento: false
    },
    'bento-left-large': {
        padding: 'p-6',
        bentoLayout: 'left-large',
        isBento: true
    },
    'bento-right-large': {
        padding: 'p-6',
        bentoLayout: 'right-large',
        isBento: true
    },
    'bento-top-large': {
        padding: 'p-6',
        bentoLayout: 'top-large',
        isBento: true
    },
    'bento-equal': {
        padding: 'p-6',
        bentoLayout: 'equal',
        isBento: true
    }
};

const HDSCard = forwardRef<HTMLDivElement, HDSCardProps>(
    (
        {
            title,
            subtitle,
            image,
            primaryButtonText,
            secondaryButtonText,
            variant = 'default',
            className,
            onClick,
            onPrimaryClick,
            onSecondaryClick,
            badgeIcon,
            badgeLabel,
            bgColor,
            textColor,
            primaryButtonVariant = 'primary',
            secondaryButtonVariant = 'secondary',
            primaryButtonClassName,
            secondaryButtonClassName,
            primaryButtonStyle,
            secondaryButtonStyle,
            titlePosition = 'below',
            backgroundImage,
            overlayOpacity = 0.4,
            children,
            customContent,
            hideDefaultContent = false,
            // Props Bento
            images,
            imageHeight = 200,
            onImageClick,
            ...props
        },
        ref
    ) => {
        const variantConfig = HDSCardVariants[variant] || HDSCardVariants.default;
        const isBentoVariant = variantConfig.isBento;

        const baseStyles = cn(
            'relative w-full overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow rounded-3xl',
            variantConfig.padding,
            titlePosition === 'overlay' && 'p-0',
            className
        );

        const cardStyle: React.CSSProperties = {
            backgroundColor: backgroundImage ? 'transparent' : (bgColor || '#f8f9fa'),
            color: textColor || '#000',
            ...(backgroundImage && {
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }),
        };

        const TitleContent = () => {
            if (!title && !subtitle) return null;
            
            return (
                <div className={cn(
                    'space-y-2',
                    titlePosition === 'overlay' && 'absolute bottom-0 left-0 right-0 z-20 p-6 text-white'
                )}>
                    {title && (
                        <h3 className={cn(
                            'font-bold leading-tight',
                            variant === 'small' ? 'text-lg' : 'text-2xl',
                            titlePosition === 'overlay' && 'text-white drop-shadow-lg'
                        )}>
                            {title}
                        </h3>
                    )}
                    
                    {subtitle && (
                        <p className={cn(
                            'opacity-80',
                            variant === 'small' ? 'text-sm' : 'text-base',
                            titlePosition === 'overlay' && 'text-white/90 drop-shadow'
                        )}>
                            {subtitle}
                        </p>
                    )}
                </div>
            );
        };

        const CustomContentArea = () => {
            if (!customContent) return null;
            
            return (
                <div className={cn(
                    'mt-4',
                    titlePosition === 'overlay' && 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full px-6'
                )}>
                    {customContent}
                </div>
            );
        };

        const ImageContent = () => {
            const imageElement = image || backgroundImage;
            if (!imageElement && titlePosition !== 'overlay') return null;
            
            return (
                <div className={cn(
                    'relative overflow-hidden',
                    titlePosition === 'below' && 'mb-4',
                    titlePosition === 'above' && 'mt-4',
                    titlePosition === 'overlay' && 'absolute inset-0'
                )}>
                    {image && titlePosition !== 'overlay' && (
                        <HDSImage 
                            width={variant === 'small' ? 200 : 400} 
                            height={variant === 'small' ? 120 : 200} 
                            src={image} 
                        />
                    )}
                    
                    {/* Overlay for background image */}
                    {titlePosition === 'overlay' && backgroundImage && (
                        <div 
                            className="absolute inset-0 bg-black/40" 
                            style={{ opacity: overlayOpacity }}
                        />
                    )}
                    
                    {/* Badge overlay */}
                    {badgeLabel && (
                        <div className="absolute top-3 left-3 z-10">
                            <div className="bg-black/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full flex items-center gap-2">
                                {badgeIcon && <span>{badgeIcon}</span>}
                                <span className="text-xs font-medium uppercase tracking-wide">
                                    {badgeLabel}
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            );
        };

        const ButtonsContent = () => {
            if (!primaryButtonText && !secondaryButtonText) return null;
            
            // Si seulement le bouton primaire existe, le centrer
            const hasOnlyPrimaryButton = primaryButtonText && !secondaryButtonText;
            
            return (
                <div className={cn(
                    'flex gap-2 mt-4',
                    variant === 'small' ? 'flex-col' : (hasOnlyPrimaryButton ? 'justify-center' : 'justify-between'),
                    titlePosition === 'overlay' && 'absolute bottom-6 right-6 z-20'
                )}>
                    {primaryButtonText && (
                        <CTA
                            onClick={(e) => {
                                e?.stopPropagation();
                                onPrimaryClick?.();
                            }}
                            className={cn(
                                "px-4 py-2 tex bg-black rounded-lg transition-colors font-medium",
                                primaryButtonClassName
                            )}
                            variant={primaryButtonVariant}
                            style={primaryButtonStyle}
                        >
                            {primaryButtonText}
                        </CTA>
                    )}
                    {secondaryButtonText && (
                        <CTA
                            onClick={(e) => {
                                e?.stopPropagation();
                                onSecondaryClick?.(e as any);
                            }}
                            variant={secondaryButtonVariant}
                            className={cn(
                                "px-4 py-2 border font-medium",
                                secondaryButtonClassName
                            )}
                            style={secondaryButtonStyle}
                        >
                            {secondaryButtonText}
                        </CTA>
                    )}
                </div>
            );
        };

        // Bento Grid Content
        const BentoContent = () => {
            if (!isBentoVariant || !images || images.length !== 3) return null;

            const getBentoLayout = () => {
                switch (variantConfig.bentoLayout) {
                    case 'left-large':
                        return {
                            container: 'grid grid-cols-2 grid-rows-2 gap-2 h-full',
                            image0: 'row-span-2',
                            image1: '',
                            image2: '',
                        };
                    case 'right-large':
                        return {
                            container: 'grid grid-cols-2 grid-rows-2 gap-2 h-full',
                            image0: 'col-start-1 row-start-1',
                            image1: 'col-start-1 row-start-2',
                            image2: 'col-start-2 row-start-1 row-span-2',
                        };
                    case 'top-large':
                        return {
                            container: 'grid grid-rows-2 gap-2 h-full',
                            image0: 'col-span-full',
                            image1: 'grid grid-cols-2 gap-2',
                            image2: '',
                        };
                    case 'equal':
                        return {
                            container: 'grid grid-cols-3 gap-2 h-full',
                            image0: '',
                            image1: '',
                            image2: '',
                        };
                    default:
                        return {
                            container: 'grid grid-cols-2 grid-rows-2 gap-2 h-full',
                            image0: 'row-span-2',
                            image1: '',
                            image2: '',
                        };
                }
            };

            const layoutClasses = getBentoLayout();

            const BentoImage = ({ image, index, className }: { 
                image: { src: string; alt?: string }; 
                index: number; 
                className?: string 
            }) => (
                <div 
                    className={cn('relative overflow-hidden rounded-lg cursor-pointer group', className)}
                    onClick={(e) => {
                        e.stopPropagation();
                        onImageClick?.(index, image);
                    }}
                >
                    <img
                        src={image.src}
                        alt={image.alt || `Image ${index + 1}`}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
            );

            return (
                <div className="relative overflow-hidden" style={{ height: imageHeight }}>
                    {variantConfig.bentoLayout === 'top-large' ? (
                        <div className={layoutClasses.container}>
                            <BentoImage 
                                image={images[0]} 
                                index={0} 
                                className={layoutClasses.image0}
                            />
                            <div className={layoutClasses.image1}>
                                <BentoImage 
                                    image={images[1]} 
                                    index={1} 
                                />
                                <BentoImage 
                                    image={images[2]} 
                                    index={2} 
                                />
                            </div>
                        </div>
                    ) : (
                        <div className={layoutClasses.container}>
                            <BentoImage 
                                image={images[0]} 
                                index={0} 
                                className={layoutClasses.image0}
                            />
                            <BentoImage 
                                image={images[1]} 
                                index={1} 
                                className={layoutClasses.image1}
                            />
                            <BentoImage 
                                image={images[2]} 
                                index={2} 
                                className={layoutClasses.image2}
                            />
                        </div>
                    )}
                </div>
            );
        };

        // Si hideDefaultContent est true, afficher seulement le contenu personnalisé
        if (hideDefaultContent) {
            return (
                <div
                    ref={ref}
                    className={baseStyles}
                    style={cardStyle}
                    onClick={onClick}
                    {...props}
                >
                    {children || customContent}
                </div>
            );
        }

        return (
            <div
                ref={ref}
                className={baseStyles}
                style={cardStyle}
                onClick={onClick}
                {...props}
            >
                {/* Title above image */}
                {titlePosition === 'above' && !hideDefaultContent && <TitleContent />}
                
                {/* Image content - Bento or regular */}
                {!hideDefaultContent && (isBentoVariant ? <BentoContent /> : <ImageContent />)}
                
                {/* Custom content area */}
                <CustomContentArea />
                
                {/* Title below image or overlay */}
                {(titlePosition === 'below' || titlePosition === 'overlay') && !hideDefaultContent && <TitleContent />}
                
                {/* Children content - inserted between title and buttons */}
                {children && (
                    <div className={cn(
                        'mt-4',
                        titlePosition === 'overlay' && 'absolute top-1/4 left-6 right-6 z-20'
                    )}>
                        {children}
                    </div>
                )}
                
                {/* Action buttons */}
                {!hideDefaultContent && (primaryButtonText || secondaryButtonText) && <ButtonsContent />}
            </div>
        );
    }
);

HDSCard.displayName = 'HDSCard';

export { HDSCard };
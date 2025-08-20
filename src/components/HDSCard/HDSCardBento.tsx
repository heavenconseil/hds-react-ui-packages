import * as React from 'react';
import { forwardRef } from 'react';
import { cn } from '@/utils';
import { HDSCard, HDSCardProps } from './HDSCard';

export interface ImageItem {
    src: string;
    alt?: string;
}

export interface HDSCardBentoProps extends Omit<HDSCardProps, 'image' | 'backgroundImage'> {
    images: [ImageItem, ImageItem, ImageItem];
    imageHeight?: number;
    imageWidth?: number;
    bentoClassName?: string;
    onImageClick?: (index: number, image: ImageItem) => void;
    showCaptions?: boolean;
    layout?: 'left-large' | 'right-large' | 'top-large' | 'equal';
}

const HDSCardBento = forwardRef<HTMLDivElement, HDSCardBentoProps>(
    (
        {
            images,
            imageHeight = 200,
            imageWidth,
            bentoClassName,
            onImageClick,
            showCaptions = true,
            layout = 'left-large',
            titlePosition = 'below',
            ...hdsCardProps
        },
        ref
    ) => {
        if (!images || images.length !== 3) {
            return <HDSCard ref={ref} titlePosition={titlePosition} {...hdsCardProps} />;
        }

        const handleImageClick = (index: number, image: ImageItem) => {
            onImageClick?.(index, image);
        };

        const getLayoutClasses = () => {
            switch (layout) {
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
                    return getLayoutClasses();
            }
        };

        const layoutClasses = getLayoutClasses();

        const BentoImage = ({ image, index, className }: { image: ImageItem; index: number; className?: string }) => (
            <div 
                className={cn('relative overflow-hidden rounded-lg cursor-pointer group', className)}
                onClick={(e) => {
                    e.stopPropagation();
                    handleImageClick(index, image);
                }}
            >
                <img
                    src={image.src}
                    alt={image.alt || `Image ${index + 1}`}
                    className="w-full h-full object-cover"
                />
            </div>
        );

        const BentoContent = () => (
            <div className={cn('relative overflow-hidden', bentoClassName)} style={{ height: imageHeight }}>
                {layout === 'top-large' ? (
                    <div className={layoutClasses.container}>
                        {/* Large image on top */}
                        <BentoImage 
                            image={images[0]} 
                            index={0} 
                            className={layoutClasses.image0}
                        />
                        {/* Container for bottom two images */}
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

        return (
            <HDSCard
                ref={ref}
                {...hdsCardProps}
                titlePosition={titlePosition}
                customContent={titlePosition === 'overlay' ? <BentoContent /> : undefined}
            >
                {titlePosition !== 'overlay' && <BentoContent />}
            </HDSCard>
        );
    }
);

HDSCardBento.displayName = 'HDSCardBento';

export { HDSCardBento };
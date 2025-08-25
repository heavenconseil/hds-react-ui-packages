import {forwardRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar, A11y, Thumbs, Autoplay, EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import CTA from "@/components/CTA/CTA";

export interface MediaItem {
    type: 'image' | 'video';
    src: string;
    alt?: string;
    title?: string;
    subtitle?: string;
    titleImg?: string;
    titleImgClassName?: string;
    ctaText?: string;
    ctaStartIcon?: string;
    ctaEndIcon?: string;
    ctaVariant?: string;
    poster?: string; // For video poster image
    autoplay?: boolean; // For video autoplay
    muted?: boolean; // For video muted state
    loop?: boolean; // For video loop
}

export interface HDSCarouselProps {
    items: MediaItem[];
    variant?: 'default' | 'bannerslider';
    className?: string;
    showNavigation?: boolean;
    showPagination?: boolean;
    showScrollbar?: boolean;
    autoplay?: boolean | {
        delay?: number;
        disableOnInteraction?: boolean;
    };
    spaceBetween?: number;
    slidesPerView?: number | 'auto';
    centeredSlides?: boolean;
    loop?: boolean;
    height?: string;
}

const HDSCarousel = forwardRef<HTMLDivElement, HDSCarouselProps>(
    (
        {
            items,
            variant = 'default',
            className = '',
            showNavigation = false,
            showPagination = true,
            showScrollbar = false,
            autoplay = true,
            spaceBetween = 24,
            slidesPerView = 1,
            centeredSlides = false,
            loop = false,
            height = ''
        },
        ref) => {


        const renderOverlay = (item: MediaItem) => {
            if (!(item.title || item.subtitle || item.ctaText)) return null;

            return (
                <div
                    className={`absolute inset-0 z-10 pointer-events-none flex items-end p-6 bg-gradient-to-t from-black/60 to-transparent ${variant === 'bannerslider' ? 'justify-center text-center' : 'justify-start'
                    }`}>
                    <div className="text-white">
                        {item.titleImg && (
                            <img className={item.titleImgClassName} src={item.titleImg}/>
                        )}
                        {item.title && (
                            <h3 className={`font-bold mb-2 ${variant === 'bannerslider' ? 'text-3xl md:text-5xl' : 'text-xl md:text-2xl'
                            }`}>
                                {item.title}
                            </h3>
                        )}
                        {item.subtitle && (
                            <p className={`mb-4 ${variant === 'bannerslider' ? 'text-lg md:text-xl' : 'text-base'
                            }`}>
                                {item.subtitle}
                            </p>
                        )}
                        {item.ctaText && (
                            <CTA
                                startIcon={item.ctaStartIcon}
                                endIcon={item.ctaEndIcon}
                                className={`inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors ${variant === 'bannerslider' ? 'text-lg' : 'text-base'
                                }`}>
                                {item.ctaText}
                            </CTA>
                        )}
                    </div>
                </div>
            );
        };

        const renderMediaContent = (item: MediaItem) => {
            if (item.type === 'video') {
                return (
                    <div className="relative w-full h-full overflow-hidden bg-red-200">
                        <video
                            src={item.src}
                            poster={item.poster}
                            autoPlay={item.autoplay}
                            muted={item.muted}
                            loop={item.loop}
                            playsInline
                            className="w-full h-full object-cover aspect-video"
                            style={{}}
                            aria-label={item.alt || item.title}
                        />
                        {renderOverlay(item)}
                    </div>
                );
            }

            return (
                <div className="relative w-full h-full">
                    <img
                        src={item.src}
                        alt={item.alt || item.title || 'Carousel image'}
                        className="w-full h-full object-cover"
                    />
                    {renderOverlay(item)}
                </div>
            );
        };

        // DELAY

        const autoplayConfig = autoplay ? (typeof autoplay === 'object' ? autoplay : {delay: 3000}) : false;
        const delay = autoplayConfig ? autoplayConfig.delay || 3000 : 3000;

        if (typeof window !== 'undefined') {
            document.documentElement.style.setProperty('--swiper-autoplay-delay', `${delay}ms`);
        }

        const swiperConfig = {
            modules: [Navigation, Pagination, Scrollbar, A11y, Thumbs, Autoplay, EffectFade],
            spaceBetween,
            slidesPerView,
            centeredSlides,
            loop,
            effect: 'fade',
            autoplay: autoplayConfig,
            navigation: showNavigation,
            pagination: showPagination ? {
                clickable: true,
                dynamicBullets: false,
            } : false,
            scrollbar: showScrollbar ? {draggable: true} : false,
            className: `hds-carousel hds-carousel--${variant} ${className}`.trim(),
            on: {
                slideChangeTransitionEnd: function() {
                    const activeBullet = document.querySelector('.swiper-pagination-bullet-active') as HTMLElement;
                    if (activeBullet) {
                        const clone = activeBullet.cloneNode(true) as HTMLElement;
                        activeBullet.parentNode?.replaceChild(clone, activeBullet);
                    }
                }
            }
        };

        return (
            <div
                ref={ref}
                className={`relative ${variant === 'bannerslider' ? 'w-full' : 'w-full mx-auto'
                }`}
                style={{height}}
            >
                <Swiper {...swiperConfig}>
                    {items.map((item, index) => (
                        <SwiperSlide key={index} className="flex items-center justify-center md:!h-[90vh] !h-[40vh]">
                            <div className="w-full h-full">
                                {renderMediaContent(item)}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        )
    }
);

HDSCarousel.displayName = 'HDSCarousel';

export {HDSCarousel};

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CTA from './components/CTA/CTA'
import {Picto} from './components/Picto/Picto'
import {HDSCard} from "@/components/HDSCard/HDSCard";

function App() {

    const bentoCard = {
        title: "Layout Right Large",
        subtitle: "Large image on the right",
        primaryButtonText: "Explore",
        variant: "bento-right-large" as const,
        imageHeight: 280,
        primaryButtonVariant: "primary" as const,
        images: [
            {
                src: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=200&h=140&fit=crop",
                alt: "Design"
            },
            {
                src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=200&h=140&fit=crop",
                alt: "Desert"
            },
            {
                src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=280&fit=crop",
                alt: "Photography"
            }
        ]
    }
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    HDS React UI Components
                </h1>

                <div className="space-y-8">
                    {/* Section CTA */}
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h2 className="text-xl font-semibold mb-4">CTA Component</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-sm font-medium text-gray-700 mb-3">Variants</h3>
                                <div className="flex flex-wrap gap-3">
                                    <CTA variant="primary">Primary</CTA>
                                    <CTA variant="secondary">Secondary</CTA>
                                    <CTA variant="outline">Outline</CTA>
                                    <CTA variant="ghost">Ghost</CTA>
                                    <CTA variant="destructive">Destructive</CTA>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-700 mb-3">Sizes</h3>
                                <div className="flex flex-wrap items-center gap-3">
                                    <CTA size="small">Small</CTA>
                                    <CTA size="medium">Medium</CTA>
                                    <CTA size="large">Large</CTA>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-700 mb-3">With Icons</h3>
                                <div className="flex flex-wrap gap-3">
                                    <CTA startIcon="arrow-right">Start Icon</CTA>
                                    <CTA endIcon="arrow-right">End Icon</CTA>
                                    <CTA startIcon="star" endIcon="arrow-right">Both Icons</CTA>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-700 mb-3">States</h3>
                                <div className="flex flex-wrap gap-3">
                                    <CTA>Normal</CTA>
                                    <CTA loading>Loading</CTA>
                                    <CTA disabled>Disabled</CTA>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-700 mb-3">Full Width</h3>
                                <CTA expand variant="primary">Full Width Button</CTA>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-700 mb-3">As Link</h3>
                                <CTA href="https://example.com" target="_blank" variant="outline">
                                    External Link
                                </CTA>
                            </div>
                        </div>
                    </div>

                    {/* Section Picto */}
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h2 className="text-xl font-semibold mb-4">Picto Component</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-sm font-medium text-gray-700 mb-3">Sizes</h3>
                                <div className="flex flex-wrap items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <Picto name="star" size="small"/>
                                        <span className="text-sm">Small</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Picto name="star" size="medium"/>
                                        <span className="text-sm">Medium</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Picto name="star" size="large"/>
                                        <span className="text-sm">Large</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-700 mb-3">Different Icons</h3>
                                <div className="flex flex-wrap gap-4">
                                    <Picto name="star"/>
                                    <Picto name="arrow-right"/>
                                    <Picto name="check"/>
                                    <Picto name="heart"/>
                                    <Picto name="home"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section HDSCard */}
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h2 className="text-xl font-semibold mb-4">HDSCard Component</h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-sm font-medium text-gray-700 mb-4">Basic Cards</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {/* Simple card */}
                                    <HDSCard
                                        title="Simple Card"
                                        subtitle="With image and buttons"
                                        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
                                        primaryButtonText="Action"
                                        secondaryButtonText="Share"
                                        titlePosition="below"
                                    />

                                    {/* Card with title above */}
                                    <HDSCard
                                        title="Title Above"
                                        subtitle="Different position"
                                        image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop"
                                        primaryButtonText="Explore"
                                        titlePosition="above"
                                        bgColor="#f0f9ff"
                                    />

                                    {/* Card with background image and overlay */}
                                    <HDSCard
                                        title="Overlay Mode"
                                        subtitle="Title overlaid on image"
                                        backgroundImage="https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=300&h=200&fit=crop"
                                        titlePosition="overlay"
                                        overlayOpacity={0.3}
                                    />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-700 mb-4">Centered Button (single
                                    button)</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <HDSCard
                                        title="Centered Button"
                                        subtitle="No secondary button"
                                        image="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=300&h=200&fit=crop"
                                        primaryButtonText="Single Action"
                                        titlePosition="below"
                                    />

                                    <HDSCard
                                        title="Custom Style"
                                        subtitle="Button with custom styling"
                                        image="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=300&h=200&fit=crop"
                                        primaryButtonText="Custom Button"
                                        primaryButtonClassName="bg-emerald-500 hover:bg-emerald-600"
                                        titlePosition="below"
                                    />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-700 mb-4">Cards without buttons</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <HDSCard
                                        title="No Button Card"
                                        subtitle="This card has no buttons - no empty space"
                                        image="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=300&h=200&fit=crop"
                                        titlePosition="below"
                                    />

                                    <HDSCard
                                        title="Content Only"
                                        subtitle="Clean layout without action buttons"
                                        image="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=300&h=200&fit=crop"
                                        titlePosition="below"
                                        bgColor="#f0fdf4"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section HDSCard Bento Variants */}
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h2 className="text-xl font-semibold mb-4">HDSCard Bento Variants</h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-sm font-medium text-gray-700 mb-4">Different Bento Layouts</h3>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                                    {/* Layout left-large */}
                                    <HDSCard
                                        variant="bento-left-large"
                                        title="Layout Left Large"
                                        subtitle="Large image on the left"
                                        primaryButtonText="View Collection"
                                        imageHeight={280}
                                        images={[
                                            {
                                                src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=280&fit=crop",
                                                alt: "Mountain at sunset"
                                            },
                                            {
                                                src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=140&fit=crop",
                                                alt: "Mysterious forest"
                                            },
                                            {
                                                src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=200&h=140&fit=crop",
                                                alt: "Peaceful lake"
                                            }
                                        ]}
                                    />

                                    {/* Layout right-large */}
                                    <HDSCard
                                        {...bentoCard}
                                    />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-700 mb-4">Other Layouts</h3>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                                    {/* Layout top-large */}
                                    <HDSCard
                                        variant="bento-top-large"
                                        title="Layout Top Large"
                                        subtitle="Large image on top"
                                        primaryButtonText="Discover"
                                        imageHeight={300}
                                        primaryButtonClassName="bg-purple-600 hover:bg-purple-700"
                                        images={[
                                            {
                                                src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop",
                                                alt: "Technology"
                                            },
                                            {
                                                src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=100&fit=crop",
                                                alt: "Modern art"
                                            },
                                            {
                                                src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=200&h=100&fit=crop",
                                                alt: "Creativity"
                                            }
                                        ]}
                                    />

                                    {/* Layout equal */}
                                    <HDSCard
                                        variant="bento-equal"
                                        title="Layout Equal"
                                        subtitle="Three equal images"
                                        primaryButtonText="View More"
                                        imageHeight={200}
                                        primaryButtonVariant="primary"
                                        images={[
                                            {
                                                src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=133&h=200&fit=crop",
                                                alt: "Nature 1"
                                            },
                                            {
                                                src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=133&h=200&fit=crop",
                                                alt: "Nature 2"
                                            },
                                            {
                                                src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=133&h=200&fit=crop",
                                                alt: "Nature 3"
                                            }
                                        ]}
                                    />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-700 mb-4">Bento with Callbacks and
                                    Styles</h3>
                                <div className="max-w-md mx-auto">
                                    <HDSCard
                                        variant="bento-left-large"
                                        title="Interactive Gallery"
                                        subtitle="Click on the images"
                                        primaryButtonText="Open Gallery"
                                        imageHeight={250}
                                        primaryButtonClassName="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                                        bgColor="#fef7ff"
                                        images={[
                                            {
                                                src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
                                                alt: "Main photo"
                                            },
                                            {
                                                src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=125&fit=crop",
                                                alt: "Photo 2"
                                            },
                                            {
                                                src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=200&h=125&fit=crop",
                                                alt: "Photo 3"
                                            }
                                        ]}
                                        onImageClick={(index, image) => {
                                            alert(`Image clicked: ${index + 1} - ${image.alt}`);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Combined Examples */}
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h2 className="text-xl font-semibold mb-4">Combined Examples</h2>

                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <CTA variant="primary" size="large" startIcon="star">
                                    Primary Action
                                </CTA>
                                <CTA variant="outline" size="large" endIcon="arrow-right">
                                    Secondary Action
                                </CTA>
                            </div>

                            <div className="flex gap-2">
                                <CTA variant="ghost" size="small" startIcon="heart">
                                    Like
                                </CTA>
                                <CTA variant="ghost" size="small" startIcon="check">
                                    Validated
                                </CTA>
                                <CTA variant="ghost" size="small" startIcon="home">
                                    Home
                                </CTA>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)

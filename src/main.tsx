import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CTA from './components/CTA/CTA'
import { Picto } from './components/Picto/Picto'

function App() {
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
                    <Picto name="star" size="small" />
                    <span className="text-sm">Small</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Picto name="star" size="medium" />
                    <span className="text-sm">Medium</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Picto name="star" size="large" />
                    <span className="text-sm">Large</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Different Icons</h3>
                <div className="flex flex-wrap gap-4">
                  <Picto name="star" />
                  <Picto name="arrow-right" />
                  <Picto name="check" />
                  <Picto name="heart" />
                  <Picto name="home" />
                </div>
              </div>
            </div>
          </div>

          {/* Examples combinés */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Examples Combinés</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CTA variant="primary" size="large" startIcon="star">
                  Action Principale
                </CTA>
                <CTA variant="outline" size="large" endIcon="arrow-right">
                  Action Secondaire
                </CTA>
              </div>
              
              <div className="flex gap-2">
                <CTA variant="ghost" size="small" startIcon="heart">
                  J'aime
                </CTA>
                <CTA variant="ghost" size="small" startIcon="check">
                  Validé
                </CTA>
                <CTA variant="ghost" size="small" startIcon="home">
                  Accueil
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
    <App />
  </React.StrictMode>,
)

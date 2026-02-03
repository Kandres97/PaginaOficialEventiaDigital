// src/App.jsx - VERSIÓN CORREGIDA

import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Importar configuración de rutas
import { getAllDemoRoutes, countries } from './config/routesConfig';

// Componentes de layout
import CountryRedirect from './components/CountryRedirect';
import SEO from './components/SEO';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import LoadingSpinner from './components/shared/LoadingSpinner';

// Componentes de HomePage
import Hero from './components/layout/Hero';
import Galeria from './components/layout/Galeria';
import Planes from './components/layout/Planes';
import Testimonios from './components/layout/Testimonios';
import ComoFunciona from './components/layout/ComoFunciona';
import PreguntasFrecuentes from './components/layout/PreguntasFrecuentes';
import Contacto from './components/layout/Contacto';

// Lazy loading de páginas de modelos
const Boda = lazy(() => import('./pages/Boda'));
const QuinceAnos = lazy(() => import('./pages/QuinceAnos'));
const BabyShower = lazy(() => import('./pages/BabyShower'));
const Cumpleanos = lazy(() => import('./pages/Cumpleanos'));
const Comunion = lazy(() => import('./pages/Comunion'));
const Egreso = lazy(() => import('./pages/Egreso'));
const Bautizo = lazy(() => import('./pages/Bautizo'));
const Empresarial = lazy(() => import('./pages/Empresarial'));

// Mapeo de páginas de modelos
const modelPages = {
  boda: Boda,
  '15anos': QuinceAnos,
  babyshower: BabyShower,
  cumpleanos: Cumpleanos,
  comunion: Comunion,
  egreso: Egreso,
  bautizo: Bautizo,
  empresarial: Empresarial
};

// Layout con Navbar y Footer
const LayoutWithNavbar = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

// HomePage
const HomePage = () => {
  const location = useLocation();
  const paisActual = location.pathname.startsWith('/es') ? 'es' : 'co';
  
  return (
    <>
      <SEO
        title="Invitaciones Digitales para Bodas, 15 Años y Eventos | Eventia Digital"
        description="Diseños elegantes de invitaciones digitales personalizadas para bodas, quinceañeras, baby showers, cumpleaños y eventos corporativos. Envío por WhatsApp, RSVP integrado y 100% eco-friendly. ¡Solicita tu cotización!"
        canonical={`https://eventiadigital.com/${paisActual}`}
      />
      
      <Hero />
      <Galeria />
      <Planes />
      <ComoFunciona />
      <Testimonios />
      <PreguntasFrecuentes />
      <Contacto />
    </>
  );
};

function App() {
  const demoRoutes = getAllDemoRoutes();

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner fullScreen />}>
          <Routes>
            {/* Ruta raíz */}
            <Route path="/" element={<CountryRedirect />} />

            {/* Rutas principales (HomePage) */}
            {countries.map((country) => (
              <Route
                key={`home-${country}`}
                path={`/${country}`}
                element={
                  <LayoutWithNavbar>
                    <HomePage />
                  </LayoutWithNavbar>
                }
              />
            ))}

            {/* Rutas de modelos */}
            {countries.map((country) =>
              Object.entries(modelPages).map(([eventType, PageComponent]) => {
                // Mapeo de eventType a URL slug
                const urlSlugMap = {
                  '15anos': '15-anos',
                  'babyshower': 'baby-shower'
                };
                
                const urlSlug = urlSlugMap[eventType] || eventType;
                
                return (
                  <Route
                    key={`modelo-${country}-${eventType}`}
                    path={`/${country}/modelo/${urlSlug}`}
                    element={
                      <LayoutWithNavbar>
                        <PageComponent />
                      </LayoutWithNavbar>
                    }
                  />
                );
              })
            )}

            {/* Rutas de demos */}
            {countries.map((country) =>
              demoRoutes.map((demo) => {
                const DemoComponent = lazy(demo.component);
                
                const basePath = demo.variant === 'classic' 
                  ? `/${country}/demo/classic/${demo.eventType}`
                  : `/${country}/demo/${demo.eventType}`;
                
                const fullPath = `${basePath}/${demo.slug}`;

                return (
                  <Route
                    key={`${country}-${demo.id}`}
                    path={fullPath}
                    element={<DemoComponent />}
                  />
                );
              })
            )}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
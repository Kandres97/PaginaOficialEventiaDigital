import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Importar detección de país
import CountryRedirect from './components/CountryRedirect';

// Importar SEO
import SEO from './components/SEO';

// Navbar y Footer (estos sí los dejamos normales porque siempre se usan)
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';

// Componentes principales (estos también porque están en la home)
import Hero from './components/Hero';
import Modelos from './components/Modelos';
import QueIncluyen from './components/QueIncluyen';
import Planes from './components/Planes';
import ComoEmpezar from './components/ComoEmpezar';
import PreguntasFrecuentes from './components/PreguntasFrecuentes';
import Contacto from './components/Contacto';

// ✅ LAZY LOADING - Páginas individuales (solo se cargan cuando se visitan)
const Boda = lazy(() => import('./pages/Boda'));
const QuinceAnos = lazy(() => import('./pages/QuinceAnos'));
const BabyShower = lazy(() => import('./pages/BabyShower'));
const Cumpleanos = lazy(() => import('./pages/Cumpleanos'));
const Comunion = lazy(() => import('./pages/Comunion'));
const Egreso = lazy(() => import('./pages/Egreso'));
const Bautizo = lazy(() => import('./pages/Bautizo'));
const Empresarial = lazy(() => import('./pages/Empresarial'));

// ✅ LAZY LOADING - Demos WEBSITE de BODA
const Boda1 = lazy(() => import('./demos/website/boda/Boda1'));
const Boda2 = lazy(() => import('./demos/website/boda/Boda2'));
const Boda3 = lazy(() => import('./demos/website/boda/Boda3'));
const Boda4 = lazy(() => import('./demos/website/boda/Boda4'));

// ✅ LAZY LOADING - Demos WEBSITE de 15 AÑOS
const Quince1 = lazy(() => import('./demos/website/15años/Quince1'));
const Quince2 = lazy(() => import('./demos/website/15años/Quince2'));
const Quince3 = lazy(() => import('./demos/website/15años/Quince3'));
const Quince4 = lazy(() => import('./demos/website/15años/Quince4'));

// ✅ LAZY LOADING - Demos WEBSITE de BABY SHOWER
const Baby1 = lazy(() => import('./demos/website/babyshower/Baby1'));
const Baby2 = lazy(() => import('./demos/website/babyshower/Baby2'));
const Baby3 = lazy(() => import('./demos/website/babyshower/Baby3'));
const Baby4 = lazy(() => import('./demos/website/babyshower/Baby4'));

// ✅ LAZY LOADING - Demos WEBSITE de CUMPLEAÑOS
const Cumple1 = lazy(() => import('./demos/website/cumpleanos/Cumple1'));
const Cumple2 = lazy(() => import('./demos/website/cumpleanos/Cumple2'));
const Cumple3 = lazy(() => import('./demos/website/cumpleanos/Cumple3'));
const Cumple4 = lazy(() => import('./demos/website/cumpleanos/Cumple4'));

// ✅ LAZY LOADING - Demos WEBSITE de COMUNIÓN
const Comunion1 = lazy(() => import('./demos/website/comunion/Comunion1'));
const Comunion2 = lazy(() => import('./demos/website/comunion/Comunion2'));
const Comunion3 = lazy(() => import('./demos/website/comunion/Comunion3'));
const Comunion4 = lazy(() => import('./demos/website/comunion/Comunion4'));

// ✅ LAZY LOADING - Demos WEBSITE de EGRESO
const Egreso1 = lazy(() => import('./demos/website/egreso/Egreso1'));
const Egreso2 = lazy(() => import('./demos/website/egreso/Egreso2'));
const Egreso3 = lazy(() => import('./demos/website/egreso/Egreso3'));
const Egreso4 = lazy(() => import('./demos/website/egreso/Egreso4'));

// ✅ LAZY LOADING - Demos WEBSITE de BAUTIZO
const Bautizo1 = lazy(() => import('./demos/website/bautizo/Bautizo1'));
const Bautizo2 = lazy(() => import('./demos/website/bautizo/Bautizo2'));
const Bautizo3 = lazy(() => import('./demos/website/bautizo/Bautizo3'));
const Bautizo4 = lazy(() => import('./demos/website/bautizo/Bautizo4'));

// ✅ LAZY LOADING - Demos WEBSITE de EMPRESARIAL
const Empresa1 = lazy(() => import('./demos/website/empresarial/Empresa1'));
const Empresa2 = lazy(() => import('./demos/website/empresarial/Empresa2'));
const Empresa3 = lazy(() => import('./demos/website/empresarial/Empresa3'));
const Empresa4 = lazy(() => import('./demos/website/empresarial/Empresa4'));

// ✅ LAZY LOADING - Demos CLASSIC de BODA
const ClassicBoda1 = lazy(() => import('./demos/Classic/Classicboda/ClassicBoda1'));
const ClassicBoda2 = lazy(() => import('./demos/Classic/Classicboda/ClassicBoda2'));
const ClassicBoda3 = lazy(() => import('./demos/Classic/Classicboda/ClassicBoda3'));
const ClassicBoda4 = lazy(() => import('./demos/Classic/Classicboda/ClassicBoda4'));

// ✅ LAZY LOADING - Demos CLASSIC de 15 AÑOS
const ClassicQuince1 = lazy(() => import('./demos/Classic/Classic15años/ClassicQuince1'));
const ClassicQuince2 = lazy(() => import('./demos/Classic/Classic15años/ClassicQuince2'));
const ClassicQuince3 = lazy(() => import('./demos/Classic/Classic15años/ClassicQuince3'));
const ClassicQuince4 = lazy(() => import('./demos/Classic/Classic15años/ClassicQuince4'));

// ✅ LAZY LOADING - Demos CLASSIC de BABY SHOWER
const ClassicBaby1 = lazy(() => import('./demos/Classic/Classicbabyshower/ClassicBaby1'));
const ClassicBaby2 = lazy(() => import('./demos/Classic/Classicbabyshower/ClassicBaby2'));
const ClassicBaby3 = lazy(() => import('./demos/Classic/Classicbabyshower/ClassicBaby3'));
const ClassicBaby4 = lazy(() => import('./demos/Classic/Classicbabyshower/ClassicBaby4'));

// ✅ LAZY LOADING - Demos CLASSIC de CUMPLEAÑOS
const ClassicCumple1 = lazy(() => import('./demos/Classic/Classiccumpleanos/ClassicCumple1'));
const ClassicCumple2 = lazy(() => import('./demos/Classic/Classiccumpleanos/ClassicCumple2'));
const ClassicCumple3 = lazy(() => import('./demos/Classic/Classiccumpleanos/ClassicCumple3'));
const ClassicCumple4 = lazy(() => import('./demos/Classic/Classiccumpleanos/ClassicCumple4'));

// ✅ LAZY LOADING - Demos CLASSIC de COMUNIÓN
const ClassicComunion1 = lazy(() => import('./demos/Classic/Classiccomunion/ClassicComunion1'));
const ClassicComunion2 = lazy(() => import('./demos/Classic/Classiccomunion/ClassicComunion2'));
const ClassicComunion3 = lazy(() => import('./demos/Classic/Classiccomunion/ClassicComunion3'));
const ClassicComunion4 = lazy(() => import('./demos/Classic/Classiccomunion/ClassicComunion4'));

// ✅ LAZY LOADING - Demos CLASSIC de EGRESO
const ClassicEgreso1 = lazy(() => import('./demos/Classic/Classicegreso/ClassicEgreso1'));
const ClassicEgreso2 = lazy(() => import('./demos/Classic/Classicegreso/ClassicEgreso2'));
const ClassicEgreso3 = lazy(() => import('./demos/Classic/Classicegreso/ClassicEgreso3'));
const ClassicEgreso4 = lazy(() => import('./demos/Classic/Classicegreso/ClassicEgreso4'));

// ✅ LAZY LOADING - Demos CLASSIC de BAUTIZO
const ClassicBautizo1 = lazy(() => import('./demos/Classic/Classicbautizo/ClassicBautizo1'));
const ClassicBautizo2 = lazy(() => import('./demos/Classic/Classicbautizo/ClassicBautizo2'));
const ClassicBautizo3 = lazy(() => import('./demos/Classic/Classicbautizo/ClassicBautizo3'));
const ClassicBautizo4 = lazy(() => import('./demos/Classic/Classicbautizo/ClassicBautizo4'));

// ✅ LAZY LOADING - Demos CLASSIC de EMPRESARIAL
const ClassicEmpresa1 = lazy(() => import('./demos/Classic/Classicempresarial/ClassicEmpresa1'));
const ClassicEmpresa2 = lazy(() => import('./demos/Classic/Classicempresarial/ClassicEmpresa2'));
const ClassicEmpresa3 = lazy(() => import('./demos/Classic/Classicempresarial/ClassicEmpresa3'));
const ClassicEmpresa4 = lazy(() => import('./demos/Classic/Classicempresarial/ClassicEmpresa4'));

// Componente de carga (mientras se carga la página)
const LoadingSpinner = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '100vh',
    fontSize: '1.2rem',
    color: '#d4a574'
  }}>
    Cargando...
  </div>
);

// Componente Layout para páginas CON navbar y footer
const LayoutWithNavbar = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

// Componente HomePage reutilizable
const HomePage = () => (
  <>
    <SEO
      title="Invitaciones Digitales para Bodas, 15 Años y Eventos | Eventia Digital"
      description="Diseños elegantes de invitaciones digitales personalizadas para bodas, quinceañeras, baby showers, cumpleaños y eventos corporativos. Envío por WhatsApp, RSVP integrado y 100% eco-friendly. ¡Solicita tu cotización!"
      canonical="https://eventiadigital.com/"
    />
    <Hero />
    <Modelos />
    <QueIncluyen />
    <Planes />
    <ComoEmpezar />
    <PreguntasFrecuentes />
    <Contacto />
  </>
);

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Ruta raíz con detección automática de país */}
            <Route path="/" element={<CountryRedirect />} />

            {/* Rutas principales con países */}
            <Route path="/co" element={<LayoutWithNavbar><HomePage /></LayoutWithNavbar>} />
            <Route path="/es" element={<LayoutWithNavbar><HomePage /></LayoutWithNavbar>} />

            {/* ============================================ */}
            {/* RUTAS DE MODELOS - COLOMBIA */}
            {/* ============================================ */}
            <Route path="/co/modelo/boda" element={<LayoutWithNavbar><Boda /></LayoutWithNavbar>} />
            <Route path="/co/modelo/15-anos" element={<LayoutWithNavbar><QuinceAnos /></LayoutWithNavbar>} />
            <Route path="/co/modelo/baby-shower" element={<LayoutWithNavbar><BabyShower /></LayoutWithNavbar>} />
            <Route path="/co/modelo/cumpleanos" element={<LayoutWithNavbar><Cumpleanos /></LayoutWithNavbar>} />
            <Route path="/co/modelo/comunion" element={<LayoutWithNavbar><Comunion /></LayoutWithNavbar>} />
            <Route path="/co/modelo/egreso" element={<LayoutWithNavbar><Egreso /></LayoutWithNavbar>} />
            <Route path="/co/modelo/bautizo" element={<LayoutWithNavbar><Bautizo /></LayoutWithNavbar>} />
            <Route path="/co/modelo/empresarial" element={<LayoutWithNavbar><Empresarial /></LayoutWithNavbar>} />

            {/* ============================================ */}
            {/* RUTAS DE MODELOS - ESPAÑA */}
            {/* ============================================ */}
            <Route path="/es/modelo/boda" element={<LayoutWithNavbar><Boda /></LayoutWithNavbar>} />
            <Route path="/es/modelo/15-anos" element={<LayoutWithNavbar><QuinceAnos /></LayoutWithNavbar>} />
            <Route path="/es/modelo/baby-shower" element={<LayoutWithNavbar><BabyShower /></LayoutWithNavbar>} />
            <Route path="/es/modelo/cumpleanos" element={<LayoutWithNavbar><Cumpleanos /></LayoutWithNavbar>} />
            <Route path="/es/modelo/comunion" element={<LayoutWithNavbar><Comunion /></LayoutWithNavbar>} />
            <Route path="/es/modelo/egreso" element={<LayoutWithNavbar><Egreso /></LayoutWithNavbar>} />
            <Route path="/es/modelo/bautizo" element={<LayoutWithNavbar><Bautizo /></LayoutWithNavbar>} />
            <Route path="/es/modelo/empresarial" element={<LayoutWithNavbar><Empresarial /></LayoutWithNavbar>} />

            {/* ============================================ */}
            {/* RUTAS DE DEMOS WEBSITE SIN NAVBAR/FOOTER - COLOMBIA */}
            {/* ============================================ */}
            
            {/* Demos Website Boda Colombia */}
            <Route path="/co/demo/boda/boda1" element={<Boda1 />} />
            <Route path="/co/demo/boda/primicia" element={<Boda2 />} />
            <Route path="/co/demo/boda/passport" element={<Boda3 />} />
            <Route path="/co/demo/boda/paradise" element={<Boda4 />} />
            
            {/* Demos Website 15 años Colombia */}
            <Route path="/co/demo/15anos/princess-dream" element={<Quince1 />} />
            <Route path="/co/demo/15anos/sweet-fifteen" element={<Quince2 />} />
            <Route path="/co/demo/15anos/royal-crown" element={<Quince3 />} />
            <Route path="/co/demo/15anos/magical-night" element={<Quince4 />} />
            
            {/* Demos Website Baby Shower Colombia */}
            <Route path="/co/demo/babyshower/sweet-baby" element={<Baby1 />} />
            <Route path="/co/demo/babyshower/little-star" element={<Baby2 />} />
            <Route path="/co/demo/babyshower/baby-love" element={<Baby3 />} />
            <Route path="/co/demo/babyshower/tiny-feet" element={<Baby4 />} />
            
            {/* Demos Website Cumpleaños Colombia */}
            <Route path="/co/demo/cumpleanos/party-time" element={<Cumple1 />} />
            <Route path="/co/demo/cumpleanos/celebration" element={<Cumple2 />} />
            <Route path="/co/demo/cumpleanos/birthday-bash" element={<Cumple3 />} />
            <Route path="/co/demo/cumpleanos/happy-day" element={<Cumple4 />} />
            
            {/* Demos Website Comunión Colombia */}
            <Route path="/co/demo/comunion/holy-light" element={<Comunion1 />} />
            <Route path="/co/demo/comunion/divine-grace" element={<Comunion2 />} />
            <Route path="/co/demo/comunion/sacred-day" element={<Comunion3 />} />
            <Route path="/co/demo/comunion/blessed-moment" element={<Comunion4 />} />
            
            {/* Demos Website Egreso Colombia */}
            <Route path="/co/demo/egreso/graduate-pride" element={<Egreso1 />} />
            <Route path="/co/demo/egreso/success-story" element={<Egreso2 />} />
            <Route path="/co/demo/egreso/achievement" element={<Egreso3 />} />
            <Route path="/co/demo/egreso/new-beginning" element={<Egreso4 />} />
            
            {/* Demos Website Bautizo Colombia */}
            <Route path="/co/demo/bautizo/blessed-dove" element={<Bautizo1 />} />
            <Route path="/co/demo/bautizo/holy-water" element={<Bautizo2 />} />
            <Route path="/co/demo/bautizo/angel-wings" element={<Bautizo3 />} />
            <Route path="/co/demo/bautizo/divine-love" element={<Bautizo4 />} />
            
            {/* Demos Website Empresarial Colombia */}
            <Route path="/co/demo/empresarial/corporate-elite" element={<Empresa1 />} />
            <Route path="/co/demo/empresarial/business-pro" element={<Empresa2 />} />
            <Route path="/co/demo/empresarial/executive" element={<Empresa3 />} />
            <Route path="/co/demo/empresarial/professional" element={<Empresa4 />} />

            {/* ============================================ */}
            {/* RUTAS DE DEMOS WEBSITE SIN NAVBAR/FOOTER - ESPAÑA */}
            {/* ============================================ */}
            
            {/* Demos Website Boda España */}
            <Route path="/es/demo/boda/boda1" element={<Boda1 />} />
            <Route path="/es/demo/boda/primicia" element={<Boda2 />} />
            <Route path="/es/demo/boda/passport" element={<Boda3 />} />
            <Route path="/es/demo/boda/paradise" element={<Boda4 />} />
            
            {/* Demos Website 15 años España */}
            <Route path="/es/demo/15anos/princess-dream" element={<Quince1 />} />
            <Route path="/es/demo/15anos/sweet-fifteen" element={<Quince2 />} />
            <Route path="/es/demo/15anos/royal-crown" element={<Quince3 />} />
            <Route path="/es/demo/15anos/magical-night" element={<Quince4 />} />
            
            {/* Demos Website Baby Shower España */}
            <Route path="/es/demo/babyshower/sweet-baby" element={<Baby1 />} />
            <Route path="/es/demo/babyshower/little-star" element={<Baby2 />} />
            <Route path="/es/demo/babyshower/baby-love" element={<Baby3 />} />
            <Route path="/es/demo/babyshower/tiny-feet" element={<Baby4 />} />
            
            {/* Demos Website Cumpleaños España */}
            <Route path="/es/demo/cumpleanos/party-time" element={<Cumple1 />} />
            <Route path="/es/demo/cumpleanos/celebration" element={<Cumple2 />} />
            <Route path="/es/demo/cumpleanos/birthday-bash" element={<Cumple3 />} />
            <Route path="/es/demo/cumpleanos/happy-day" element={<Cumple4 />} />
            
            {/* Demos Website Comunión España */}
            <Route path="/es/demo/comunion/holy-light" element={<Comunion1 />} />
            <Route path="/es/demo/comunion/divine-grace" element={<Comunion2 />} />
            <Route path="/es/demo/comunion/sacred-day" element={<Comunion3 />} />
            <Route path="/es/demo/comunion/blessed-moment" element={<Comunion4 />} />
            
            {/* Demos Website Egreso España */}
            <Route path="/es/demo/egreso/graduate-pride" element={<Egreso1 />} />
            <Route path="/es/demo/egreso/success-story" element={<Egreso2 />} />
            <Route path="/es/demo/egreso/achievement" element={<Egreso3 />} />
            <Route path="/es/demo/egreso/new-beginning" element={<Egreso4 />} />
            
            {/* Demos Website Bautizo España */}
            <Route path="/es/demo/bautizo/blessed-dove" element={<Bautizo1 />} />
            <Route path="/es/demo/bautizo/holy-water" element={<Bautizo2 />} />
            <Route path="/es/demo/bautizo/angel-wings" element={<Bautizo3 />} />
            <Route path="/es/demo/bautizo/divine-love" element={<Bautizo4 />} />
            
            {/* Demos Website Empresarial España */}
            <Route path="/es/demo/empresarial/corporate-elite" element={<Empresa1 />} />
            <Route path="/es/demo/empresarial/business-pro" element={<Empresa2 />} />
            <Route path="/es/demo/empresarial/executive" element={<Empresa3 />} />
            <Route path="/es/demo/empresarial/professional" element={<Empresa4 />} />

            {/* ============================================ */}
            {/* RUTAS DE DEMOS CLASSIC SIN NAVBAR/FOOTER - COLOMBIA */}
            {/* ============================================ */}
            
            {/* Demos Classic Boda Colombia */}
            <Route path="/co/demo/classic/boda/elegante" element={<ClassicBoda1 />} />
            <Route path="/co/demo/classic/boda/romantico" element={<ClassicBoda2 />} />
            <Route path="/co/demo/classic/boda/moderno" element={<ClassicBoda3 />} />
            <Route path="/co/demo/classic/boda/floral" element={<ClassicBoda4 />} />
            
            {/* Demos Classic 15 años Colombia */}
            <Route path="/co/demo/classic/15anos/elegante" element={<ClassicQuince1 />} />
            <Route path="/co/demo/classic/15anos/romantico" element={<ClassicQuince2 />} />
            <Route path="/co/demo/classic/15anos/moderno" element={<ClassicQuince3 />} />
            <Route path="/co/demo/classic/15anos/princess" element={<ClassicQuince4 />} />
            
            {/* Demos Classic Baby Shower Colombia */}
            <Route path="/co/demo/classic/babyshower/tierno" element={<ClassicBaby1 />} />
            <Route path="/co/demo/classic/babyshower/dulce" element={<ClassicBaby2 />} />
            <Route path="/co/demo/classic/babyshower/moderno" element={<ClassicBaby3 />} />
            <Route path="/co/demo/classic/babyshower/adorable" element={<ClassicBaby4 />} />
            
            {/* Demos Classic Cumpleaños Colombia */}
            <Route path="/co/demo/classic/cumpleanos/festivo" element={<ClassicCumple1 />} />
            <Route path="/co/demo/classic/cumpleanos/divertido" element={<ClassicCumple2 />} />
            <Route path="/co/demo/classic/cumpleanos/moderno" element={<ClassicCumple3 />} />
            <Route path="/co/demo/classic/cumpleanos/alegre" element={<ClassicCumple4 />} />
            
            {/* Demos Classic Comunión Colombia */}
            <Route path="/co/demo/classic/comunion/elegante" element={<ClassicComunion1 />} />
            <Route path="/co/demo/classic/comunion/religioso" element={<ClassicComunion2 />} />
            <Route path="/co/demo/classic/comunion/moderno" element={<ClassicComunion3 />} />
            <Route path="/co/demo/classic/comunion/espiritual" element={<ClassicComunion4 />} />
            
            {/* Demos Classic Egreso Colombia */}
            <Route path="/co/demo/classic/egreso/elegante" element={<ClassicEgreso1 />} />
            <Route path="/co/demo/classic/egreso/profesional" element={<ClassicEgreso2 />} />
            <Route path="/co/demo/classic/egreso/moderno" element={<ClassicEgreso3 />} />
            <Route path="/co/demo/classic/egreso/sobrio" element={<ClassicEgreso4 />} />
            
            {/* Demos Classic Bautizo Colombia */}
            <Route path="/co/demo/classic/bautizo/tierno" element={<ClassicBautizo1 />} />
            <Route path="/co/demo/classic/bautizo/religioso" element={<ClassicBautizo2 />} />
            <Route path="/co/demo/classic/bautizo/moderno" element={<ClassicBautizo3 />} />
            <Route path="/co/demo/classic/bautizo/espiritual" element={<ClassicBautizo4 />} />
            
            {/* Demos Classic Empresarial Colombia */}
            <Route path="/co/demo/classic/empresarial/corporativo" element={<ClassicEmpresa1 />} />
            <Route path="/co/demo/classic/empresarial/profesional" element={<ClassicEmpresa2 />} />
            <Route path="/co/demo/classic/empresarial/moderno" element={<ClassicEmpresa3 />} />
            <Route path="/co/demo/classic/empresarial/ejecutivo" element={<ClassicEmpresa4 />} />

            {/* ============================================ */}
            {/* RUTAS DE DEMOS CLASSIC SIN NAVBAR/FOOTER - ESPAÑA */}
            {/* ============================================ */}
            
            {/* Demos Classic Boda España */}
            <Route path="/es/demo/classic/boda/elegante" element={<ClassicBoda1 />} />
            <Route path="/es/demo/classic/boda/romantico" element={<ClassicBoda2 />} />
            <Route path="/es/demo/classic/boda/moderno" element={<ClassicBoda3 />} />
            <Route path="/es/demo/classic/boda/floral" element={<ClassicBoda4 />} />
            
            {/* Demos Classic 15 años España */}
            <Route path="/es/demo/classic/15anos/elegante" element={<ClassicQuince1 />} />
            <Route path="/es/demo/classic/15anos/romantico" element={<ClassicQuince2 />} />
            <Route path="/es/demo/classic/15anos/moderno" element={<ClassicQuince3 />} />
            <Route path="/es/demo/classic/15anos/princess" element={<ClassicQuince4 />} />
            
            {/* Demos Classic Baby Shower España */}
            <Route path="/es/demo/classic/babyshower/tierno" element={<ClassicBaby1 />} />
            <Route path="/es/demo/classic/babyshower/dulce" element={<ClassicBaby2 />} />
            <Route path="/es/demo/classic/babyshower/moderno" element={<ClassicBaby3 />} />
            <Route path="/es/demo/classic/babyshower/adorable" element={<ClassicBaby4 />} />
            
            {/* Demos Classic Cumpleaños España */}
            <Route path="/es/demo/classic/cumpleanos/festivo" element={<ClassicCumple1 />} />
            <Route path="/es/demo/classic/cumpleanos/divertido" element={<ClassicCumple2 />} />
            <Route path="/es/demo/classic/cumpleanos/moderno" element={<ClassicCumple3 />} />
            <Route path="/es/demo/classic/cumpleanos/alegre" element={<ClassicCumple4 />} />
            
            {/* Demos Classic Comunión España */}
            <Route path="/es/demo/classic/comunion/elegante" element={<ClassicComunion1 />} />
            <Route path="/es/demo/classic/comunion/religioso" element={<ClassicComunion2 />} />
            <Route path="/es/demo/classic/comunion/moderno" element={<ClassicComunion3 />} />
            <Route path="/es/demo/classic/comunion/espiritual" element={<ClassicComunion4 />} />
            
            {/* Demos Classic Egreso España */}
            <Route path="/es/demo/classic/egreso/elegante" element={<ClassicEgreso1 />} />
            <Route path="/es/demo/classic/egreso/profesional" element={<ClassicEgreso2 />} />
            <Route path="/es/demo/classic/egreso/moderno" element={<ClassicEgreso3 />} />
            <Route path="/es/demo/classic/egreso/sobrio" element={<ClassicEgreso4 />} />
            
            {/* Demos Classic Bautizo España */}
            <Route path="/es/demo/classic/bautizo/tierno" element={<ClassicBautizo1 />} />
            <Route path="/es/demo/classic/bautizo/religioso" element={<ClassicBautizo2 />} />
            <Route path="/es/demo/classic/bautizo/moderno" element={<ClassicBautizo3 />} />
            <Route path="/es/demo/classic/bautizo/espiritual" element={<ClassicBautizo4 />} />
            
            {/* Demos Classic Empresarial España */}
            <Route path="/es/demo/classic/empresarial/corporativo" element={<ClassicEmpresa1 />} />
            <Route path="/es/demo/classic/empresarial/profesional" element={<ClassicEmpresa2 />} />
            <Route path="/es/demo/classic/empresarial/moderno" element={<ClassicEmpresa3 />} />
            <Route path="/es/demo/classic/empresarial/ejecutivo" element={<ClassicEmpresa4 />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useLayoutEffect } from 'react';
import { Nav } from '@/components/site/Nav';
import { Footer } from '@/components/site/Footer';
import { ScrollProgress } from '@/components/site/ScrollProgress';
import { PageTransition } from '@/components/site/PageTransition';
import { StickyPhone } from '@/components/site/StickyPhone';
import Home from '@/pages/Home';
import Behandlinger from '@/pages/Behandlinger';
import Tannlegeskrekk from '@/pages/Tannlegeskrekk';
import Tannlegevakt from '@/pages/Tannlegevakt';
import Priser from '@/pages/Priser';
import Bestill from '@/pages/Bestill';
import OmOss from '@/pages/OmOss';
import Kontakt from '@/pages/Kontakt';

function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        }
      });
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash, key]);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return null;
}

function Layout({
  children,
  transparentNav = false,
}: {
  children: React.ReactNode;
  transparentNav?: boolean;
}) {
  return (
    <div className="bg-bg text-ink antialiased min-h-screen">
      <ScrollProgress />
      <Nav variant={transparentNav ? 'transparent' : 'solid'} />
      <main>
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <StickyPhone />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Layout transparentNav><Home /></Layout>} />
        <Route path="/behandlinger" element={<Layout><Behandlinger /></Layout>} />
        <Route path="/tannlegeskrekk" element={<Layout><Tannlegeskrekk /></Layout>} />
        <Route path="/tannlegevakt" element={<Layout><Tannlegevakt /></Layout>} />
        <Route path="/priser" element={<Layout><Priser /></Layout>} />
        <Route path="/bestill" element={<Layout><Bestill /></Layout>} />
        <Route path="/om-oss" element={<Layout><OmOss /></Layout>} />
        <Route path="/kontakt" element={<Layout><Kontakt /></Layout>} />
        <Route
          path="*"
          element={
            <Layout>
              <div className="min-h-screen flex items-center justify-center px-6 py-20">
                <div className="text-center max-w-md">
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink/50 mb-4">
                    404 — Ikke funnet
                  </p>
                  <h1 className="font-display text-display-md text-ink">
                    Siden finnes ikke.
                  </h1>
                  <a
                    href="/"
                    className="inline-block mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-ink hover:text-brand transition-colors"
                  >
                    ← Til forsiden
                  </a>
                </div>
              </div>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

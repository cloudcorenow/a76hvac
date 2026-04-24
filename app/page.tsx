'use client';

import { useState } from 'react';
import Nav from '@/components/Nav';
import HomePage from '@/components/HomePage';
import ServicesPage from '@/components/ServicesPage';
import ProjectsPage from '@/components/ProjectsPage';
import AboutPage from '@/components/AboutPage';
import ContactPage from '@/components/ContactPage';

type Page = 'home' | 'services' | 'projects' | 'about' | 'contact';

export default function Home() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  return (
    <>
      <Nav currentPage={currentPage} onNavigate={navigate} />
      <main style={{ paddingTop: 74 }}>
        {currentPage === 'home' && <HomePage onNavigate={navigate} />}
        {currentPage === 'services' && <ServicesPage onNavigate={navigate} />}
        {currentPage === 'projects' && <ProjectsPage onNavigate={navigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={navigate} />}
        {currentPage === 'contact' && <ContactPage onNavigate={navigate} />}
      </main>
    </>
  );
}

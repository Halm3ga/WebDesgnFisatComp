import React, { useState, useEffect } from 'react';
import {
  Search,
  Menu,
  X,
  GraduationCap,
  BookOpen,
  Award,
  Phone,
  Mail,
  MapPin,
  User,
  LogIn,
  ExternalLink,
  ChevronRight,
  Calendar,
  Building2,
  CheckCircle,
  FileText,
  Shield,
  Laptop,
  Dumbbell,
  Coffee,
  ArrowRight,
  Clock,
  Globe,
  Briefcase,
  Users,
  Lightbulb,
  BookMarked,
  Image as ImageIcon
} from 'lucide-react';

export default function App() {
  // State Management
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);
  const [selectedDeptModal, setSelectedDeptModal] = useState(null);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [programFilter, setProgramFilter] = useState('all');
  const [newsFilter, setNewsFilter] = useState('all');
  const [heroSlide, setHeroSlide] = useState(0);

  // Hero Carousel slides with real FISAT images
  const heroSlides = [
    {
      img: '/images/CFS-FISAT-BANNER-scaled_0sl8.jpg',
      title: 'FISAT Autonomous Campus',
      subtitle: 'Federal Institute of Science And Technology, Angamaly'
    },
    {
      img: '/images/IDEA-LAB-BANNER-scaled_0sl8.jpg',
      title: 'AICTE IDEA Lab Center of Excellence',
      subtitle: 'Advanced 3D Prototyping & Innovation Facility'
    },
    {
      img: '/images/DSC02156-scaled-e1707299276592_0sl8.jpg',
      title: 'State-of-the-Art Research Labs',
      subtitle: 'Empowering Next-Gen Engineers & Researchers'
    },
    {
      img: '/images/Golden-Standard_0sl8.png',
      title: 'NAAC Grade A & NBA Accredited',
      subtitle: 'Top Engineering Benchmark in Kerala'
    }
  ];

  // Auto rotate hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Form states
  const [loginData, setLoginData] = useState({ username: '', password: '', role: 'student' });
  const [admissionData, setAdmissionData] = useState({ name: '', email: '', phone: '', program: 'B.Tech CSE', mark: '' });
  const [submittedMsg, setSubmittedMsg] = useState('');

  // Department List Data with Real FISAT Images
  const departments = [
    {
      id: 'cse',
      name: 'Computer Science and Engineering',
      code: 'CSE',
      hod: 'Dr. Jyothish K. John',
      intake: '180 Seats',
      labs: '12 State-of-the-Art Labs',
      image: '/images/CSE-Banner-copy-scaled_0sl8.jpg',
      desc: 'Accredited by NBA. Offers specialized tracks in Artificial Intelligence, Machine Learning, Cyber Security, and Data Science.',
      highlights: ['TCS CoE Partner', 'ACM Student Chapter', 'High Compute Cluster']
    },
    {
      id: 'ece',
      name: 'Electronics and Communication Engineering',
      code: 'ECE',
      hod: 'Dr. Rijo Jackson Tom',
      intake: '120 Seats',
      labs: '9 Advanced Labs',
      image: '/images/DSC02156-scaled-e1707299276592_0sl8.jpg',
      desc: 'Focuses on VLSI design, Embedded Systems, Signal Processing, and IoT applications.',
      highlights: ['Robotics Innovation Lab', 'IEEE Signal Society', 'ISRO Project Collaborations']
    },
    {
      id: 'eee',
      name: 'Electrical and Electronics Engineering',
      code: 'EEE',
      hod: 'Dr. Archana R.',
      intake: '60 Seats',
      labs: '7 Power Systems Labs',
      image: '/images/eee-1_0sl8.jpg',
      desc: 'Spearheading research in Smart Grids, Electric Vehicle Technologies, and Renewable Energy Systems.',
      highlights: ['Solar Power Research Hub', 'France Connect Partner', 'Energy Audit Cell']
    },
    {
      id: 'me',
      name: 'Mechanical Engineering',
      code: 'ME',
      hod: 'Dr. Jose Cherian',
      intake: '90 Seats',
      labs: '10 Heavy Machinery Labs',
      image: '/images/ME-1-e1790583360376_0sl8.jpeg',
      desc: 'Covers Finite Element Analysis (ANSYS), Advanced CAD/CAM, Robotics, and Mechatronics.',
      highlights: ['AICTE IDEA Lab', 'SAE Collegiate Club', '3D Metal Printing Facility']
    },
    {
      id: 'ce',
      name: 'Civil Engineering',
      code: 'CE',
      hod: 'Dr. Unni Kartha G.',
      intake: '60 Seats',
      labs: '8 Testing & Survey Labs',
      image: '/images/Surveying-scaled-1_0sl8.jpg',
      desc: 'Excellence in Sustainable Materials, Structural Health Monitoring, and Geo-Informatics.',
      highlights: ['i-SMaRT Conference Host', 'NABL Accredited Testing', 'GIS & Remote Sensing Lab']
    },
    {
      id: 'eie',
      name: 'Electronics and Instrumentation Engineering',
      code: 'EIE',
      hod: 'Dr. Abi P. Mathew',
      intake: '60 Seats',
      labs: '6 Process Control Labs',
      image: '/images/EIE-COVER-PAGE-scaled_0sl8.png',
      desc: 'Specialized in Industrial Automation, Process Control Systems, Medical Electronics, and Sensors.',
      highlights: ['LabVIEW Centre of Excellence', 'Automation Guild', 'ISA Student Section']
    },
    {
      id: 'mba',
      name: 'Business Administration (FISAT Business School)',
      code: 'FBS',
      hod: 'Dr. Paul Ansel V.',
      intake: '120 Seats',
      labs: 'Analytics & Bloomberg Suite',
      image: '/images/industry_0sl8.jpg',
      desc: 'Dual specialization in Finance, HR, Marketing, Operations, and Business Analytics.',
      highlights: ['Top B-School Ranking', 'Management Fest Regalia', '100% Internship Record']
    },
    {
      id: 'mca',
      name: 'Computer Applications',
      code: 'MCA',
      hod: 'Dr. Deepa Mary Mathews',
      intake: '120 Seats',
      labs: 'Fullstack & Cloud Labs',
      image: '/images/mca1-scaled-e1658138621201_0sl8.jpeg',
      desc: 'Master of Computer Applications empowering software engineers, cloud architects, and fullstack developers.',
      highlights: ['AWS Cloud Academy', 'Hackathon Incubation', 'Software Consultancy Unit']
    },
    {
      id: 'sh',
      name: 'Science and Humanities',
      code: 'S&H',
      hod: 'Dr. Molly Joseph',
      intake: 'Supporting All Depts',
      labs: 'Language & Physics Labs',
      image: '/images/sh-banner-e1658151063916_0sl8.jpeg',
      desc: 'Provides foundation in Applied Mathematics, Engineering Physics, Chemistry, and Professional Communication.',
      highlights: ['Language Communication Suite', 'Applied Optics Lab', 'Environmental Ethics Cell']
    }
  ];

  // Academic Programs Data
  const programs = [
    { title: 'B.Tech Computer Science & Engineering', type: 'ug', duration: '4 Years', intake: '180', dept: 'CSE' },
    { title: 'B.Tech Electronics & Communication', type: 'ug', duration: '4 Years', intake: '120', dept: 'ECE' },
    { title: 'B.Tech Electrical & Electronics', type: 'ug', duration: '4 Years', intake: '60', dept: 'EEE' },
    { title: 'B.Tech Mechanical Engineering', type: 'ug', duration: '4 Years', intake: '90', dept: 'ME' },
    { title: 'B.Tech Civil Engineering', type: 'ug', duration: '4 Years', intake: '60', dept: 'CE' },
    { title: 'B.Tech Electronics & Instrumentation', type: 'ug', duration: '4 Years', intake: '60', dept: 'EIE' },
    { title: 'Master of Business Administration (MBA)', type: 'pg', duration: '2 Years', intake: '120', dept: 'FBS' },
    { title: 'Master of Computer Applications (MCA)', type: 'pg', duration: '2 Years', intake: '120', dept: 'MCA' },
    { title: 'M.Tech Computer Science & Information Security', type: 'pg', duration: '2 Years', intake: '18', dept: 'CSE' },
    { title: 'M.Tech VLSI & Embedded Systems', type: 'pg', duration: '2 Years', intake: '18', dept: 'ECE' },
    { title: 'M.Tech Renewable Energy Technology', type: 'pg', duration: '2 Years', intake: '18', dept: 'EEE' },
    { title: 'M.Tech Structural Engineering & Construction', type: 'pg', duration: '2 Years', intake: '24', dept: 'CE' },
    { title: 'Ph.D. Doctoral Research Programs', type: 'doctoral', duration: '3-5 Years', intake: 'Varies', dept: 'Research Cell' }
  ];

  // News & Events Data with Real FISAT Images
  const newsEvents = [
    {
      id: 1,
      title: 'Call for Papers – 4th International Conference on Sustainable Materials, Manufacturing & Renewable Tech (i-SMaRT 2026)',
      date: 'November 18, 2026',
      category: 'Conference',
      image: '/images/ME-Conference_0sl8.jpeg',
      desc: 'Inviting researchers and authors to submit original research papers in sustainable engineering and green technologies.'
    },
    {
      id: 2,
      title: 'Five-Day Hands-on Workshop on ANSYS FEA: From Design to Simulation',
      date: 'October 13, 2026',
      category: 'Workshop',
      image: '/images/23-sep-26-scaled_0sl8.png',
      desc: 'Organized by Department of Mechanical Engineering for students and industry professionals.'
    },
    {
      id: 3,
      title: 'Session on France Connect: Pathways to Higher Education, Scholarships & Research',
      date: 'September 30, 2026',
      category: 'International',
      image: '/images/Session-on-France-Connect-EEE-e1790668626452_0sl8.jpeg',
      desc: 'Interactive guidance session with Campus France delegates for European higher study aspirants.'
    },
    {
      id: 4,
      title: 'Introductory Masterclass on LinkedIn & Professional Networking',
      date: 'September 23, 2026',
      category: 'Career',
      image: '/images/Curricular_0sl8.jpg',
      desc: 'Placement Cell workshop for pre-final year students on building an impactful personal brand.'
    },
    {
      id: 5,
      title: 'IDEA Lab Granted New National Patent for Smart Agricultural Sensing Node',
      date: 'July 20, 2026',
      category: 'Innovation',
      image: '/images/WhatsApp-Image-2026-03-31-at-11.36.45-AM_0sl8.jpeg',
      desc: 'Interdisciplinary research team achieves milestone patent grant under AICTE IDEA Lab initiative.'
    }
  ];

  // Recruiter list
  const recruiters = ['TCS', 'Infosys', 'Wipro', 'Cognizant', 'IBM', 'Accenture', 'Amazon', 'Federal Bank', 'Bosch', 'UST', 'IBS Software', 'Mindtree'];

  // Handlers
  const handleAdmissionSubmit = (e) => {
    e.preventDefault();
    setSubmittedMsg(`Thank you ${admissionData.name}! Your admission inquiry for ${admissionData.program} has been logged. Our admissions counselor will contact you at ${admissionData.email}.`);
    setTimeout(() => {
      setSubmittedMsg('');
      setAdmissionModalOpen(false);
    }, 4000);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in as ${loginData.role.toUpperCase()}: ${loginData.username}`);
    setLoginModalOpen(false);
  };

  const filteredPrograms = programs.filter(p => {
    if (programFilter === 'all') return true;
    return p.type === programFilter;
  });

  const filteredNews = newsEvents.filter(n => {
    if (newsFilter === 'all') return true;
    return n.category.toLowerCase() === newsFilter.toLowerCase();
  });

  const searchedItems = searchQuery.trim() === '' ? [] : [
    ...departments.filter(d => d.name.toLowerCase().includes(searchQuery.toLowerCase())),
    ...programs.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase())),
    ...newsEvents.filter(n => n.title.toLowerCase().includes(searchQuery.toLowerCase()))
  ];

  return (
    <div className="site-wrapper">
      {/* 1. TOP ANNOUNCEMENT TICKER */}
      <div className="top-ticker">
        <div className="container ticker-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', overflow: 'hidden' }}>
            <span className="ticker-badge">ANNOUNCEMENT</span>
            <span className="ticker-text">
              i-SMaRT 2026 International Conference Call for Papers Open • Admissions 2026-27 Merit Application Active
            </span>
          </div>
          <div className="ticker-links">
            <a href="#intranet" onClick={() => setLoginModalOpen(true)}>Intranet Login</a>
            <a href="#admissions" onClick={() => setAdmissionModalOpen(true)}>Admissions Portal</a>
            <a href="#accreditation">NAAC 'A' Grade</a>
            <a href="#nirf">NIRF Data</a>
          </div>
        </div>
      </div>

      {/* 2. EXECUTIVE BRAND HEADER */}
      <header className="main-header">
        <div className="container header-inner">
          <div className="brand-logo-area">
            <img src="/images/logo_main_0sl8.png" alt="FISAT Logo" className="header-brand-logo" />
            <div className="brand-text">
              <h1>FISAT</h1>
              <div className="brand-subtext">
                Federal Institute of Science And Technology <br />
                <span style={{ fontSize: '0.7rem', color: 'var(--color-brand-primary)', fontWeight: 600 }}>
                  Autonomous • Approved by AICTE • Affiliated to KTU • Accredited NAAC 'A' & NBA
                </span>
              </div>
            </div>
          </div>

          <div className="accreditation-badges">
            <img src="/images/accredited-logos_0sl8.png" alt="NAAC A & NBA Accreditation" className="accreditation-banner-img" />
            <div className="accreditation-pill">FBOAES Promoted</div>
          </div>

          <div className="header-actions">
            <button className="btn btn-outline btn-sm" onClick={() => setSearchModalOpen(true)}>
              <Search size={16} />
              <span className="desktop-only">Search</span>
            </button>
            <button className="btn btn-dark btn-sm" onClick={() => setLoginModalOpen(true)}>
              <LogIn size={16} />
              <span className="desktop-only">Intranet</span>
            </button>
            <button className="btn btn-gold btn-sm" onClick={() => setAdmissionModalOpen(true)}>
              <GraduationCap size={16} />
              <span>Admissions 2026</span>
            </button>
            <button className="mobile-toggle" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>


      {/* 3. NAVIGATION BAR */}
      <nav className="nav-bar">
        <div className="container nav-container">
          <ul className="nav-menu desktop-only">
            <li className="nav-item"><a href="#home" className="nav-link active">Home</a></li>
            <li className="nav-item"><a href="#about" className="nav-link">About Institution</a></li>
            <li className="nav-item"><a href="#programs" className="nav-link">Academic Programs</a></li>
            <li className="nav-item"><a href="#departments" className="nav-link">Departments</a></li>
            <li className="nav-item"><a href="#placements" className="nav-link">Placements</a></li>
            <li className="nav-item"><a href="#research" className="nav-link">Research & IDEA Lab</a></li>
            <li className="nav-item"><a href="#facilities" className="nav-link">Campus Facilities</a></li>
            <li className="nav-item"><a href="#gazette" className="nav-link">News & Gazette</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Contact Us</a></li>
          </ul>
        </div>
      </nav>

      {/* MOBILE DRAWER NAVIGATION */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div className="brand-crest" style={{ width: '36px', height: '36px', fontSize: '1rem' }}>F</div>
            <span style={{ fontWeight: 700, fontFamily: 'var(--font-serif)' }}>FISAT Navigation</span>
          </div>
          <button onClick={() => setMobileMenuOpen(false)} style={{ color: '#ffffff' }}>
            <X size={24} />
          </button>
        </div>
        <ul className="drawer-links">
          <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About Institution</a></li>
          <li><a href="#programs" onClick={() => setMobileMenuOpen(false)}>Academic Programs</a></li>
          <li><a href="#departments" onClick={() => setMobileMenuOpen(false)}>Departments</a></li>
          <li><a href="#placements" onClick={() => setMobileMenuOpen(false)}>Placements & Career</a></li>
          <li><a href="#research" onClick={() => setMobileMenuOpen(false)}>Research & Innovation</a></li>
          <li><a href="#facilities" onClick={() => setMobileMenuOpen(false)}>Facilities & Campus Life</a></li>
          <li><a href="#gazette" onClick={() => setMobileMenuOpen(false)}>Gazette & Events</a></li>
          <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</a></li>
        </ul>
        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <button className="btn btn-gold btn-sm" onClick={() => { setMobileMenuOpen(false); setAdmissionModalOpen(true); }}>
            <GraduationCap size={16} /> Admission Application
          </button>
          <button className="btn btn-outline btn-sm" style={{ color: '#ffffff', borderColor: 'var(--color-border-dark)' }} onClick={() => { setMobileMenuOpen(false); setLoginModalOpen(true); }}>
            <LogIn size={16} /> Intranet Portal
          </button>
        </div>
      </div>

      {/* 4. HERO SHOWCASE SECTION WITH PHOTO CAROUSEL */}
      <section id="home" className="hero-section">
        <div className="container hero-grid">
          <div>
            <div className="hero-tag">
              <Award size={16} /> NAAC Grade 'A' • NBA Accredited Engineering College
            </div>
            <h2 className="hero-title">
              Empowering Minds, Shaping Technological Frontiers
            </h2>
            <p className="hero-description">
              Federal Institute of Science And Technology (FISAT) is a premier autonomous engineering college established by the Federal Bank Officers' Association Educational Society (FBOAES). Dedicated to world-class technical education, innovation, and global placements.
            </p>
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={() => setAdmissionModalOpen(true)}>
                Apply for Admissions <ArrowRight size={18} />
              </button>
              <a href="#programs" className="btn btn-outline">
                Explore Programs
              </a>
              <a href="#placements" className="btn btn-dark">
                2026 Placements Record
              </a>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                <CheckCircle size={16} style={{ color: 'var(--color-success)' }} /> AICTE & UGC Autonomous Status
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                <CheckCircle size={16} style={{ color: 'var(--color-success)' }} /> APJ Abdul Kalam Technological University
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                <CheckCircle size={16} style={{ color: 'var(--color-success)' }} /> Promoted by FBOAE Society
              </div>
            </div>
          </div>

          {/* Hero Interactive Photo Carousel */}
          <div className="hero-photo-carousel">
            <div className="carousel-dots">
              {heroSlides.map((_, idx) => (
                <div
                  key={idx}
                  className={`carousel-dot ${heroSlide === idx ? 'active' : ''}`}
                  onClick={() => setHeroSlide(idx)}
                />
              ))}
            </div>
            <img
              src={heroSlides[heroSlide].img}
              alt={heroSlides[heroSlide].title}
              className="hero-slide-img"
            />
            <div className="hero-slide-overlay">
              <div className="hero-slide-caption">{heroSlides[heroSlide].title}</div>
              <div style={{ fontSize: '0.875rem', color: '#E2E8F0', marginTop: '0.2rem' }}>
                {heroSlides[heroSlide].subtitle}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. QUICK DOCK TILES */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
        <div className="container">
          <div className="grid grid-3">
            <div className="quick-link-tile" onClick={() => setAdmissionModalOpen(true)} style={{ cursor: 'pointer' }}>
              <div className="tile-icon"><GraduationCap size={24} /></div>
              <div>
                <div className="tile-title">Admissions Portal</div>
                <div className="tile-desc">B.Tech, M.Tech, MBA, MCA Eligibility & Seats</div>
              </div>
            </div>

            <div className="quick-link-tile" onClick={() => setLoginModalOpen(true)} style={{ cursor: 'pointer' }}>
              <div className="tile-icon" style={{ backgroundColor: 'var(--color-brand-dark)' }}><LogIn size={24} /></div>
              <div>
                <div className="tile-title">Intranet Student Login</div>
                <div className="tile-desc">Attendance, Marks, Class Notes & Timetables</div>
              </div>
            </div>

            <a href="#research" className="quick-link-tile">
              <div className="tile-icon" style={{ backgroundColor: 'var(--color-brand-gold)', color: 'var(--color-brand-dark)' }}><Lightbulb size={24} /></div>
              <div>
                <div className="tile-title">AICTE IDEA Lab & Patents</div>
                <div className="tile-desc">Prototyping facilities, funding & innovation</div>
              </div>
            </a>

            <a href="#facilities" className="quick-link-tile">
              <div className="tile-icon"><Laptop size={24} /></div>
              <div>
                <div className="tile-title">Central Computing Facility</div>
                <div className="tile-desc">High-performance clusters & gigabit network</div>
              </div>
            </a>

            <a href="#gazette" className="quick-link-tile">
              <div className="tile-icon" style={{ backgroundColor: 'var(--color-brand-dark)' }}><BookMarked size={24} /></div>
              <div>
                <div className="tile-title">College Calendar & Handbook</div>
                <div className="tile-desc">Academic schedules, regulations & syllabus</div>
              </div>
            </a>

            <a href="#placements" className="quick-link-tile">
              <div className="tile-icon" style={{ backgroundColor: 'var(--color-brand-gold)', color: 'var(--color-brand-dark)' }}><Briefcase size={24} /></div>
              <div>
                <div className="tile-title">Placement Statistics</div>
                <div className="tile-desc">Major recruiters, CTC stats & success stories</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 6. ACADEMIC PROGRAMS SHOWCASE */}
      <section id="programs" className="section">
        <div className="container">
          <div className="section-header" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem' }}>
            <div>
              <div className="section-subtitle">Comprehensive Education</div>
              <h2 className="section-title">Academic Programs Offered</h2>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button className={`dept-pill ${programFilter === 'all' ? 'active' : ''}`} onClick={() => setProgramFilter('all')}>All Programs</button>
              <button className={`dept-pill ${programFilter === 'ug' ? 'active' : ''}`} onClick={() => setProgramFilter('ug')}>Undergraduate (B.Tech)</button>
              <button className={`dept-pill ${programFilter === 'pg' ? 'active' : ''}`} onClick={() => setProgramFilter('pg')}>Postgraduate (M.Tech/MBA/MCA)</button>
              <button className={`dept-pill ${programFilter === 'doctoral' ? 'active' : ''}`} onClick={() => setProgramFilter('doctoral')}>Ph.D. Research</button>
            </div>
          </div>

          <div className="grid grid-3">
            {filteredPrograms.map((prog, idx) => (
              <div key={idx} className="card">
                <div className="card-header">
                  <div className="card-icon"><BookOpen size={22} /></div>
                  <span className="ticker-badge" style={{ backgroundColor: 'var(--color-bg-alt)', color: 'var(--color-brand-dark)' }}>{prog.dept}</span>
                </div>
                <h3 className="card-title">{prog.title}</h3>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: '0.75rem 0 1.25rem 0' }}>
                  <span><strong>Duration:</strong> {prog.duration}</span>
                  <span><strong>Intake:</strong> {prog.intake} Seats</span>
                </div>
                <button className="btn btn-outline btn-sm" style={{ width: '100%' }} onClick={() => setAdmissionModalOpen(true)}>
                  Inquire & Apply Online <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ACADEMIC DEPARTMENTS DIRECTORY WITH PHOTO HEADERS */}
      <section id="departments" className="section" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle">Centres of Excellence</div>
            <h2 className="section-title">Academic Departments</h2>
            <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
              FISAT houses 9 specialized departments equipped with state-of-the-art research laboratories and expert faculty.
            </p>
          </div>

          <div className="grid grid-3">
            {departments.map((dept) => (
              <div key={dept.id} className="card" style={{ padding: '0', overflow: 'hidden' }}>
                <div className="card-img-wrapper" style={{ borderRadius: '0', height: '160px', marginBottom: '0' }}>
                  <img src={dept.image} alt={dept.name} className="card-img" />
                  <span className="ticker-badge" style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', backgroundColor: 'var(--color-brand-primary)', color: '#ffffff' }}>
                    {dept.code}
                  </span>
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-brand-gold)', fontWeight: 700 }}>{dept.intake}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{dept.labs}</span>
                  </div>
                  <h3 className="card-title" style={{ fontSize: '1.1rem', minHeight: '2.8rem' }}>{dept.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1rem', lineClamp: 2 }}>{dept.desc}</p>
                  
                  <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '0.75rem', marginTop: 'auto' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-brand-dark)', marginBottom: '0.75rem' }}>
                      Head of Dept: {dept.hod}
                    </div>
                    <button className="btn btn-outline btn-sm" style={{ width: '100%' }} onClick={() => setSelectedDeptModal(dept)}>
                      View Department Details <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PLACEMENTS & RECRUITERS SHOWCASE */}
      <section id="placements" className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <div className="section-subtitle">Career Excellence</div>
              <h2 className="section-title">Top Tier Campus Placements</h2>
              <p style={{ color: 'var(--color-text-muted)', margin: '1rem 0 1.5rem 0' }}>
                The Placement & Training Cell at FISAT prepares students through rigorous technical bootcamps, soft-skills workshops, and mock interviews. FISAT holds a stellar track record of campus recruitment with top multinational corporations.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div className="card" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 900, fontFamily: 'var(--font-serif)', color: 'var(--color-brand-primary)' }}>850+</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Placement Offers in 2026 Batch</div>
                </div>
                <div className="card" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 900, fontFamily: 'var(--font-serif)', color: 'var(--color-brand-gold)' }}>120+</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Visiting Corporate Recruiters</div>
                </div>
              </div>

              <div className="card" style={{ borderLeft: '4px solid var(--color-brand-gold)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Award size={28} style={{ color: 'var(--color-brand-gold)', flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: 'block', color: 'var(--color-brand-dark)' }}>TCS Top Placement Partner Campus</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Consistently recognized by TCS for highest engineering hiring numbers in Kerala.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Placement Image Feature */}
            <div className="card" style={{ padding: '0', overflow: 'hidden', border: '2px solid var(--color-border)' }}>
              <div style={{ height: '240px', overflow: 'hidden' }}>
                <img src="/images/FISAT-TCS-PLACEMENT-26-copy-1_0sl8.jpg" alt="FISAT Placement Celebration" className="card-img" />
              </div>
              <div style={{ padding: '1.25rem' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-brand-dark)', marginBottom: '0.5rem' }}>Major Corporate Recruiter Network</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem', marginTop: '1rem' }}>
                  {recruiters.map((rec, i) => (
                    <div key={i} className="card" style={{ textAlign: 'center', padding: '0.5rem 0.25rem', fontWeight: 700, color: 'var(--color-brand-dark)', fontSize: '0.8rem', backgroundColor: 'var(--color-bg-alt)' }}>
                      {rec}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. RESEARCH, IDEA LAB & NEWS GAZETTE */}
      <section id="gazette" className="section" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
        <div className="container">
          <div className="section-header" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem' }}>
            <div>
              <div className="section-subtitle">Campus Gazette</div>
              <h2 className="section-title">Latest News, Workshops & Events</h2>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className={`dept-pill ${newsFilter === 'all' ? 'active' : ''}`} onClick={() => setNewsFilter('all')}>All Updates</button>
              <button className={`dept-pill ${newsFilter === 'conference' ? 'active' : ''}`} onClick={() => setNewsFilter('conference')}>Conferences</button>
              <button className={`dept-pill ${newsFilter === 'workshop' ? 'active' : ''}`} onClick={() => setNewsFilter('workshop')}>Workshops</button>
            </div>
          </div>

          <div className="grid grid-3">
            {filteredNews.map((item) => (
              <div key={item.id} className="card" style={{ padding: '0', overflow: 'hidden' }}>
                <div className="card-img-wrapper" style={{ height: '160px', marginBottom: '0', borderRadius: '0' }}>
                  <img src={item.image} alt={item.title} className="card-img" />
                  <span className="ticker-badge" style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', backgroundColor: 'var(--color-brand-primary)', color: '#ffffff' }}>
                    {item.category}
                  </span>
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.5rem' }}>
                    <Calendar size={14} /> {item.date}
                  </div>
                  <h3 className="card-title" style={{ fontSize: '1.05rem', minHeight: '3.2rem', lineHeight: 1.3 }}>{item.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>{item.desc}</p>
                  <a href="#read" className="btn btn-outline btn-sm" style={{ width: '100%' }}>
                    Read Full Gazette Details <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CAMPUS FACILITIES WITH REAL PHOTOS */}
      <section id="facilities" className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle">World Class Infrastructure</div>
            <h2 className="section-title">Facilities & Campus Life</h2>
          </div>

          <div className="grid grid-3">
            <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
              <div className="card-img-wrapper" style={{ height: '180px', marginBottom: '0', borderRadius: '0' }}>
                <img src="/images/ChatGPT-Image-Jun-2-2026-11_23_49-AM-copy_0sl8.jpg" alt="Central Computing Facility" className="card-img" />
              </div>
              <div style={{ padding: '1.25rem' }}>
                <h3 className="card-title" style={{ fontSize: '1.1rem' }}>Central Computing Facility</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Over 1200+ high-end workstations with 1Gbps redundant optical fiber internet connectivity.</p>
              </div>
            </div>

            <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
              <div className="card-img-wrapper" style={{ height: '180px', marginBottom: '0', borderRadius: '0' }}>
                <img src="/images/library-scaled_0sl8.jpg" alt="Central Library" className="card-img" />
              </div>
              <div style={{ padding: '1.25rem' }}>
                <h3 className="card-title" style={{ fontSize: '1.1rem' }}>Central Library</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Automated digital library with over 80,000 volumes, IEEE Xplore, ScienceDirect & Scopus access.</p>
              </div>
            </div>

            <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
              <div className="card-img-wrapper" style={{ height: '180px', marginBottom: '0', borderRadius: '0' }}>
                <img src="/images/sports-scaled_0sl8.jpg" alt="Sports & Fitness" className="card-img" />
              </div>
              <div style={{ padding: '1.25rem' }}>
                <h3 className="card-title" style={{ fontSize: '1.1rem' }}>Sports & Fitness Centre</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Indoor stadium, gymnasium, basketball court, football turf, and synthetic tennis courts.</p>
              </div>
            </div>

            <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
              <div className="card-img-wrapper" style={{ height: '180px', marginBottom: '0', borderRadius: '0' }}>
                <img src="/images/arts-sports_0sl8.jpg" alt="Arts & Cultural Activities" className="card-img" />
              </div>
              <div style={{ padding: '1.25rem' }}>
                <h3 className="card-title" style={{ fontSize: '1.1rem' }}>Arts & Cultural Fests</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Annual inter-collegiate cultural fest, music bands, theater guild, and technical symposiums.</p>
              </div>
            </div>

            <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
              <div className="card-img-wrapper" style={{ height: '180px', marginBottom: '0', borderRadius: '0' }}>
                <img src="/images/fitness_0sl8.jpg" alt="Hostels & Dining" className="card-img" />
              </div>
              <div style={{ padding: '1.25rem' }}>
                <h3 className="card-title" style={{ fontSize: '1.1rem' }}>Hostels & Campus Dining</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Separate, secure residential hostels for gents and ladies with hygienic food courts and Wi-Fi.</p>
              </div>
            </div>

            <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
              <div className="card-img-wrapper" style={{ height: '180px', marginBottom: '0', borderRadius: '0' }}>
                <img src="/images/social_0sl8.jpg" alt="Student Community & Clubs" className="card-img" />
              </div>
              <div style={{ padding: '1.25rem' }}>
                <h3 className="card-title" style={{ fontSize: '1.1rem' }}>Clubs & NSS Initiatives</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Active student chapters of IEEE, ISTE, ACM, NSS, and Rotaract driving social impact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. PHOTO GALLERY SHOWCASE */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
        <div className="container">
          <div className="section-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div className="section-subtitle">Campus Visual Tour</div>
              <h2 className="section-title">FISAT Photo Gallery</h2>
            </div>
            <div className="ticker-badge" style={{ backgroundColor: 'var(--color-brand-primary)', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <ImageIcon size={14} /> Official Media Collection
            </div>
          </div>

          <div className="grid grid-4">
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '160px', border: '1px solid var(--color-border)' }}>
              <img src="/images/CFS-FISAT-BANNER-scaled_0sl8.jpg" alt="Campus Aerial View" className="card-img" />
            </div>
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '160px', border: '1px solid var(--color-border)' }}>
              <img src="/images/IDEA-LAB-BANNER-scaled_0sl8.jpg" alt="AICTE IDEA Lab Facility" className="card-img" />
            </div>
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '160px', border: '1px solid var(--color-border)' }}>
              <img src="/images/library-scaled_0sl8.jpg" alt="Central Digital Library" className="card-img" />
            </div>
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '160px', border: '1px solid var(--color-border)' }}>
              <img src="/images/DSC02156-scaled-e1707299276592_0sl8.jpg" alt="Electronics Research Lab" className="card-img" />
            </div>
          </div>
        </div>
      </section>

      {/* 12. CONTACT & INQUIRY */}
      <section id="contact" className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'start' }}>
            <div>
              <div className="section-subtitle">Reach Out To Us</div>
              <h2 className="section-title">Contact FISAT Campus</h2>
              <p style={{ color: 'var(--color-text-muted)', margin: '1rem 0 1.5rem 0' }}>
                Located at Hormis Nagar, Mookkannoor, Angamaly, Kerala. Accessible easily from Cochin International Airport (COK) and Angamaly Railway Station.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div className="card-icon"><MapPin size={20} /></div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.9rem' }}>Address</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Hormis Nagar, Mookkannoor P.O., Angamaly, Ernakulam, Kerala - 683577</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div className="card-icon"><Phone size={20} /></div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.9rem' }}>Helpline Numbers</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>+91 484 2725272 / +91 484 2725273</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div className="card-icon"><Mail size={20} /></div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.9rem' }}>Email Contacts</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>mail@fisat.ac.in / admissions@fisat.ac.in</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" style={{ borderTop: '4px solid var(--color-brand-primary)' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-brand-dark)' }}>Quick Admission Inquiry</h3>
              <form onSubmit={handleAdmissionSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-input" required placeholder="Enter candidate full name" value={admissionData.name} onChange={e => setAdmissionData({...admissionData, name: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-input" required placeholder="name@example.com" value={admissionData.email} onChange={e => setAdmissionData({...admissionData, email: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-input" required placeholder="+91 9876543210" value={admissionData.phone} onChange={e => setAdmissionData({...admissionData, phone: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Target Program</label>
                  <select className="form-select" value={admissionData.program} onChange={e => setAdmissionData({...admissionData, program: e.target.value})}>
                    {programs.map((p, i) => <option key={i} value={p.title}>{p.title}</option>)}
                  </select>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Submit Admission Inquiry
                </button>
                {submittedMsg && (
                  <div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: 'var(--color-bg-alt)', color: 'var(--color-brand-primary)', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', fontWeight: 600 }}>
                    {submittedMsg}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-input" required placeholder="Enter candidate full name" value={admissionData.name} onChange={e => setAdmissionData({...admissionData, name: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-input" required placeholder="name@example.com" value={admissionData.email} onChange={e => setAdmissionData({...admissionData, email: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-input" required placeholder="+91 9876543210" value={admissionData.phone} onChange={e => setAdmissionData({...admissionData, phone: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Target Program</label>
                  <select className="form-select" value={admissionData.program} onChange={e => setAdmissionData({...admissionData, program: e.target.value})}>
                    {programs.map((p, i) => <option key={i} value={p.title}>{p.title}</option>)}
                  </select>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Submit Admission Inquiry
                </button>
                {submittedMsg && (
                  <div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: 'var(--color-bg-alt)', color: 'var(--color-brand-primary)', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', fontWeight: 600 }}>
                    {submittedMsg}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div className="brand-crest" style={{ width: '40px', height: '40px', fontSize: '1.1rem' }}>F</div>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>FISAT</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.6 }}>
                Federal Institute of Science And Technology (FISAT) is an autonomous institution established by Federal Bank Officers' Association Educational Society (FBOAES).
              </p>
              <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--color-brand-gold)' }}>
                NAAC 'A' Grade • NBA Accredited • AICTE Approved
              </div>
            </div>

            <div className="footer-col">
              <h4>Academics</h4>
              <ul className="footer-links">
                <li><a href="#programs">B.Tech Engineering</a></li>
                <li><a href="#programs">M.Tech Specializations</a></li>
                <li><a href="#programs">FISAT Business School (MBA)</a></li>
                <li><a href="#programs">Computer Applications (MCA)</a></li>
                <li><a href="#programs">Ph.D. Doctoral Research</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#intranet" onClick={() => setLoginModalOpen(true)}>Student Intranet</a></li>
                <li><a href="#admissions" onClick={() => setAdmissionModalOpen(true)}>Admissions Portal</a></li>
                <li><a href="#placements">Placement Cell</a></li>
                <li><a href="#research">AICTE IDEA Lab</a></li>
                <li><a href="#gazette">College Gazette</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Governance</h4>
              <ul className="footer-links">
                <li><a href="#governance">Governing Body</a></li>
                <li><a href="#academic-council">Academic Council</a></li>
                <li><a href="#principal">The Principal</a></li>
                <li><a href="#organogram">Organogram</a></li>
                <li><a href="#iqac">IQAC Cell & NIRF</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              © 2026 Federal Institute of Science And Technology (FISAT). All Rights Reserved.
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <span>Vercel Deployment Ready</span>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL 1: SEARCH OVERLAY */}
      {searchModalOpen && (
        <div className="modal-overlay" onClick={() => setSearchModalOpen(false)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSearchModalOpen(false)}><X size={20} /></button>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-brand-dark)' }}>Campus Search Engine</h3>
            <div className="form-group">
              <input
                type="text"
                className="form-input"
                autoFocus
                placeholder="Search programs, departments, faculty, events..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>

            <div style={{ maxHeight: '280px', overflowY: 'auto' }}>
              {searchQuery.trim() !== '' && searchedItems.length === 0 && (
                <div style={{ padding: '1rem', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                  No results found for "{searchQuery}"
                </div>
              )}
              {searchedItems.map((item, idx) => (
                <div key={idx} style={{ padding: '0.75rem', borderBottom: '1px solid var(--color-border)' }}>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--color-brand-primary)' }}>
                    {item.name || item.title}
                  </strong>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                    {item.desc || item.hod || item.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: INTRANET LOGIN */}
      {loginModalOpen && (
        <div className="modal-overlay" onClick={() => setLoginModalOpen(false)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setLoginModalOpen(false)}><X size={20} /></button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div className="brand-crest" style={{ width: '40px', height: '40px', fontSize: '1.1rem' }}>F</div>
              <div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-brand-dark)', margin: 0 }}>FISAT Intranet Portal</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Student & Staff Single Sign-On</span>
              </div>
            </div>

            <form onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label className="form-label">Select User Role</label>
                <select className="form-select" value={loginData.role} onChange={e => setLoginData({...loginData, role: e.target.value})}>
                  <option value="student">Student Portal</option>
                  <option value="faculty">Faculty / Staff Portal</option>
                  <option value="parent">Parent Portal</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Register Number / Username</label>
                <input type="text" className="form-input" required placeholder="e.g. FIT22CS045" value={loginData.username} onChange={e => setLoginData({...loginData, username: e.target.value})} />
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <input type="password" className="form-input" required placeholder="••••••••" value={loginData.password} onChange={e => setLoginData({...loginData, password: e.target.value})} />
              </div>

              <button type="submit" className="btn btn-dark" style={{ width: '100%' }}>
                Log In to Intranet
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 3: DEPARTMENT DETAILS MODAL */}
      {selectedDeptModal && (
        <div className="modal-overlay" onClick={() => setSelectedDeptModal(null)}>
          <div className="modal-card" style={{ maxWidth: '640px' }} onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedDeptModal(null)}><X size={20} /></button>
            
            <span className="ticker-badge" style={{ backgroundColor: 'var(--color-brand-primary)', color: '#ffffff', marginBottom: '0.5rem' }}>
              DEPARTMENT OF {selectedDeptModal.code}
            </span>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-brand-dark)', marginBottom: '0.5rem' }}>
              {selectedDeptModal.name}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
              {selectedDeptModal.desc}
            </p>

            <div className="grid grid-2" style={{ marginBottom: '1.25rem' }}>
              <div className="card" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
                <strong style={{ fontSize: '0.85rem', color: 'var(--color-brand-dark)' }}>Head of Department</strong>
                <div style={{ fontSize: '0.95rem', color: 'var(--color-brand-primary)', fontWeight: 700 }}>{selectedDeptModal.hod}</div>
              </div>
              <div className="card" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
                <strong style={{ fontSize: '0.85rem', color: 'var(--color-brand-dark)' }}>Sanctioned Intake & Labs</strong>
                <div style={{ fontSize: '0.95rem', color: 'var(--color-brand-dark)', fontWeight: 700 }}>{selectedDeptModal.intake} • {selectedDeptModal.labs}</div>
              </div>
            </div>

            <h4 style={{ fontSize: '1rem', color: 'var(--color-brand-dark)', marginBottom: '0.5rem' }}>Department Highlights & Laboratories</h4>
            <ul style={{ paddingLeft: '1.25rem', fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
              {selectedDeptModal.highlights.map((h, i) => <li key={i} style={{ marginBottom: '0.3rem' }}>{h}</li>)}
            </ul>

            <button className="btn btn-gold" style={{ width: '100%' }} onClick={() => { setSelectedDeptModal(null); setAdmissionModalOpen(true); }}>
              Apply for {selectedDeptModal.code} Admissions 2026
            </button>
          </div>
        </div>
      )}

      {/* MODAL 4: ADMISSIONS INQUIRY MODAL */}
      {admissionModalOpen && (
        <div className="modal-overlay" onClick={() => setAdmissionModalOpen(false)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setAdmissionModalOpen(false)}><X size={20} /></button>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <GraduationCap size={28} style={{ color: 'var(--color-brand-primary)' }} />
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-brand-dark)', margin: 0 }}>Admissions 2026-27 Application</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Federal Institute of Science And Technology</span>
              </div>
            </div>

            <form onSubmit={handleAdmissionSubmit}>
              <div className="form-group">
                <label className="form-label">Applicant Name</label>
                <input type="text" className="form-input" required placeholder="Enter student full name" value={admissionData.name} onChange={e => setAdmissionData({...admissionData, name: e.target.value})} />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-input" required placeholder="email@example.com" value={admissionData.email} onChange={e => setAdmissionData({...admissionData, email: e.target.value})} />
              </div>
              <div className="form-group">
                <label className="form-label">Mobile Contact</label>
                <input type="tel" className="form-input" required placeholder="+91 98765 43210" value={admissionData.phone} onChange={e => setAdmissionData({...admissionData, phone: e.target.value})} />
              </div>
              <div className="form-group">
                <label className="form-label">Course Selection</label>
                <select className="form-select" value={admissionData.program} onChange={e => setAdmissionData({...admissionData, program: e.target.value})}>
                  {programs.map((p, i) => <option key={i} value={p.title}>{p.title}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Qualifying Exam Mark (%)</label>
                <input type="text" className="form-input" placeholder="e.g. 92% in 12th / PCM or CGPA" value={admissionData.mark} onChange={e => setAdmissionData({...admissionData, mark: e.target.value})} />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Submit Application Inquiry
              </button>

              {submittedMsg && (
                <div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: 'var(--color-bg-alt)', color: 'var(--color-brand-primary)', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', fontWeight: 600 }}>
                  {submittedMsg}
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

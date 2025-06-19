import React, { useState, useRef, useEffect } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [focused, setFocused] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });
  
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.2 }
    );
    
    if (formRef.current) {
      observer.observe(formRef.current);
    }
    
    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };
  
  const handleFocus = (field) => {
    setFocused({
      ...focused,
      [field]: true
    });
  };
  
  const handleBlur = (field) => {
    setFocused({
      ...focused,
      [field]: false
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log(formState);
    setSubmitted(true);
    
    // Resetear el formulario después de 3 segundos
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };
  
  const isFieldActive = (field) => {
    return focused[field] || formState[field] !== '';
  };

  return (
    <section className="contact-section reveal" id="contacto" ref={formRef}>
      <div className="pattern-background"></div>
      <h2 className="section-title">Contáctame</h2>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <h3>Teléfono</h3>
            <p>+57 (123) 456-7890</p>
          </div>
          
          <div className="info-card">
            <div className="info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h3>Email</h3>
            <p>luisfcs@correo.com</p>
          </div>
          
          <div className="info-card">
            <div className="info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3>Ubicación</h3>
            <p>Cali, Colombia</p>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className={`form-floating ${isFieldActive('name') ? 'active' : ''}`}>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formState.name} 
              onChange={handleChange} 
              onFocus={() => handleFocus('name')} 
              onBlur={() => handleBlur('name')}
              required 
            />
            <label htmlFor="name">Nombre</label>
            <span className="highlight"></span>
          </div>
          
          <div className={`form-floating ${isFieldActive('email') ? 'active' : ''}`}>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formState.email} 
              onChange={handleChange} 
              onFocus={() => handleFocus('email')} 
              onBlur={() => handleBlur('email')}
              required 
            />
            <label htmlFor="email">Email</label>
            <span className="highlight"></span>
          </div>
          
          <div className={`form-floating ${isFieldActive('subject') ? 'active' : ''}`}>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              value={formState.subject} 
              onChange={handleChange} 
              onFocus={() => handleFocus('subject')} 
              onBlur={() => handleBlur('subject')}
              required 
            />
            <label htmlFor="subject">Asunto</label>
            <span className="highlight"></span>
          </div>
          
          <div className={`form-floating ${isFieldActive('message') ? 'active' : ''}`}>
            <textarea 
              id="message" 
              name="message" 
              value={formState.message} 
              onChange={handleChange} 
              onFocus={() => handleFocus('message')} 
              onBlur={() => handleBlur('message')}
              required 
            ></textarea>
            <label htmlFor="message">Mensaje</label>
            <span className="highlight"></span>
          </div>
          
          <button 
            type="submit" 
            className={`submit-button ${submitted ? 'submitted' : ''}`}
          >
            <span className="submit-text">
              {submitted ? '¡Enviado!' : 'Enviar Mensaje'}
            </span>
            <span className="submit-icon">
              {submitted ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              )}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

// Asegurarse de incluir esta línea para exportar el componente
export default ContactForm;
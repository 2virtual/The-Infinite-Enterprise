import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import PDFViewer from './pages/PDFViewer.jsx'; 
import AboutAuthor from './pages/authorsPage.jsx'; 
import Layout from './components/nav-layout.jsx'; 
import ReviewForm  from './pages/ReviewForm.jsx'; 
import PaymentPage from './pages/paymentPage.jsx';
import QuotesPage from './components/QuotesPage';
import Community from './pages/CommunityPage.jsx';
import CircleRegistration from './pages/CircleRegistrationForm.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>

        <Route path="/" element={<App />} />
        <Route path="/read" element={<PDFViewer />} /> 
        <Route path="/about-author" element={<AboutAuthor />} /> 
        <Route path="/community" element={<Community />} /> 
        <Route path="/review" element={<ReviewForm />} /> 
        <Route path="/order" element={<PaymentPage />} /> 
        <Route path="/infinite-enterprise/quotes" element={<QuotesPage />} />
        <Route path="/community/join" element={<CircleRegistration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);








// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

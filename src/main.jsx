import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import Terms from "./pages/Terms.jsx";
import Privacy from "./pages/Privacy.jsx";
import FAQs from "./pages/FAQs.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import BetterSearch from "./pages/BetterSearch.jsx";
import ReleaseNotes from "./pages/ReleaseNotes.jsx";
import NotFound from "./pages/NotFound.jsx";
import { RequestDemoModal } from "./components/DemoModals.jsx";

import { DemoFormProvider } from "./context/DemoFormContext.jsx";
import "./index.css";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <DemoFormProvider isOpen={isFormOpen} onOpen={() => setIsFormOpen(true)}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/why-nobi/better-search" element={<BetterSearch />} />
        <Route path="/release-notes" element={<ReleaseNotes />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <RequestDemoModal open={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </DemoFormProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

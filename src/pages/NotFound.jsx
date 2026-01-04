import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PageLayout from "../components/PageLayout";

function NotFound() {
  const navigate = useNavigate();
  const location = useLocation();
  const displayPath = location.pathname;

  React.useEffect(() => {
    const previousTitle = document.title;
    document.title = "Page not found | Nobi";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <PageLayout>
      <main className="bg-gradient-to-b from-white to-slate-50 dark:from-[#0a0a0a] dark:to-black text-black dark:text-white min-h-screen flex items-center">
      <div className="mx-auto max-w-2xl px-6 py-28 text-center">
        <p className="text-sm font-semibold text-fuchsia-600">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Can't find {displayPath}</h1>
        <p className="mt-3 text-base text-black/70 dark:text-white/70">
          The link you followed points to a page that doesn't exist on Nobi. Check the URL or head
          back to the homepage.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleNavigateHome}
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-2xl bg-[#7c3aed] px-6 py-3 font-medium text-white shadow-sm hover:bg-[#6d28d9]"
          >
            Back to homepage
          </button>
          <a
            href="mailto:hello@nobi.ai"
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-2xl border border-black/10 px-6 py-3 font-medium text-black/80 dark:text-white/80 hover:bg-black/5 dark:hover:bg-white/10"
          >
            Contact support
          </a>
        </div>
      </div>
      </main>
    </PageLayout>
  );
}

export default NotFound;

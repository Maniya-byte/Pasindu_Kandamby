import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <Link to="/" className="font-display text-lg font-bold">
          Port<span className="gradient-text">folio</span>
        </Link>
        <div className="flex gap-8 text-sm text-muted-foreground">
          <Link to="/" className="transition-colors hover:text-foreground">Home</Link>
          <Link to="/projects" className="transition-colors hover:text-foreground">Projects</Link>
          <Link to="/about" className="transition-colors hover:text-foreground">About</Link>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

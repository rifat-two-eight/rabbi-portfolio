const Footer = () => {
  return (
    <footer className="bg-muted py-12 border-t border-border">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-secondary text-sm">
          © {new Date().getFullYear()} Rabbi. All rights reserved.
        </div>
        <div className="flex gap-6 text-secondary text-sm">
          <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          <a href="#" className="hover:text-primary transition-colors">GitHub</a>
          <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

interface FooterProps {
  text: string;
}

const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <footer className="mt-12 border-t border-slate-600/30 pt-8 text-center text-xs font-medium uppercase tracking-[0.15em] text-slate-500 sm:mt-16 sm:text-sm">
      {text}
    </footer>
  );
};

export default Footer;

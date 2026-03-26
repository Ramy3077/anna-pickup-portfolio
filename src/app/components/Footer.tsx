import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-2">Anna Pickup</h3>
            <p className="text-slate-400">
              Philosophy Student | Aspiring HR & Retail Professional
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="mailto:anna.pickup@example.com"
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="hidden sm:inline">Email</span>
            </a>
            <a 
              href="https://linkedin.com/in/annapickup" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Anna Pickup. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

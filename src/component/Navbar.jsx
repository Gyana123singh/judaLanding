import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../public/juda.png";
const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link to='/'>
                    <img
                        src={logo}
                        alt="Cayman Directory Logo"
                        className="h-16 w-16 rounded-xl object-contain scale-150"
                    />
                    </Link>
                </div>
                {/* Desktop Menu */}
                <nav className="hidden items-center gap-8 md:flex">
                    <Link
                        to="/privacy"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="text-sm font-medium text-slate-700 hover:text-cyan-600 transition"
                    >
                        Privacy Policy
                    </Link>

                    <Link
                        to="/terms"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="text-sm font-medium text-slate-700 hover:text-cyan-600 transition"
                    >
                        Terms & Conditions
                    </Link>

                    <Link
                        to="/refund-policy"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="text-sm font-medium text-slate-700 hover:text-cyan-600 transition"
                    >
                        Refund Policy
                    </Link>




                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-slate-700"
                >
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden border-t border-slate-200 bg-white px-6 py-4 space-y-4">
                    <Link
                        to="/privacy"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="block text-sm font-medium text-slate-700 hover:text-cyan-600"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        to="/terms"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="block text-sm font-medium text-slate-700 hover:text-cyan-600"
                    >
                        Terms & Conditions
                    </Link>
                    <Link
                        to="/refund-policy"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="block text-sm font-medium text-slate-700 hover:text-cyan-600"
                    >
                        Refund Policy
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Navbar;
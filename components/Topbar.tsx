"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
	{ href: "#home", label: "Home" },
	{ href: "#tech", label: "Tech Stack" },
	{ href: "#projects", label: "Projects" },
	{ href: "#about", label: "About" },
	{ href: "#contact", label: "Contact" },
];

export default function Topbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm border-b border-[#4A7C7A]/20 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
                    <Link
                        href={"/"}
                        className="flex items-center space-x-2 text-foreground hover:text-accent transition-colors"
                    >
                        <Image
                            src="/logo.png"
                            alt="UCLDEV Logo"
                            width={120}
                            height={40}
                            className="h-8 w-auto"
                        />

                        <h2 className="text-accent font-semibold">UNCLEDEV</h2>
                    </Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex ml-10 space-x-8">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="text-foreground hover:text-accent transition-colors px-3 py-2 text-sm font-medium"
							>
								{link.label}
							</Link>
						))}
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="text-foreground hover:text-accent p-2"
						>
							{isMenuOpen ? (
								<X className="w-6 h-6" />
							) : (
								<Menu className="w-6 h-6" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 rounded-lg mt-2">
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="text-foreground hover:text-accent block px-3 py-2 text-base font-medium"
									onClick={() => setIsMenuOpen(false)}
								>
									{link.label}
								</Link>
							))}
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}

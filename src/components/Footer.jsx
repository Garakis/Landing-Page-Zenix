import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-zenix-bg border-t border-zenix-secondary py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <span className="text-white font-bold text-xl tracking-tighter">ZENIX</span>
                    <div className="w-1.5 h-1.5 bg-zenix-primary rounded-full" aria-hidden="true"></div>
                </div>

                <div className="text-center md:text-left text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Zenix Consultoria Tecnológica.</p>
                </div>
            </div>
        </footer>
    );
}

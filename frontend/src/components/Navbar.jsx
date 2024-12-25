import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const hyperlinks = [
        { name: 'Home', href: '/' },
        { name: 'Add News', href: '#' },
    ]


    return (
        <nav className="bg-gray-800 text-white p-4 shadow-md mb-6">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">NewsApp</h1>
                <button
                    className="sm:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
                <ul
                    className={`sm:flex sm:items-center sm:space-x-6 ${isOpen ? "block" : "hidden"
                        }`}
                >
                    {
                        hyperlinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link.href} className="hover:underline">
                                    {link.name}
                                </Link>
                            </li>
                        ))
                    }

                    <Link
                        className="group relative inline-block overflow-hidden border border-white px-8 py-3 focus:outline-none focus:ring"
                        to="/add-news"
                    >
                        <span
                            className="absolute inset-y-0 right-0 w-[2px] bg-white transition-all group-hover:w-full group-active:bg-indigo-500"
                        ></span>

                        <span
                            className="relative text-sm font-medium text-white transition-colors group-hover:text-black"
                        >
                            Add News
                        </span>
                    </Link>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar
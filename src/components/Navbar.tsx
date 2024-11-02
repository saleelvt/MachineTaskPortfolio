/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback } from 'react'
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "../style.css"

const Navbar: React.FC<any> = ({ darkModeOn, setDarkMode }: { darkModeOn: boolean, setDarkMode: any }) => {
    const handleDownload = useCallback(() => {
        const resumeUrl = "/Muhammed_Afthaf.pdf";
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.download = "MUHAMMED_ALTHF_S.pdf";
        link.click();
    },[])

    return (
        <nav className="px-10 lg:px-32 py-5 mb-5 flex justify-end fixed bg-slate-800 w-full backdrop-filter backdrop-blur-lg bg-opacity-30 z-10">
            <ul className="flex items-center">
                <li className="cursor-pointer">
                    {!darkModeOn ? (
                        <BsFillMoonStarsFill
                            onClick={() => setDarkMode(!darkModeOn)}
                            className="icon-style text-xl"
                        />
                    ) : (
                        <BsFillSunFill
                            onClick={() => setDarkMode(!darkModeOn)}
                            className="icon-style text-xl"
                        />
                    )}
                </li>
                <li>
                    <a className="button-style ml-4 my-0 cursor-pointer" onClick={handleDownload} >
                       Resume
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
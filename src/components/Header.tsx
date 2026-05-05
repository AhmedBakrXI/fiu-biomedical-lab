import { ChevronDown, ChevronUp, Menu } from 'lucide-react';
import Logo from '../assets/logo.png'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [isResearchHovered, setIsResearchHovered] = useState(false);
    const [isTeamHovered, setIsTeamHovered] = useState(false);
    const [isPortfolioHovered, setIsPortfolioHovered] = useState(false);

    const [isResearchMenuOpen, setIsResearchMenuOpen] = useState(false);
    const [isTeamMenuOpen, setIsTeamMenuOpen] = useState(false);
    const [isPortfolioMenuOpen, setIsPortfolioMenuOpen] = useState(false);

    const navigate = useNavigate();

    return (
        <header className="w-full h-24 flex items-center justify-between px-8 md:px-16">
            <div >
                <img src={Logo} alt="FIU BME Lab Logo" className="h-16 inline-block mr-2" />
            </div>
            <nav className="hidden md:flex items-center gap-4">
                <a onClick={() => navigate("/")} className="text-primary hover:text-accent transition-colors duration-300">Home</a>
                <a onClick={() => navigate("/about-us")} className="text-primary hover:text-accent transition-colors duration-300">About Us</a>
                <DropdownMenu>
                    <DropdownMenuTrigger
                        onMouseEnter={() => setIsResearchHovered(true)}
                        onMouseLeave={() => setIsResearchHovered(false)}
                        className="text-primary hover:text-accent transition-colors duration-300">
                        Research {isResearchHovered ? <ChevronDown className="inline-block ml-1" /> : <></>}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => navigate('/research-interest')}>Research Interest</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate('/lab-equipment')}>Lab Equipment</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate('/funding')}>Funding</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate('/projects')}>Projects</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate('/publications')}>Publications</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger
                        onMouseEnter={() => setIsTeamHovered(true)}
                        onMouseLeave={() => setIsTeamHovered(false)}
                        className="text-primary hover:text-accent transition-colors duration-300">
                        Team Members {isTeamHovered ? <ChevronDown className="inline-block ml-1" /> : <></>}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => navigate('/dr-anamika-prasad')}>P.I. Anamika Prasad</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate('/phd-students')}>PhD. Students</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate('/masters-students')}>Master's Students</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate('/undergraduate-students')}>Undergraduate Students</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger
                        onMouseEnter={() => setIsPortfolioHovered(true)}
                        onMouseLeave={() => setIsPortfolioHovered(false)}
                        className="text-primary hover:text-accent transition-colors duration-300">
                        Portfolio {isPortfolioHovered ? <ChevronDown className="inline-block ml-1" /> : <></>}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => navigate('/gallery')}>Gallery</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate('/videos')}>Videos</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <a onClick={() => navigate("/news")} className="text-primary hover:text-accent transition-colors duration-300">Lab News</a>
                <a onClick={() => navigate("/contact")} className="text-primary hover:text-accent transition-colors duration-300">Contact</a>
            </nav>

            {/* Mobile Menu */}
            <div className="md:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger className="text-primary hover:text-accent transition-colors duration-300">
                        <Menu />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => navigate("/")}>Home</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate("/about-us")}>About Us</DropdownMenuItem>
                        <DropdownMenuLabel
                                                className="group/dropdown-menu-item text-black relative flex cursor-default items-center gap-2.5 rounded-2xl px-3 py-2 text-sm font-medium outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-9.5 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive"

                        onClick={() => setIsResearchMenuOpen(!isResearchMenuOpen)}>Research {isResearchMenuOpen ? <ChevronUp className='ml-auto' /> : <ChevronDown className='ml-auto'/>}</DropdownMenuLabel>
                        {isResearchMenuOpen && (
                            <>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className='text-xs text-secondary ml-2' onClick={() => navigate('/research-interest')}>Research Interest</DropdownMenuItem>
                                <DropdownMenuItem className='text-xs text-secondary ml-2' onClick={() => navigate('/lab-equipment')}>Lab Equipment</DropdownMenuItem>
                                <DropdownMenuItem className='text-xs text-secondary ml-2' onClick={() => navigate('/funding')}>Funding</DropdownMenuItem>
                                <DropdownMenuItem className='text-xs text-secondary ml-2' onClick={() => navigate('/projects')}>Projects</DropdownMenuItem>
                                <DropdownMenuItem className='text-xs text-secondary ml-2' onClick={() => navigate('/publications')}>Publications</DropdownMenuItem>
                            </>
                        )}
                        <DropdownMenuLabel 
                        className="group/dropdown-menu-item text-black relative flex cursor-default items-center gap-2.5 rounded-2xl px-3 py-2 text-sm font-medium outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-9.5 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive"
                        onClick={() => setIsTeamMenuOpen(!isTeamMenuOpen)}>Team Members {isTeamMenuOpen ? <ChevronUp className='ml-auto' /> : <ChevronDown className='ml-auto'/>}</DropdownMenuLabel>
                        {isTeamMenuOpen && (
                            <>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className='text-xs text-secondary ml-2' onClick={() => navigate('/dr-anamika-prasad')}>P.I. Anamika Prasad</DropdownMenuItem>
                                <DropdownMenuItem className='text-xs text-secondary ml-2' onClick={() => navigate('/phd-students')}>PhD. Students</DropdownMenuItem>
                                <DropdownMenuItem className='text-xs text-secondary ml-2' onClick={() => navigate('/masters-students')}>Master's Students</DropdownMenuItem>
                                <DropdownMenuItem className='text-xs text-secondary ml-2' onClick={() => navigate('/undergraduate-students')}>Undergraduate Students</DropdownMenuItem>

                            </>
                        )}
                        <DropdownMenuLabel 
                                                className="group/dropdown-menu-item text-black relative flex cursor-default items-center gap-2.5 rounded-2xl px-3 py-2 text-sm font-medium outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-9.5 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive"

                        onClick={() => setIsPortfolioMenuOpen(!isPortfolioMenuOpen)}>Portfolio {isPortfolioMenuOpen ? <ChevronUp className='ml-auto' /> : <ChevronDown className='ml-auto'/>}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {isPortfolioMenuOpen && (
                            <>
                                <DropdownMenuItem className='text-xs text-secondary ml-2' onClick={() => navigate('/gallery')}>Gallery</DropdownMenuItem>
                                <DropdownMenuItem className='text-xs text-secondary ml-2' onClick={() => navigate('/videos')}>Videos</DropdownMenuItem>
                            </>
                        )}
                        <DropdownMenuItem onClick={() => navigate("/news")}>Lab News</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate("/contact")}>Contact</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}

export default Header;
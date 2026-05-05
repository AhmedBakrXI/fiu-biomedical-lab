import { ChevronDown } from 'lucide-react';
import Logo from '../assets/logo.png'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const [isResearchHovered, setIsResearchHovered] = useState(false);
    const navigate = useNavigate();

    return (
        <header className="w-full h-24 flex items-center justify-between px-8 md:px-16">
            <div >
                <img src={Logo} alt="FIU BME Lab Logo" className="h-16 inline-block mr-2" />
            </div>
            <nav className="flex items-center gap-4">
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
                <a onClick={() => navigate("/contact")} className="text-primary hover:text-accent transition-colors duration-300">Contact</a>
            </nav>
        </header>
    );
}

export default Header;
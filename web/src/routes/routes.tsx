import { ReactNode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "../pages/About";
import { CharacterInformation } from "../pages/CharacterInformation";
import { CommentsSection } from "../pages/CommentsSection";
import { Home } from "../pages/Home";

export function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Sobre" element={<About />} />
                <Route path="/Personagens" element={<CharacterInformation />} />
                <Route path="/Comentarios" element={<CommentsSection />} />
                <Route path="*" element={'Error'} />
            </Routes>
        </Router>
    );
}
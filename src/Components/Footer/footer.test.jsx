import { render, screen } from "@testing-library/react";

import Footer from ".";

describe("<Footer/>", ()=>{});

test ("Verificar se footer está sendo renderizado e imagens aparecendo", () => {
    render(<Footer />);

    const imageFace = getByAltText("ícone do facebook");
    
    expect(imageFace).toContain("/images/ico-facebook.png");

    const imageInsta = getByAltText("ícone do instagram");
    
    expect(imageInsta).toContain("/images/ico-instagram.png");

    const imageWhats = getByAltText("ícone do whatsapp");
    
    expect(imageWhats).toContain("/images/ico-whatsapp.png");


});



import {render, screen} from "@testing-library/react";
import DetailCard from ".";

describe("<DetailCard/>", ()=>{});

test ("Verificar se aparece informações da página", () => {
    render(<DetailCard />);

   

    const title = screen.getByRole("heading", { name: "Details about Dentist" });

    const description = screen.getByText("dentista.nome");

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();

});

test("Verificar se Imagem está aparecendo corretamente", ()=>{
    
    const imageDetail = getByAltText("doctor placeholder");
    
    expect(imageDetail).toContain("/images/doctor.jpg");


});
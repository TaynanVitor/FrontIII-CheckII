import { render} from "@testing-library/react";

import Card from ".";

describe("<Card/>", () => {
  test("Verificar se imagem está aparecendo", () => {
    render(<Card />);

    const image = getByAltText("doctor placeholder");
    
    expect(image).toContain("/images/doctor.jpg");
    
  });

});
import { render, screen, fireEvent } from "@testing-library/react";
import ThemeProvider from "../contexts/ThemeProvider";
import NavBar from "../Navbar";

describe("<App/>", () => {
  test("Testar se o tema inicial é o tema light", () => {
    render( <NavBar /> );

    const tema = screen.getByTestId("light");

    expect(tema).toHaveClass("btn btn-dark");

    const button = screen.getByRole("button", { name: /🌙/i });

    fireEvent.click(button);

    expect(tema).toHaveClass("btn btn-light");
  });
});
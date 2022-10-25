import React from "react";
import { render, screen } from "@testing-library/react";

import Welcome from "../../../components/Welcome/Welcome";

describe("Welcome", () => {
  test("renders Welcome component", () => {
    const saludo = "Hola Mundo";
    render(<Welcome greet={`${saludo}`} />);
    expect(screen.getByText(saludo)).toBeInTheDocument();
  });
});

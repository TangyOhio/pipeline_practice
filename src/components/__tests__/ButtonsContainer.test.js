import ButtonsContainer from "../ButtonsContainer";
import { render, screen, fireEvent } from "@testing-library/react";

describe("ButtonsContainer", () => {
  test("starts in default state", () => {
    render(<ButtonsContainer />);

    expect(screen.getByText(/change the word/i)).toBeDefined();
    expect(screen.getByText("French")).toBeDefined();
    expect(screen.getByText("Toast")).toBeDefined();
    expect(screen.getByText("Chiken")).toBeDefined();
    expect(screen.getByText("Nuggies")).toBeDefined();
  });

  test("changes state", () => {
    render(<ButtonsContainer />);

    expect(screen.getByText(/change the word/i)).toBeDefined();

    const button1 = screen.getByText("French");
    expect(button1).toBeDefined();

    const button2 = screen.getByText("Toast");
    expect(button2).toBeDefined();

    fireEvent.click(button1);
    expect(screen.getAllByText("French").length).toBe(2);

    fireEvent.click(button2);
    expect(screen.getAllByText("Toast").length).toBe(2);
    expect(screen.getAllByText("French").length).toBe(1);
  });
});

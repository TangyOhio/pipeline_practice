import ButtonsContainer from "../ButtonsContainer";
import { render, screen, fireEvent } from "@testing-library/react";

describe("ButtonsContainer", () => {
  const words = ["French", "Toast", "Chiken", "Nuggies"];

  test("renders", () => {
    render(<ButtonsContainer words={words} />);

    expect(screen.getByText(/change the word/i)).toBeDefined();
    expect(screen.getByText(words[0])).toBeDefined();
    expect(screen.getByText(words[1])).toBeDefined();
    expect(screen.getByText(words[2])).toBeDefined();
    expect(screen.getByText(words[3])).toBeDefined();
  });

  test("changes state", () => {
    render(<ButtonsContainer words={words} />);

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

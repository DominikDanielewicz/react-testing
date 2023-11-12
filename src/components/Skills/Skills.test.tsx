import { Skills } from "./skills";
import { render, screen } from "@testing-library/react";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"];
  test("Skills renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("render a list of skills", () => {
    render(<Skills skills={skills} />);
    //We can use getAllBy to check if the list items renders correctly
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });

  //queryBy
  test("renders Login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  test("Start lerning button is not rendered", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  //findBy - returns a promise
  test("Start learning button is eventually displayed", async () => {
    render(<Skills skills={skills} />);
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      { timeout: 2000 }
    );
    expect(startLearningButton).toBeInTheDocument();
  });
});

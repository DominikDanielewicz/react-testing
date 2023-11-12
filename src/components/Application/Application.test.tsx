import { Application } from "./Application";
import { render, screen } from "@testing-library/react";

//Priority Order for Queries

//1. getByRole
//2. getByLabelText
//3. getByPlaceholderText
//4. getByText
//5. getByDisplayValue
//6. getByAltText
//7. getByTitle
//8. getByTestId

describe("Application (getByRole practice)", () => {
  test("Application renders correctly", () => {
    render(<Application />);
    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});

describe("Application (getByLabelText practice)", () => {
  test("Application renders correctly", () => {
    render(<Application />);

    const nameElement = screen.getByLabelText("Name");
    expect(nameElement).toBeInTheDocument();

    const termsElement = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement).toBeInTheDocument();

    //If there will be two elements with the same label, we can pass a selector option
    const termsElement1 = screen.getByLabelText(
      "I agree to the terms and conditions",
      { selector: "input" }
    );
    expect(termsElement1).toBeInTheDocument();
  });
});

describe("Application (getByPlaceholderText practice)", () => {
  test("Application renders correctly", () => {
    render(<Application />);

    const nameElement = screen.getByPlaceholderText("Fullname");
    expect(nameElement).toBeInTheDocument();
  });
});

describe("Application (getByText practice)", () => {
  test("Application renders correctly", () => {
    render(<Application />);

    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();
  });
});

describe("Application (getByDisplayValue practice)", () => {
  test("Application renders correctly", () => {
    render(<Application />);

    const nameElement = screen.getByDisplayValue("Bob");
    expect(nameElement).toBeInTheDocument();
  });
});

describe("Application (getByAltText practice)", () => {
  test("Application renders correctly", () => {
    render(<Application />);

    const imageElement = screen.getByAltText("a person with a laptop");
    expect(imageElement).toBeInTheDocument();
  });
});

describe("Application (getByTitle practice)", () => {
  test("Application renders correctly", () => {
    render(<Application />);

    const spanElement = screen.getByTitle("close");
    expect(spanElement).toBeInTheDocument();
  });
});

describe("Application (getByTestId practice)", () => {
  test("Application renders correctly", () => {
    render(<Application />);

    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();
  });
});

//---------------------------
//TextMatch

describe("Paragraph (diffrent TextMatch practice)", () => {
  test("Paragraph is in the Application", () => {
    render(<Application />);

    const paragraphElement1 = screen.getByText("All fields are mandatory");
    expect(paragraphElement1).toBeInTheDocument();

    const paragraphElement2 = screen.getByText("l fields are mandato", {
      exact: false,
    });
    expect(paragraphElement2).toBeInTheDocument();

    const paragraphElement3 = screen.getByText("all fields are mandatory", {
      exact: false,
    });
    expect(paragraphElement3).toBeInTheDocument();

    const paragraphElement4 = screen.getByText(/ll fields are mandatory/);
    expect(paragraphElement4).toBeInTheDocument();

    const paragraphElement5 = screen.getByText(/e mandatory/i);
    expect(paragraphElement5).toBeInTheDocument();

    const paragraphElement6 = screen.getByText(/^all fields are mandatory/i);
    expect(paragraphElement6).toBeInTheDocument();

    const paragraphElement7 = screen.getByText((content) =>
      content.startsWith("All")
    );
    expect(paragraphElement7).toBeInTheDocument();

    const paragraphElement8 = screen.getByText((content) =>
      content.endsWith("tory")
    );
    expect(paragraphElement8).toBeInTheDocument();

    const paragraphElement9 = screen.getByText((content) =>
      content.includes("fields")
    );
    expect(paragraphElement9).toBeInTheDocument();
  });
});

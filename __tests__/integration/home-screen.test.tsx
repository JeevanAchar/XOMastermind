import HomeScreen from "@/app/index";
import { fireEvent, render, screen } from "@testing-library/react-native";
import { Alert } from "react-native";

jest.spyOn(Alert, "alert").mockImplementation(() => {});

describe("HomeScreen Integration Tests", () => {
  it("renders header, boilerplate titles, and tech stack tags", () => {
    render(<HomeScreen />);

    expect(screen.getByText("React Native 2026")).toBeTruthy();
    expect(screen.getByText("React-Native-Boiler-Plate-2026")).toBeTruthy();
    expect(screen.getByText("Expo SDK v57")).toBeTruthy();
    expect(screen.getByText("React Native 0.86")).toBeTruthy();
  });

  it("renders path aliases and useful scripts sections", () => {
    render(<HomeScreen />);

    expect(screen.getByText("Configured Path Aliases")).toBeTruthy();
    expect(screen.getByText("@components/*")).toBeTruthy();
    expect(screen.getByText("@utils/*")).toBeTruthy();
    expect(screen.getByText("Useful Scripts")).toBeTruthy();
  });

  it("increments interaction counter and triggers alert on button press", () => {
    render(<HomeScreen />);

    const testButton = screen.getByText(/Test Interaction/i);
    expect(testButton).toBeTruthy();

    fireEvent.press(testButton);

    expect(Alert.alert).toHaveBeenCalledWith(
      "Boilerplate Active",
      expect.stringContaining("Click count: 1"),
    );
  });
});

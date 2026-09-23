import { Header } from "@components/header";
import { ScreenWrapper } from "@components/screen-wrapper";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import { Card } from "@components/ui/card";
import { fireEvent, render, screen } from "@testing-library/react-native";
import { Text } from "react-native";

describe("UI Components Unit Tests", () => {
  describe("Button", () => {
    it("renders with correct label", () => {
      render(<Button label="Submit Form" />);
      expect(screen.getByText("Submit Form")).toBeTruthy();
    });

    it("handles onPress event", () => {
      const onPressMock = jest.fn();
      render(<Button label="Click Me" onPress={onPressMock} />);

      fireEvent.press(screen.getByText("Click Me"));
      expect(onPressMock).toHaveBeenCalledTimes(1);
    });

    it("shows loading indicator when isLoading is true", () => {
      render(<Button label="Loading..." isLoading />);
      expect(screen.queryByText("Loading...")).toBeNull();
    });
  });

  describe("Badge", () => {
    it("renders badge label correctly", () => {
      render(<Badge label="Beta v1.0" variant="success" />);
      expect(screen.getByText("Beta v1.0")).toBeTruthy();
    });
  });

  describe("Card", () => {
    it("renders card title, subtitle, and child content", () => {
      render(
        <Card title="Card Title" subtitle="Card Subtitle">
          <Text>Card Inner Content</Text>
        </Card>,
      );

      expect(screen.getByText("Card Title")).toBeTruthy();
      expect(screen.getByText("Card Subtitle")).toBeTruthy();
      expect(screen.getByText("Card Inner Content")).toBeTruthy();
    });
  });

  describe("Header", () => {
    it("renders header title and badge", () => {
      render(<Header title="Dashboard" subtitle="Welcome back" badgeText="Admin" />);

      expect(screen.getByText("Dashboard")).toBeTruthy();
      expect(screen.getByText("Welcome back")).toBeTruthy();
      expect(screen.getByText("Admin")).toBeTruthy();
    });
  });

  describe("ScreenWrapper", () => {
    it("renders children within fixed wrapper", () => {
      render(
        <ScreenWrapper>
          <Text>Fixed Screen Content</Text>
        </ScreenWrapper>,
      );
      expect(screen.getByText("Fixed Screen Content")).toBeTruthy();
    });

    it("renders children within scrollable wrapper", () => {
      render(
        <ScreenWrapper scrollable>
          <Text>Scrollable Screen Content</Text>
        </ScreenWrapper>,
      );
      expect(screen.getByText("Scrollable Screen Content")).toBeTruthy();
    });
  });
});

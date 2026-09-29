import HomeScreen from "@/app/index";
import { SelectGamesScreen } from "@/screens/SelectGamesScreen";
import { SplashScreen } from "@/screens/SplashScreen";
import { render, screen } from "@testing-library/react-native";
import React from "react";

describe("Doodle XO Screens Integration Tests", () => {
  it("renders SplashScreen with Doodle XO header", () => {
    render(<SplashScreen />);

    expect(screen.getByText("DOODLE XO")).toBeTruthy();
    expect(screen.getByText("the graph paper showdown")).toBeTruthy();
  });

  it("renders SelectGamesScreen with Select Game header, Record, and Featured Game", () => {
    render(<SelectGamesScreen />);

    expect(screen.getByText("Select Game")).toBeTruthy();
    expect(screen.getByText("Pick a scrap paper to start doodling!")).toBeTruthy();
    expect(screen.getByText("PENCIL RECORD")).toBeTruthy();
    expect(screen.getByText("XO Tic-Tac-Toe")).toBeTruthy();
    expect(screen.getByText("PLAY NOW")).toBeTruthy();
  });

  it("renders Upcoming games in SelectGamesScreen", () => {
    render(<SelectGamesScreen />);

    expect(screen.getByText("Dots & Boxes")).toBeTruthy();
    expect(screen.getByText("Hangman")).toBeTruthy();
  });

  it("renders HomeScreen initial state", () => {
    render(<HomeScreen />);

    expect(screen.getByText("DOODLE XO")).toBeTruthy();
  });
});

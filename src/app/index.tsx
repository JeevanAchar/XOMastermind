import { Redirect } from "expo-router";
import React from "react";

/**
 * App entry point – immediately redirects to the splash screen.
 * All navigation flow is handled by individual route files.
 */
export default function Index() {
  return <Redirect href="/splash" />;
}

import { Header } from "@components/header";
import { ScreenWrapper } from "@components/screen-wrapper";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import { Card } from "@components/ui/card";
import { useState } from "react";
import { Alert, Text, View } from "react-native";

interface StackItem {
  name: string;
  version: string;
  variant: "purple" | "info" | "success" | "warning" | "default";
}

const TECH_STACK: StackItem[] = [
  { name: "Expo SDK", version: "v57", variant: "purple" },
  { name: "React Native", version: "0.86", variant: "info" },
  { name: "React", version: "19.2", variant: "info" },
  { name: "NativeWind", version: "v4", variant: "success" },
  { name: "Tailwind CSS", version: "v3.4", variant: "success" },
  { name: "Expo Router", version: "v57", variant: "purple" },
  { name: "TypeScript", version: "v6", variant: "info" },
  { name: "Jest + RNTL", version: "Unit/Integ", variant: "warning" },
  { name: "ESLint 9 Flat", version: "Expo Config", variant: "default" },
  { name: "Prettier", version: "Tailwind Plugin", variant: "default" },
];

export default function HomeScreen() {
  const [clickCount, setClickCount] = useState(0);

  const handleAction = () => {
    setClickCount((prev) => prev + 1);
    Alert.alert(
      "Boilerplate Active",
      `Component interaction verified! Click count: ${clickCount + 1}`,
    );
  };

  return (
    <ScreenWrapper scrollable>
      <Header
        title="React Native 2026"
        subtitle="Modern, opinionated Expo & React Native starter template"
        badgeText="SDK 57"
      />

      {/* Hero Welcome Card */}
      <Card
        title="React-Native-Boiler-Plate-2026"
        subtitle="Production-ready architecture with clean alias imports"
        className="mb-5 bg-gradient-to-br from-slate-900 to-slate-800"
      >
        <Text className="mb-4 text-sm leading-relaxed text-slate-300">
          Pre-configured with Tailwind CSS / NativeWind styling, Expo Router file-based navigation,
          ESLint 9, Prettier with Tailwind sorting, Jest testing, and path aliases.
        </Text>

        <View className="mb-4 flex-row flex-wrap gap-2">
          {TECH_STACK.map((item) => (
            <Badge key={item.name} label={`${item.name} ${item.version}`} variant={item.variant} />
          ))}
        </View>

        <View className="flex-row gap-3 pt-2">
          <Button
            label={`Test Interaction (${clickCount})`}
            variant="primary"
            className="flex-1"
            onPress={handleAction}
          />
        </View>
      </Card>

      {/* Path Aliases Showcase */}
      <Card
        title="Configured Path Aliases"
        subtitle="Clean imports throughout the project without relative paths"
        className="mb-5"
      >
        <View className="gap-2.5">
          <View className="rounded-xl border border-slate-800 bg-slate-900/90 p-3">
            <Text className="font-mono text-xs font-semibold text-indigo-400">@components/*</Text>
            <Text className="mt-0.5 text-xs text-slate-400">Reusable UI and layout components</Text>
          </View>

          <View className="rounded-xl border border-slate-800 bg-slate-900/90 p-3">
            <Text className="font-mono text-xs font-semibold text-sky-400">@utils/*</Text>
            <Text className="mt-0.5 text-xs text-slate-400">
              Helpers, business logic, and utilities
            </Text>
          </View>

          <View className="rounded-xl border border-slate-800 bg-slate-900/90 p-3">
            <Text className="font-mono text-xs font-semibold text-emerald-400">
              @hooks/* & @types/*
            </Text>
            <Text className="mt-0.5 text-xs text-slate-400">
              Custom React hooks and TypeScript types
            </Text>
          </View>

          <View className="rounded-xl border border-slate-800 bg-slate-900/90 p-3">
            <Text className="font-mono text-xs font-semibold text-amber-400">@/*</Text>
            <Text className="mt-0.5 text-xs text-slate-400">
              Root source directory (e.g. @/global.css)
            </Text>
          </View>
        </View>
      </Card>

      {/* Quick Commands Card */}
      <Card title="Useful Scripts" subtitle="Run directly from your terminal" className="mb-5">
        <View className="gap-2 rounded-xl border border-slate-800/80 bg-slate-950 p-4">
          <View className="flex-row items-center justify-between">
            <Text className="font-mono text-xs text-slate-300">npm start</Text>
            <Text className="text-xs text-slate-500">Start Expo dev server</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="font-mono text-xs text-slate-300">npm run lint</Text>
            <Text className="text-xs text-slate-500">Run ESLint 9 checks</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="font-mono text-xs text-slate-300">npm run format</Text>
            <Text className="text-xs text-slate-500">Prettier format code</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="font-mono text-xs text-slate-300">npm run test:coverage</Text>
            <Text className="text-xs text-slate-500">Jest coverage report</Text>
          </View>
        </View>
      </Card>

      {/* Footer info */}
      <View className="items-center justify-center py-4">
        <Text className="text-xs font-medium text-slate-600">
          Ready for development • Edit src/app/index.tsx
        </Text>
      </View>
    </ScreenWrapper>
  );
}

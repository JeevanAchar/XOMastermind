// Type declarations for lucide-react-native (fallback if package lacks types)
declare module "lucide-react-native" {
  import * as React from "react";
  import { SvgProps } from "react-native-svg";

  export interface LucideProps extends SvgProps {
    size?: number | string;
    color?: string;
    strokeWidth?: number;
  }

  export const ArrowRight: React.ComponentType<LucideProps>;
  export const Gamepad2: React.ComponentType<LucideProps>;
  export const Undo: React.ComponentType<LucideProps>;
  export const Lightbulb: React.ComponentType<LucideProps>;
  export const XCircle: React.ComponentType<LucideProps>;
  export const Pause: React.ComponentType<LucideProps>;
  export const Lock: React.ComponentType<LucideProps>;
  export const Pencil: React.ComponentType<LucideProps>;
  export const Play: React.ComponentType<LucideProps>;
  export const Fire: React.ComponentType<LucideProps>;
  export const Sparkles: React.ComponentType<LucideProps>;
  export const Paperclip: React.ComponentType<LucideProps>;
  export const BookOpen: React.ComponentType<LucideProps>;
  export const Trophy: React.ComponentType<LucideProps>;
  export const Flame: React.ComponentType<LucideProps>;
  export const ArrowLeft: React.ComponentType<LucideProps>;
  export const Mic: React.ComponentType<LucideProps>;
}

import * as React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

export type ButtonType = "primary" | "danger" | null;

export interface IconButtonProps {
  onClick?: () => void;
  icon?: JSX.Element;
  type?: ButtonType;
  text?: string;
  bordered?: boolean;
  shadow?: boolean;
  className?: string;
  title?: string;
  disabled?: boolean;
  tabIndex?: number;
  autoFocus?: boolean;
  style?: CSSProperties;
  aria?: string;
}

export function IconButton({
  onClick,
  icon,
  type,
  text,
  bordered = false,
  shadow = false,
  className,
  title,
  disabled,
  tabIndex,
  autoFocus,
  style,
  aria,
}: IconButtonProps) {
  const getVariant = (type: ButtonType): ButtonProps["variant"] => {
    switch (type) {
      case "primary":
        return "default";
      case "danger":
        return "destructive";
      default:
        return "secondary";
    }
  };

  return (
    <Button
      onClick={onClick}
      variant={getVariant(type ?? null)}
      className={cn(
        {
          "border-2": bordered,
          "shadow-md": shadow,
        },
        className,
      )}
      title={title}
      disabled={disabled}
      tabIndex={tabIndex}
      autoFocus={autoFocus}
      style={style}
      aria-label={aria}
    >
      {icon}
      {text && <span className="ml-2">{text}</span>}
    </Button>
  );
}

import * as React from "react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent } from "./sheet";
import { ScrollArea } from "./scroll-area";
import { Separator } from "./separator";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  onClose?: () => void;
  showMobileSidebar?: boolean;
}

export function Sidebar({
  className,
  isOpen,
  onClose,
  showMobileSidebar = true,
  children,
  ...props
}: SidebarProps) {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  // Handle sheet close
  const handleSheetClose = () => {
    setIsSheetOpen(false);
    onClose?.();
  };

  return (
    <>
      {showMobileSidebar && (
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetContent side="left" className="w-[300px] sm:hidden p-0">
            <ScrollArea className="h-full">
              <div className={cn("h-full", className)} {...props}>
                {children}
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      )}
      <div
        className={cn(
          "hidden sm:flex h-full w-[300px] flex-col bg-background",
          className,
        )}
        {...props}
      >
        <ScrollArea className="flex-1">{children}</ScrollArea>
      </div>
    </>
  );
}

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarHeader({
  className,
  children,
  ...props
}: SidebarHeaderProps) {
  return (
    <div
      className={cn("flex h-[60px] items-center px-6", className)}
      {...props}
    >
      {children}
    </div>
  );
}

interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarNav({ className, children, ...props }: SidebarNavProps) {
  return (
    <div className={cn("flex-1 space-y-1 p-2", className)} {...props}>
      {children}
    </div>
  );
}

interface SidebarNavItemProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
  onSelect?: () => void;
  icon?: React.ReactNode;
}

export function SidebarNavItem({
  className,
  children,
  isActive,
  onSelect,
  icon,
  ...props
}: SidebarNavItemProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent hover:text-accent-foreground",
        isActive && "bg-accent",
        className,
      )}
      onClick={onSelect}
      role="button"
      {...props}
    >
      {icon && <div className="w-4 h-4">{icon}</div>}
      {children}
    </div>
  );
}

interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarFooter({
  className,
  children,
  ...props
}: SidebarFooterProps) {
  return (
    <>
      <Separator />
      <div className={cn("p-4", className)} {...props}>
        {children}
      </div>
    </>
  );
}

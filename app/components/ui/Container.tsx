import { cn } from "@/lib/utils";

export default function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full container max-w-screen-xl",
        className
      )}
    >
      {children}
    </div>
  );
}
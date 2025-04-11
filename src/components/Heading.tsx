import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  children: React.ReactNode;
  className?: string;
};

export function Heading({
  as: Comp = "h1",
  className,
  children,
  size = "lg",
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
        "font-bowlby uppercase",
        size === "xl" && "text-4xl sm:text-6xl md:text-7xl lg:text-8xl",
        size === "lg" && "text-3xl sm:text-5xl md:text-6xl lg:text-7xl",
        size === "md" && "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
        size === "sm" && "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
        size === "xs" && "text-lg sm:text-xl md:text-2xl",
        className
      )}
    >
      {children}
    </Comp>
  );
}

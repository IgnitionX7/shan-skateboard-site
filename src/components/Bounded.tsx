// import { CSSProperties, ElementType, ReactNode } from "react";
// import clsx from "clsx";

// type BoundedProps = {
//   as?: ElementType;
//   className?: string;
//   style?: CSSProperties;
//   children: ReactNode;
// };

// export function Bounded({
//   as: Comp = "section",
//   className,
//   children,
//   ...restProps
// }: BoundedProps) {
//   return (
//     <Comp
//       className={clsx(
//         "px-6 py-fluid [_.header+&]:pt-[11rem] md:[_.header+&]:pt-[8rem]",
//         className
//       )}
//       {...restProps}
//     >
//       <div className="mx-auto w-full max-w-6xl">{children}</div>
//     </Comp>
//   );
// }
import { CSSProperties, ElementType, ReactNode } from "react";
import clsx from "clsx";

type BoundedProps = {
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export function Bounded({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundedProps) {
  return (
    <Comp
      className={clsx(
        "px-6 py-10 sm:py-12 md:py-16 [.header+&]:pt-44 md:[.header+&]:pt-32",
        className
      )}
      {...restProps}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Comp>
  );
}

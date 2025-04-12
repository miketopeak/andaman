import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"
import { GoArrowUpRight } from "react-icons/go"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base transition-all disabled:pointer-events-none disabled:opacity-50 outline-none",
  {
    variants: {
      variant: {
        default: "bg-btn-primary text-white hover:bg-btn-primary-hover",
        outline: "relative bg-btn-primary text-white hover:bg-btn-primary-hover after:content-[''] after:absolute after:w-[calc(100%-2px)] after:h-[calc(100%-2px)] after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-dark-700 after:rounded-full",
        white: "bg-white text-primary hover:bg-white/90",
        "white-outline":
          "border border-white text-white hover:bg-white/10",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 py-3 pl-3 pr-2",
        sm: "h-9 rounded-md gap-1.5 px-3",
        lg: "h-14 rounded-md px-6",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const arrowVariants = cva("hidden md:flex items-center justify-center relative z-10", {
  variants: {
    variant: {
      default: "bg-white text-primary",
      outline: "bg-white text-primary",
      white: "bg-primary text-white",
      "white-outline": "bg-white text-primary",
      secondary: "bg-white text-secondary",
      ghost: "bg-accent text-accent-foreground",
      link: "bg-white text-primary",
    },
    size: {
      default: "size-8 rounded-full",
      sm: "size-6 rounded-full",
      lg: "size-10 rounded-full",
      icon: "size-6 rounded-full",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

function Button({
  className,
  variant,
  size,
  asChild = false,
  hasArrow = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    hasArrow?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >

      <div className="relative z-10">
        {props.children}
      </div>
      {hasArrow && (
        <span className={cn(arrowVariants({ variant, size }))}>
          <GoArrowUpRight strokeWidth={1.5} />
        </span>
      )}
    </Comp>
  )
}

export { arrowVariants, Button, buttonVariants }


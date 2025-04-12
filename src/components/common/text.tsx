import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

const textVariants = cva("text-white", {
  variants: {
    variant: {
      heading: "~text-3xl/5xl",
      subheading: "text-base text-gray",
      paragraph: "text-base text-gray-light",
      icon: "flex-center size-14 rounded-full bg-dark-700 text-primary"
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    as: {
      p: "",
      h1: "",
      h2: "",
      h3: "",
      h4: "",
      span: "",
    }
  },
  defaultVariants: {
    variant: "paragraph",
    weight: "normal",
    as: "p",
  },
})

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement>,
  VariantProps<typeof textVariants> {
  asChild?: boolean
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, weight, as, asChild = false, ...props }, ref) => {
    // Map variant to appropriate HTML element if not explicitly specified
    let tagElement = as
    if (!as) {
      switch (variant) {
        case "heading":
          tagElement = "h1"
          break
        case "subheading":
          tagElement = "h3"
          break
        case "paragraph":
        default:
          tagElement = "p"
          break
      }
    }

    const Comp = asChild ? Slot : tagElement || "p"

    return (
      <Comp
        className={cn(textVariants({ variant, weight, as, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Text.displayName = "Text"

export { Text, textVariants }


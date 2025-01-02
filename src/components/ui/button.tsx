import * as React from 'react';
import {cva, type VariantProps} from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-wrape rounded-md text-sm font-medium transition-colors focuse-visible:outline-none focus-visible:ring-1 focus-visible:ring:ring disable:pointer-events-none disable:opacity-50",
  {
    variants:{
      variant:{
      default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",
      destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
  ghost:"hover:bg-accent hover:text-accent-foreground", 
link:"text-primary underline-offset-4 hover:underline",
    
},
size:{
default:"h-9 px-4 py-2",
sm:"h-8 rounded-md text-xs",
lg:"h-10 roundded-md px-8",
icon:"h-9 w-9"
},
    },
defaultVariants:{
variant:"default",
size: "default",
}
  
}
);

export interface ButtonProps 
extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  variant?: "default" | "destructive" | "outline" | "secondary"  |  "ghost" |"link";
size?: "default" | "sm" | "lg" | "icon";
asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props}, ref) =>{
    const Comp ="button";
    return(
      <Comp
      className={cn(buttonVariants({variant, size, className}))}
      ref={ref}
      {...props}
      />
    )
  }
);

Button.displayName = "Button";
export {Button, buttonVariants};
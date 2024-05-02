import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { GrEdit } from "react-icons/gr";
import { FaPhoneVolume } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import { GoPersonFill } from "react-icons/go";
import { FaSearch, FaHistory } from "react-icons/fa";
import { IoSearchCircleSharp } from "react-icons/io5";
import { BsFuelPumpFill } from "react-icons/bs";


import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "uppercase bg-primary text-primary-foreground hover:brightness-125 hover:scale-110 active:brightness-95 active:scale-100  ",
        destructive:
          "uppercase bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "uppercase border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "uppercase bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-sm px-3",
        lg: "h-11 rounded-sm px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

// ---------------------------------------------Custom Buttons ---------------------------
function EditButton({ sz }: { sz: string }) {                                                 // EditButton
  const classString: string = `bg-transparent text-[#41739e] ${sz}`                         
  return (
    <>  
      <Button size="icon"  className={`${classString}`}><GrEdit /></Button>
    </>
  )   
}

function CallButton({ sz }: { sz: string }) {                                                 // CallButton
  const classString: string = `bg-transparent text-[#41739e] ${sz}`                         
  return (
    <>  
      <Button size="icon"  className={`${classString}`}><FaPhoneVolume /></Button>
    </>
  )   
}

function MessageButton({ sz }: { sz: string }) {                                              // MessageButton
  const classString: string = `bg-transparent text-[#41739e] ${sz}`                         
  return (
    <>  
      <Button size="icon"  className={`${classString}`}><TiMessages /></Button>
    </>
  )   
}

function PersonButton({ sz }: { sz: string }) {                                                // PersonButton
  const classString: string = `bg-transparent text-[#41739e] ${sz}`                         
  return (
    <>  
      <Button size="icon"  className={`${classString}`}><GoPersonFill /></Button>
    </>
  )   
}

function CancelButton({ sz }: { sz: string }) {                                                // CancelButton
  const classString: string = `hover:scale-[1.02] active:text-primary-foreground ${sz}`                         
  return (
    <>  
      <Button className={`${classString}`}>Cancel</Button>
    </>
  )   
}

function SearchButton({ sz }: { sz: string }) {                                                // SearchButton
  const classString: string = `bg-transparent text-[#659948] ${sz}`                         
  return (
    <>  
      <Button size="icon"  className={`${classString}`}><IoSearchCircleSharp /></Button>
    </>
  ) 
}

function FuelButton({ sz }: { sz: string }) {                                                 // FuelButton
  const classString: string = `bg-transparent text-[#41739e] ${sz}`                         
  return (
    <>  
      <Button size="icon"  className={`${classString}`}><BsFuelPumpFill /></Button>
    </>
  ) 
}

export { Button, EditButton, CallButton, MessageButton, PersonButton, CancelButton, SearchButton, FuelButton, buttonVariants }

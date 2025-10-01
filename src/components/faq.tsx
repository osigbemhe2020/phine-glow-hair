"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQItemProps {
  question: string
  answer: string
  defaultOpen?: boolean
}

export function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <Card className="w-full transition-all duration-200 hover:shadow-md">
      <CardHeader className="cursor-pointer select-none pb-3" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-semibold text-balance leading-relaxed">{question}</h3>
          <div className="flex-shrink-0">
            {isOpen ? (
              <ChevronUp className="h-5 w-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent
        className={cn(
          "pt-0 transition-all duration-200 ease-in-out",
          isOpen ? "opacity-100" : "opacity-0 max-h-0 overflow-hidden",
        )}
      >
        <div className="text-muted-foreground leading-relaxed">{answer}</div>
      </CardContent>
    </Card>
  )
}

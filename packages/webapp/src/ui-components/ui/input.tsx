import * as React from "react"
import { useState, useRef, useEffect } from "react"
import { Mic } from "lucide-react"
import { cn } from "../../lib/utils"
import { toast } from "../../lib/toast"

export interface InputProps extends React.ComponentProps<"input"> {
  enableVoiceInput?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, enableVoiceInput = true, ...props }, ref) => {
    const [isRecording, setIsRecording] = useState(false)
    const recognitionRef = useRef<any>(null)
    const internalRef = useRef<HTMLInputElement>(null)
    
    // Forward the ref
    React.useImperativeHandle(ref, () => internalRef.current as HTMLInputElement, [])

    // Cleanup on unmount
    useEffect(() => {
      return () => {
        if (recognitionRef.current) {
          try {
            recognitionRef.current.stop?.()
          } catch (e) {
            // Ignore errors on cleanup
            console.warn("Error cleaning up recognition:", e)
          }
        }
      }
    }, [])

    const handleMicClick = () => {
      try {
        if (isRecording) {
          // Stop recording
          if (recognitionRef.current) {
            try {
              recognitionRef.current.stop?.()
            } catch (e) {
              // Ignore errors when stopping
              console.warn("Error stopping recognition:", e)
            }
          }
          setIsRecording(false)
          return
        }

        // Check if speech recognition is supported
        if (
          !("webkitSpeechRecognition" in window || "SpeechRecognition" in window)
        ) {
          toast?.error?.("Speech recognition not supported in this browser.")
          return
        }

        const SpeechRecognition =
          (window as any)?.SpeechRecognition ||
          (window as any)?.webkitSpeechRecognition
        
        if (!SpeechRecognition) {
          toast?.error?.("Speech recognition not available.")
          return
        }

        const recognition = new SpeechRecognition()
        recognition.lang = "en-US"
        recognition.interimResults = false
        recognition.continuous = true
        recognition.maxAlternatives = 1

        setIsRecording(true)

        recognition.onresult = (event: any) => {
          try {
            const results = event?.results
            if (!results || results.length === 0) return
            
            const lastResult = results[results.length - 1]
            const transcript = lastResult?.[0]?.transcript
            
            if (!transcript) return

            const input = internalRef.current
            if (input) {
              const currentValue = input.value || ""
              const newValue = currentValue + (currentValue ? " " : "") + transcript
              
              // Update the input value
              input.value = newValue
              
              // Trigger onChange if provided
              if (props?.onChange) {
                const syntheticEvent = {
                  target: { value: newValue },
                  currentTarget: { value: newValue },
                } as React.ChangeEvent<HTMLInputElement>
                props.onChange(syntheticEvent)
              }
            }
          } catch (error) {
            console.error("Error processing speech result:", error)
          }
        }

        recognition.onerror = (event: any) => {
          try {
            const error = event?.error
            if (error && error !== "no-speech") {
              toast?.error?.("Could not transcribe. Try again.")
            }
          } catch (e) {
            console.error("Error handling recognition error:", e)
          } finally {
            setIsRecording(false)
          }
        }

        recognition.onend = () => {
          setIsRecording(false)
        }

        recognition.start?.()
        recognitionRef.current = recognition
      } catch (error) {
        console.error("Error starting speech recognition:", error)
        toast?.error?.("Failed to start voice input. Please try again.")
        setIsRecording(false)
      }
    }

    return (
      <div className="relative w-full">
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            enableVoiceInput && "pr-10",
            className
          )}
          ref={internalRef}
          {...props}
        />
        {enableVoiceInput && (
          <button
            type="button"
            onClick={handleMicClick}
            className={cn(
              "absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md transition-colors",
              isRecording
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
            disabled={props?.disabled}
            aria-label={isRecording ? "Stop recording" : "Start voice input"}
          >
            <Mic className={cn("h-4 w-4", isRecording && "animate-pulse")} />
          </button>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }

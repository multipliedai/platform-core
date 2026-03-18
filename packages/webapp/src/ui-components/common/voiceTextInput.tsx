import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Mic,
  MicOff,
  Keyboard,
  Plus,
  FileSpreadsheet,
  FileText,
  FileImage,
  File,
  X,
  Circle,
  Square,
  Dot,
} from "lucide-react";
import TextareaAutosize from "react-textarea-autosize";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import AudioVisualizer from "../audioVisualizer";

interface VoiceTextInputProps {
  onSendMessage: (message: string) => void;
  placeholder?: string;
  disabled?: boolean;
  showParticles?: boolean;
  showButtonText?: boolean;
  onAttachFile?: (file: File) => void;
}

export default function VoiceTextInput({
  onSendMessage,
  placeholder = "Ask anything...",
  disabled = false,
  showParticles = true,
  showButtonText = true,
  onAttachFile,
}: VoiceTextInputProps) {
  const [inputValue, setInputValue] = useState("");
  const [inputMode, setInputMode] = useState<"text" | "voice">("text");
  const [isRecording, setIsRecording] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);
  const [transcript, setTranscript] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize audio context and analyzer
  const initializeAudio = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      audioContextRef.current = new AudioContext();
      analyserRef.current = audioContextRef.current.createAnalyser();
      const source = audioContextRef.current.createMediaStreamSource(stream);
      source.connect(analyserRef.current);

      analyserRef.current.fftSize = 256;

      // Start audio level monitoring
      const updateAudioLevel = () => {
        if (analyserRef.current && isRecording) {
          const dataArray = new Uint8Array(
            analyserRef.current.frequencyBinCount
          );
          analyserRef.current.getByteFrequencyData(dataArray);

          const average =
            dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length;
          setAudioLevel(average / 255);

          animationFrameRef.current = requestAnimationFrame(updateAudioLevel);
        }
      };

      updateAudioLevel();

      // Initialize MediaRecorder for speech recognition simulation
      mediaRecorderRef.current = new MediaRecorder(stream);

      return stream;
    } catch (error) {
      console.error("Error accessing microphone:", error);
      return null;
    }
  };

  const startRecording = async () => {
    const stream = await initializeAudio();
    if (!stream) return;

    setIsRecording(true);
    setTranscript("");
    setIsExpanded(true);

    // Simulate speech recognition
    setTimeout(() => {
      if (isRecording) {
        const sampleTranscripts = [
          "How can I optimize my React components?",
          "Help me debug this JavaScript error",
          "What are the best practices for TypeScript?",
          "Can you explain how to use React hooks?",
          "Show me the project status",
          "Create a new task for the authentication system",
        ];
        const randomTranscript =
          sampleTranscripts[
            Math.floor(Math.random() * sampleTranscripts.length)
          ];
        setTranscript(randomTranscript);
      }
    }, 2000);
  };

  const stopRecording = () => {
    setIsRecording(false);
    setAudioLevel(0);

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    if (audioContextRef.current) {
      audioContextRef.current.close();
    }

    // Send the transcript as a message
    if (transcript) {
      setInputValue(transcript);
      setTranscript("");
    }

    setIsExpanded(false);
    setInputMode("text");
  };

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAttachments((prev) => [...prev, file]);
      if (onAttachFile) onAttachFile(file);
    }
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleRemoveAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const sendMessage = () => {
    if (!inputValue.trim() || disabled) return;
    onSendMessage(inputValue);
    setInputValue("");
    setAttachments([]); // Clear attachments on send
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const toggleInputMode = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    let raf: number;
    function update() {
      if (analyserRef.current && isRecording) {
        const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
        analyserRef.current.getByteFrequencyData(dataArray);
        const avg = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;
        setAudioLevel(avg / 255);
        raf = requestAnimationFrame(update);
      }
    }
    if (isRecording) update();
    return () => cancelAnimationFrame(raf);
  }, [isRecording]);

  const handleAttachClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <div className="flex flex-col items-center gap-2 justify-center">
      {/* {showParticles && <AgenticOrbAssistant showText={!isRecording} />} */}
      {/* Expanded Voice Interface */}

      {/* Main Input Interface */}
      <div className="non-draggable flex-shrink-0 w-full ">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex flex-col gap-2 w-full">
            {/* Input Container (flat border) */}
            <div className="group group-focus-within:border-[#007aff] w-full border border-gray-200 dark:border-white/10 rounded-lg shadow-sm bg-white dark:bg-[#1a1a1a] px-4 pt-3 pb-2 transition-all">
              <AnimatePresence>
                {/* Attachments Preview Bar */}
                {attachments.length > 0 && (
                  <ScrollArea className="w-full mb-4 h-28 md:max-w-3xl mx-auto overflow-y-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 100 }}
                      className="flex gap-2 flex-wrap"
                    >
                      {attachments.map((file, idx) => {
                        let icon = <File className="w-7 h-7 text-gray-400" />;
                        let bg = "bg-gray-200 dark:bg-gray-600";
                        let label = "File";
                        let isImage = false;

                        if (
                          file.type.includes("spreadsheet") ||
                          file.name.match(/\.(xlsx|xls|csv)$/i)
                        ) {
                          icon = (
                            <FileSpreadsheet className="w-7 h-7 text-emerald-600" />
                          );
                          bg = "bg-emerald-100";
                          label = "Spreadsheet";
                        } else if (
                          file.type.includes("pdf") ||
                          file.name.match(/\.pdf$/i)
                        ) {
                          icon = <File className="w-7 h-7 text-rose-500" />;
                          bg = "bg-rose-100";
                          label = "PDF";
                        } else if (
                          file.type.startsWith("image") ||
                          file.name.match(/\.(jpg|jpeg|png|gif|bmp|webp)$/i)
                        ) {
                          isImage = true;
                          label = "Image";
                        } else if (
                          file.type.includes("text") ||
                          file.name.match(/\.(txt|md)$/i)
                        ) {
                          icon = <FileText className="w-7 h-7 text-blue-500" />;
                          bg = "bg-blue-100";
                          label = "Text";
                        }

                        return (
                          <motion.div
                            key={file.name + idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center bg-white dark:bg-black/80 rounded-xl px-3 py-2 space-x-3 w-full sm:w-[48%] lg:w-[32%] border hover:border-black border-black/10 dark:border-white/10 relative"
                          >
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
                              {isImage ? (
                                <img
                                  src={URL.createObjectURL(file)}
                                  alt={file.name}
                                  className="w-full h-full object-cover rounded-md"
                                />
                              ) : (
                                <div
                                  className={`w-full h-full flex items-center justify-center ${bg}`}
                                >
                                  {icon}
                                </div>
                              )}
                            </div>

                            <div className="flex flex-col min-w-0 flex-1">
                              <span className="truncate text-black dark:text-white text-xs font-medium">
                                {file.name}
                              </span>
                              <span className="text-gray-500 dark:text-gray-400 text-xs">
                                {label}
                              </span>
                            </div>

                            <Button
                              variant="ghost"
                              size="icon"
                              className="ml-1 absolute top-1 right-1 group hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-200"
                              aria-label="Remove attachment"
                              onClick={() => handleRemoveAttachment(idx)}
                            >
                              <X className="w-4 h-4 text-gray-400 group-hover:text-black dark:text-gray-300 dark:group-hover:text-gray-300" />
                            </Button>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </ScrollArea>
                )}
              </AnimatePresence>
              {/* Input row: textarea + send button */}
              <div className="flex items-start gap-2">
                <TextareaAutosize
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={placeholder}
                  minRows={1}
                  maxRows={4}
                  onKeyPress={handleKeyPress}
                  disabled={disabled}
                  className="flex-1 bg-transparent outline-none resize-none text-base text-gray-900 dark:text-white placeholder:text-gray-400 border-none p-0 pr-2 textarea-scrollbar"
                />
                <Button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || disabled}
                  className="h-8 w-8 mt-1 p-0 rounded-full bg-black hover:bg-gray-700 text-white flex items-center justify-center disabled:opacity-50"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>

              {/* Bottom row inside the box (same as image) */}
              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300 mt-3">
                <div className="flex items-center gap-4">
                  {/* Attach */}
                  <button
                    onClick={handleAttachClick}
                    className="inline-flex items-center gap-1"
                  >
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 dark:bg-white/10">
                      <Plus className="w-4 h-4" />
                    </span>
                    Attach
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />

                  {/* Voice Message */}

                  <div className="flex flex-col w-full max-w-sm space-y-2">
                    <button
                      onClick={toggleInputMode}
                      className="inline-flex items-center gap-1"
                    >
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 dark:bg-white/10 flex-shrink-0">
                        {isRecording ? (
                          <Dot
                            className="w-4 h-4 text-red-500"
                            style={{ transform: "scale(3)" }}
                          />
                        ) : (
                          <Mic className="w-4 h-4 text-gray-600 dark:text-white" />
                        )}
                      </span>
                      {isRecording ? (
                        <AnimatePresence mode="wait">
                          <motion.div
                            key="audio"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full max-w-xs flex-shrink-0"
                          >
                            <AudioVisualizer
                              isRecording={isRecording}
                              audioLevel={audioLevel}
                            />
                          </motion.div>
                        </AnimatePresence>
                      ) : (
                        "Voice Message"
                      )}
                    </button>
                  </div>
                </div>

                {/* Character Count */}
                <span className="text-gray-400">
                  {inputValue.length} / 3,000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

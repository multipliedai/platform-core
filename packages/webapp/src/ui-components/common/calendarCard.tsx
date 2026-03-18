import { useRef, useState, useEffect, useMemo } from "react";
import { Button } from "../ui/button";
import {
  CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Plus,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Card } from "../ui/card";

interface CalendarCardProps {
  title: string;
  actionName?: string;
  onExternalIconClick?: () => void;
  onActionClick?: () => void;
  children?: React.ReactNode;
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
  className?: string;
  allowFutureDates?: boolean;
}

const CalendarCard: React.FC<CalendarCardProps> = ({
  title,
  actionName,
  onExternalIconClick,
  onActionClick,
  children,
  selectedDate = new Date(),
  onDateSelect = () => {},
  className = "",
  allowFutureDates = true,
}) => {
  // stable "today" at midnight
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const getWeekStart = (date: Date) => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    const day = d.getDay(); // Sunday start; change if you prefer Monday
    d.setDate(d.getDate() - day);
    return d;
  };

  // initial: clamp selectedDate by allowFutureDates, then use week-start as anchor
  const initialDate =
    !allowFutureDates && selectedDate > today ? today : selectedDate;
  const initialWeekStart = getWeekStart(initialDate);

  // currentWeekStart represents the displayed week's start (Sunday 00:00)
  const [currentWeekStart, setCurrentWeekStart] =
    useState<Date>(initialWeekStart);
  const [direction, setDirection] = useState<number>(0);
  const constraintsRef = useRef<HTMLDivElement | null>(null);

  // Optional range selection (kept as you had it)
  const [selectedRange, setSelectedRange] = useState<{
    start: Date | null;
    end: Date | null;
  }>({ start: null, end: null });

  const handleDateSelect = (date: Date) => {
    const { start, end } = selectedRange;

    if (!start || (start && end)) {
      // Start a new selection
      setSelectedRange({ start: date, end: null });
    } else if (start && !end) {
      // Pick the second date
      if (date < start) {
        // Swap if user picked earlier date second
        setSelectedRange({ start: date, end: start });
      } else {
        setSelectedRange({ start, end: date });
      }
    }

    // notify parent
    onDateSelect(date);
  };

  // Only change the displayed week if the selectedDate belongs to a different week
  useEffect(() => {
    const sel =
      !allowFutureDates && selectedDate > today ? today : selectedDate;
    const selWeekStart = getWeekStart(sel);

    if (selWeekStart.getTime() !== currentWeekStart.getTime()) {
      // choose direction for animation
      setDirection(selWeekStart > currentWeekStart ? 1 : -1);
      setCurrentWeekStart(selWeekStart);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate, allowFutureDates, today]); // intentionally don't include setCurrentWeekStart

  // derive days of the week from the currentWeekStart anchor
  const weekDays = useMemo(() => {
    const days: Date[] = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(currentWeekStart);
      day.setDate(currentWeekStart.getDate() + i);
      days.push(day);
    }
    return days;
  }, [currentWeekStart]);

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const navigateWeek = (delta: number) => {
    const newWeek = new Date(currentWeekStart);
    newWeek.setDate(currentWeekStart.getDate() + delta * 7);

    // Prevent navigating beyond today if future dates are disallowed
    if (!allowFutureDates && newWeek > today) return;

    setDirection(delta);
    setCurrentWeekStart(newWeek);
  };

  // simpler, more reliable drag threshold
  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: {
      offset: { x: number; y: number };
      velocity: { x: number; y: number };
    }
  ) => {
    const offsetX = info.offset.x;
    if (offsetX < -100) {
      // swipe left -> next week (only if allowed)
      const nextWeek = new Date(currentWeekStart);
      nextWeek.setDate(currentWeekStart.getDate() + 7);
      if (allowFutureDates || nextWeek <= today) navigateWeek(1);
    } else if (offsetX > 100) {
      // swipe right -> previous week
      navigateWeek(-1);
    }
  };

  const isSameDay = (date1: Date, date2?: Date) => {
    if (!date2) return false;
    const a = new Date(date1);
    const b = new Date(date2);
    a.setHours(0, 0, 0, 0);
    b.setHours(0, 0, 0, 0);
    return a.getTime() === b.getTime();
  };

  const isToday = (date: Date) => isSameDay(date, today);

  // disable next/forward button if any day in current week is beyond today and future is not allowed
  const disableNextWeek =
    !allowFutureDates && weekDays.some((d) => d.getTime() > today.getTime());

  // normalize selected date for comparisons/display
  const normalizedSelectedDate = useMemo(() => {
    const d = !allowFutureDates && selectedDate > today ? today : selectedDate;
    const n = new Date(d);
    n.setHours(0, 0, 0, 0);
    return n;
  }, [selectedDate, allowFutureDates, today]);

  const formatDate = (date: Date): string =>
    date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <Card className={`rounded-lg shadow-none overflow-x-hidden ${className}`}>
      {/* header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <CalendarIcon className="w-4 h-4" />{" "}
            {monthNames[currentWeekStart.getMonth()]},{" "}
            {currentWeekStart.getFullYear()}
          </h2>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigateWeek(-1)}
              className="h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigateWeek(1)}
              className="h-8 w-8"
              disabled={disableNextWeek}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* week navigation */}
      <div className="p-4" ref={constraintsRef}>
        <motion.div
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
          className="cursor-grab active:cursor-grabbing"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentWeekStart.toISOString()}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="grid grid-cols-7 gap-1 mb-6"
            >
              {weekDays.map((day, index) => {
                const isSelected = isSameDay(day, normalizedSelectedDate);
                const todayCheck = isToday(day);
                const isFuture = day.getTime() > today.getTime();

                return (
                  <motion.button
                    key={day.toISOString()}
                    whileHover={{
                      scale: allowFutureDates || !isFuture ? 1.05 : 1,
                    }}
                    whileTap={{
                      scale: allowFutureDates || !isFuture ? 0.95 : 1,
                    }}
                    disabled={!allowFutureDates && isFuture}
                    onClick={() =>
                      !(!allowFutureDates && isFuture) && handleDateSelect(day)
                    }
                    className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
                      isSelected
                        ? "bg-black text-white"
                        : todayCheck
                        ? "bg-gray-50 text-gray-600"
                        : "hover:bg-gray-100"
                    } ${
                      !allowFutureDates && isFuture
                        ? "opacity-40 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    <span className="text-xs font-medium mb-1">
                      {dayNames[index]}
                    </span>
                    <span
                      className={`text-lg font-semibold ${
                        isSelected
                          ? "text-white"
                          : todayCheck
                          ? "text-gray-600"
                          : "text-gray-900"
                      }`}
                    >
                      {day.getDate()}
                    </span>
                  </motion.button>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* selected date content */}
      <div className="border-t border-gray-200">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2">
                {title}{" "}
                {onExternalIconClick ? (
                  <Button
                    size={"icon"}
                    variant={"ghost"}
                    onClick={onExternalIconClick}
                  >
                    {" "}
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                ) : (
                  <></>
                )}
              </h3>
              <p className="text-sm flex items-center gap-2 text-gray-400">
                <Calendar className="w-4 h-4" />{" "}
                {formatDate(
                  normalizedSelectedDate > today && !allowFutureDates
                    ? today
                    : normalizedSelectedDate
                )}
              </p>
            </div>
            {onActionClick && (
              <Button onClick={onActionClick} size="sm">
                <Plus className="h-4 w-4 mr-1" />
                {actionName}
              </Button>
            )}
          </div>

          <div className="space-y-3 max-h-[500px]  overflow-y-auto pr-2">
            {children}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CalendarCard;

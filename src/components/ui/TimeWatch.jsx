import React from "react";
import { Button } from "./button";
import { Input } from "./input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const formatTime = (time) => {
  const getTwoDigits = (num) => String(num).padStart(2, "0");

  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10); // 10ms 단위로 변환

  return `${getTwoDigits(hours)}:${getTwoDigits(minutes)}:${getTwoDigits(seconds)}:${milliseconds.toString().padStart(2, "0")}`;
};

const TimeWatch = () => {
  const [mode, setMode] = React.useState("stopwatch"); // ["stopwatch", "timer"]
  const [time, setTime] = React.useState(0);
  const [toggle, setToggle] = React.useState(false); // [true, false]
  const [isRunning, setIsRunning] = React.useState(false);
  const [tempTime, setTempTime] = React.useState(0); // 타이머 설정용 임시 시간

  React.useEffect(() => {
    let interval;
    if (isRunning) {
      if (mode === "stopwatch") {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else if (mode === "timer") {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime - 10);
        }, 10);
      }
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, mode]);

  const handleStart = () => {
    if (mode === "timer" && time <= 0) {
      alert("시간을 설정해주세요.");
      return;
    }
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const handleTimerMode = () => {
    setMode("timer");
    setTempTime(time / 60000); // 기존 타이머 시간을 분 단위로 변환하여 임시 시간 설정
  };

  const handleConfirmTime = () => {
    setTime(tempTime * 60000); // 임시 시간(분)을 밀리세컨드로 변환하여 설정
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4 items-center">
        <h1 className="text-2xl font-bold">
          {mode === "timer" ? "TIMER" : "STOPWATCH"}
        </h1>
        <Input
          className="w-32 text-center"
          type="text"
          value={formatTime(time)}
          readOnly
        />
      </div>
      <div className="flex gap-4">
        <div className="flex gap-1">
          <Button
            onClick={() => setMode("stopwatch")}
            variant={mode === "stopwatch" ? "default" : "outline"}
          >
            Stopwatch
          </Button>
          <AlertDialog>
            <AlertDialogTrigger
              onClick={() => setMode("timer")}
              className={
                mode === "timer"
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 border border-primary rounded-md text-sm p-2"
                  : "border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md text-sm p-2"
              }
            >
              Timer
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>타이머 시간 설정</AlertDialogTitle>
                <AlertDialogDescription>
                  <div className="flex align-middle items-center gap-1">
                    <Input
                      className="w-16 text-center"
                      type="number"
                      value={tempTime}
                      onChange={(e) => setTempTime(Number(e.target.value))}
                    />
                    Minutes
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>취소</AlertDialogCancel>
                <AlertDialogAction onClick={handleConfirmTime}>
                  확인
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="flex gap-1">
          <Button onClick={handleStart} className="bg-blue-500">
            Start
          </Button>
          <Button onClick={handleStop} className="bg-pink-500">
            Stop
          </Button>
          <Button onClick={handleReset} className="bg-green-500">
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TimeWatch;

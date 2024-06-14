"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

export default function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>();
  const [dateMultiple, setDateMultiple] = React.useState<Date[] | undefined>([]);

  const smallDate = date?.toLocaleDateString("es-ES", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  const today = new Date();
  const smallDateFormat = today?.toLocaleDateString("en-EN", {
    day: "numeric",
    month: "numeric",
    year: "numeric"
  });

  const check = (date: any) => {
    return date?.toLocaleDateString("en-EN", {
      day: "numeric",
      month: "numeric",
      year: "numeric"
    });
  }

  const test = `${smallDateFormat[0]}/${smallDateFormat[1]}/${smallDateFormat[2]}`
  console.log(new Date(smallDateFormat));
  

  return (
    <div className="flex flex-row gap-5 flex-wrap">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
        className="rounded-md border shadow"
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={(date) => date < new Date()}
        className="rounded-md border shadow"
      />
      <Calendar
        mode="multiple"
        selected={dateMultiple}
        onSelect={setDateMultiple}
        className="rounded-md border shadow"
      />

      <div>
        <h1 className="text-xl">Information about date: </h1>
        <div className="border-spacing-1"></div>
        <p className="text-sm">{smallDate}</p>
      </div>
    </div>
  );
}

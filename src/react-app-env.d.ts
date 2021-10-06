/// <reference types="react-scripts" />

declare module '@breejs/later' {
  type MaybeDate = Date | string | number;
  interface Recurrence {
    //
  }
  interface ScheduleData {
    schedules: Recurrence[];
    exceptions: Recurrence[];
    error: number;
  }
  interface ParseStatic {
    text(input: string): ScheduleData;
  }
  interface Schedule {
    next(
      count = 1,
      startDate?: MaybeDate,
      endDate?: MaybeDate
    ): Date[] | Date | 0;
  }
  interface Static {
    parse: ParseStatic;
    schedule(input: any): Schedule;
  }
  var later: Static;
  export default later;
}

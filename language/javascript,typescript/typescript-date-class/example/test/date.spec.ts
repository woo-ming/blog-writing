import { LocalDateTime, ZonedDateTime, ZoneId } from "@js-joda/core";
import "@js-joda/timezone";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import performance from "performance-now";

dayjs.extend(utc);
dayjs.extend(timezone);

const calculatePerformance = ({
  testCase,
  testLoopCount = 10000,
}: {
  testCase: () => any;
  testLoopCount?: number;
}): number => {
  const startTime = performance();
  for (let i = 0; i < testLoopCount; i++) {
    testCase();
  }
  const endTime = performance();

  return endTime - startTime;
};

describe("date library test", () => {
  it("js-joda", () => {
    const now = LocalDateTime.now();
    const after = now.plusDays(1);
    const before = now.minusDays(1);

    expect(now.isBefore(after)).toBeTruthy();
    expect(now.isEqual(after)).toBeFalsy();
    expect(now.isAfter(before)).toBeTruthy();
  });

  it("dayjs", () => {
    const now = dayjs();
    const after = dayjs(now).add(1, "day");
    const before = dayjs(now).subtract(1, "day");

    expect(dayjs(now).isBefore(after)).toBeTruthy();
    expect(dayjs(now).isSame(after)).toBeFalsy();
    expect(dayjs(now).isAfter(before)).toBeTruthy();
  });

  it("compare dayjs and js-joda", () => {
    const dayjsObjectPerformance = calculatePerformance({
      testCase: () => dayjs(),
    });

    const dayjsObjectWithTimezonePerformance = calculatePerformance({
      testCase: () => dayjs().tz("Asia/Seoul").toDate(),
    });

    const jsJodaObjectPerformance = calculatePerformance({
      testCase: () => ZonedDateTime.now(),
    });

    const jsJodaObjectWithTimezonePerformance = calculatePerformance({
      testCase: () =>
        ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime(),
    });

    console.log(
      `dayjs performance: ${dayjsObjectPerformance}ms, dayjsWithTimezone performance: ${dayjsObjectWithTimezonePerformance}ms`
    );
    console.log(
      `jsJoda performance: ${jsJodaObjectPerformance}ms, jsJodaWithTimezone performance: ${jsJodaObjectWithTimezonePerformance}ms`
    );

    expect(dayjsObjectPerformance < jsJodaObjectPerformance).toBeTruthy();
    expect(
      dayjsObjectWithTimezonePerformance > jsJodaObjectWithTimezonePerformance
    ).toBeTruthy();
  });
});

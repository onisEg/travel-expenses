import { describe, expect, test } from "vitest";
import { generateExpenseReport } from "../expenseTracker";
import { calculateBudgetStatus } from "../budgetCalculator";

describe("generateExpenseReport", () => {
    test("Generate an accurate expense report", () => {
        const report = generateExpenseReport([50, 0, 120, 85], 100);

        expect(report.travelDays).toBe(4);
        expect(report.expenseDays).toBe(3);
        expect(report.dailyBudget).toBe(100);
        expect(report.averageDailyExpense).toBe(63.75);
        expect(report.underBudget).toBe(true);
        expect(report.rating).toBe(3);
        expect(report.feedback).toBe("Excellent management!");
    });

    test("Les despeses contenen valors no numèrics", () => {
        expect(() => generateExpenseReport([50, NaN, 120, 85], 100)).toThrow(
            "You have wight numbers !"
        );
    });

    test("Lleugerament per sobre del pressupost", () => {
        const report = generateExpenseReport([100, 110, 120, 110], 100);

        expect(report.rating).toBe(2);
        expect(report.feedback).toBe("Correct, but tight!");
    });

    test("Molt per sobre del pressupost", () => {
        const report = generateExpenseReport([150, 140, 130, 140], 100);

        expect(report.rating).toBe(1);
        expect(report.feedback).toBe("It can improve");
    });


});



describe("calculateBudgetStatus", () => {
    test("Les despeses són menys del 80% del pressupost", () => {
        expect(calculateBudgetStatus(1000, 700)).toBe("Sota pressupost ✈️");
    });

    test("Les despeses són entre el 80% i el 100% del pressupost", () => {
        expect(calculateBudgetStatus(1000, 850)).toBe("Dins pressupost ✅");
    });

    test("Les despeses superen el pressupost", () => {
        expect(calculateBudgetStatus(1000, 1200)).toBe("Sobre pressupost ⚠️");
    });

    test("Les despeses són negatives", () => {
        expect(() => calculateBudgetStatus(1000, -850)).toThrow(
            "Les despeses no poden ser negatives"
        );
    });
});
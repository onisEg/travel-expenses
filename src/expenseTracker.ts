
export interface ExpenseReport {
    travelDays: number,
    expenseDays: number,
    dailyBudget: number,
    averageDailyExpense: number,
    underBudget: boolean,
    rating: 1 | 2 | 3,
    feedback: string,

}


export const generateExpenseReport = (dailyExpenses: number[], dailyBudget: number): ExpenseReport => {
    //validation

    if (dailyExpenses.some((expense) => Number.isNaN(expense))) {
        throw new Error("You have wight numbers !");
    }
    if (dailyExpenses.some((expense) => expense < 0)) {
        throw new Error("Cannot be negative !");
    }

    //variables
    const travelDays = dailyExpenses.length;
    const expenseDays = dailyExpenses.filter((expense) => expense > 0).length;
    const totalExpenses = dailyExpenses.reduce(
        (total, expense) => total + expense,
        0
    );
    const averageDailyExpense = totalExpenses / travelDays;
    const underBudget = averageDailyExpense <= dailyBudget;
    let rating: 1 | 2 | 3;
    let feedback: string;

 
    // rating
    if (averageDailyExpense <= dailyBudget) {
        rating = 3;
        feedback = "Excellent management!";
    } else if (averageDailyExpense <= dailyBudget * 1.2) {
        rating = 2;
        feedback = "Correct, but tight!";
    } else {
        rating = 1;
        feedback = "It can improve";
    }

    // Return the report
    return {
        averageDailyExpense,
        travelDays,
        expenseDays,
        dailyBudget,
        underBudget,
        rating,
        feedback,
    };

}

/* Result is:
{
travelDays: 4,
expenseDays: 3,
dailyBudget: 100,
averageDailyExpense: 63.75,
underBudget: true,
rating: 3,
feedback: "Excel·lent gestió!"
}
*/

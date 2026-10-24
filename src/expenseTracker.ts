
export interface ExpenseReport {
    travelDays: number,
    expenseDays: number,
    dailyBudget: number,
    averageDailyExpense: number,
    underBudget: boolean,
    rating: 1 | 2 | 3,
    feedback: string,

}


const generateExpenseReport = (dailyExpenses: number[], dailyBudget: number): ExpenseReport => {
    //validation
    if (dailyExpenses.some((expense) => expense < 0)) {
        throw new Error(`Expenses cannot be negative!`);
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

    if (averageDailyExpense <= dailyBudget) {
        rating = 3;
        feedback = "Excel·lent gestió!";
    } else if (averageDailyExpense <= dailyBudget * 1.2) {
        rating = 2;
        feedback = "Right, but tight";
    } else {
        rating = 1;
        feedback = "Can improve";
    }

    // Return the report
    return {
        travelDays,
        expenseDays,
        dailyBudget,
        averageDailyExpense,
        underBudget,
        rating,
        feedback,
    };



}

console.log(generateExpenseReport([50, 0, 120, 85], 100))

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

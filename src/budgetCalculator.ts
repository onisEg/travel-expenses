export const calculateBudgetStatus = (totalExpenses: number, initialBudget: number) => {
    if (totalExpenses < (initialBudget * 0.8)) {
        return `Under budget ✈️`
    } else if (totalExpenses >= (initialBudget * 0.8) && (totalExpenses <= initialBudget * 1)) {
        return `Within budget ✅`
    } else {
        return `Over budget ⚠️`
    }
}
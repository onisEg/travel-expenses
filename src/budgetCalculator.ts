export const calculateBudgetStatus = (initialBudget: number, totalExpenses: number): string => {
    // validation
    if (totalExpenses < 0) {
        throw new Error("Les despeses no poden ser negatives");
    }

    // status
    if (totalExpenses < initialBudget * 0.8) {
        return "Sota pressupost ✈️";
    } else if (totalExpenses <= initialBudget) {
        return "Dins pressupost ✅";
    } else {
        return "Sobre pressupost ⚠️";
    }
};

import { calculateBudgetStatus } from "./budgetCalculator";
import "./style.css"
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <main>
    <h1>Travel Budget Calculator</h1>
    <p>Check if your travel expenses are within budget.</p>

    <form id="budget-form">
      <div>
        <label for="initialBudget">Initial budget (€)</label>
        <input
          id="initialBudget"
          type="number"
          min="0"
          step="any"
          required
        />
      </div>

      <div>
        <label for="totalExpenses">Total expenses (€)</label>
        <input
          id="totalExpenses"
          type="number"
          min="0"
          step="any"
          required
        />
      </div>

      <button type="submit">Calculate</button>
    </form>

    <p id="result" aria-live="polite"></p>
  </main>
`;

const form = document.querySelector<HTMLFormElement>("#budget-form")!;
const budgetInput = document.querySelector<HTMLInputElement>("#initialBudget")!;
const expensesInput = document.querySelector<HTMLInputElement>("#totalExpenses")!;
const result = document.querySelector<HTMLParagraphElement>("#result")!;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const initialBudget = Number(budgetInput.value);
    const totalExpenses = Number(expensesInput.value);

    if (initialBudget <= 0 || totalExpenses < 0) {
        result.textContent = "Please enter valid amounts.";
        return;
    }
    result.textContent = calculateBudgetStatus(totalExpenses, initialBudget);
});

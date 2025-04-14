export type BudgetAction = { type: "SET_BUDGET"; payload: { budget: number } };

export type BudgetState = {
  budget: number;
};

export const initialState: BudgetState = {
  budget: 0,
};

export const budgetReducer = (
  state: BudgetState = initialState,
  action: BudgetActions
): BudgetState => {
  if (action.type === "SET_BUDGET") {
    return { ...state, budget: action.payload.budget };
  }
  return state;
};

export type BudgetActions = BudgetAction;

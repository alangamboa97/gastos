import { useMemo, useState } from "react";

const BudgetForm = () => {
  const [budget, setBudget] = useState(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(Number(e.target.value));
    console.log(e.target.name, e.target.value);
  };

  const isValid = useMemo(() => {
    return isNaN(budget) || budget <= 0;
  }, [budget]);
  return (
    <form className="space-y-5">
      <div className="flex flex-col space-y-5">
        <label
          htmlFor="budget"
          className="text-4xl  text-blue font-bold text-center"
        >
          ¿Cuál es tu presupuesto?
        </label>
        <input
          id="budget"
          type="number"
          value={budget}
          onChange={handleChange}
          placeholder="Define tu presupuesto"
          className="w-full bg-white border-gray-300 p-2 rounded-lg text-center text-2xl font-bold"
        />
      </div>
      <input
        type="submit"
        value="Definir presupuesto"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full p-2 uppercase disabled:opacity-50"
        disabled={isValid}
      />
    </form>
  );
};
export default BudgetForm;

import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";

export type StepStatus = "active" | "ready" | "blocked";

type Transaction = [
  { info?: StepStatus },
  { history?: StepStatus },
  { requiresId?: StepStatus },
  { unclassified?: StepStatus }
];

const initialTransactionInfo: Transaction = [
  { info: "ready" },
  { history: "blocked" },
  { requiresId: "blocked" },
  { unclassified: "blocked" },
];

const transactionReducer = (
  transaction: Transaction,
  action: { payload: string }
) =>
  transaction.map((item, index, arr) => {
    const [key, value] = Object.entries<StepStatus>(item)[0];

    if (key === action.payload && value !== "active") {
      if (index + 1 !== arr.length) {
        const [nextKey] = Object.entries(arr[++index])[0];

        arr.splice(index, 1, { [nextKey]: "ready" });
      }

      return { [key]: "active" };
    } else {
      return { [key]: value };
    }
  }) as Transaction;

const TransactionContext = createContext<{
  transactionInfo: Transaction;
  dispatch: Dispatch<{ payload: string }>;
}>({ transactionInfo: initialTransactionInfo, dispatch: () => null });

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const [transactionInfo, dispatch] = useReducer(
    transactionReducer,
    initialTransactionInfo
  );
  return (
    <TransactionContext.Provider value={{ transactionInfo, dispatch }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactionInfo = () => useContext(TransactionContext);

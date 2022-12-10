import { TypeTransaction } from "../core/enum/type-transaction";
import { TRANSACTION } from "../core/interfaces/transaction.interface";

const budgetMock: TRANSACTION[] = [
  {
    id: 1,
    categoryId: 1,
    icon: 'bi-cash',
    amount: 1000,
    note: 'nota de ejemplo 1',
    date: '2022-12-06',
    typeTransaction: TypeTransaction.incomes,
  },
  {
    id: 2,
    categoryId: 2,
    icon: 'bi-credit-card',
    amount: -2000,
    note: 'nota de ejemplo 1',
    date: '2022-12-06',
    typeTransaction: TypeTransaction.expense,
  },
  {
    id: 3,
    categoryId: 3,
    icon: 'bi-piggy-bank',
    amount: 3000,
    note: 'nota de ejemplo 1',
    date: '2022-12-06',
    typeTransaction: TypeTransaction.incomes,
  },
];

export { budgetMock };

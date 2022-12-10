import { TypeTransaction } from '../core/enum/type-transaction';
import { Category } from '../core/interfaces/category.interface';

const categories: Category[] = [
  {
    id: 1,
    name: 'Casa',
    icon: 'bi-house',
    typeTransaction: TypeTransaction.expense
  },
  {
    id: 2,
    name: 'Bebidas',
    icon: 'bi-cup-straw',
    typeTransaction: TypeTransaction.expense
  },
  {
    id: 3,
    name: 'Comida',
    icon: 'bi-egg-fried',
    typeTransaction: TypeTransaction.expense
  },
  {
    id: 4,
    name: 'Combustible',
    icon: 'bi-ev-station',
    typeTransaction: TypeTransaction.expense
  },
  {
    id: 5,
    name: 'Transporte',
    icon: 'bi-car-front',
    typeTransaction: TypeTransaction.expense
  },
  {
    id: 6,
    name: 'Telefono',
    icon: 'bi-phone',
    typeTransaction: TypeTransaction.expense
  },
  {
    id: 7,
    name: 'Cine',
    icon: 'bi-film',
    typeTransaction: TypeTransaction.expense
  },
  {
    id: 8,
    name: 'Regalos',
    icon: 'bi-gift',
    typeTransaction: TypeTransaction.expense
  },
  {
    id: 9,
    name: 'Diversion',
    icon: 'bi-controller',
    typeTransaction: TypeTransaction.expense
  },
  {
    id: 10,
    name: 'Educación',
    icon: 'bi-book',
    typeTransaction: TypeTransaction.expense
  },
  {
    id: 11,
    name: 'Viajes',
    icon: 'bi-airplane',
    typeTransaction: TypeTransaction.expense
  },
  {
    id: 12,
    name: 'Salud',
    icon: 'bi-hospital',
    typeTransaction: TypeTransaction.expense
  },
  {
    id: 13,
    name: 'Deposito',
    icon: 'bi-cash',
    typeTransaction: TypeTransaction.incomes
  },
  {
    id: 14,
    name: 'Salario',
    icon: 'bi-credit-card',
    typeTransaction: TypeTransaction.incomes
  },
  {
    id: 15,
    name: 'Ahorros',
    icon: 'bi-piggy-bank',
    typeTransaction: TypeTransaction.incomes
  }
];

export { categories };

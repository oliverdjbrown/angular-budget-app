import { TypeTransaction } from "../enum/type-transaction";

interface TRANSACTION {
    id: number,
    categoryId: number,
    icon: string,
    amount: number,
    note: string,
    date: string,
    typeTransaction: TypeTransaction,
}

export { TRANSACTION }
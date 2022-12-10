import { TypeTransaction } from "../enum/type-transaction";

interface Category {
    id: number;
    name: string;
    icon: string;
    typeTransaction: TypeTransaction
}

export { Category };
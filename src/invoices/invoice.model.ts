import { Entity } from "../general/general";

export type IInvoiceStatusType = 'paid' | 'pending' | 'overdue';

export interface InvoiceEntity extends Entity {
  subject: string;
  description: string;
  amount: number;
  date: Date;
  maxPaymentDate: Date;
  status: IInvoiceStatusType;
  overdue?: number;
}

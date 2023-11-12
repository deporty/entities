import { Id } from '../general';
import { InvoiceEntity, IInvoiceStatusType } from '../invoices/invoice.model';

export type IFinancialStatementStatusType = IInvoiceStatusType;

export interface FinancialStatementsModel {
  amount: number;
  numOfInvoices: number;
}

export interface IInvoiceTournamentEntity extends InvoiceEntity {
  tournamentId: Id;
}

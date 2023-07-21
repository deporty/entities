import { Id } from '../general';
import { InvoiceEntity, IInvoiceStatusType } from '../invoices/invoice.model';

export type IFinancialStatementStatusType = IInvoiceStatusType;

export interface FinancialStatementsModel {
  ammount: number;
  numOfInvoices: number;
  status: IFinancialStatementStatusType;
}

export interface IInvoiceTournamentEntity extends InvoiceEntity {
  tournamentId: Id;
}

import { Id } from '../general';
import { InvoiceEntity } from './invoice.model';

export interface IPaymentModel {
  invoiceId: Id;
  paymentDate: Date;
}

export interface ITournamentInvoiceModel extends InvoiceEntity {
  tournamentId: Id;
}

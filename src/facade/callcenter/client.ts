import { CallCenterFacade } from './facade/CallCenterFacade';
import { Card } from './model/Card';

export const facadeApp = {
  main(): void {
    const facade: CallCenterFacade = new CallCenterFacade();

    const card: Card = facade.getCardByUser(123456);
    console.log(card);

    facade.getSumary(card);

    facade.getPaymentInfoByCard(card);

    facade.cancelLastRegister(card);

    const newCard: Card = facade.getCardByUser(123456);
    console.log(newCard);
  },
};

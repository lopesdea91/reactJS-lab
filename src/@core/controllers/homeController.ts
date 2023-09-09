import { observable_function } from "../entities/Observable_function";

class HomeController {
  private nameCards: string[] = [];

  public async cardReady(nameCard: string) {
    this.nameCards.push(nameCard);
  }
  async cardUnMonted(nameCard: string) {
    this.nameCards = this.nameCards.filter(
      (currentNameCard) => currentNameCard !== nameCard
    );
  }
  async reloadCards() {
    for (const nameCard of this.nameCards) {
      observable_function.publish(nameCard, null);
    }
  }
}

export const homeController = new HomeController();

import { delay } from "../../utils/delay";
import Observable from "../entities/Observable";
import { LayoutControllerBase } from "./LayoutControllerBase";

class LayoutController extends Observable implements LayoutControllerBase {
  async setLoading(value: boolean) {
    await delay()

    this.notify('loading', value)
  }
}

export const layoutController = new LayoutController()
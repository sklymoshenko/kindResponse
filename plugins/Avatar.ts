import Avatars from "@dicebear/avatars";
import sprites from "@dicebear/avatars-human-sprites";

import { IAvatar } from "@/interfaces/BaseInterfaces.ts";
class Avatar implements IAvatar {
  private svg: string;

  constructor(name: string) {
    const avatars = new Avatars(sprites, {});
    this.svg = avatars.create(name);
  }

  create() {
    return this.svg;
  }
}

export default Avatar;

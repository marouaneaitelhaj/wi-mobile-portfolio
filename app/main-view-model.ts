import { Observable } from '@nativescript/core';
import { Utils } from '@nativescript/core';

export class HelloWorldModel extends Observable {
  constructor() {
    super();
  }

  onEmailTap() {
    Utils.openUrl("mailto:your.email@example.com");
  }

  onGitHubTap() {
    Utils.openUrl("https://github.com/yourusername");
  }

  onLinkedInTap() {
    Utils.openUrl("https://linkedin.com/in/yourusername");
  }
}
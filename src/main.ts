import { Component, signal, computed } from '@angular/core';
import { NgWebConsoleComponent, provideNgWebConsole } from 'ng-web-console';

import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgWebConsoleComponent],
  template: `
    <ng-web-console />
  `,
})
export class App {
  constructor() {
    const counter = signal(0);

    const isEven = computed(() => {
      console.log('called');
      return counter() % 2 === 0;
    });

    counter();

    counter.set(1);
    counter.update((current) => current + 1);

    counter();
  }
}

bootstrapApplication(App, { providers: [provideNgWebConsole()] });

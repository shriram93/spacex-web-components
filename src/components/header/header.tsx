import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'spacex-header',
  styleUrl: 'header.scss',
  shadow: true,
})
export class HeaderComponent {
  render() {
    return (
      <Host>
          <slot></slot>
      </Host>)
  }
}

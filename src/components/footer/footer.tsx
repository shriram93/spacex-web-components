import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'spacex-footer',
  styleUrl: 'footer.scss',
  shadow: true,
})
export class FooterComponent {
  render() {
    return (
      <Host>
        <p><slot></slot></p>
      </Host>)
  }
}

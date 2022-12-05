import React from 'react';
import { render, screen } from '@testing-library/react';
import HorizontalMenu, { HorizontalMenuVariant } from './HorizontalMenu';

describe('<HorizontalMenu />', () => {
  it('should render default styles correctly', () => {
    render(<HorizontalMenu>children go here</HorizontalMenu>);

    expect(screen.getByRole('menu')).toMatchInlineSnapshot(`
      <menu
        class="flex overflow-visible m-0 pl-0 menu"
        role="menu"
      >
        children go here
      </menu>
    `);
  });
  it('should render light menu', () => {
    render(<HorizontalMenu variant={HorizontalMenuVariant.light}>children go here</HorizontalMenu>);
    expect(screen.getByRole('menu')).toMatchInlineSnapshot(`
      <menu
        class="flex overflow-visible m-0 pl-0 light"
        role="menu"
      >
        children go here
      </menu>
    `);
  });
  it('should render end menu', () => {
    render(<HorizontalMenu variant={HorizontalMenuVariant.end}>children go here</HorizontalMenu>);
    expect(screen.getByRole('menu')).toMatchInlineSnapshot(`
      <menu
        class="flex overflow-visible m-0 pl-0 end"
        role="menu"
      >
        children go here
      </menu>
    `);
  });
});
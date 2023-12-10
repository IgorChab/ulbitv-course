import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import customRender from 'shared/lib/testUtils/customRender';

describe('Sidebar', () => {
  test('render Sidebar', () => {
    customRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('collapse Sidebar', () => {
    customRender(<Sidebar />);
    const sidebar = screen.getByTestId('sidebar');
    const toggleSidebarButton = screen.getByTestId('toggleSidebarButton');

    expect(sidebar).not.toHaveClass('collapsed');

    fireEvent.click(toggleSidebarButton);

    expect(sidebar).toHaveClass('collapsed');
  });
});

import { render } from '@testing-library/react';

import AccountList from './account-list';

describe('AccountList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccountList />);
    expect(baseElement).toBeTruthy();
  });
});

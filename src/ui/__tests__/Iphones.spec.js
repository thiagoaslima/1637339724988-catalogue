import React from 'react';
import { MemoryRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from 'react-query';
import {render, fireEvent, waitFor, screen} from '@testing-library/react'

import Iphones from '../components/iphones';
import { mockData } from '../../mocks/handlers';

const queryClient = new QueryClient();

const Component = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <MemoryRouter>
                <Iphones />
            </MemoryRouter>
        </QueryClientProvider>
    )
};

describe('Iphones component', () => {
  
   it('should render a spinner when waiting for data', async () => {
    render(<Component />)
        
    const spinner = screen.getByTestId('spinner');
    const cards = await screen.queryByTestId('product-card');

    expect(spinner).toBeInTheDocument();
    expect(cards).not.toBeInTheDocument();
  }); 
   
  it('should render all cards after retrieve the data', async () => {
    render(<Component />);
    
    const spinner = screen.getByTestId('spinner');
    
    await waitFor(() => expect(spinner).not.toBeInTheDocument());
    
    const cards = await screen.queryAllByTestId('product-card');
    expect(cards).toHaveLength(mockData.iphones.data.length);
  });  
  
 

});

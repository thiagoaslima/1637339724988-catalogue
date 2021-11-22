import React from 'react';
import { renderHook } from "@testing-library/react-hooks";
import { QueryClient, QueryClientProvider } from "react-query";

import useIphones from "../iphones";
import { mockData } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import { rest } from 'msw';
import { API_URL } from '../../lib/configuration';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

afterEach(() => {
  queryClient.clear();
})

describe('useIphones', () => {

  it('should return the iphones from the api', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useIphones(), { wrapper });
    
    await waitForNextUpdate();
    
    expect(result.current.isSuccess).toBe(true);
    expect(result.current.isError).toBe(false);
    expect(result.current.data).toEqual(mockData.iphones.data);
    expect(result.current.error).toBe(null);
  });
  
  it('should return an error on fail', async () => {
    server.use(
      rest.get(`${API_URL}/iphones`, (req, res, ctx) => {
        return res.once(
          ctx.status(500),
          ctx.json({ message: 'Invalid' })
        )
      })
    )

    const { result, waitForNextUpdate } = renderHook(() => useIphones(), { wrapper });
    
    await waitForNextUpdate();
    
    expect(result.current.isSuccess).toBe(false);
    expect(result.current.isError).toBe(true);
    expect(result.current.data).toBeUndefined();
    expect(result.current.error).toEqual(
      expect.objectContaining({ 
        status: 500,
        message: 'Invalid' 
      })
    );
  });

});


import { renderHook, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useFetch from '../../hooks/useFetch';

interface IMockClass {
  mockString: string;
}

test('useFetch performs a GET request', async () => {
  const mockData: IMockClass = {
    mockString: 'mock string',
  };
  const mockUrl = '/api';
  const mockAxios = new MockAdapter(axios);
  mockAxios.onGet(mockUrl).reply(200, mockData);

  const { result } = renderHook(() => useFetch<IMockClass>(mockUrl));

  // Results are initially null
  expect(result.current.loading).toBe(true);
  expect(result.current.data).toBe(null);

  await waitFor(() => {
    // After the request is complete, the results should be populated
    expect(result.current.loading).toBe(false);
    expect(result.current.data).not.toBe(null);
    expect(result.current.data?.mockString).toBe(mockData.mockString);
  });
});

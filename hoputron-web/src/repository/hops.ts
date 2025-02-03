import { queryOptions } from '@tanstack/react-query'

export const hopOptions = queryOptions({
  queryKey: ['hops'],
  queryFn: async () => {
    const response = await fetch(`/api/hops`)

    return response.json()
  },
  staleTime: 1000 * 60 * 5,
})

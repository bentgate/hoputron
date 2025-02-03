import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";

const fetchHops = async (name: string) => {
  if (!name) return [];
  const res = await fetch(`/api/hops/search?name=${encodeURIComponent(name)}`);
  if (!res.ok) throw new Error("Failed to fetch hops");
  return res.json();
};

export function useHopSearch(name: string) {
  const [debouncedName] = useDebounce(name, 300); // 🔥 Debounce input by 300ms

  return useQuery({
    queryKey: ["hops", debouncedName],
    queryFn: () => fetchHops(debouncedName),
    enabled: !!debouncedName,
    staleTime: 1000 * 60 * 5,
  });
}

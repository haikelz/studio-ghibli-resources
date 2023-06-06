import useSWR from "swr";

export function useFetch(link) {
  async function getData(link) {
    const response = await fetch(link);
    const data = await response.json();

    return data;
  }

  const { data, isLoading, error } = useSWR(link, getData, {
    keepPreviousData: true,
  });

  return {
    data,
    isLoading,
    isError: error,
  };
}

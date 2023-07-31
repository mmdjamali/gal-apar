import axios from "axios";
import { useQuery } from "react-query";

export const useGetCart = () => {
  const queryData = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axios.get("/api/cart");
      return res.data;
    },
    refetchOnWindowFocus: false,
    cacheTime: 1000,
  });

  return queryData;
};

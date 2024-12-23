import { axiosRequest } from "@libs/axios/axios-config";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const BASE_URL = "/dummies";

const getAllDummies = async () => {
  const data = await axiosRequest({
    method: "GET",
    url: BASE_URL,
  });

  return data;
};

const createDummy = async (data: any) => {
  return await axiosRequest({
    method: "POST",
    url: BASE_URL,
    data,
  });
};

export const useGetAllDummies = () => {
  return useQuery({
    queryKey: ["dummies"],
    queryFn: getAllDummies,
  });
};

export const useCreateDummy = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () =>
      createDummy({
        dummy: "dummy" + Date.now(),
      }),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["dummies"] });
    },
  });
};

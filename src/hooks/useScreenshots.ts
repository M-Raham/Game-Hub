import { useQuery } from "@tanstack/react-query";
import APIClient from "../Services/api-client";
import { Screenshot } from "../Entities/ScreenShot";

const useScreenShots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenShots;

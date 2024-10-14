import { useQuery } from "@tanstack/react-query";
import APIClient from "../Services/api-client";
import * as Game from "../Entities/Game";

const apiClient = new APIClient<Game.Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGame;

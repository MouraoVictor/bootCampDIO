import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/poscasts-repository"

export const serviceFilterEpisodes = async (podcastName: string | undefined) => {

    // pegando apenas o nome
    const queryString = podcastName?.split("?p=")[1] || "";


    const data = await repositoryPodcast(queryString);

    return data;
}
import { repositoryPodcast } from "../repositories/poscasts-repository";



export const serviceListEpisodes = async () => {
    const data = await repositoryPodcast();

    return data;
}
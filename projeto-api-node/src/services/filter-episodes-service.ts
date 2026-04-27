import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/poscasts-repository"
import { FilterPodCastModel } from "../models/response-podcast-model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<FilterPodCastModel> => {


    //define a interface de retorno
    let responseFormat: FilterPodCastModel = {
        statusCode: 0,
        body: []
    }


    // pegando apenas o nome
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    //verifico se tem conteudo
    if (data.length !== 0) {
        responseFormat.statusCode = StatusCode.OK;
    } else {
        responseFormat.statusCode = 204; // NoContent
    }

    responseFormat.body = data;

    return responseFormat;
}
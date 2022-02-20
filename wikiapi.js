#!/usr/bin/env node
import yargs from "yargs";
import { sendRequest } from './services/api.service.js';
import { printSuccess, printError, printHelp, printPrettyList, printPrettyDict } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';

const saveToken = async (token) => {
    if (!token.length) {
        printError('No token!');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('Token is saved.');
    } catch (e) {
        printError(e.message);
    }
}

const getResultDataList = async (part_url, str_before) => {
    try{
        const response = await sendRequest(`https://wikiapi.p.rapidapi.com/api/v1/wiki/home/${part_url}`);
        printPrettyList(response, str_before);
    } catch (e){
        if (e?.response?.status==403){
            printError('Something wrong with access to API (error 403) - check your token');
        }
    }
}

const getResultDataDict = async (url) => {
    try{
        const response = await sendRequest(url);
        printPrettyDict(response);
    } catch (e){
        if (e?.response?.status==403){
            printError('Something wrong with access to API (error 403) - check your token');
        }
    }
}

const initCLI = () => {
    const args = yargs(process.argv.slice(2)).argv;
    let arg_value = Object.entries(args)[Object.entries(args).length -2 ];
    let url_list_dict = {
        "homepage": ['news', 'today', 'pod', 'know'],
        "history": ['flood', 'language', 'earthquake', 'storm'],
        "animals": ['cattle', 'dog', 'horse'],
        "military/weapon": ['rifle', 'handgun'],
        "military/aircraft": ['fighter'],
        "military/armoured": ['tank'],
        "engineering/civil": ['airport', 'reactor', 'bridge'],
        "education": ['journal', 'university', 'library'],
        "geography": ['lake', 'volcano', 'country', 'sea'],
        "science/astronomy": ['ngc', 'nebula', 'galaxy'],
        "science/chemistry": ['element', 'mineral'],
        "science/computer/programming": ['language'],
        "science/computer": ['os'],
        "business": ['pharma', 'company', 'exchange'],
        "business/defense/": ['contractor'],
        "biography": ['astronaut'],
        "sports": ['soccer', 'nba'],
    };

    for (const [key, value] of Object.entries(url_list_dict)) {

        if (url_list_dict[key].includes(arg_value[0])) {
            // Sport part (a little difference in url)
            if (key === 'sports'){
                let url = `https://wikiapi.p.rapidapi.com/api/v1/wiki/${key}/${arg_value[0]}/team/info/${arg_value[1]}`;
                return getResultDataDict(url);
            }

            // Homepage part (no second url from user)
            else if (key === 'homepage') {
                if (arg_value[0] === 'news'){
                    return getResultDataList(arg_value[0], "News № ");
                }
                else if (arg_value[0] === 'today'){
                    return getResultDataList(arg_value[0], "Happened Today № ");
                }
                else if (arg_value[0] === 'know'){
                    return getResultDataList(arg_value[0], 'Did You Know № ');

                }
                else {
                    let url = 'https://wikiapi.p.rapidapi.com/api/v1/wiki/home/pod';
                    return getResultDataDict(url);
                }
            }

            // Other possible requests
            else{
                let url = `https://wikiapi.p.rapidapi.com/api/v1/wiki/${key}/${arg_value[0]}/info/${arg_value[1]}`;
                return getResultDataDict(url);
            }
        }
    }

    if (args.t) {
        return saveToken(args.t);
    }
    if (args.h) {
        return printHelp();
    }
};

initCLI();
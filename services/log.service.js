import chalk from "chalk";
import dedent from "dedent-js";


const printError = (error) => {
    console.log(chalk.bgRed(" Error ") +" "+error);
}

const printPrettyList = (lst, str_before="") => {
    for (let i=0; i<lst.length; i++){
        console.log(`${str_before}${chalk.yellow(i+1)}: ` + chalk.green(lst[i]));
    }
}

const printPrettyDict = (dict) => {
    for (const [key, value] of Object.entries(dict)) {
        console.log(`${chalk.yellow(key.charAt(0).toUpperCase() + key.slice(1))}: ${chalk.green(value)}`);
    }
}

const printSuccess = (message) => {
    console.log(chalk.bgGreen(" Success ") +" "+message);
}

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}
        This cli is divided into subsections:
        (Don't forget to tell your API-key with --t command to use this cli correctly!)
        
${chalk.bgCyan(' **homepage** ')}
		--news : retrieves headline news from Wikipedia homepage;
		--today : retrieves events happened on current date from Wikipedia homepage;
		--pod : retrieves picture of the day from Wikipedia homepage;
		--know : retrieves did you know information from Wikipedia homepage;
${chalk.bgCyan(' **history** ')}
		--flood [FLOOD_NAME(e.g. f1997_red_river_flood)] : retrieves available information about a particular flood;
		--language [LANG_NAME(e.g. arabic)] : retrieves available information about a particular world language;
		--earthquake [EARTHQUAKE_NAME(e.g. e2010_chile_earthquake)] : retrieves available information about a particular earthquake;
		--storm [STORM_NAME(e.g. hurricane_katrina)] : retrieves available information about a particular storm;
${chalk.bgCyan(' **animals** ')}
		--cattle [CATTLE_BREED(e.g. angus_cattle)] : retrieves available information about a particular cattle breed;
		--dog [DOG_BREED(e.g. german_shepherd)] : retrieves available information about a particular dog breed;
		--horse [HORSE_BREED(e.g. arabian_horse)] : retrieves available information about a particular horse breed;
${chalk.bgCyan(' **military** ')}
		--rifle [RIFLE_NAME(e.g. m_16_rifle)] : retrieves available information about a particular rifle;
		--fighter [FIGHTER_NAME(e.g. general_dynamics_f_16_fighting_falcon)] : retrieves available information about a particular fighter jet;
		--tank [TANK_NAME(e.g. m1_abrams)] : retrieves available information about a particular tank;
		--handgun [HANDGUN_NAME(e.g. asp_pistol)] : retrieves available information about a particular handgun;
${chalk.bgCyan(' **engineering** ')}
		--airport [AIRPORT_NAME(e.g. SFO)] : retrieves available information about a particular airport;
		--reactor [REACTOR_NAME(e.g. wolf_creek_generating_station)] : retrieves available information about a particular nuclear reactor;
		--bridge [BRIDGE_NAME(e.g. golden_gate_bridge)] : retrieves available information about a particular bridge;
${chalk.bgCyan(' **education** ')}
		--journal [JOURNAL_NAME(e.g. journal_of_bacteriology)] : retrieves available information about a particular journal;
		--university [UNIVERSITY_NAME(e.g. stanford_university)] : retrieves available information about a particular university;
		--library [LIBRARY_NAME(e.g. san_francisco_public_library)] : retrieves available information about a particular library;
${chalk.bgCyan(' **geography** ')}
		--lake [LAKE_NAME(e.g. lake_victoria)] : retrieves available information about a particular lake;
		--volcano [VOLCANO_NAME(e.g. mount_elbrus)] : retrieves available information about a particular volcano;
		--country [COUNTRY_NAME(e.g. morocco)] : retrieves available information about a particular country;
		--sea [SEA_NAME(e.g. mediterranean_sea)] : retrieves available information about a particular sea;
${chalk.bgCyan(' **science** ')}
		--ngc [NGC_NAME(e.g. ngc_1)] : retrieves available information about a particular astronomical NGC;
		--nebula [NEBULA_NAME(e.g. crab)] : retrieves available information about a particular astronomical nebula;
		--galaxy [GALAXY_NAME(e.g. milky_way)] :  retrieves available information about a particular astronomical galaxy;
		--element [ELEMENT_NAME(e.g. oxygen)] : retrieves available information about a particular chemical element;
		--mineral [MINERAL_NAME(e.g. abelsonite)] : retrieves available information about a particular mineral;
		--language [LANGUAGE_NAME(e.g. cpp)] : retrieves available information about a particular programming language;
		--os [OS_NAME(e.g. android)] : retrieves available information about a particular OS;
${chalk.bgCyan(' **business** ')}
		--pharma [PHARMA_NAME(e.g. ngc_1)] : retrieves available information about a particular pharma company;
		--company [COMPANY_NAME(e.g. crab)] : retrieves available information about a particular company;
		--exchange [EXCHANGE_NAME(e.g. milky_way)] :  retrieves available information about a particular stock exchange;
		--contractor [CONTRACTOR_NAME(e.g. oxygen)] : retrieves available information about a particular defense contractor;
${chalk.bgCyan(' **biography** ')}
		--astronaut [ASTRONAUT_NAME(e.g. alan_bean)] : retrieves available information about a particular astronaut;
${chalk.bgCyan(' **sports** ')}
		--soccer [SOCCER_TEAM_NAME(e.g. liverpool_f_c)] : retrieves available information about a particular soccer team;
		--nba [NBA_TEAM_NAME(e.g. chicago_bulls)] : retrieves available information about a particular NBA team;
	 
${chalk.bgMagenta(' [!] TO SAVE API KEY IN FILE(homedir/wiki-data.json) ')}
 --t [API_KEY] : to save token;
 --h : show help.`
    );
};

export { printError, printSuccess, printHelp, printPrettyList, printPrettyDict};
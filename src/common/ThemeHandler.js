

var defaultTheme = {
    '--theme-primary-color': '#039be5',
    '--theme-second-color': '#028ad3',
    '--theme-third-color': '#0394dea3',
    '--theme-fourth-color': 'rgb(2, 131, 200)',
    '--theme-fith-color': '#48c7ec',
    '--theme-sixth-color': 'black'
};

var purpleTheme = {
    '--theme-primary-color': '#ab60b8',
    '--theme-second-color': '#9637a7',
    '--theme-third-color': '#ab60b8',
    '--theme-fourth-color': '#76018a',
    '--theme-fith-color': '#ab60b8',
    '--theme-sixth-color': 'black'
};

var yellowTheme = {
    '--theme-primary-color': '#ebb206',
    '--theme-second-color': '#daa70c',
    '--theme-third-color': '#ebb206',
    '--theme-fourth-color': '#8e6e0d',
    '--theme-fith-color': '#ebb206',
    '--theme-sixth-color': 'black'
};


var greenTheme = {
    '--theme-primary-color': '#b2bf2d',
    '--theme-second-color': '#a6b511',
    '--theme-third-color': '#b2bf2d',
    '--theme-fourth-color': '#768204',
    '--theme-fith-color': '#b2bf2d',
    '--theme-sixth-color': 'black'
};

var blueTheme = {
    '--theme-primary-color': '#394aa5',
    '--theme-second-color': '#5f75ec',
    '--theme-third-color': '#394aa5',
    '--theme-fourth-color': '#000d54',
    '--theme-fith-color': '#394aa5',
    '--theme-sixth-color': 'white'
};


 export default function updateAppThem(typeOfContent) {

    let themeSelected = {};

    switch (typeOfContent) {
        case "tips":
            themeSelected = yellowTheme;
            break;
        case "didyouknow":
            themeSelected = purpleTheme;
            break;
        case "recipe":
            themeSelected = greenTheme;
            break;
        case "information":
            themeSelected = blueTheme;
            break;
        default:
            themeSelected = defaultTheme;
            break;
    }

    document.documentElement.style.setProperty('--theme-primary-color',  themeSelected['--theme-primary-color']);
    document.documentElement.style.setProperty('--theme-second-color', themeSelected['--theme-second-color']);
    document.documentElement.style.setProperty('--theme-third-color', themeSelected['--theme-third-color']);
    document.documentElement.style.setProperty('--theme-fourth-color', themeSelected['--theme-fourth-color']);
    document.documentElement.style.setProperty('--theme-fith-color', themeSelected['--theme-fith-color']);
    document.documentElement.style.setProperty('--theme-sixth-color', themeSelected['--theme-sixth-color']);
}









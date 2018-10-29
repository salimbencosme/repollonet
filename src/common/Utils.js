
  export function currentDateWithFormat() {
    let dateCustom = new Date();
    let day = dateCustom.getDate();
    let month = dateCustom.getUTCMonth() + 1;
    let year = dateCustom.getUTCFullYear();
    let hours = dateCustom.getUTCHours();
    let minutes = dateCustom.getUTCMinutes();
    let seconds = dateCustom.getUTCMinutes();

    if (day < 10) { day = '0' + day; }

    if (month < 10) { month = '0' + month; }

    return day + "/" + month + "/" + year + " " + hours + ":" + minutes + ":" + seconds;

  }

export default function Utils(){};
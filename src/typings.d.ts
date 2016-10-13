// Typings reference file, see links for more information
// https://github.com/typings/typings
// https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html

declare var System: any;

declare var $: JQueryStatic;

interface Window {
  speechSynthesis: any;
}


declare class SpeechSynthesisUtterance {
  voice;
  voiceURI;
  volume;
  rate;
  pitch;
  text;
  lang;

}

declare class webkitSpeechRecognition
{
  continuous;
  interimResults;
  lang;
  onresult;
  onerror;
  onstart;

  start();

  stop();
}

declare const  enum STATE_VOICE_COMMAND {
  In_Attesa_Comando_Level1 =1,
  In_Attesa_Comando_Level2_Domotica=2

}

declare var swal;

declare var toastr;

declare interface  IServerConf {
  webSocketDomoticaEndPoint: string;
  restEndPoint: string;
}

declare interface  IGeneralConf {
  debug: boolean;
  logEvents: boolean
}

declare var PIXI;

declare var Highcharts;

interface HTMLElement {
  fullscreenElement;
  mozRequestFullScreen;
}

interface  Document {
  mozFullScreen;
  webkitFullScreen;
  mozRequestFullScreen;
  mozCancelFullScreen;
}

interface Element{
  ALLOW_KEYBOARD_INPUT;
}

declare var Materialize;

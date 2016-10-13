import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {




  //
  // ─── METODI STATICI ─────────────────────────────────────────────────────────────
  //


  public static log(...args) {
    let stringa = '%c ' + args;
    let style = ' background: white; color: green; font-weight: bold;';
    // Function.prototype.apply.call(this._log, console, stringa); // <--- change here
    console.log(stringa, style);
  }


  public static event(...args) {
    let stringa = '%c ' + args;
    let style = ' background: blue; color: orange; font-weight: bold; font-size: 15px;';
    // Function.prototype.apply.call(this._log, console, stringa); // <--- change here
    console.log(stringa, style);
  }

  /**
   * Logga l'intercettazione di un evento
   * 
   * @static
   * @param {string} controller
   * @param {string} evento
   * @param {*} data
   * 
   * @memberOf LoggerService
   */
  public static eventIntercetted(controller: string, evento: string, data: any) {
    let stringa = '%c ' + controller + " | " + " Evento " + evento + " intercettato | valore: " + data;
    let style = ' background: blue; color: orange; font-weight: bold; font-size: 15px;';
    // Function.prototype.apply.call(this._log, console, stringa); // <--- change here
    console.log(stringa, style);
  }

  /**
   * Logga la ricezione di un comando da serve
   * 
   * @static
   * @param {*} data
   * 
   * @memberOf LoggerService
   */
  public static comandoDaServer(data: any) {
    let stringa = '%c Ricevuto da websocketserver: ' + data;
    let style = ' background: blue; color: white; font-weight: bold;';
    // Function.prototype.apply.call(this._log, console, stringa); // <--- change here
    console.log(stringa, style);
  }

  /**
   * Logga l'emissione di un evento
   * 
   * @static
   * @param {string} controller
   * @param {string} evento
   * @param {*} data
   * 
   * @memberOf LoggerService
   */
  public static eventEmitted(controller: string, evento: string, data: any) {
    let stringa = '%c ' + controller + " | " + " Evento " + evento + " Emesso | valore: " + data;
    let style = ' background: green; color: black; font-weight: bold;';
    // Function.prototype.apply.call(this._log, console, stringa); // <--- change here
    console.log(stringa, style);
  }

  /**
   * Logga la sottoscrizione ad un evento
   * 
   * @static
   * @param {string} controller
   * @param {string} evento
   * 
   * @memberOf LoggerService
   */
  public static eventSubscribed(controller: string, evento: string) {
    let stringa = '%c ' + controller + " | " + " Evento " + evento + " sottoscritto";
    let style = ' background: white; color: orange; font-weight: bold;';
    // Function.prototype.apply.call(this._log, console, stringa); // <--- change here
    console.log(stringa, style);
  }

  /**
   * Logga Unsubscript event
   * 
   * @static
   * @param {string} controller
   * @param {string} evento
   * 
   * @memberOf LoggerService
   */
  public static eventUnSubscribed(controller: string, evento: string) {
    let stringa = '%c ' + controller + " | " + " Evento " + evento + " sottscrizione cancellata ";
    let style = ' background: white; color: orange; font-weight: bold;';
    // Function.prototype.apply.call(this._log, console, stringa); // <--- change here
    console.log(stringa, style);
  }


  public static warn(...args) {
    let stringa = '%c ' + args;
    let style = ' background: yellow; color: black; font-weight: bold;';
    // Function.prototype.apply.call(this._log, console, stringa); // <--- change here
    console.log(stringa, style);
  }

  public static warnDev(...args) {
    let stringa = args;
    let style = ' background: yellow; color: black; font-weight: bold;';
    // Function.prototype.apply.call(this._log, console, stringa); // <--- change here
    console.warn(stringa);
  }

  public static error(...args) {
    let stringa = '%c ' + args;
    let style = ' background: red; color: black; font-weight: bold;';
    // Function.prototype.apply.call(this._log, console, stringa); // <--- change here
    console.log(stringa, style);
  }

  public static errorDev(...args) {
    let stringa = "Errore: " + args;
    let style = ' background: red; color: black; font-weight: bold;';
    // Function.prototype.apply.call(this._log, console, stringa); // <--- change here
    console.error(stringa);
  }


  public static componentLoaded(...args) {
    let stringa = '%c ' + args;
    let style = ' background: black; color: white; font-weight: bold;';
    // Function.prototype.apply.call(this._log, console, stringa); // <--- change here
    console.log(stringa, style);
  }

  public static debug(...args) {
    let stringa = '%c ' + args;
    let style = ' background: grey; color: white; font-weight: bold;';
    // Function.prototype.apply.call(this._log, console, stringa); // <--- change here
    console.log(stringa, style);
  }

  //
  // ─── COSTRUTTORE ────────────────────────────────────────────────────────────────
  //


  constructor() {
  }

}

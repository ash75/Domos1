import { Injectable } from '@angular/core';
import {LoggerService} from "../Logger/logger.service";

@Injectable()
export class VoiceCommandsService {
  private statoAssistente;
  private recognition;



static Parla(message: string) {
  // Synthesis
  let msg = new SpeechSynthesisUtterance();
  let voices = window.speechSynthesis.getVoices();
  msg.voice = voices[10]; // Note: some voices don't support altering params
  msg.voiceURI = 'native';
  msg.volume = 1; // 0 to 1
  msg.rate = 1; // 0.1 to 10
  msg.pitch = 0; // 0 to 2
  msg.text = message;
  msg.lang = 'it-IT';
  window.speechSynthesis.speak(msg);
}


  constructor() {
    this.statoAssistente = STATE_VOICE_COMMAND.In_Attesa_Comando_Level1;
    if (window.hasOwnProperty('webkitSpeechRecognition')) {
      this.recognition = new webkitSpeechRecognition();

      this.recognition.continuous = true;
      this.recognition.interimResults = false;

      this.recognition.lang = "it-IT";

      this.recognition.onstart = () => {

      };

      this.recognition.onresult = (e) => {
        // var ris = e.results[0][0].transcript;
        let ris = e.results[e.results.length - 1][0].transcript.trim();
        // $('#transcript').val(ris);
        // Domotica
        if (ris === 'domotica') {
          // new Audio('assets/pronunciare_comando.mp3').play();
          VoiceCommandsService.Parla('Pronunciare comando di Domotica prego');
          this.statoAssistente = STATE_VOICE_COMMAND.In_Attesa_Comando_Level2_Domotica;
          // this.$state.go('app.dashboard');

        }
        if (this.statoAssistente === STATE_VOICE_COMMAND.In_Attesa_Comando_Level2_Domotica) {
          if (ris === 'avvia') {
            // new Audio('assets/sistema_domotica_avviato.mp3').play();
            // this.recognition.stop();
            VoiceCommandsService.Parla('Avvio sistema di domotica in corso, attendere prego');
          }
        }
        if (this.statoAssistente === STATE_VOICE_COMMAND.In_Attesa_Comando_Level2_Domotica) {
          if (ris === 'stop') {
            // new Audio('assets/sistema_domotica_avviato.mp3').play();
            // this.recognition.stop();
            VoiceCommandsService.Parla('Sistema domotica arrestato');
          }
        }
        if (this.statoAssistente === STATE_VOICE_COMMAND.In_Attesa_Comando_Level2_Domotica) {
          if (ris === 'accendi tutte le luci') {
            // new Audio('assets/sistema_domotica_avviato.mp3').play();
            // this.recognition.stop();
            VoiceCommandsService.Parla('Luci  accese');
            // this.OnAccendiTutteLeLuciNotify();
          }
          if (ris === 'accendi luce camera') {
            // new Audio('assets/sistema_domotica_avviato.mp3').play();
            // this.recognition.stop();
            VoiceCommandsService.Parla('Luce camera da letto accesa');
            // this.OnAccendiLuceCameraNotify();
          }
        }
        if (this.statoAssistente === STATE_VOICE_COMMAND.In_Attesa_Comando_Level2_Domotica) {
          if (ris === 'spegni tutte le luci') {
            // new Audio('assets/sistema_domotica_avviato.mp3').play();
            // this.recognition.stop();
            VoiceCommandsService.Parla('Luci spente');
            // this.OnSpegniTutteLeLuciNotify();
          }
          if (ris === 'spegni luce camera') {
            // new Audio('assets/sistema_domotica_avviato.mp3').play();
            // this.recognition.stop();
            VoiceCommandsService.Parla('Luce camera da letto spenta');
            // this.OnSpegniLuceCameraNotify();
          }
        }
        // Navigation
        if (ris === 'menù') {
          // new Audio('assets/sistema_domotica_avviato.mp3').play();
          // this.recognition.stop();
          VoiceCommandsService.Parla('Menu home attivato');
          // this.$state.go('app.init');

        }
        if (ris === 'comandi manuali') {
          // new Audio('assets/sistema_domotica_avviato.mp3').play();
          // this.recognition.stop();
          VoiceCommandsService.Parla('Menu comandi manuali attivato');
          // this.$state.go('app.comandimanuali');

        }


        // General
        if (ris === 'chiamata emergenza') {
          // new Audio('assets/sistema_domotica_avviato.mp3').play();
          // this.recognition.stop();
          VoiceCommandsService.Parla('Chiamata emergenza in corso');
        }


      };

      this.recognition.onerror = (e) => {
        LoggerService.errorDev('Errore Comandi vocali services');
        this.recognition.stop();
      };


      VoiceCommandsService.Parla('Comandi vocali attivati');
    }
    this.startServizioVocale();
  }

/**
 * Avvia il servizio dei comandi vocali
 */
startServizioVocale() {
  this.recognition.start();
  this.statoAssistente = STATE_VOICE_COMMAND.In_Attesa_Comando_Level1;
}

}

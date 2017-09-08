/*global ya*/
import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  classNames: ['bot-helper-wrapper'],
  streamer: null,
  state: 'greating',

  didInsertElement() {
    let streamer = new ya.speechkit.SpeechRecognition();
    this.set('streamer', streamer);
  },

  actions: {
    startVoiceRecording: function () {
      window.ya.speechkit.settings.apikey = config.speechkitAPIKey;
      this.get('streamer').start({
        initCallback: () => {
          this.set('state', 'listening');
          console.log("Началась запись звука.");
        },
        // Данная функция вызывается многократно.
        // Ей передаются промежуточные результаты распознавания.
        // После остановки распознавания этой функции
        // будет передан финальный результат.
        dataCallback: function (text, done, merge, words) {
          if (done){
            console.log('b');
            console.log("Распознанный текст: " + text);
          }
        },
        // Вызывается при возникновении ошибки (например, если передан неверный API-ключ).
        errorCallback: function (err) {
          console.log("Возникла ошибка: " + err);
        },
        // Будет вызвана после остановки распознавания.
        stopCallback: () => {
          console.log('a');
          this.set('state', 'greating');
          console.log("Запись звука прекращена.");
        },
        // Возвращать ли промежуточные результаты.
        particialResults: false,
        utteranceSilence: 60
      });
    },
    stopVoiceRecording: function () {
      this.get('streamer').stop();
    }
  }
});

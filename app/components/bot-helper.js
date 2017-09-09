/*global ya*/
/*global ApiAi*/
import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  classNames: ['bot-helper-wrapper'],
  streamer: null,
  state: 'greeting',
  modalIds: ['iot', 'voice-recognition', 'vr', 'med-tech', 'transfers', 'open-mobile', 'fintech-events', 'life-style',
             'srl', 'blockchain', 'digital-ethics', 'banking', 'chat-bot', 'hr-tech'],

  didInsertElement() {
    let streamer = new ya.speechkit.SpeechRecognition();
    this.set('streamer', streamer);
  },

  actions: {
    startVoiceRecording: function () {
      const client = new ApiAi.ApiAiClient({accessToken: config.ApiAiAPIKey});
      window.ya.speechkit.settings.apikey = config.speechkitAPIKey;
      this.get('streamer').start({
        initCallback: () => {
          this.set('state', 'recording');
        },
        dataCallback: (text, done, merge, words) => {
          if (done){
            const promise = client.textRequest(text);
            promise.then ((serverResponse) => {
              const modalIds = this.get('modalIds');
              const result = serverResponse.result.fulfillment.speech;
              if (modalIds.indexOf(result) !== -1) {
                Ember.$(`#${result}`).click();
              } else {
                let custom = Ember.Object.create({
                  id: 'chat-bot',
                  title: 'Мой ответ',
                  content: `<p>${result}</p>`
                });
                this.set('modalItem', custom);
                this.toggleProperty('isModalOpen');
              }
            }).catch(function (error) {
              this.set('state', 'greeting');
              console.log(error);
            });
          }
        },
        errorCallback: function (err) {
          this.set('state', 'greeting');
          console.log("Возникла ошибка: " + err);
        },
        stopCallback: () => {
          this.set('state', 'greeting');
        },
        particialResults: false,
        utteranceSilence: 60
      });
    },
    stopVoiceRecording: function () {
      this.get('streamer').stop();
    }
  }
});

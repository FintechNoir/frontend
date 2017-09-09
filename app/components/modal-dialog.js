/* eslint-disable no-undef */
import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: false,
  currentSoundIndex: 0,

  isOpenObserver: Ember.observer('isModalOpen', function () {
    if (this.get('isModalOpen')){
      this.set('isOpen', true);
      Ember.run.later(this, () => {
        let sounds = this.get('item.sounds');
        if (sounds !== undefined){
          let item = this.get('item');
          let soundsNames = sounds.map(function (sound) {
            return {name: sound, path: `sounds/${item.id}/`};
          });
          ion.sound.destroy();
          ion.sound({
            sounds: soundsNames,
            preload: true,
            ended_callback: () => {
              let currentSoundIndex = this.get('currentSoundIndex');
              if (currentSoundIndex + 1 < sounds.length){
                this.set('currentSoundIndex', currentSoundIndex + 1);
                ion.sound.play(sounds[currentSoundIndex + 1]);
              } else {
                this.set('isPlaying', false);
                this.set('currentSoundIndex', 0);
              }
            }
          });
          ion.sound.play(sounds[0]);
          this.set('isPlaying', true);
        }
      }, 1000);
    }
  }),

  animationClass: Ember.computed('isOpen', function () {
    if (this.get('isOpen')){
      return "animated bounceInUp";
    } else {
      return "animated bounceOutDown";
    }
  }),

  actions: {
    close: function () {
      let sounds = this.get('item.sounds');
      let currentSoundIndex = this.get('currentSoundIndex');
      if (sounds !== undefined){
        ion.sound.stop(sounds[currentSoundIndex]);
      }
      this.set('isOpen', false);
      this.set('currentSoundIndex', 0);
      this.set('isPlaying', false);
      Ember.run.later(this, function () {
        this.toggleProperty('isModalOpen');
      }, 600);
    },
    play: function () {
      let sounds = this.get('item.sounds');
      let currentSoundIndex = this.get('currentSoundIndex');
      ion.sound.play(sounds[currentSoundIndex]);
      this.toggleProperty('isPlaying');
    },
    pause: function () {
      let sounds = this.get('item.sounds');
      let currentSoundIndex = this.get('currentSoundIndex');
      ion.sound.pause(sounds[currentSoundIndex]);
      this.toggleProperty('isPlaying');
    }
  }
});

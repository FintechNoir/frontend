import Ember from 'ember';

export default Ember.Controller.extend({
  isModalOpen: false,
  modalItem: null,
  isPlaying: false,

  actions: {
    openModal: function (item) {
      this.set('modalItem', item);
      this.set('isModalOpen', true)
    }
  }
});

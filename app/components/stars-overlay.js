import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['stars-overlay-wrapper'],
  stars: [],
  minStarsCount: 20,
  maxStarsCount: 50,

  didInsertElement(){
    let minStarsCount = this.get('minStarsCount');
    let maxStarsCount = this.get('maxStarsCount');
    let starsCount = Math.random() * (maxStarsCount - minStarsCount) + minStarsCount;
    for (let i = 0; i < starsCount; ++i){
      let star = document.createElement('div');
      let width = Ember.$('.stars-overlay-wrapper').width();
      let height = Ember.$('.stars-overlay-wrapper').height();
      let starTop = Math.random() * (height);
      let starLeft = Math.random() * (width);
      star.className = "star";
      star.style = `top: ${starTop}px; left: ${starLeft}px;`;
      Ember.$('.stars-overlay-wrapper').append(star);
      this.get('stars').pushObject(star);
    }
  }

});

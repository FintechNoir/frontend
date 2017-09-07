import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('stars-overlay', 'Integration | Component | stars overlay', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{stars-overlay}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#stars-overlay}}
      template block text
    {{/stars-overlay}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

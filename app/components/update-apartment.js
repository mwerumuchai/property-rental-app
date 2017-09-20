import Ember from 'ember';

export default Ember.Component.extend({
  updateApartmentForm: false,
  actions: {
    updateApartmentForm() {
      this.set('updateApartmentForm', true);
    },
    update(apartment) {
      var params = {
        owner: this.get('owner'),
        type: this.get('type'),
        city: this.get('city'),
        bedrooms: this.get('bedrooms'),
        image: this.get('image'),
      };
      this.set('updateApartmentForm', false);
      this.sendAction('update', apartment, params);
    }
  }
});

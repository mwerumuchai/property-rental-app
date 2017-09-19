import Ember from 'ember';

export default Ember.Component.extend({
  addNewApartment: false,
  actions: {
    apartmentFormShow() {
      this.set('addNewApartment', true);
    },

    saveApartment1() {
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
      };
      this.set('addNewApartment', false);
      this.sendAction('saveApartment2', params);
    }
  }
});

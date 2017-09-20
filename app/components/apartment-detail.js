import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(apartment) {
      if (confirm('Are you sure you want to delete this apartment?'))
      {
        this.sendAction('destroyApartment', apartment);
      }
    }
  }
});

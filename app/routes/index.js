import Ember from 'ember';



export default Ember.Route.extend({
  model() {
    return this.store.findAll('apartment');
  },

  actions: {
    saveApartment3(params) {
      var newApartment = this.store.createRecord('apartment', params);
      newApartment.save();
      this.transitionTo('index');
    
    }
  }
});

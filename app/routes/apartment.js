import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('apartment', params.apartment_id);
  },
  actions: {
    update(apartment, params) {
     Object.keys(params).forEach(function(key) {
       if(params[key]!==undefined) {
         apartment.set(key,params[key]);
       }
     });
     apartment.save();
     this.transitionTo('index');
   },
   destroyApartment(apartment) {
     apartment.destroyRecord();
     this.transitionTo('index');
   }
 }
});

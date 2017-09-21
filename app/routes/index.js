import Ember from 'ember';



export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      rentals: this.store.findAll('apartment'),
      reviews: this.store.findAll('review')
    });
  },

  actions: {
    saveApartment3(params) {
      var newApartment = this.store.createRecord('apartment', params);
      newApartment.save();
      this.transitionTo('index');
    },
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      newReview.save();
      this.transitionTo('index');
    }
  }
});

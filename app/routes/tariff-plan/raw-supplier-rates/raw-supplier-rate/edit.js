import Route from '@ember/routing/route';

export default Route.extend({
  model() { return this.modelFor('tariff-plan.raw-supplier-rates.raw-supplier-rate'); },

  actions: {
    willTransition() { if (this.currentModel.get('hasDirtyAttributes')) { return this.currentModel.rollbackAttributes(); } }
  }
});

import Route from '@ember/routing/route';

export default Route.extend({
  model() { return this.store.createRecord('tp-shared-group', {tpid: this.modelFor('tariff-plan').get('alias')}); },

  actions: {
    willTransition() { if (this.currentModel.get('isNew')) { return this.currentModel.destroyRecord(); } }
  }
});

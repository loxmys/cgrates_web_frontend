import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';
import { isPresent, isBlank } from '@ember/utils';
import { pluralize } from 'ember-inflector';

export default Component.extend({
  tagName:      '',
  store:        service(),
  searchField: 'customId',
  phName:      'id',
  multiple:     false,
  allowClear:   false,

  strToArray(str) {
    return isPresent(str) ? str.split(',') : [];
  },

  init() {
    this._super(...arguments);
    if (this.multiple) {
      if (isBlank(this.placeholder))
        this.set('placeholder', `Select ${pluralize(this.phName)}...`);
      this.set('controlType', 'power-select-multiple');
    } else {
      if (isBlank(this.placeholder))
        this.set('placeholder', `Select ${this.phName}...`);
      this.set('controlType', 'power-select');
    }
  },

  didReceiveAttrs() {
    this._super(...arguments);
    this.set('valueWrapper', this.strToArray(this.value));
  },

  searchTask: task(function * (term) {
    const response = yield this.get('store').query(this.searchModel, {
      tpid: this.tpid,
      filter: {
        [this.searchField.underscore()]: term,
      }
    });
    let result = response.mapBy(this.searchField);
    result.push('*any');
    return result;
  }).restartable(),

  actions: {
    onChange(value) {
      this.set('valueWrapper', value);
      if (this.multiple)
        this.set('value', value.join(','));
      else
        this.set('value', value);
      this.set('showOwnValidation', true);
    }
  },
});

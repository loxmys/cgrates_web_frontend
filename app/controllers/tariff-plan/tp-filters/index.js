import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import QueryControllerMixin from 'cgrates-web-frontend/mixins/query-controller-mixin';

export default Controller.extend(QueryControllerMixin, {
  queryParams: ['tenant', 'customId', 'filterType', 'filterFieldName', 'activationInterval', 'sortColumn',
    'sortOrder', 'page', 'pageSize'],

  selectValues: service(),

  tenant:             null,
  id:                 null,
  filterType:         null,
  filterFieldName:    null,
  activationInterval: null,

  permittedFilters: Object.freeze([
    'tenant', 'customId', 'filterType', 'filterFieldName', 'activationInterval'
  ]),
});

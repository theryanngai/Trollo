TrelloClone.Collections.Lists = Backbone.Collection.extend({
	url: '/api/lists',
	model: TrelloClone.Models.List,

	initialize: function(options) {
		if (options) {
			this.board = options.board;
		}
	},


	comparator: function(list) {
		return list.get('ord');
	}
});

TrelloClone.lists = new TrelloClone.Collections.Lists();
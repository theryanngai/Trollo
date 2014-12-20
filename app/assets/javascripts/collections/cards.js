TrelloClone.Collections.Cards = Backbone.Collection.extend({
	url: '/api/cards',
	model: TrelloClone.Models.Card,

	initialize: function(options) {
		if (options) {
			this.list = options.list;
		}
	},


	comparator: function(card) {
		return card.get('ord');
	}
});

TrelloClone.cards = new TrelloClone.Collections.Cards;
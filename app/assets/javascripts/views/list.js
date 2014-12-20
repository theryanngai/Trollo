TrelloClone.Views.ShowList = Backbone.CompositeView.extend({

	template: JST['list'],

	className: 'list-draggable',

	initialize: function(options) {
		this.addCards();


		this.listenTo(this.model, 'sync', this.render);
	},	

	events: {
		'click .delete_card': 'deleteCard',
	},

	addCards: function() {
		var that = this;

		this.model.cards().each(function(card) {
			var cardView = new TrelloClone.Views.ShowCard ({ model: card });
			that.addSubview('.card-container', cardView);
		})
	},

	render: function() {
		var content = this.template({ list: this.model });
		this.$el.html(content);
		this.attachSubviews();
		$('#list').sortable();
		return this;
	},

	deleteCard: function(event) {
		var id = $(event.target).data('id');
		var card = new TrelloClone.Models.Card({ id: id });
		var that = this;
		card.destroy({
			success: function(model) {
				that.model.fetch();
				that.subviews('.card-container').forEach(function(cardView) {
					if (cardView.model.id === model.id) {
						that.removeSubview('.card-container', cardView);
					}
				})
			}
		});
	},
})

TrelloClone.Views.ShowCard = Backbone.CompositeView.extend({

	template: JST['card'],

	className: 'card-draggable',

	initialize: function(options) {
		this.listenTo(this.model, 'destroy', this.remove);
	},	

	events: {
	},

	render: function() {
		var content = this.template({ card: this.model });
		this.$el.html(content);
		$('#card').sortable();
		return this;
	},
})

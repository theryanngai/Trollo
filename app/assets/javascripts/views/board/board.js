TrelloClone.Views.ShowBoard = Backbone.View.extend({
	events: {
		'click .delete_card': 'deleteCard',
		'click .delete_board': 'deleteBoard'
	},

	initialize: function(options) {
		this.listenTo(this.model, "sync", this.render);
	},

	template: JST['board/board'],

	render: function() {
		var content = this.template({ board: this.model });
		this.$el.html(content);
		$('.list').draggable({
			snap: '.list'
		});
		return this;
	},

	deleteCard: function(event) {
		var id = $(event.target).data('id');
		var card = new TrelloClone.Models.Card({ id: id });
		var that = this;
		card.destroy({
			success: function() {
				that.model.fetch();
			}
		});
	},

	deleteBoard: function(event) {
		this.model.destroy({
			success: function() {
				Backbone.history.navigate("", {trigger: true});
			}, error: alert(model.errors)
		});
	}
})
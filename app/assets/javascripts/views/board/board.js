TrelloClone.Views.ShowBoard = Backbone.CompositeView.extend({
	events: {
		'click .delete_board': 'deleteBoard'
	},

	initialize: function(options) {
		this.listenTo(this.model, "sync", this.render);
	},

	template: JST['board/board'],

	addLists: function() {
		var that = this;

		this.model.lists().each(function(list) {
			var listView = new TrelloClone.Views.ShowList ({ model: list });
			that.addSubview('.list-container', listView);
		})
	},

	render: function() {
		var content = this.template({ board: this.model });
		this.$el.html(content);
		this.attachSubviews();
		$('.list-draggable').sortable();
		return this;
	},

	deleteBoard: function(event) {
		this.model.destroy({
			success: function() {
				Backbone.history.navigate("", {trigger: true});
			}, error: alert(model.errors)
		});
	}
})
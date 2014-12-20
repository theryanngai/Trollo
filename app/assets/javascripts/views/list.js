TrelloClone.Views.ShowList = Backbone.CompositeView.extend({

	template: JST['list'],

	className: 'list-draggable',

	initialize: function(options) {

	},

	events: {
	},

	render: function() {
		var content = this.template({ list: this.model });
		this.$el.html(content);
		$('#list').sortable();
		return this;
	},


})

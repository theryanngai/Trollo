json.(@board, :title, :user_id)

json.lists do
	json.array!(@board.lists) do |list|
		json.(list, :id, :title, :ord)
		json.cards list.cards do |card|
			json.(card, :id, :title, :description)
		end
	end
end







class DeleteTitleFromCards < ActiveRecord::Migration
  def change
  	remove_column :cards, :title
  end
end

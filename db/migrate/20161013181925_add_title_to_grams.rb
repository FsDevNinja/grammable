class AddTitleToGrams < ActiveRecord::Migration
  def change
    add_column :grams, :title, :string
  end
end

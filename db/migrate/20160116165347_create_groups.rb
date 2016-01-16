class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.string :name
      t.date :date
      t.time :time
      t.string :location
      t.integer :creator_id
      t.text :info

      t.timestamps null: false
    end
  end
end

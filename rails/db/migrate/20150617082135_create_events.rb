class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :slug
      t.string :name
      t.text :description
      t.string :location
      t.date :event_date
      t.time :start_time
      t.time :end_time

      t.timestamps
    end
  end
end

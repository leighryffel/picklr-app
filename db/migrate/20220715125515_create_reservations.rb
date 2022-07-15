class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.string :date
      t.string :time
      t.integer :court_id
      t.integer :user_id
      
      t.timestamps
    end
  end
end

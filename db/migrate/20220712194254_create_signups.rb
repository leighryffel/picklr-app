class CreateSignups < ActiveRecord::Migration[7.0]
  def change
    create_table :signups do |t|
      t.string :date
      t.string :time
      t.integer :user_id
      t.integer :court_id

      t.timestamps
    end
  end
end

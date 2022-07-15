class Court < ApplicationRecord
  has_many :reservations, dependent: :destroy
  has_many :users
end

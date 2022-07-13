class Court < ApplicationRecord
  has_many :signups, dependent: :destroy
  has_many :users
end

class User < ApplicationRecord
  has_secure_password
  
  has_many :signups, dependent: :destroy
  has_many :courts
end

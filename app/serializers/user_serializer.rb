class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :skill_level
end

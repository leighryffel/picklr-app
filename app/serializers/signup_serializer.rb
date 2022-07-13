class SignupSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :user_id, :court_id
end

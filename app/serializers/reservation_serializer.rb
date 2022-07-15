class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :time, :date
  belongs_to :court
  belongs_to :user
end

class CourtSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :image_url
end

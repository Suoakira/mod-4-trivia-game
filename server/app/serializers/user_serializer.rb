class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :scores
  has_many :comments
end

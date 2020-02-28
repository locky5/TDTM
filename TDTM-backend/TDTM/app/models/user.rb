class User < ApplicationRecord
  has_many :matches
  serialize :metadata, Array
  validates :name, uniqueness: true
  has_secure_password
end

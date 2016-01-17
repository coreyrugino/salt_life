class Group < ActiveRecord::Base
  acts_as_taggable_on :category
  has_many :user_groups
  has_many :users, through: :user_groups

end

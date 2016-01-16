class GroupsController < ApplicationController
  def index
    @groups = Group.all.order(created_at: :desc)
    @tags = ActsAsTaggableOn::Tag.most_used(10)
  end

  def create
    binding.pry
      @group = Group.create(group_params)
      UserGroup.create(user_id: current_user.id, group_id: @group.id)
      @group.update(creator_id: current_user.id)
      render 'group'
  end

  private
    def group_params
      params.require(:group).permit(:name, :date, :time, :location, :info, :category_list)
    end
end

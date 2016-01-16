class GroupsController < ApplicationController
  def index
    @groups = Group.all.order(created_at: :desc)
    @tags = ActsAsTaggableOn::Tag.most_used(10)
  end

  def show
    @group = Group.find(params[:id])
    @time = @group.time.strftime('%I:%M:%S')
    @categories = @group.category_list
  end

  def edit
    @group = Group.find(params[:id])
  end

  def update
    @group = Group.find(params[:id])
    @group.update(group_params)
    render 'group'
  end

  def create
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

class UserGroupsController < ApplicationController
  def update
    @join = UserGroup.create(group_id: params[:id], user_id: current_user.id)
    redirect_to group_path(params[:id])
  end
end

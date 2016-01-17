json.group do
  json.id @group.id
  json.name @group.name
  json.date @group.date
  json.time @group.time.strftime('%I:%M:%S')
  json.location @group.location
  json.info @group.info
  json.creator User.find(@group.creator_id)
  json.categories @group.category_list.join(', ')
end

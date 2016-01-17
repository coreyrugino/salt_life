class ShowGroup extends React.Component {
  constructor(props){
    super(props);
    this.toggleEdit = this.toggleEdit.bind(this)
    this.editForm = this.editForm.bind(this)
    this.editGroup = this.editGroup.bind(this)
    this.state = { editForm: false, group: {name: this.props.group.name, date: this.props.group.date, time: this.props.time, location: this.props.group.location, info: this.props.group.info, category_list: this.props.category_list} }

  }
  toggleEdit(){
    this.setState({editForm: !this.state.editForm})
  }

  editForm(){
    if(this.state.editForm){
      return(
        <div>
          <form onSubmit={this.editGroup} >
            <input type= "text" ref= "groupName" defaultValue={this.props.group.name}/>
            <input type= "date" ref= "groupDate" defaultValue={this.props.group.date}/>
            <input type= "time" ref= "groupTime" defaultValue={this.props.time}/>
            <input type= "text" ref= "groupLocation" defaultValue={this.props.group.location}/>
            <input type= "text" ref= "groupInfo" defaultValue={this.props.group.info}/>
            <input type= "text" ref= "groupCategory" defaultValue={this.props.category_list}/>
            <button type= "submit" className= "btn" >Submit</button>
          </form>
        </div>
      );
    }
  }

  editGroup(e){
    e.preventDefault()
    $.ajax ({
      url: `/groups/${this.props.group.id}`,
      type: 'PUT',
      data: {group: {name: this.refs.groupName.value, date: this.refs.groupDate.value,
        time: this.refs.groupTime.value, location: this.refs.groupLocation.value,
        info: this.refs.groupInfo.value, category_list: this.refs.groupCategory.value}}
    }).success( data => {
      this.setState({ editForm: false, group: {name: data.group.name, date: data.group.date, time: data.group.time, location: data.group.location, info: data.group.info, category_list: data.group.categories} });
    });
  }

  render() {
    return(
      <div>
        <h1>
          {this.state.group.name}
        </h1>

        <h3>
        {this.state.group.date}<br />
        {this.state.group.time}<br />
        {this.state.group.location}<br />
        {this.state.group.info}<br />
        {this.state.group.category_list}
        </h3>
        <button className='btn' onClick={this.toggleEdit}>Edit</button>
        {this.editForm()}
      </div>
    );
  }
}

class Meetup extends React.Component {
  constructor(props){
    super(props);
    this.refreshPage = this.refreshPage.bind(this)
    this.submitGroup = this.submitGroup.bind(this)
    this.state = {tags: [], groups: []};
  }
  componentDidMount(){
    this.refreshPage()
  }
  refreshPage(){
    $.ajax({
      url: '/groups',
      type: 'GET'
    }).success( data => {
      this.setState({ groups: data.groups, tags: data.tags});
    });

  }
  submitGroup(e) {
    e.preventDefault()
    $.ajax({
      url: '/groups',
      type: 'POST',
      data: {group: {name: this.refs.groupName.value, date: this.refs.groupDate.value,
        time: this.refs.groupTime.value, location: this.refs.groupLocation.value,
        info: this.refs.groupInfo.value, category_list: this.refs.groupCategory.value}}
    }).success(data => {
      let groups = this.state.groups
      groups.push(data.group)
      this.setState({groups})
    })

  }
  render(){
    let groups = this.state.groups.map(group => {
      let key = `group-${group.id}`;
      return(<Group key={key} {...group} refreshPage={this.refreshPage} />)
    })
    let tags = this.state.tags.map(tag => {
      let key = `tag-${tag.id}`;
      return(<Tag key={key} {...tag} refreshPage={this.refreshPage} />)
    })
    return(
      <div>
        Top 10 Tags
        <div className='row'>
          {tags}
        </div>
        <h1 className='center-text'>Group Meetups</h1>
        <div className='row'>
          {groups}
        </div>
        <div>
          <form onSubmit={this.submitGroup} >
            <input type= "text" ref= "groupName" placeholder="Group Name"/>
            <input type= "date" ref= "groupDate" placeholder="Group Date"/>
            <input type= "time" ref= "groupTime" placeholder="Group Time"/>
            <input type= "text" ref= "groupLocation" placeholder="Group Location"/>
            <input type= "text" ref= "groupInfo" placeholder="Group Info"/>
            <input type= "text" ref= "groupCategory" placeholder="Categories, Seperate by comma"/>
            <button type= "submit" className= "btn" >Submit</button>
          </form>

        </div>
      </div>
    )
  }
}

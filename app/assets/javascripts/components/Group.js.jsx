class Group extends React.Component {
  constructor(props){
    super(props);
    this.groupPage = this.groupPage.bind(this);
    this.state = {};
  }
  componentDidMount(){

  }
  groupPage(){
    $.ajax({
      url: `/groups/${this.props.id}`,
      type: 'GET'
    })
  }

  render(){
    return(
      <div className='row card col s12' onClick={this.groupPage}>
        <a href={`/groups/${this.props.id}`} className='group-click col s6'>{this.props.name}</a>
        <p className='col s6 right-align'>Tags:{this.props.categories}</p>
      </div>
    )
  }
}

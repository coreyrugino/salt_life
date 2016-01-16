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
      <div className='card col s10 offset-s1' onClick={this.groupPage}>
        <a href={`/groups/${this.props.id}`} className='group-click'>{this.props.name}</a>
      </div>
    )
  }
}

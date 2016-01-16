class Group extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount(){

  }

  render(){
    return(
      <div>
        <h3>
          {this.props.name}
        </h3>
      </div>
    )
  }
}

class Tag extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  // componentDidMount(){
  //
  // }

  render(){
    return (
      <div className='col s2 center'>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

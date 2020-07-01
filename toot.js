
// Meu state está no app e quero passar um função que altera uma chave dentro desse state
// para um button acionar quando ser clicado.
//
// 
// Arvore de Hierarquia de Componentes
// \App-----
//        \Page----  
//                 \Grid------
//                            \GridItem------
//                                           \Button 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: false
    }
  }

  selectedItem() {
    this.setState((state) => { item: !state })
  }

  render() {
    return (<Page click={this.selectedItem}></Page>);
  }
}

export default App;


class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { click } = this.props;
    return (<Grid click={click}></Grid>);
  }
}

export default Page;


class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { click } = this.props;
    return (<GridItem click={click}></GridItem>);
  }
}

export default Grid;

class GridItem extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { click } = this.props;
    return (<Button click={click}></Button>);
  }
}

export default GridItem;

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { click } = this.props;
    return (<button onClick={() => this.mudaState()}></button>);
  }
}

export default Button;
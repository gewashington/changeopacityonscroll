import React, { Component, CreateClass } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
    // this.state = {
    //   opacity: 1
    // }
    // this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    // console.log('the scroll event:', e)
    // console.log(window.scrollY)
    // console.log( Math.round(100 /window.scrollY)/10) 
    // console.log(this.myRef)
    // console.log('opacity:', this.myRef.current.style['opacity'])
    // this.setState({
    //   opacity: 100 /window.scrollY
    // })
    this.myRef.current.style['opacity'] = 100 /window.scrollY
  }

  render() {
    return (
      <div>
        <div ref={this.myRef} className="header-bg"></div>
        <section>
        <h1>This is the title!</h1>
        <p>Lorem ipsum dolor. Sit amet commodo. Aliquet diam laoreet in nunc rutrum. Pellentesque consequat nascetur mauris risus nisl dolorem quis gravida arcu officia sed. Ante quisquam metus aliquet placerat pede.</p><p>Ut tellus turpis. Praesent vivamus facilisis. Sociosqu ac facilisi donec tempor nisl. Est purus urna. Pellentesque eu ut non adipiscing curae. Mi pellentesque mauris dolor nulla fusce tristique consectetur sodales. Feugiat mi elementum placerat lacus vehicula vestibulum nunc amet. Elit ullamcorper sapien tristique ad nam vel varius metus. Amet sodales aenean. Id bibendum volutpat porta primis mus. In vestibulum ligula cras orci pede. Vestibulum aliquet suscipit. Turpis sodales justo at elit pellentesque. Vitae vel porta libero cras urna. Magnis justo integer elit amet nulla vitae sapien proin aliquip arcu adipiscing eros sollicitudin ornare tellus lectus vestibulum. Eu integer in. Molestie vel rutrum. Tempus mauris sit. Placerat nibh urna. Nec libero tortor. Habitasse aliquam suscipit vivamus hymenaeos justo. At in nibh. Et leo diam. Dictum quia blandit praesent vivamus arcu. Faucibus dignissim eu orci luctus arcu purus adipiscing commodo sociosqu aliquam pellentesque suspendisse amet ac sodales laoreet tellus risus odio integer.</p><p>Integer adipiscing ut. Felis ut mauris sed rutrum eget pellentesque a vel. Quisque nec dolor vel feugiat vehicula nec sit ullamcorper. Scelerisque ut blandit lorem eu cursus a porttitor facilisi. Non quam nulla purus accumsan ipsa. Mi libero elementum. Dui tempora vestibulum ornare nibh ac. Quisque adipiscing urna urna dolor mollis sit rhoncus augue. Wisi habitasse mauris. Sociosqu dolor consectetuer dui justo habitasse. Elit libero massa morbi imperdiet amet. Amet porta nunc suspendisse lacus dolor. Consectetuer laoreet gravida. Tristique vivamus lectus. Cras sit velit. Diam vitae vel pede torquent commodo orci viverra quis. Vehicula molestie viverra. Dui tincidunt volutpat et varius est pede proin hymenaeos felis dictum non congue consectetuer in nunc maecenas amet. Ipsum proin duis. Gravida sed fugiat.</p><p>Ultricies nunc in. Phasellus tortor condimentum. Aliquam rutrum eget ultrices at facilisis magna nisl pede nonummy pellentesque eget vel ultricies quam vel imperdiet nulla. Vivamus in amet ultricies nullam phasellus nec ullamcorper laoreet ac eros tristique. Rutrum ipsum wisi eu ante amet vitae vivamus eu felis mauris aenean. Aliquet taciti vestibulum. Vehicula sed quisque ut orci et. Enim id sagittis non sit eros sagittis eget ultrices. Integer in sunt. Et velit nisl in in inceptos. Porttitor nibh phasellus. Viverra vel nec. Sit congue auctor. Venenatis pellentesque habitasse. In interdum tortor.</p><p>Libero libero sed vel mauris dictum etiam integer enim lacus donec augue varius suspendisse sapien. Nibh semper ut quam urna pharetra nulla a mauris mauris sed sit. Aut qui dui. Felis orci lorem. Wisi enim imperdiet ligula ut wisi mauris justo pellentesque et varius leo et gravida sed. Integer integer mollis. Dui tincidunt est. Eget ridiculus turpis vel pretium non pellentesque diam vel. Pellentesque commodo nostra. Id ultrices ac. Diam minus quis. Maecenas turpis cras quis porttitor odio. Sem euismod vivamus. Nibh laoreet et ligula odio vitae felis mauris id. Vivamus nisl erat. Vel elit magna sodales sodales donec. Erat nam ut. Dictumst integer sed. Egestas eget nostra et nec.</p>
        </section>
      </div>
    );
  }
}

export default App;

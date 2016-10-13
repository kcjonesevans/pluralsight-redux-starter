//This component hangles the App template used on every page.
import Reach, {PropTypes} from 'react';

class App extends React.Component{
  renter(){
    return(
      <div className="container-fluid">
        <p>Header here...</p>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;

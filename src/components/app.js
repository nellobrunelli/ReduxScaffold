// import BookList from '../containers/book-list';
// import BookDetail from '../containers/book-detail';

export default class App extends React.Component {

    static propTypes = {
        children: React.PropTypes.node
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

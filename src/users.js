import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import UserList from './Component/UserList';
import { fetchUser } from './actions';
import { Spinner } from './Component/Common';

class users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
    this.page = 1;
  }

  componentWillMount() {
    this.props.fetchUser(this.page);
  }
 
  handleLoadMore = () => {
        if (!this.props.loading) {
        this.page = this.page + 1;
        console.log(this.page);
        this.props.fetchUser(this.page);
      }
  };

  renderFooter = () => {
    if (!this.props.loading) return null;
    return (
      <Spinner size="large" />
    );
  };
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          width: '100%',
          backgroundColor: '#CED0CE'
        }}
      />
    );
  };

  renderData() {
    if (this.props.loading && this.page === 1) {
      return <Spinner size="large" />;
    } 
    return (            
      <FlatList
        data={this.props.data}
        renderItem={({ item }) => (
                <UserList userData={item} />
        )}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={this.renderSeparator}
        ListFooterComponent={this.renderFooter.bind(this)}
        onEndReachedThreshold={0.5}
        onEndReached={this.handleLoadMore.bind(this)}
      />
       );
  }

  render() {
     return (
   <View style={{ borderTopWidth: 0, borderBottomWidth: 0, padding: 5, height: '100%' }}>
      {this.renderData()}
        </View>
    );
  }
}
const mapStateToProps = ({ Users }) => {
  const { data, error, loading } = Users;
  return { data, error, loading };
};

export default connect(mapStateToProps, { fetchUser })(users);

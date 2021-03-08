import React, {Component} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [],
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          List: res,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  Separator = () => (
    <View
      style={{
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 1,
        marginTop: 10,
        marginBottom: 10,
      }}
    />
  );
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
          <FlatList
            data={this.state.List}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={this.Separator}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => alert('Nav to details screen')}>
                <Text style={{fontSize: 24}}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  }
}

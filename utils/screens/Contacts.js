import React, { Component } from 'react'
import { Text, View, FlatList, ActivityIndicator, StyleSheet } from 'react-native'

import ContactListItem from '../components/ContactListItem';
import { fetchContacts } from '../utils/api';

export default class Contacts extends Component {
    state = {
        contacts: [],
        loading: true,
        error: false,
    };

    async componentDidMount() {
        try {
            const contacts = await fetchContacts();

            this.setState({
                contacts,
                loading: false,
                error: false,
            });
        }catch(e) {
            this.setState({
                loading: false,
                error: true,
            });

        }
    }
  renderContact = ({ item }) => {
      const { name, avatar, phone } = item;

      return <ContactListItem name={name} avatar={avatar} phone={phone} />; 
  };
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

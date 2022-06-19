import React, { useState } from "react";
import { FlatList } from "react-native";

import Screen from "../config/Screen";
import ListItem from "../components/ListItems";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListSeparator from "../components/ListSeparator";

const initialMessages = [
  {
    id: 1,
    title: "Tomiwa",
    description: "Hey! Is this item still available?",
    image: require("../assets/Tomiwa.jpg"),
  },
  {
    id: 2,
    title: "Tomiwa",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require("../assets/Tomiwa.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;

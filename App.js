import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import TodoItem from './component/todoItem.js';
import Header from './component/header.js';
import AddTodo from './component/addTodo.js';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Jadi Sigma', key: '1' },
    { text: 'wongirengjembatan', key: '2' },
    { text: 'beli prime', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key !== key);
    });
  };

  const sumbitHandler = (text) => {
    setTodos ((prevTodos) => {
      return[
        {text: text, key: Math.random().toString()},
        ...prevTodos,
      ]
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo sumbitHandler={sumbitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
});

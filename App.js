import React, {useState} from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import Header from './src/components/Header';
import Button from './src/components/Button';

const Phrases = () => {
  const [count, setCount] = useState(0);

  const list = [
    {
      text:
        'All our dreams can come true, if we have the courage to pursue them.',
      author: 'Walt Disney',
    },
    {
      text: 'The secret of getting ahead is getting started.',
      author: 'Mark Twain',
    },
    {
      text:
        'I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.',
      author: 'Michael Jordan',
    },
    {
      text:
        'Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.',
      author: 'Mary Kay Ash',
    },
    {
      text:
        'The best time to plant a tree was 20 years ago. The second best time is now.',
      author: 'Chinese Proverb',
    },
    {text: 'Only the paranoid survive.', author: 'Andy Grove'},
    {
      text: 'It’s hard to beat a person who never gives up.',
      author: 'Babe Ruth',
    },
    {
      text:
        'I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.’',
      author: 'Leah Busque',
    },
    {
      text:
        'If people are doubting how far you can go, go so far that you can’t hear them anymore.',
      author: 'Michele Ruiz',
    },
    {
      text:
        'We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes - understanding that failure is not the opposite of success, it’s part of success.',
      author: 'Arianna Huffington',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#FFFFFF" />
      <Header />
      <View style={styles.wrapper}>
        <View>
          <Image
            source={require('./src/assets/quote.png')}
            style={styles.quote}
          />
          <Text style={styles.phrase}>{list[count].text}</Text>
          <Text style={styles.author}>- {list[count].author}</Text>
          <View style={styles.buttonWapper}>
            <Button
              onPress={() => {
                if (count !== 0) {
                  setCount(count - 1);
                } else {
                  setCount(list.length - 1);
                }
              }}
              iconName="chevron-left"
            />

            <Button
              onPress={() => {
                if (count !== list.length - 1) {
                  setCount(count + 1);
                } else {
                  setCount(0);
                }
              }}
              iconName="chevron-right"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#9254FF',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quote: {
    alignSelf: 'center',
  },
  phrase: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 28,
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: 'verdana-bold',
  },
  author: {
    paddingTop: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: 'verdana-italic',
  },
  buttonWapper: {
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 135,
    paddingRight: 135,
  },
});

export default Phrases;

import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

import { 
  Container, Content, Card, CardHeader, CardContent, Title, Description, CardFooter, Annotation
} from './styles';

export default function Main() {
  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: { 
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  )
  
  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldfState == State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;
      
      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setOffset(offset);
        translateY.setValue(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = Opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      })

     
    }
  }
  
  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <Card 
            style={
              { 
                transform: [{
                  translateY: translateY.interpolate({
                    inputRange: [0, 340],
                    outputRange: [0, 340],
                    extrapolate: 'clamp',
                  }),
                }]
              }
            }
          >
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>

            <CardContent>
              <Title>Saldo dispon??vel</Title>
              <Description>R$ 764.549,91</Description>
            </CardContent>

            <CardFooter>
              <Annotation>
                Transfer??ncia de R$ 500,00 recebida de Marcos Veloso hoje ??s 18:30h
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>

      </Content>

      <Tabs translateY={translateY} />
    </Container>
  );
}
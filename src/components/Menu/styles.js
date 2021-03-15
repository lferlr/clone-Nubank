import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  margin: 0 30px;
`;

export const Code = styled.View`
  background: #FFF;
  padding: 10px;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 13px;
  color: #999;
`;

export const Nav = styled.View`
  margin-top: 30px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.8);
`;

export const NavItem = styled.View`
  flex-direction: row;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const NavText = styled.Text`
  font-size: 15px;
  color: #FFF;
  margin-left: 20px;
`;
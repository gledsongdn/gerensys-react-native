import React, { Component } from 'react';
import {  StatusBar, StyleSheet, Platform } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Left, Right, Button, Body, Icon, Title, Text, Subtitle } from 'native-base';
export default class FormExample extends Component {

  render() {
    return (
      <Container>
        <Header> 
        <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Cadastro</Title>
            <Subtitle>Funcionário</Subtitle>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        <Content>
          <Form>
            <Item last>
              <Input placeholder="Nome Completo" />
            </Item>
            <Item last>
              <Input placeholder="CPF" />
            </Item>
            <Item last>
              <Input placeholder="RG" />
            </Item>
            <Item last>
              <Input placeholder="Telefone" />
            </Item>
            <Item last>
              <Input placeholder="Senha" />
            </Item>
          </Form>
          <Button success><Text>Cadastrar</Text></Button>
          <Button light><Text>Cancelar</Text></Button>
          <Button 
            light
            full>
            <Text>Registrar</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
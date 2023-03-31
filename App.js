
import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button,Image } from 'react-native';
import { Picker, CheckBox} from 'react-native-web';

export default function App() {
    const [nome,setNome] = useState ();
    const [telefone,setTelefone] = useState ();
    const [endereco,setEndereco] = useState ();
    const [email,setEmail] = useState ();
    const [otherinfo,setOtherInfo] = useState ();
    const [aceito,setAceito] = useState ();
    const [pam1,setPam1] = useState(true);
    
  
  return (
    <View style={styles.container}>
      <View  style={styles.centro}> 
        <Image
        style={{marginTop:2 ,width: 70, height: 70  , borderRadius:20}}
        source= {require("./assets/originalperira.jpg")}
        />
      </View>

      <View style={{borderRadius:10, borderWidth:2,width:"95%", padding:10}} >
      <Text style={styles.fonte}> Dados Pessoais</Text>
          <TextInput style={ styles.borda }
              placeholder="Digite seu nome"
              keyboardType='numeric'
              onChangeText={(text)=> setNome(text)} 
             
          />

          <TextInput style={ styles.borda }
              placeholder="Digite seu telefone..."
              keyboardType='numeric'
              onChangeText={(text)=> setTelefone(text)} 
          />

          <TextInput style={ styles.borda }  
              placeholder="Digite seu endereço..."
              keyboardType='numeric'
              onChangeText={(text)=> setEndereco(text)} 
          />
          
          <TextInput style={ styles.borda }  
              placeholder="Digite seu Email..."
              keyboardType='numeric'
              onChangeText={(text)=> setEmail(text)} 
          />
      </View>
      
      <View style={styles.info}>
      <Text style={styles.fonte}>Outras informações</Text>
        <Picker style={{ width:"100%"}}
        onValueChange={(itemValue, itemIndex)=> setOtherInfo(itemValue)}
        >
          <Picker.Item label="Programar" value="Programar"/>
          <Picker.Item label="Programador" value="Programador"/>
        </Picker>
    </View>      
    <View style={{flexDirection:"row", width:'96%', paddingLeft:5}}>
        <CheckBox 
        value={pam1}
        onValueChange={() => setPam1(!pam1)}
        color={pam1 ? "#4630EB" : undefined}
      />
      <Text style={{ margin:-1}}> Aceito os termos trabalhistas</Text>
      </View>

      
      
    <View style={{borderRadius:10, borderWidth:2,width:"95%", padding:10, marginTop:30}}>
    <Text>Nome: {nome} </Text>
    <Text>Telefone: {telefone} </Text>
    <Text>Endereço:{endereco} </Text>
    <Text>E-mail:{email} </Text>
    <Text>Outras informações: {otherinfo} </Text>
    <Text>Aceito: {pam1?"sim": "não"}</Text>

    </View>
          
    

    </View>
  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    //justifyContent: 'center',
    textDecorationColor: 'black'
  },
 centro:{
    alignItems: 'center',
    padding: 10,

 },
  carro:{
    alignItems: 'center',


  },
  
  borda:{
    borderWidth:2, 
    padding:15,
    width: "100%",
    height:10,
    marginBottom:10,

  },

  fonte:{
    fontWeight:"bold",
  },

  
 
});

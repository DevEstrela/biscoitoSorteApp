import React, { useState } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';

 function App() {
    const [img, setImg] = useState(require('./src/biscoito.png'))
    const [textoFrase, setTextoFrase] = useState( '' )

     let frases = [
       'Tudo posso naquele que me fortalece. (Filipenses 4:13) ',

       'Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas serão acrescentadas a vocês. (Mateus 6:33) ',

       'Honra teu pai e tua mãe, a fim de que tenhas vida longa na terra que o Senhor,o teu Deus, te dá. (Êxodo 20:12) ',

       'Respondeu Jesus: "Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim. (João 14:6)',

       'Assim, eles já não são dois, mas sim uma só carne. Portanto, o que Deus uniu, ninguém separe". (Mateus 19:6) ',

       'E conhecerão a verdade, e a verdade os libertará". (João 8:32)',
       'Entregue o seu caminho ao Senhor; confie nele, e ele agirá. (Salmos 37:5)'

     ]



    function quebraBiscoito(){
      let numeroAleatorio = Math.floor(Math.random() * frases.length)
       setTextoFrase(' " '+ frases[numeroAleatorio]+' " ')
       setImg(require('./src/biscoitoAberto.png'))
    }
    function reiniciar(){
      setImg(require('./src/biscoito.png'))
      setTextoFrase('')
    }


  return (
    <View style={styles.telatoda} > 
     
     <Image
     source={img}
     style={styles.img}
     /> 

     <Text style={styles.frase} > {textoFrase} </Text>

     <TouchableOpacity style={styles.botao}  onPress={quebraBiscoito} > 
       <View style={styles.areadobotao} >
         <Text style={styles.Textodobotao} >   Quebrar Biscoito </Text>
       </View>
     </TouchableOpacity>



     <TouchableOpacity style={[styles.botao, {marginTop: 15, borderColor: '#000'}]}  onPress={ reiniciar } > 
       <View style={styles.areadobotao} >
         <Text style={[styles.Textodobotao, {color: '#000}'} ]} >   Zerar Biscoito </Text>
       </View>
     </TouchableOpacity>



    </View>
  )
}



const styles = StyleSheet.create({
    telatoda:{
     flex:1,
     justifyContent: 'center',
     alignItems: 'center'
    },
    img:{
      width: 230,
      height: 230,
    },
    frase:{
      fontSize: 19,
      color: '#000',
      margin: 30,
      fontStyle: 'italic',
      textAlign: 'center'
    },
    botao:{
      width: 230,
      height: 50,
      borderColor: '#dd7b22',
      borderWidth: 2,
      borderRadius: 25
    },
    areadobotao:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    Textodobotao:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000'

    }
  
})


export default App;
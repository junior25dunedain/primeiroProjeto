import React from "react";
import {View, Text, Pressable, Linking,Image, StyleSheet, SafeAreaView, StatusBar} from 'react-native';

const imagem = 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
const corGit = '#C9D1D9';
const corDark = '#4F565E';
const urlgithub = 'https://github.com/junior25dunedain';

const App = ()=>{

    const handlePressgotogithub = async ()=>{
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlgithub);
        
        if(res){
            console.log('link aprovado');
            console.log('abrindo link!!');
            await Linking.openURL(urlgithub);
        }
    }
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={'black'} barStyle="light-content" />
            <View style={style.content}>
                <Image accessibilityLabel="pessoa anônima" style={style.avatar} source={{uri:imagem}}></Image>
                <Text accessibilityLabel="nome do usuario: Júnior Agra" style={[style.defaultText, style.name]}>Junior Agra</Text>
                <Text accessibilityLabel="Apelido: Dunadain do norte" style={[style.defaultText, style.nickname]}>Dunedain do norte</Text>
                <Text accessibilityLabel="descrição: Desenvolvedor Python" style={[style.defaultText, style.description]}>Desenvolvedor Python</Text>
                <Text accessibilityLabel="descrição: Engenheiro Eletricista" style={[style.defaultText, style.description]}>Engenheiro Eletricista</Text>
                <Pressable onPress={handlePressgotogithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textobuton]}>Open in Github</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container:{
        // colunas
        backgroundColor: 'black',
        flex: 1, // expandir para a tela inteira
        justifyContent: 'center',
        //flexDirection: 'row',
        
    },
    content:{
        padding: 20,
        
    },
    avatar:{
        margin: 50,
        height: 180,
        with: 180,
        borderRadius: 90,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText:{
        color: corGit,
        alignItems: 'center',
        
    },
    name:{
        margin: 10,
        fontWeight: 'bold',
        fontSize: 25,
    },
    nickname:{
        fontSize: 18,
        color: corDark,
    },
    description:{
        fontSize: 14,
        fontWeight: 'bold',
    },
    button:{
        marginTop: 20,
        backgroundColor: corDark,
        borderRadius: 10,
        padding: 20,
    },
    textobuton:{
        fontWeight: 'bold',
        fontSize: 16,
    }
});
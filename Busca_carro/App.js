import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Linking, TextInput,TouchableOpacity,ScrollView} from 'react-native';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function App() {
  
const [carros,setcarros] = useState ('');
const [placas,setPlacas] = useState ('');
const [pneus,setPneus] = useState ('');

const pesquisarCarro =() => {
  const urlSite = `https://www.olx.com.br/autos-e-pecas/carros-vans-e-utilitarios?q=${encodeURIComponent(carros)}`;
  Linking.openURL(urlSite);
}

const pesquisarPlaca = () => {
  const urlApp = `https://anycar.com.br/consulta-placa/placa`;
  const urlSite = `https://play.google.com/store/apps/details?id=com.anycar.mainApp&hl=pt_BR`;

  try{
    Linking.openURL(urlApp)
  }
  catch(error){
    Linking.openURL(urlSite)
  }}

  const pesquisarPneu = () => {
    const urlSite = `https://www.pirelli.com/tyres/pt-br/carro/catalogo-pneus/por-medida/${encodeURIComponent(pneus)}`;
    Linking.openURL(urlSite);
  }
  return (
  <SafeAreaProvider style={styles.screen} >
    <SafeAreaView style={styles.fundo}>
      <View style={styles.header}>
        <Text style={styles.titulo}>BUSCA_CARRO</Text>
        <Text style={styles.headerCaption}>Tudo para facilitar sua busca</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
    <View style={styles.container}>
      <Text style = {[styles.text]}>Pesquise um carro de seu interesse</Text>
      <TextInput
      style={[styles.TextInput]}
        placeholder="Digite o nome do carro..."
        value={carros}
        onChangeText={setcarros}
      />
      <TouchableOpacity
      style={[styles.bottom]}
      Text = "Pesquisar"
      onPress={pesquisarCarro}
      ><Text style={styles.buttonText} >Pesquisar</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </View>

    <View style={styles.container}>
      <Text style = {[styles.text]}>Procure pelo pneu de sua escolha</Text>
      <Text  style = {[styles.subtitulo]}>Siga o exemplo de medida 265_65-R17</Text>
       <TextInput
      style={[styles.TextInput]}
        placeholder="Diga a marcação do pneu"
        value={pneus}
        onChangeText={setPneus}
      />
      <TouchableOpacity
      style={[styles.bottom]}
      Text = "Pesquisar"
      onPress={pesquisarPneu}
      ><Text style={styles.buttonText} >Pesquisar</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </View>

    <View style={styles.container}>
      <Text style = {[styles.text]}>Procure a pela placa de seu carro</Text>
       
      <TouchableOpacity
      style={[styles.bottom]}
      Text = "Pesquisar"
      onPress={pesquisarPlaca}
      ><Text style={styles.buttonText} >Pesquisar</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#21143d',
  },
  fundo: {
    flex: 1,
    backgroundColor: '#21143d',
  },
  header: {
    backgroundColor: '#302052',
    borderBottomWidth: 3,
    borderBottomColor: '#f5c842',
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 20,
  },
  titulo: {
    fontSize: 27,
    fontWeight: '800',
    color: '#fff9df',
    letterSpacing: 1.2,
  },
  headerCaption: {
    color: '#d9cdec',
    fontSize: 14,
    marginTop: 6,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 18,
    paddingBottom: 30,
    gap: 16,
  },
  subtitulo: {
    fontSize: 13,
    color: '#6c5c80',
    marginBottom: 14,
  },
  container: {
    width: '100%',
    backgroundColor: '#fffdf7',
    borderColor: '#e5dcef',
    borderWidth: 1,
    borderRadius: 22,
    padding: 20,
    shadowColor: '#100720',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.22,
    shadowRadius: 12,
    elevation: 6,
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2d1b4e',
    marginBottom: 14,
  },
  TextInput: {
    borderRadius: 13,
    backgroundColor: '#f7f2ff',
    borderColor: '#dac9f0',
    borderWidth: 1,
    color: '#2d1b4e',
    fontSize: 15,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 14,
  },
  bottom: {
    backgroundColor: '#f5c842',
    paddingVertical: 14,
    borderRadius: 13,
    alignItems: 'center',
    shadowColor: '#c99c12',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: '#2d1b4e',
    fontSize: 16,
    fontWeight: '800',
  }
});

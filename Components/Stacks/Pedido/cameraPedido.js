import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Image, TextInput, ScrollViewComponent, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useDispatch } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';



export default CameraScreen = ({ route, navigation }) => {

  const dispatch = useDispatch();

  const tipo = route.params.tipo

  const PendingView = () => (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lightgreen',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Waiting</Text>
    </View>
  );



  async function takePicture(camera) {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      dispatch({ type: `${tipo}`, payload: data.uri })
      navigation.goBack()
    }
  }

  function salvarImagem() {

    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {

      alert("Foto Salva com sucesso!, lembre-se confirmar o envio em 'Enviar Documento' ");
      dispatch({ type: `${tipo}`, payload: image.path })

      navigation.goBack()
    });
  }



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
  });




  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      >
        {({ camera, status, recordAudioPermissionStatus }) => {
          if (status !== 'READY') return <PendingView />;
          return (
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => takePicture(camera)} style={styles.capture}>
                <Text style={{ fontSize: 14 }}> SNAP </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => salvarImagem()} style={styles.capture}>
                <Text style={{ fontSize: 14 }}> Anexar Documento </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </RNCamera>
    </View>

  )
}



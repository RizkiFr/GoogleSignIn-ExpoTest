import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import GoogleSignIn from 'expo-google-sign-in';
import * as AppAuth  from 'expo-app-auth';

export default function App() {



    login=async()=>{

      const config = {
        issuer: 'https://accounts.google.com',
        clientId: '598859419864-rdarhvsor6sqmr20ithta5r9bb8iq3v7.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      };
      
      const tokenResponse = await AppAuth.authAsync(config);
      alert(tokenResponse)
      console.log(tokenResponse)

      // try {
      //   await GoogleSignIn.askForPlayServicesAsync();
      //   const { type, user } = await GoogleSignIn.signInAsync();
      //   console.log(user)
      //   if (type === 'success') {
      //     // ...
      //   }
      // } catch ({ message }) {
      //   alert('login: Error:' + message);
      }
    // // };

    //     try {
    //         GoogleSignIn.initAsync({ clientId: '598859419864-rdarhvsor6sqmr20ithta5r9bb8iq3v7.apps.googleusercontent.com' });
    //       } catch ({ message }) {
    //         alert('GoogleSignIn.initAsync(): ' + message);
    //       }

        // try {
        //     const result = await GoogleSignIn.logInAsync({
        //     //   androidClientId: YOUR_CLIENT_ID_HERE,
        //       iosClientId: '598859419864-rdarhvsor6sqmr20ithta5r9bb8iq3v7.apps.googleusercontent.com',
        //       scopes: ['profile', 'email'],
        //     });
        //     console.log(result)
        //     if (result.type === 'success') {
        //       return result.accessToken;
        //     } else {
        //       return { cancelled: true };
        //     }
        //   } catch (e) {
        //       console.log(e)
        //     return { error: true };
        //   }
    // }

  return (
    <View style={styles.container}>
      <Button title="Cek" onPress={()=>this.login()} />
      {/* <Text>AppAuth: {JSON.stringify(AppAuth.URLSchemes, null, 2)}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

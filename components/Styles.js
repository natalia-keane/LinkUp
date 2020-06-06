import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create ({
    
    container: {
        backgroundColor: 'steelblue',
        padding: 50,
        flex: 1
    }, 

    logo:{
        width: 100,
        height: 100
    },
    
    logoContainer:{
        alignItems: 'center'
    },

    text:{
        color: 'white',
        fontSize: 40,
        marginBottom: 90,
        fontFamily: 'righteous'
      },

    button:{
        marginBottom: 20,
        bottom: 0,
        borderRadius: 10,
        overflow: 'hidden',
        width: 150
    },

    input:{
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        width: 200,
        paddingHorizontal: 10,
        borderRadius: 10,
        flexDirection: 'row-reverse'
    },

    formContainer: {
        padding: 20,
        alignItems: 'center'
    },

    buttonContainer:{
        backgroundColor: 'dodgerblue',
        borderRadius: 10,
        paddingVertical: 15,
        width: 200
    },

    name:{
        fontFamily: 'righteous',
        color: 'white',
        flex: 1,
        fontSize: 40
      },

    button:{
        bottom: 0,
        borderRadius: 10,
        overflow: 'hidden',
        width: 150,
        marginBottom: 100,
        alignSelf: 'center'
      },

      errorMessage:{
          color:'yellow',
          fontWeight: '700',
          marginBottom: 20,
          marginTop: 5
      }
});
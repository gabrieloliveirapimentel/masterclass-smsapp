import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
    alignItems: 'center',
    justifyContent: 'center',

  },
  separator: {
    flexDirection: 'row',
    padding: 32,
    gap: 16
  },
  input: {
    width: 64,
    height: 64,
    backgroundColor: '#8257E5',
    color: '#FFFFFF',
    borderRadius: 7,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
  button: {
    width: 200,
    height: 64,
    backgroundColor: '#8257E5',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',

  },
  textButton: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  }
});
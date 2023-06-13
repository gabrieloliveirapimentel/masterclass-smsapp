# Masterclass: Verificação automática de SMS

Todo mundo já recebeu um código de autenticação via SMS, seja por um padrão de cadastro novo ou numa verificação em duas etapas. Em qualquer um dos casos, ter que sair da tela principal do aplicativo para a tela de mensagens é sempre um trabalho extra que dá pra ser evitado, mas isso precisa partir lá do desenvolvimento do app. Nessa aplicação. é feita essa automação. 

Além disso, foi adicionado uma verificação em que caso o que está nos campos de input seja realmente o código que chegue para o usuário o app permite a mudança de tela, e caso o usuário modifique o input e o código seja diferente, um alerta é disparado.

## Tecnologias utilizadas

- react-navigation
- react-native-otp-verify

# Workshop DevDay AR 2018 - Animaciones con React Native

Este workshop fue creado para el DevDay Ar 2018.

## Challenges

### 1 - Conceptos base (`AnimatedValue`, `interpolate`, `useNativeDriver`, `transform`)

Crear un Splash screen animado en distintos pasos

1. **Mostrar logo** animándolo para que entre desde la izquierda
2. **Mostrar el año** haciendo _fade in_ y moviendo el logo al mismo tiempo

### 2 - Usando el evento de scroll como disparador de la animación

Animar el _header_ achicándolo a medida que se _hace scroll_ sobre una lista

### 3 - Implementando una animación compleja

Implementar un _floating heart_ para lograr el resultado que vemos [aquí](https://github.com/underscopeio/react-native-floating-hearts)

## Consejos

- **Antes de implementar una animación, entender en qué consiste**: qué pasos tiene, qué _easing_ deberíamos usar y qué propiedades animar para cada elemento.
- **Siempre tratar de correr nuestras animaciones usando el _native driver_**: pasando el parámetro `useNativeDriver: true` al definir una animación con `Animated` vamos a lograr la mejor performance.
- **Animar estilos que permitan usar el _native driver_**: para poder usar el _native driver_ **NO** se pueden animar propiedades de layout (como `flex`, `top` o `width`) pero **SI** se pueden usar todas las propiedades que ofrece `transform` (como `scale`, `translate` y `rotate`)
- **No hace falta definir un `AnimatedValue` por cada elemento animado**: podemos _conectar_ más de un estilo al mismo valor y luego _ejecutar_ una misma animación.
- **Es muy útil usar el método `interpolate` de `AnimatedValue`** para conectar distintos estilos a un mismo valor.
- **La propiedad de estilo `transform` recibe un array**: y esto no es casual, ya que **el orden de las transformaciones importa**. No es lo mismo `transform: [{ rotate: '90deg' }, { translateX: 100 }]` que `transform: [{ translateX: 100 }, { rotate: '90deg' }]`.

## Errores comunes

- Olvidarse de usar `Animated.View`, `Animated.Image` y `Animated.Text`\*\*: es fácil olvidarse este detalle y el error no es muy amigable.
- Intentar usar el _native driver_ y propiedades no soportadas por el mismo.

importar  Reaccionar ,  {  Componente  }  de  'reaccionar' ;
importar   {  Image ,  Linking  ,  StyleSheet  }
de  'react-native' ;
importación  {  Container ,  encabezado ,  contenido ,  tarjeta ,  CardItem ,  en miniatura ,  texto ,  botón ,  icono ,  izquierda ,  cuerpo ,  Derecha  }  de  'nativo-base' ;



exportar  clase predeterminada  DetailsScreen amplía Componente {    

  render ( )  {
    
    const  handleCallPress  =  async ( )  => {
      Vinculación . openURL ( "tel: 25122727" ) ;
    } ;
    const  handleCall2Press  =  async ( )  => {
        Vinculación . openURL ( "tel: 25121212" ) ;
    } ;
    const  handleCall3Press  =  async ( )  => {
      Vinculación . openURL ( "tel: 25121949" ) ;
    } ;
    retorno  (
      < Estilo de contenedor  = { estilos . fondo } >  
        < Estilo de encabezado  = { estilos . contenedor } >  
        < Estilo de texto  = { estilos . titulo } > Numeros de Emergencia < / Text >  
        < / Encabezado >
        < Contenido  >
        < Estilo de texto  = { estilos . separador } > < / Texto >  
            < CardItem  style  =  { estilos . columna } >
              < Izquierda  >
                < Miniatura 
                source = { require ( './../assets/poli.png' ) } 
                style  =  { estilos . imagen }
                / >
                < Cuerpo >
                  < Estilo de texto  = { estilos . tit2 } > Policia Nacional < / Text >   
                  < Estilo de texto  = { estilos . ti1 } > Juigalpa, CHontales < / Text >   
                < / Cuerpo >
              < / Izquierda >
             
                < Botón  onPress = { handleCallPress }  style  =  { estilos . Pero }  >
                   
                  < Estilo de texto  = { estilos . icono } > Llamar < / Texto >  
                < / Botón >
            
          
                < Botón 
                  onPress = { ( )  =>  {  esto . utilería . navegación . navegar ( 'Inicio' ) } }
                  style  =  { estilos . But2 } >
            
                  < Estilo de texto  = { estilos . ic2 } > Detalle < / Texto >   
                < / Botón >
            
              < Derecha >       
              < / Derecha >
            < / CardItem >
            
            < Estilo de texto  = { estilos . separador } > < / Texto >  
            < CardItem  style  =  { estilos . columna } >
              < Izquierda  >
                < Miniatura 
                fuente = { require ( './../assets/Cruz-Roja.jpg' ) } 
                style  =  { estilos . imagen }
                / >
                < Cuerpo >
                  < Estilo de texto  = { estilos . tit2 } > Cruz Roja < / Text >   
                  < Estilo de texto  = { estilos . ti1 } > Juigalpa, CHontales < / Text >   
                < / Cuerpo >
              < / Izquierda >
              < Botón  onPress = { handleCall2Press }  style  =  { styles . Pero }  >
                   
                  < Estilo de texto  = { estilos . icono } > Llamar < / Texto >  
                < / Botón >
            
          
                < Estilo de botón  = { estilos . But2 } >  
               
                  < Estilo de texto  = { estilos . ic2 } > Detalle < / Texto >   
                < / Botón >
              < Derecha >
       
              < / Derecha >
            < / CardItem >

            < Estilo de texto  = { estilos . separador } > < / Texto >  
            < CardItem  style  =  { estilos . columna } >
              < Izquierda  >
                < Miniatura 
                source = { require ( './../assets/bomberos.jpg' ) } 
                style  =  { estilos . imagen }
                / >
                < Cuerpo >
                  < Estilo de texto  = { estilos . tit2 } > Bomberos < / Text >   
                  < Estilo de texto  = { estilos . ti1 } > Juigalpa, CHontales < / Text >   
                < / Cuerpo >
              < / Izquierda >
          
                  < Botón  onPress = { handleCall3Press }  style  =  { styles . Pero }  >
                    < Estilo de texto  = { estilos . icono } > Llamar < / Texto >  
                  < / Botón >
                  < Estilo de botón  = { estilos . But2 } >  
                    < Estilo de texto  = { estilos . ic2 } > Detalle < / Texto >   
                  < / Botón >
              < Derecha >
       
              < / Derecha >
            < / CardItem >
            < Estilo de texto  = { estilos . separador } > < / Texto >  
            
        < Estilo de encabezado  = { estilos . contenedor } >  
        < Estilo de texto  = { estilos . titulo } > Contacto de Emergencia < / Text >  
        < / Encabezado >
        < / Contenido >
      < / Contenedor >
    ) ;
  }
}
 estilos  const =   StyleSheet . crear ( {
  contenedor : {
      backgroundColor : '# 9599B3' ,
      flexDirection : 'columna' ,
      alignItems : 'centro' ,
    
  } ,
  titulo : {
    fontSize : 20 ,
    fontWeight : 'negrita' ,
    color : "#ffffff" ,
    textAlign : 'centro'
} ,

tit2 : {
  fontSize : 18 ,
  fontWeight : 'negrita' ,
  marginTop : 30 ,
  marginStart : 10 ,
  color : '# 98cb40' ,
  textAlign : 'auto'
} ,
ti1 : {
  fontSize : 14 ,
  fontWeight : 'negrita' ,
  color : '# 98cb40' ,
 marginTop : 1 ,
  marginHorizontal : 10 ,
  textAlign : 'auto'
} ,
columna : {
  flexDirection : 'columna' ,
 
  ancho : '95% ' ,
  backgroundColor : '# 8A56AC' ,
  altura : 180 ,
  borderRadius : 15 ,
  marginLeft : 10 ,
  marginHorizontal : 10 ,
} ,
fondo : {
  backgroundColor : '# 261237' ,
} ,

imagen : {
  ancho : 70 ,
  altura : 70 ,
  resizeMode : 'cubierta' ,
  borderRadius : 10 ,
  marginLeft : 10 ,
  margen superior : 70
} ,
separador : {
  ancho : 10
} ,
icono : {
  altura : 75 ,
  marginTop : 55 ,
  marginLeft : 3 ,
  color : "#ffffff" , 
  
} ,
ic2 : {
  color : "#ffffff" ,    
} ,
Pero : {
  ancho : 95 ,
  altura : 45 ,
  marginTop : 50 ,
  marginLeft : 90 ,
  borderRadius : 15 ,
  backgroundColor : "# EF578E"
} ,
But2 : {
  ancho : 95 ,
  altura : 45 ,
  margen : - 45 ,
  marginLeft : 200 ,
  borderRadius : 15 ,
  backgroundColor : "# EF578E"
} ,
} )
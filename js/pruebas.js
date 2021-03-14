function probarValidarNombre() {
  console.assert(
      validarNombre('') === 
      'El nombre no puede estar vacío',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'El nombre tiene que ser menor a 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
  console.assert(
    validarNombre(`123123123`) === 
    'El nombre tiene que ser solo letras',
    'Validar nombre no validó que el nombre sea SOLO letras',
 );
  console.assert(
     validarNombre("Fabricio") === 
     "Este nombres es valido",
     'Validar nombre valido'
 )
}


function probarValidarCiudad() {
    console.assert(
        validarCiudad("") ===
        "El campo ciudad no puede estar vacío",
        "Validar ciudad no validó que la ciudad no este vacío" 
    )
    
    console.assert(
        validarCiudad('Buenos Aires') ===
        "El campo ciudad es valido",
        'Validar ciudad valida que el resultado sea valido',
    )
}


function probarValidarDescripcionRegalo( ) {
    console.assert(
        validarDescripcionRegalo('11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === 
                'El campo descripción es muy largo',
                'Validar descripción no valida que el nombre sea menor a 100 caracteres'
        
    )

    console.assert(
        validarDescripcionRegalo("" === 
                "El campo Descripcion no puede estar vacío",
                "Validar descripción no valida que el nombre al menos tenga 1 caracter")
    )
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
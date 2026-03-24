export const baseDeDatos = []; 

export const registrarUsuario = (nuevoUsuario) => {
    baseDeDatos.push(nuevoUsuario);
    console.log("Usuario guardado en la lista global:", baseDeDatos);
    console.log("--- BASE DE DATOS ACTUALIZADA ---");
    console.table(baseDeDatos);
};

export const buscarUsuario = (email, password) => {
    return baseDeDatos.find(u => u.email === email && u.password === password);
};


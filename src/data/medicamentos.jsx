import API from './client';

export const getMedicamentos = (callback) => {
    API.get('/medicamentos').then(response => {
		callback({data : response.data, status: response.status})
    }).catch(err => callback(err))
}

export const setMedicamento = (medicamento, callback) => {
	let { nombre, detalle, precio } = medicamento
	API.post('/save-medicamento', { nombre, detalle, precio }).then(response => {
		callback(response)
	}).catch(err => callback(err))
}

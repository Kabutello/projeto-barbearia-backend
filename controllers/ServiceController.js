import Service from '../models/Service.js'

async function createService(req, res) {
    const { name, price, duration } = req.body;
    const service = await Service.create({ name, price, duration });

    if(service){
        res.status(201).json(service.toJSON());
    }
    else{
        res.status(500).json({ message: 'Não foi possível criar o usuário!' })
    }
}

async function getServices(req, res) {
    const services = await Service.findAll();
    console.log ('services', services);

    if(services){
        res.status(200).json(services.map(service => service.toJSON()));
    }
    else{
        res.status(500).json({ message: 'Não foi possível encontrar os serviços!' });
    }
}

async function getService(req, res) {
    const { id } = req.params

    const service = await Service.findByPk(id);

    if (service) {
        res.status(200).json(service.toJSON());
    } else {
        res.status(500).json({ message: 'Não foi possível buscar por esse usuário!' });
    }
}



async function updateService(req, res) {
    const { id } = req.params 
    const {name, price, duration } = req.body

    const service = await Service.findByPk(id);

    if(!service){
        return res.status(404).json({ error: 'Serviço não encontrado' });
    }

    if(name) service.name = name
    if(price) service.price = price
    if(duration) service.duration = duration

    try{
        await service.save();
        res.json(service.toJSON());
    } catch (error){
        res.status(500).json({ error: 'Erro ao atualizar serviço: ' + error.message });
    }
}

async function deleteService(req, res) {
    const { id } = req.params

    const service = await Service.findByPk(id);

    if(!service){
        return res.status(404).json({ error: 'Serviço não encontrado: ' + error.message });
    }

    try{
        await service.destroy();
        res.status(200).json({ message: 'Serviço deletado com sucesso!' });
    } catch (error){
        res.status(500).json({error: 'Erro ao deleltar Serviço: ' + error.message });
    }
}

export default { createService, getServices, getService,updateService, deleteService  }
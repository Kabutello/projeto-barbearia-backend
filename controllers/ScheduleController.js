import Schedule from '../models/Schedule.js'

async function createSchedule(req, res) {
    const { datetime, userId, serviceId } = req.body;
  
    console.log("Recebido do front:", { datetime, userId, serviceId });
  
    try {
      const schedule = await Schedule.create({
        datetime,
        status: 'agendado',
        userId,
        serviceId
      });
  
      console.log("Agendamento criado com sucesso:", schedule.toJSON());
      res.status(201).json(schedule.toJSON());
  
    } catch (error) {
      console.error("Erro ao criar agendamento:", error);
      res.status(500).json({
        message: 'Erro interno no servidor',
        error: error.message
      });
    }
  }
  


  async function getSchedules(req, res) {
    try {
        const schedules = await Schedule.findAll({ include: ['usuarios', 'services'] }); // Adicionado await
        if (schedules.length > 0) {
            res.status(200).json(schedules.map(schedule => schedule.toJSON())); // Corrigido "ToJSON" para "toJSON"
        } else {
            res.status(404).json({ message: 'Nenhum agendamento encontrado!' });
        }
    } catch (error) {
        console.error("Erro ao buscar agendamentos:", error);
        res.status(500).json({ message: 'Erro ao buscar agendamentos!' });
    }
}


async function getSchedule(req, res) {
    const { id } = req.params

    const schedule = await Schedule.findByPk(id);

    if (schedule) {
        res.status(200).json(schedule.toJSON());
    } else {
        res.status(500).json({ message: 'Não foi possível buscar por esse usuário!' });
    }
}

async function updateSchedule(req, res) {
    const { id } = req.params
    const {  datetime, status, userId, serviceId} = req.body

    const schedule = await Schedule.findByPk(id);

    if (!schedule) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    if (datetime) schedule.datetime = datetime
    if (status) schedule.status = status
    if (userId) schedule.userId = userId
    if (serviceId) schedule.serviceId = serviceId

    try {
        await schedule.save();
        res.json(schedule.toJSON());
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar usuário: ' + error.message });
    }
}

async function deleteSchedule(req, res) {
    const { id } = req.params

    const schedule = await Schedule.findByPk(id);

    if(!schedule){
        return res.status(404).json({ error: 'Serviço não encontrado: ' + error.message });
    }

    try{
        await schedule.destroy();
        res.status(200).json({ message: 'Serviço deletado com sucesso!' });
    } catch (error){
        res.status(500).json({error: 'Erro ao deleltar Serviço: ' + error.message });
    }
}


export default { createSchedule, getSchedules, getSchedule, updateSchedule, deleteSchedule }
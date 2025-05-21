import User from '../models/User.js'

async function createUser(req, res) {
    const { name, email, telephone, password, type } = req.body
    
    const type2 = type || 'cliente';
    
    const user = await User.create({ name, email, telephone, password, type: type2 });

    if (user) {
        res.status(201).json({ name: user.name, email: user.email, telephone: user.telephone, type: user.type });
    } else {
        res.status(500).json({ message: 'Não foi possível criar o usuário!' });
    }
}

async function getUsers(req, res) {
    const users = await User.findAll();

    if (users) {
        res.status(200).json(users.map(user => user.toJSON()));
    } else {
        res.status(500).json({ message: 'Não foi possível buscar usuários!' });
    }
}

async function getUser(req, res) {
    const { id } = req.params

    const user = await User.findByPk(id);

    if (user) {
        res.status(200).json(user.toJSON());
    } else {
        res.status(500).json({ message: 'Não foi possível buscar por esse usuário!' });
    }
}


async function updateUser(req, res) {
    const { id } = req.params
    const { name, email, telephone, password } = req.body

    const user = await User.findByPk(id);

    if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    if (name) user.name = name
    if (email) user.email = email
    if (telephone) user.telephone = telephone
    if (password) user.password = password

    try {
        await user.save();
        res.json(user.toJSON());
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar usuário: ' + error.message });
    }
}

async function deleteUser(req, res) {
    console.log('req', req.params)
    const { id } = req.params
    console.log('id', id)
    const user = await User.findByPk(id);
    console.log('to aqui', user)
    if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado: ' });
    }

    try {
        await user.destroy();
        res.status(200).json({ message: 'Usuário deletado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deleltar usuário: ' + error.message });
    }

}

export default { createUser, getUsers, getUser, updateUser, deleteUser }
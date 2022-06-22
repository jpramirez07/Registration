const { Users } = require('../models/user.model');

const getAllRegistration = async (req, res) => {
	try {
		const users = await Users.findAll();

		res.status(200).json({
			status: 'success',
			users
		});
	} catch (err) {
		console.log(err);
	}
}

const getRegistratinById = async (req,res) => {
	const {id} = req.params

	const user = await Users.findOne({ where: {id} })

	if (user === null){
		return (res.status(404).json({
			status: 'error',
			message: 'User not found'
		}))
	}

	res.status(200).json({
		status: 'success',
		user
	})
}

const entryRegistration = async (req, res) => {
	try {
		const { name } = req.body
		entranceDate = new Date()

		const newUser = await Users.create({
			name,
			entranceTime : entranceDate
		})

		res.status(201).json({
			status: 'success',
			newUser
		})

	} catch(err){
		console.log(err)
	}
}

const exitRegistration = async (req,res) => {
	const {id} = req.params
	exitDate = new Date()

	const user = await Users.findOne({ where: {id} })

	if (user === null){
		return (res.status(404).json({
			status: 'error',
			message: 'User not found'
		}))
	}

	await user.update({
		exitTime: exitDate,
		status: 'out'
	})

	res.status(204).json({
		status: 'success',
		user
	})
}

const cancelRegistration = async (req,res) => {
	const {id} = req.params

	const user = await Users.findOne({ where: {id} })

	if (user === null){
		return (res.status(404).json({
			status: 'error',
			message: 'User not found'
		}))
	}else if(user.exitDate !== null){
		return (res.status(404).json({
			status: 'error',
			message: 'User out'
		}))
	}

	await user.update({status: 'cancelled'})

	res.status(204).json({
		status: 'success',
		user
	})
}

module.exports = {
	getAllRegistration,
	getRegistratinById,
	entryRegistration,
	exitRegistration,
	cancelRegistration
}
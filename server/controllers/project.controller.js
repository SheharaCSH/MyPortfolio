import Project from '../models/project.model.js'

const list = async (req, res) => {
  try { res.json(await Project.find()) }
  catch (err) { res.status(400).json({ error: err.message }) }
}

const create = async (req, res) => {
  try { res.status(201).json(await Project.create(req.body)) }
  catch (err) { res.status(400).json({ error: err.message }) }
}

const read = async (req, res) => {
  try {
    const item = await Project.findById(req.params.id)
    if (!item) return res.status(404).json({ error: 'Project not found' })
    res.json(item)
  } catch (err) { res.status(400).json({ error: err.message }) }
}

const update = async (req, res) => {
  try {
    const item = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!item) return res.status(404).json({ error: 'Project not found' })
    res.json(item)
  } catch (err) { res.status(400).json({ error: err.message }) }
}

const remove = async (req, res) => {
  try {
    const item = await Project.findByIdAndDelete(req.params.id)
    if (!item) return res.status(404).json({ error: 'Project not found' })
    res.json(item)
  } catch (err) { res.status(400).json({ error: err.message }) }
}

const removeAll = async (req, res) => {
  try { res.json(await Project.deleteMany({})) }
  catch (err) { res.status(400).json({ error: err.message }) }
}

export default { list, create, read, update, remove, removeAll }
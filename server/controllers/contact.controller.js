import Contact from '../models/contact.model.js'

const list = async (req, res) => {
  try { res.json(await Contact.find()) }
  catch (err) { res.status(400).json({ error: err.message }) }
}

const create = async (req, res) => {
  try { res.status(201).json(await Contact.create(req.body)) }
  catch (err) { res.status(400).json({ error: err.message }) }
}

const read = async (req, res) => {
  try {
    const item = await Contact.findById(req.params.id)
    if (!item) return res.status(404).json({ error: 'Contact not found' })
    res.json(item)
  } catch (err) { res.status(400).json({ error: err.message }) }
}

const update = async (req, res) => {
  try {
    const item = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!item) return res.status(404).json({ error: 'Contact not found' })
    res.json(item)
  } catch (err) { res.status(400).json({ error: err.message }) }
}

const remove = async (req, res) => {
  try {
    const item = await Contact.findByIdAndDelete(req.params.id)
    if (!item) return res.status(404).json({ error: 'Contact not found' })
    res.json(item)
  } catch (err) { res.status(400).json({ error: err.message }) }
}

const removeAll = async (req, res) => {
  try { res.json(await Contact.deleteMany({})) }
  catch (err) { res.status(400).json({ error: err.message }) }
}

export default { list, create, read, update, remove, removeAll }
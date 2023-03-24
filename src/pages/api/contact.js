const handler = (req, res) => {
  if (req.method === 'POST') {
    return res.status(200).json(req.body)
  }
  return res.status(400).json({ error: 'The method does not exist' })
}

export default handler

const handler = (req, res) => {
  if (req.method === 'POST') {
    const user = req.body
    return res.status(200).json({ user })
  }
  return res.status(400).json({ error: 'The method does not exist' })
}

export default handler

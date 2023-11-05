export default function handler(req, res) {
  const { user } = req.query;
  res.status(200).json({ title: "Hashnode Technical Blogger", user: user });
}

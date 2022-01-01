import {db} from '../../../utils/db';

export default async (req, res) => {
  try {
      const response = await db.collection('rooms').add({
        ...req.body,
        created: new Date().toISOString(),
      });
      const update = await db.collection('rooms').doc(response.id).update({ id: response.id})
      res.status(200).json(response.id);
  } catch (e) {
    res.status(400).end();
  }
}
